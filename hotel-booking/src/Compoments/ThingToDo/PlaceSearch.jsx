import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

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

const PlacesSearch = ({ onSelect }) => {
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
      <div className="relative w-full">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Going to"
          className="w-full px-10 py-3 placeholder:font-medium placeholder:text-gray-700 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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

export default PlacesSearch;
