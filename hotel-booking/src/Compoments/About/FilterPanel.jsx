import React, { useState } from 'react';

const initialFilters = {
  priceRange: { min: 0, max: 1000 },
  amenities: [],
  type: '',
  rating: 0,
};

const amenitiesOptions = ['Pool', 'Hot tub', 'Wifi Included', 'Parking', 'Kitchen'];

const FilterPanel = ({ onFilterChange }) => {
  const [filters, setFilters] = useState(initialFilters);

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      priceRange: { ...prev.priceRange, [name]: Number(value) },
    }));
  };

  const handleAmenityToggle = (amenity) => {
    setFilters((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((item) => item !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const handleTypeChange = (e) => {
    setFilters((prev) => ({ ...prev, type: e.target.value }));
  };

  const handleRatingChange = (e) => {
    setFilters((prev) => ({ ...prev, rating: Number(e.target.value) }));
  };

  const applyFilters = () => {
    onFilterChange(filters);
  };

  return (
    <div className="w-1/4 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      {/* Price Filter */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Price Range</label>
        <div className="flex gap-2">
          <input
            type="number"
            name="min"
            className="w-1/2 border rounded px-2 py-1"
            placeholder="Min"
            value={filters.priceRange.min}
            onChange={handlePriceChange}
          />
          <input
            type="number"
            name="max"
            className="w-1/2 border rounded px-2 py-1"
            placeholder="Max"
            value={filters.priceRange.max}
            onChange={handlePriceChange}
          />
        </div>
      </div>

      {/* Amenities Filter */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Amenities</label>
        {amenitiesOptions.map((amenity) => (
          <div key={amenity} className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              id={amenity}
              onChange={() => handleAmenityToggle(amenity)}
              checked={filters.amenities.includes(amenity)}
            />
            <label htmlFor={amenity}>{amenity}</label>
          </div>
        ))}
      </div>

      {/* Type Filter */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Type</label>
        <select
          className="w-full border rounded px-2 py-1"
          onChange={handleTypeChange}
          value={filters.type}
        >
          <option value="">Any</option>
          <option value="Hotel">Hotel</option>
          <option value="Private vacation home">Private vacation home</option>
        </select>
      </div>

      {/* Rating Filter */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Guest Rating</label>
        <input
          type="number"
          className="w-full border rounded px-2 py-1"
          placeholder="Minimum Rating"
          value={filters.rating}
          onChange={handleRatingChange}
        />
      </div>

      {/* Apply Filters Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={applyFilters}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterPanel;
