import React from 'react';

const trendingDestinations = [
  {
    id: 1,
    title: 'New York City',
    image: '/ca2.jpg', // Default image
    hoverImage: '/ca4.jpg', // Hover image
  },
  {
    id: 2,
    title: 'Los Angeles',
    image: '/ca6.jpg',
    hoverImage: '/ca8.jpg',
  },
  {
    id: 3,
    title: 'Miami',
    image: '/ca9.jpg',
    hoverImage: '/ca10.jpg',
  },
  {
    id: 4,
    title: 'Las Vegas',
    image: '/ca11.jpg',
    hoverImage: '/ca4.jpg',
  },
  {
    id: 5,
    title: 'Chicago',
    image: '/ca6.jpg',
    hoverImage: '/ca2.jpg',
  },
];

const TrendingCarDestinations = () => {
  return (
    <div className="max-w-6xl mx-auto pb-8">
      <h2 className="text-4xl font-semibold text-gray-800 mb-6">
        Trending Rent a Car Destinations
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {trendingDestinations.map((destination) => (
          <div key={destination.id} className="group relative">
            {/* Image Container */}
            <div className="w-full h-64 overflow-hidden rounded-lg relative">
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-full object-fill transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src={destination.hoverImage}
                alt={destination.title}
                className="w-full h-full object-fill absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />

              {/* Overlay Title */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{destination.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCarDestinations;
