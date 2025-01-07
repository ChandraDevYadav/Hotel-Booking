import React from "react";

const TravelDeals = () => {
  // Data Array
  const travelData = [
    {
      image: "/ca1.jpg",
      title: "SAVE ON FLIGHTS TO GET GOING",
      description:
        "Flight deals ready to take you to the most-loved places",
    },
    {
      image: "/ca2.jpg",
      title: "TRAVEL YOUR OWN PATH AND SAVE",
      description:
        "Explore somewhere in the clouds, valleys, or anywhere in between",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {travelData.map((item, index) => (
          <div
            key={index}
            className="bg-white overflow-hidden transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 rounded-xl object-cover"
            />
            <div className="py-4">
              <h2 className="text-xs font-medium text-gray-700">{item.title}</h2>
              <p className="text-lg font-semibold text-gray-800 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelDeals;
