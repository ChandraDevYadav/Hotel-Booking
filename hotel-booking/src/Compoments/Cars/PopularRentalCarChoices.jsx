import React from 'react';

const popularCars = [
  {
    id: 1,
    title: 'Luxury Sedan',
    image: '/car1.jpg', // Default image
    hoverImage: '/car2.jpg', // Hover image
  },
  {
    id: 2,
    title: 'SUV',
    image: '/car3.jpg',
    hoverImage: '/car4.jpg',
  },
  {
    id: 3,
    title: 'Convertible',
    image: '/car5.jpg',
    hoverImage: '/car2.jpg',
  },
  {
    id: 4,
    title: 'Hatchback',
    image: '/car7.jpg',
    hoverImage: '/car8.jpg',
  },
  {
    id: 5,
    title: 'Compact Car',
    image: '/car9.jpg',
    hoverImage: '/car10.jpg',
  },
];

const PopularRentalCarChoices = () => {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <h2 className="text-4xl font-semibold text-gray-800 mb-6">Popular Rental Car Choices</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {popularCars.map((car) => (
          <div key={car.id} className="group relative">
            {/* Image Container */}
            <div className="w-full h-64 overflow-hidden rounded-lg relative">
              <img
                src={car.image}
                alt={car.title}
                className="w-full h-full object-fill transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src={car.hoverImage}
                alt={car.title}
                className="w-full h-full object-fill absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />

              {/* Overlay Title */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{car.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRentalCarChoices;
