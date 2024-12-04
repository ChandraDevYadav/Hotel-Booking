import React from 'react';

const HotelCard = ({ hotel }) => {
  return (
    <div className="bg-white shadow rounded p-4">
      <h3 className="text-lg font-semibold">{hotel.name}</h3>
      <p className="text-gray-600">Price: ${hotel.price}</p>
      <p className="text-gray-600">Location: {hotel.location}</p>
      <p className="text-gray-600">Rating: {hotel.rating}/10</p>
      <p className="text-gray-600">Type: {hotel.type}</p>
      <p className="text-gray-600">
        Amenities: {hotel.amenities.join(', ')}
      </p>
    </div>
  );
};

export default HotelCard;
