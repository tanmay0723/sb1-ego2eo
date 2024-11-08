import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, Utensils } from 'lucide-react';
import { cityData } from '../data/cityData';

export const Schedule = () => {
  const { cityId } = useParams();
  const [days, setDays] = useState(3);
  const city = cityData[cityId as keyof typeof cityData];

  if (!city) {
    return <div>City not found</div>;
  }

  // Generate itinerary based on number of days
  const generateItinerary = () => {
    const allPlaces = [...city.places];
    const allActivities = [...(city.activities || [])];
    const allFood = [...(city.food || [])];
    const itinerary = [];

    for (let i = 0; i < days; i++) {
      const dayPlaces = allPlaces.splice(0, 2);
      const dayActivity = allActivities[i % allActivities.length];
      const dayFood = allFood[i % allFood.length];

      itinerary.push({
        day: i + 1,
        places: dayPlaces,
        activity: dayActivity,
        food: dayFood,
      });
    }

    return itinerary;
  };

  const itinerary = generateItinerary();

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <h1 className="text-3xl font-bold mb-6">Plan Your Trip to {city.name}</h1>
          
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How many days are you planning to stay?
            </label>
            <input
              type="number"
              min="1"
              max="7"
              value={days}
              onChange={(e) => setDays(parseInt(e.target.value, 10))}
              className="w-32 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-8">
            {itinerary.map((day) => (
              <div
                key={day.day}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200"
              >
                <h2 className="text-2xl font-bold mb-4 text-blue-600">Day {day.day}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {day.places.map((place) => (
                    <div
                      key={place.id}
                      className="bg-white rounded-lg overflow-hidden shadow-md"
                    >
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{place.name}</h3>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>Recommended: 2-3 hours</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {day.activity && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-3">Evening Activity</h3>
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                      <img
                        src={day.activity.image}
                        alt={day.activity.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-medium">{day.activity.name}</h4>
                        {day.activity.description && (
                          <p className="text-gray-600 mt-1">{day.activity.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {day.food && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Utensils className="h-5 w-5 mr-2" />
                      Must Try Food
                    </h3>
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                      <img
                        src={day.food.image}
                        alt={day.food.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-medium">{day.food.name}</h4>
                        {day.food.restaurants && day.food.restaurants.length > 0 && (
                          <div className="mt-2">
                            <p className="text-sm font-medium text-gray-700">Recommended restaurants:</p>
                            <ul className="mt-1 space-y-1">
                              {day.food.restaurants.map((restaurant, index) => (
                                <li key={index} className="text-sm text-gray-600">
                                  {restaurant.name} - ⭐ {restaurant.rating}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-blue-600" />
              Travel Tips
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Best time to visit: {city.bestTimeToVisit}</li>
              <li>How to reach: {city.howToReach}</li>
              <li>Don't forget to try local cuisine and experiences</li>
              <li>Book accommodations in advance during peak season</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;