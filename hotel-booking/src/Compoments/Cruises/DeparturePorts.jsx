import React from "react";

const DeparturePorts = () => {
  const departurePorts = [
    { title: "Galveston", image: "/be7.jpg" },
    { title: "Miami", image: "/be8.jpg" },
    { title: "New York", image: "/be9.jpg" },
    { title: "Long Beach", image: "/be10.jpg" },
    { title: "Tampa", image: "/be1.jpg" },
    { title: "San Francisco", image: "/h7.jpg" },
  ];

  return (
    <div>
        <h1 className="text-4xl font-semibold text-gray-800 mt-4">Departure Ports with Great Cruises Leaving from</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mt-4">
      {departurePorts.map((port, index) => (
        <div key={index} className="relative w-full h-64">
          {/* Background Image */}
          <img
            src={port.image}
            alt={port.title}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
            <h3 className="text-white text-md font-semibold">{port.title}</h3>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default DeparturePorts;
