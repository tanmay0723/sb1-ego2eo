import React from 'react';
import { Link } from 'react-router-dom';

interface PlaceCardProps {
  id: string;
  cityId: string;
  name: string;
  image: string;
  description: string;
}

const PlaceCard = ({ id, cityId, name, image, description }: PlaceCardProps) => {
  return (
    <Link
      to={`/destination/${cityId}/place/${id}`}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow transform hover:scale-105"
    >
      <img
        src={image}
        alt={`Image of ${name} in ${cityId}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default PlaceCard;
