import React from "react";
import { Link } from "react-router-dom";

const vacationPackages = [
  {
    title: "Beach Vacations",
    description: "Build a beach vacation package to suit your every need. Life is better on the beach!",
    link: "vacations from www.expedia.com",
    image: "/bgt.jpg",
  },
  {
    title: "All Inclusive Vacations",
    description: "All your needs are catered for with an all-inclusive vacation package. All the extras that make a lifetime of memories.",
    link: "package vacations from www.expedia.com",
    image: "/bgt2.jpg",
  },
  {
    title: "Family Vacations",
    description: "Great offers for the entire family. Find peace of mind when you book a family vacation package with Expedia.",
    link: "vacation packages from www.expedia.com",
    image: "/bit1.jpg",
  },
  {
    title: "Adventure Vacations",
    description: "Embark on thrilling adventures and create unforgettable memories. Perfect for the adrenaline seeker!",
    link: "adventure vacations from www.expedia.com",
    image: "/bit2.jpg",
  },
  {
    title: "Luxury Vacations",
    description: "Indulge in the finer things in life with a luxury vacation package designed for ultimate comfort.",
    link: "luxury vacations from www.expedia.com",
    image: "/car6.jpg",
  },
  {
    title: "Romantic Getaways",
    description: "Rediscover romance with enchanting vacation packages tailored for couples.",
    link: "romantic getaways from www.expedia.com",
    image: "/tra.jpg",
  },
];

const VacationCards = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">Find Your Perfect Vacation</h1>
      <p className="text-sm font-medium text-gray-700 mb-10">Take a break from work and soak up the sun at one of our hottest vacation destinations</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vacationPackages.map((vacation, index) => (
          <Link to=''
            key={index}
            className="bg-white shadow-sm border border-gray-300 rounded-lg overflow-hidden transition-shadow duration-300"
          >
            <img
              src={vacation.image}
              alt={vacation.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xs font-semibold mb-2">{vacation.title}</h2>
              <p className="text-xs text-gray-600">{vacation.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VacationCards;
