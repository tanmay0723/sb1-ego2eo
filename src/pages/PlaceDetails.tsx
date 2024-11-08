import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, IndianRupee, Calendar, MapPin, Navigation } from 'lucide-react';
import { cityData } from '../data/cityData';

interface Place {
  id: string;
  name: string;
  history: string;
  details: string;
  timings?: string;
  entryFee?: string;
  bestTimeToVisit?: string;
  howToReach?: string;
  mapUrl?: string;
  image: string;
  gallery?: string[];
}
  const PlaceDetails = () => {
  const { cityId, placeId } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [place, setPlace] = useState<Place | null>(null);
  
  const city = cityData[cityId as keyof typeof cityData];

  useEffect(() => {
    // Simulate a loading state
    setLoading(true);
    const placeFound = city?.places.find(p => p.id === placeId);
    setPlace(placeFound || null);
    setLoading(false);
  }, [cityId, placeId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!place) {
    return <div>Place not found</div>;
  }

  const InfoItem = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
    <div className="flex items-center space-x-2 text-gray-600">
      <Icon className="h-5 w-5" />
      <span className="font-medium">{label}:</span>
      <span>{value}</span>
    </div>
  );

  const handleMapClick = () => {
    if (place.mapUrl) {
      window.open(place.mapUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div
        className="h-[50vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${place.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <Link to={`/destination/${cityId}`} className="text-white/80 hover:text-white">
              ← Back to {city.name}
            </Link>
            <div className="flex justify-between items-center">
              <h1 className="text-5xl font-bold mt-2">{place.name}</h1>
              {place.mapUrl && (
                <button
                  onClick={handleMapClick}
                  className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Navigation className="h-5 w-5 mr-2" />
                  Open in Maps
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-4">History</h2>
              <p className="text-gray-600 leading-relaxed">{place.history}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-gray-600 leading-relaxed">{place.details}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {place.gallery?.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${place.name} - ${index + 1}`}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-md sticky top-24">
              <h2 className="text-xl font-bold mb-4">Essential Information</h2>
              <div className="space-y-4">
                {place.timings && (
                  <InfoItem icon={Clock} label="Timings" value={place.timings} />
                )}
                {place.entryFee && (
                  <InfoItem icon={IndianRupee} label="Entry Fee" value={place.entryFee} />
                )}
                {place.bestTimeToVisit && (
                  <InfoItem icon={Calendar} label="Best Time to Visit" value={place.bestTimeToVisit} />
                )}
                {place.howToReach && (
                  <InfoItem icon={MapPin} label="How to Reach" value={place.howToReach} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlaceDetails;