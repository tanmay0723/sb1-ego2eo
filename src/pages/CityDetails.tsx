import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Utensils, Activity, Calendar, Star, Navigation } from 'lucide-react';
import { cityData } from '../data/cityData';
import PlaceCard from '../components/PlaceCard';

  const CityDetails = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('places');
  const [selectedFood, setSelectedFood] = useState<any>(null);
  
  const city = cityData[cityId as keyof typeof cityData];
  
  if (!city) {
    return <div>City not found</div>;
  }

  const TabButton = ({ id, icon: Icon, label }: { id: string; icon: React.ElementType; label: string }) => (
    <button
      onClick={() => {
        setActiveTab(id);
        setSelectedFood(null);
      }}
      className={`flex items-center px-6 py-3 rounded-lg ${
        activeTab === id
          ? 'bg-blue-600 text-white'
          : 'bg-white text-gray-700 hover:bg-gray-50'
      }`}
    >
      <Icon className="h-5 w-5 mr-2" />
      {label}
    </button>
  );

  const handleScheduleClick = () => {
    navigate(`/schedule/${cityId}`);
  };

  const handleMapClick = (mapUrl: string) => {
    window.open(mapUrl, '_blank');
  };

  const renderContent = () => {
    if (activeTab === 'food' && selectedFood) {
      return (
        <div className="mt-8">
          <button
            onClick={() => setSelectedFood(null)}
            className="mb-6 text-blue-600 hover:text-blue-700 flex items-center"
          >
            ← Back to all foods
          </button>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <img
              src={selectedFood.image}
              alt={selectedFood.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{selectedFood.name}</h2>
              <p className="text-gray-600 mb-6">{selectedFood.description}</p>
              
              <h3 className="text-xl font-semibold mb-4">Best Places to Try</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedFood.restaurants.map((restaurant: any, index: number) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-lg">{restaurant.name}</h4>
                        <p className="text-gray-600">{restaurant.location}</p>
                        <div className="flex items-center mt-2">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1">{restaurant.rating}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{restaurant.priceRange}</p>
                      </div>
                      <button
                        onClick={() => handleMapClick(restaurant.mapUrl)}
                        className="flex items-center text-blue-600 hover:text-blue-700"
                      >
                        <Navigation className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    const content = city[activeTab as keyof typeof city] || [];
    
    if (content.length === 0) {
      return <p>No content available for this section.</p>;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {content.map((item: any) => {
          if (activeTab === 'places') {
            return (
              <PlaceCard
                key={item.id}
                id={item.id}
                cityId={cityId}
                name={item.name}
                image={item.image}
                description={item.description}
              />
            );
          }

          if (activeTab === 'food') {
            return (
              <div
                key={item.id}
                onClick={() => setSelectedFood(item)}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            );
          }

          return (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                {item.providers && (
                  <div className="space-y-3">
                    {item.providers.map((provider: any, index: number) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{provider.name}</p>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="ml-1 text-sm">{provider.rating}</span>
                          </div>
                          <p className="text-sm text-gray-500">{provider.priceRange}</p>
                        </div>
                        <button
                          onClick={() => handleMapClick(provider.mapUrl)}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          <Navigation className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-16">
      <div
        className="h-[60vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${city.coverImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-5xl font-bold mb-4">{city.name}</h1>
                <p className="text-xl opacity-90">{city.description}</p>
              </div>
              <button
                onClick={handleScheduleClick}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Plan Schedule
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex space-x-4 mb-8">
          <TabButton id="places" icon={MapPin} label="Places to Visit" />
          <TabButton id="food" icon={Utensils} label="Famous Food" />
          <TabButton id="activities" icon={Activity} label="Things to Do" />
        </div>

        {renderContent()}
      </div>
    </div>
  );
};
export default CityDetails;