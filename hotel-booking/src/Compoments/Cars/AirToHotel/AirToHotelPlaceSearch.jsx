import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const places = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
];

const PlacesSearchDropdown = ({ placeholder, onSelect }) => {
  const [search, setSearch] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  // Handle input change
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    // Filter places based on input
    if (value.trim() === "") {
      setFilteredPlaces([]);
    } else {
      const results = places.filter((place) =>
        place.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredPlaces(results);
    }
  };

  // Handle place selection
  const handleSelect = (place) => {
    setSearch(place); // Set selected place to input
    setFilteredPlaces([]); // Clear dropdown
    onSelect(place); // Notify parent about the selection
  };

  return (
    <div className="relative">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder={placeholder}
          className="w-full pl-10 py-3 placeholder:text-black border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <FaMapMarkerAlt className="absolute top-4 text-lg left-4" />
      </div>

      {/* Dropdown */}
      {filteredPlaces.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {filteredPlaces.map((place, index) => (
            <li
              key={index}
              onClick={() => handleSelect(place)}
              className="px-4 py-2 cursor-pointer hover:bg-indigo-100 text-gray-700"
            >
              {place}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const AirToHotelPlaceSearch = () => {
  const handleLeavingSelect = (place) => {
    console.log("Leaving From:", place);
  };

  const handleGoingSelect = (place) => {
    console.log("Going To:", place);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 space-x-0 md:space-x-4 w-full">
        {/* Leaving From Input */}
        <div className="w-full">
        <PlacesSearchDropdown
          placeholder="Airport"
          onSelect={handleLeavingSelect}
        />
        </div>

        {/* Arrow Icon */}
        {/* <div className="border border-gray-800 bg-white p-3 rounded-full z-20">
        <FaArrowRightArrowLeft className="text-xs text-blue-600" />
        </div> */}

        {/* Going To Input */}
        <div className="w-full">
        <PlacesSearchDropdown
          placeholder="Hotel"
          onSelect={handleGoingSelect}
        />
        </div>
      </div>
    </div>
  );
};

export default AirToHotelPlaceSearch;
