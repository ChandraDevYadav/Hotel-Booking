import React from "react";

const PopularCruiseLines = () => {
  const cruiseLines = [
    { title: "Royal Caribbean International", image: "/cru1.jpg" },
    { title: "Disney Cruise Line", image: "/cru2.jpg" },
    { title: "Carnival Cruise Lines", image: "/cru3.jpg" },
    { title: "MSC Cruises", image: "/cru4.jpg" },
    { title: "Norwegian Cruise Line", image: "/cru5.jpg" },
    { title: "Princess Cruises", image: "/cru6.jpg" },
  ];

  return (
    <div>
        <h1 className="text-4xl font-semibold text-gray-800 mt-5">Most Popular Cruise Lines</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mt-4">
      {cruiseLines.map((line, index) => (
        <div key={index} className="relative w-full h-64">
          {/* Background Image */}
          <img
            src={line.image}
            alt={line.title}
            className="w-full h-full object-fill rounded-lg shadow-md"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
            <h3 className="text-white text-md font-semibold text-center px-2">
              {line.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default PopularCruiseLines;
