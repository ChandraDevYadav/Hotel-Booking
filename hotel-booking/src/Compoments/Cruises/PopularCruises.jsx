import React from "react";

const PopularCruises = () => {
  const cruiseDestinations = [
    {
      location: "Europe",
      image: "/be1.jpg",
    },
    {
      location: "Kathmandu",
      image: "/be2.jpg",
    },
    {
      location: "Dubai",
      image: "/be3.jpg",
    },
    {
      location: "Malaysia",
      image: "/be4.jpg",
    },
    {
      location: "America",
      image: "/be6.jpg",
    },
    {
      location: "Caribbean",
      image: "/be6.jpg",
    },
  ];

  return (
    <div>
        <h1 className="text-4xl font-semibold text-gray-800 mt-2">Popular Cruise Destinations</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mt-4">
      {cruiseDestinations.map((destination, index) => (
        <div key={index} className="relative w-full h-64">
          {/* Background Image */}
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
            <h3 className="text-white text-md font-semibold text-center px-4">
              {destination.location}
            </h3>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default PopularCruises;
