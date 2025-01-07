import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';

const RecommendedStays = () => {
  const stays = [
    {
      image: '/ca1.jpg',
      name: 'The Ahern Luxury Boutique Hotel',
      location: 'Gateway District',
      rating: '9.4',
      reviews: '8,168 reviews',
      description: 'Exceptional',
    },
    {
      image: '/h8.jpg',
      name: 'Harrah\'s Hotel and Casino Las Vegas',
      location: 'Las Vegas Strip',
      rating: '7.6',
      reviews: '11,585 reviews',
      description: 'Good',
    },
    {
      image: '/h9.jpg',
      name: 'Virgin Hotels Las Vegas, Curio Collection by Hilton',
      location: 'Las Vegas',
      rating: '8.8',
      reviews: '6,996 reviews',
      description: 'Excellent',
    },
    {
      image: '/h10.jpg',
      name: 'Tuscany Suites & Casino',
      location: 'Las Vegas',
      rating: '9.0',
      reviews: '7,084 reviews',
      description: 'Wonderful',
    },
  ];

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-6">Recommended Stays for You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stays.map((stay, index) => (
          <div key={index} className="relative rounded-lg shadow-lg overflow-hidden">
            {/* Image */}
            <div className="relative">
              <img
                src={stay.image}
                alt={stay.name}
                className="w-full h-52 object-fill transition duration-500 hover:scale-105"
              />
              {/* Heart Icon */}
              <div className="absolute top-2 right-2 bg-white text-red-600 text-xl p-2 rounded-full hover:bg-opacity-100 transition">
                <FaRegHeart/>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 bg-white">
              <h3 className="text-md font-semibold">{stay.name}</h3>
              <p className="text-sm text-gray-500">{stay.location}</p>
              <div className="flex items-end mt-2">
                {/* Conditional background color based on rating */}
                <span
                  className={`font-semibold text-xs px-2 py-1 rounded text-white ${
                    parseFloat(stay.rating) > 8 ? 'bg-green-600' : 'bg-gray-400'
                  }`}
                >
                  {stay.rating}
                </span>
                <span className='text-sm text-gray-600 ml-2 font-semibold'>{stay.description}</span>
                <span className="text-xs text-gray-500 ml-2 font-medium">({stay.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedStays;
