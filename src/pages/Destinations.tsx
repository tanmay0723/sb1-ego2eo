import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { cityData } from '../data/cityData';

interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
}

const allDestinations: Destination[] = Object.values(cityData).map(city => ({
  id: city.id,
  name: city.name,
  image: city.coverImage,
  description: city.description,
}));

const Destinations: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); // Simulate loading delay
    return () => clearTimeout(timer);
  }, []);

  const filteredDestinations = allDestinations.filter(destination =>
    destination.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20 bg-gray-50 relative">
      <div className="background-image" />
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10"> {/* Set z-index higher */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Destinations</h1>
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
              aria-hidden="true"
            />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-label="Search destinations"
            />
          </div>
        </div>

        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : filteredDestinations.length === 0 ? (
          <p className="text-gray-600">No destinations found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <Link
                key={destination.id}
                to={`/destination/${destination.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-72">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">{destination.name}</h2>
                    <p className="text-sm opacity-90">{destination.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;
