import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom"

const Deals = () => {
  const dealsData = [
    {
      title: "Get our best deals on flights with Price Drop Protection",
      description: "Learn more",
      image: "/tra3.jpg",
    },
    {
      title: "Earn rewards on top of airline miles",
      description: "Learn more",
      image: "/tra1.jpg",
    },
    {
      title: "Earn up to $400 in OneKeyCash™. Terms apply",
      description: "Learn more",
      image: "/tra.jpg",
    },
  ];

  return (
    <div className="pt-6">
        <div className="flex flex-col md:flex-row justify-around items-center bg-gray-950 px-6 py-6 rounded-2xl my-8">
            <div className="flex justify-start items-center gap-3">
            <img src="/seq.svg" alt="" className="w-11" />
            <p className="text-white font-medium">Save 10% or more on over 100,000 hotels with Member Prices. Also, members save up to 30% when you add a hotel <br /> to a flight</p>
            </div>
            <div className="flex justify-start items-center gap-3 mt-4 md:mt-0">
            <button className="bg-blue-600 text-white px-3 py-2 rounded-full hover:bg-blue-800 text-xs font-medium">Sign in</button>
            <Link to="" className="text-white px-4 py-2 rounded-full hover:bg-blue-50 hover:bg-opacity-25 text-xs font-medium">Learn about One Key</Link>
            </div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {dealsData.map((deal, index) => (
          <div
            key={index}
            className="grid grid-cols-4 bg-white shadow-lg rounded-xl hover:shadow-xl transition border border-gray-200"
          >
            <div className="col-span-2 pl-4 py-4 bg-yellow-300 rounded-l-xl">
            <h2 className="text-sm md:text-md font-semibold text-gray-900">{deal.title}</h2>
            <p className="text-black flex justify-start gap-2 items-center text-sm mt-2 cursor-pointer hover:underline">
              {deal.description}<span className="mt-1"><FaArrowRight/></span>
            </p>
            </div>
            <div className="col-span-2">
            <img
              src={deal.image}
              alt={deal.title}
              className="w-full h-full object-fill rounded-r-xl"
            />
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
