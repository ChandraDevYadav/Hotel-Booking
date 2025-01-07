import React from "react";

const TopThingsToDo = () => {
  const topThingsToDo = [
    {
      title: "Las Vegas",
      description: "Experience the excitement and entertainment of Las Vegas.",
      image: "/h8.jpg",
    },
    {
      title: "Orlando",
      description: "Enjoy the thrills and excitement of Orlando, Florida.",
      image: "/h9.jpg",
    },
    {
      title: "New York City",
      description: "Discover the iconic landmarks and vibrant culture of the Big Apple.",
      image: "/h10.jpg",
    },
  ];

  return (
    <div>
        <h1 className="text-4xl font-semibold text-gray-800 py-4">Top things to do in the U.S</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {topThingsToDo.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden transition-shadow duration-300"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-56 rounded-xl object-fill"
          />
          <div className="py-4">
            <h3 className="text-md font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-700 text-sm font-medium">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TopThingsToDo;
