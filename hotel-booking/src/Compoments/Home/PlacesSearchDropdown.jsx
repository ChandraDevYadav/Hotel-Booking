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

const PlacesSearchDropdown = () => {
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
  };

  return (
    <div className="relative w-64">
      {/* Search Input */}
      <div className="relative">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Going In"
        className="w-full px-8 py-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <FaMapMarkerAlt className="absolute top-3 text-lg left-2"/>
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

export default PlacesSearchDropdown;
