import React, { useState } from "react";
import SocialSection from "../../Compoments/Room/SocialSection";

const Trip = () => {
  const [search, setSearch] = useState("");

  // Example data for trips
  const trips = [
    {
      id: 1,
      title: "Luxury Stay in Paris",
      date: "2025-01-15",
      status: "upcoming",
      image: "/h1.jpg", // Replace with real images
    },
    {
      id: 2,
      title: "Beachside Resort in Bali",
      date: "2024-12-10",
      status: "past",
      image: "/h2.jpg",
    },
    {
      id: 3,
      title: "Mountain Retreat in Switzerland",
      date: "2025-03-20",
      status: "upcoming",
      image: "/h3.jpg",
    },
    {
      id: 4,
      title: "Hotel Everest View Nepal",
      date: "2025-03-20",
      status: "upcoming",
      image: "/h4.jpg",
    },
    {
      id: 5,
      title: "Hotel Machapuchare View Nepal",
      date: "2025-03-20",
      status: "past",
      image: "/h5.jpg",
    },
    {
      id: 6,
      title: "Hotel Annapuran View Nepal",
      date: "2025-03-20",
      status: "past",
      image: "/h6.jpg",
    },
  ];

  // Filter trips by search or status
  const filteredTrips = trips.filter(
    (trip) =>
      trip.title.toLowerCase().includes(search.toLowerCase()) ||
      trip.status === "upcoming"
  );

  return (
    <div className="container mx-auto px-44 py-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Trips</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search trips..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Trip Categories */}
      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Upcoming Trips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrips
            .filter((trip) => trip.status === "upcoming")
            .map((trip) => (
              <div
                key={trip.id}
                className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">{trip.title}</h3>
                  <p className="text-gray-600 text-sm">Date: {trip.date}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Past Trips */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Past Trips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrips
            .filter((trip) => trip.status === "past")
            .map((trip) => (
              <div
                key={trip.id}
                className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">{trip.title}</h3>
                  <p className="text-gray-600 text-sm">Date: {trip.date}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <SocialSection/>
    </div>
  );
};

export default Trip;
