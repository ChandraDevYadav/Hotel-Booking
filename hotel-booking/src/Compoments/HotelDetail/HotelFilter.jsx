import React, { useState } from "react";
import { hotelData } from "./HotelData"; // Import hotel data
import HotelCard from "./HotelCard"; // Import the HotelCard component

const HotelFilter = () => {
  const [selectedBedType, setSelectedBedType] = useState("all");

  // Filter rooms based on selected bed type
  const filteredRooms = hotelData.filter((room) =>
    selectedBedType === "all" ? true : room.bedType === selectedBedType
  );

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-start my-6">
      <div className="flex space-x-1 md:space-x-4">
        {[
          { label: "All Rooms", value: "all" },
          { label: "1 Bed", value: "1 King Bed" },
          { label: "2 Beds", value: "2 Queen Beds" },
        ].map((filter) => (
          <button
            key={filter.value}
            onClick={() => setSelectedBedType(filter.value)}
            className={`px-3 py-1 md:py-2 text-xs font-medium rounded-full ${
              selectedBedType === filter.value
                ? "bg-gray-400 border-2 border-gray-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Room Count Text */}
      <p className="text-gray-800 text-sm md:text-md font-medium mt-4 md:mt-2">
        Showing {filteredRooms.length} of {hotelData.length} rooms
      </p>
      </div>

      {/* Display Filtered Rooms */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRooms.map((room) => (
          <HotelCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default HotelFilter;
