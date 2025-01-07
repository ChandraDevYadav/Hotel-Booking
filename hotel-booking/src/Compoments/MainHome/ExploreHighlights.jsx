import React from "react";

const ExploreHighlights = () => {
  // Data Array
  const exploreData = [
    {
      image: "/ca1.jpg",
      title: "VIP ACCESS PROPERTIES",
      description: "Earn up to 6% in OneKeyCash™ on VIP Access properties as you progress through the tiers",
    },
    {
      image: "/ca2.jpg",
      title: "7 ICONIC CITIES FOR FAMILY FUN",
      description: "Our top-ranked cities for family trips",
    },
    {
      image: "/ca3.jpg",
      title: "2025’S TRENDING DESTINATIONS",
      description: "Our ultimate list of places to experience",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {exploreData.map((item, index) => (
          <div
            key={index}
            className=" rounded-lg overflow-hidden transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full rounded-xl h-56 object-cover"
            />
            <div className="py-4">
              <h2 className="text-xs font-medium text-gray-700">{item.title}</h2>
              <p className="text-md font-semibold text-gray-800 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreHighlights;
