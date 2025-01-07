import React from "react";
import DiscoverStay from "../Packages/DiscoverStay";

const TravelActivities = () => {
  const travelActivities = [
    {
      title: "Montego Bay",
      description: "Soak up the sun and culture of Montego Bay, Jamaica.",
      image: "/ca9.jpg",
    },
    {
      title: "San Juan",
      description: "Visit the vibrant and colorful city of San Juan, Puerto Rico.",
      image: "/ca10.jpg",
    },
  ];

  return (
    <div className="">
      <h2 className="text-4xl font-semibold py-6">More activities for your travels</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {travelActivities.map((activity, index) => (
          <div
            key={index}
            className="overflow-hidden transition-shadow duration-300"
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-72 rounded-xl object-fill"
            />
            <div className="py-4">
              <h3 className="text-md font-medium text-gray-800">{activity.title}</h3>
              <p className="text-gray-700 font-medium text-sm">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='border-b border-b-gray-300'>
                <div className='flex justify-start items-center gap-8 px-8 py-6'>
                    <div>
                        <img src="bl2.png" alt="" className='w-12 h-12' />
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold text-gray-800'>Royal Jordanian—enjoy seamless transits</h1>
                        <p className='text-sm text-gray-700 font-medium'>Relax on Aqaba's beaches, discover sparkling Dubai, and explore dynamic Cairo.</p>
                    </div>
                </div>
                <DiscoverStay />
            </div>
    </div>
  );
};

export default TravelActivities;
