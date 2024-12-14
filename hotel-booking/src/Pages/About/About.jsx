import React, { useState } from "react";
import AboutMain from "../../Compoments/About/AboutMain";

const hotelFilters = [
  {
    category: "Popular Filters",
    filters: [
      { name: "Discounted properties", type: "checkbox" },
      { name: "Orlando, FL (MCO-Orlando Intl.)", count: 71, type: "checkbox" },
      { name: "Aparthotel", count: 6, type: "checkbox" },
      { name: "Pool", count: 62, type: "checkbox" },
      { name: "Hot tub", count: 38, type: "checkbox" },
    ],
  },
  {
    category: "Price",
    filters: [
      { name: "Min", type: "range", min: 0, max: 1000, unit: "USD" },
      { name: "Max", type: "range", min: 0, max: 1000, unit: "USD" },
    ],
  },
  {
    category: "Stay Options",
    filters: [
      { name: "Any", type: "radio" },
      { name: "Hotels", count: 171, type: "checkbox" },
      { name: "Homes", count: 71, type: "checkbox" },
    ],
  },
  {
    category: "Neighborhood",
    filters: [
      { name: "Orlando (and vicinity)", count: 71, type: "checkbox" },
      { name: "Lake Buena Vista", count: 67, type: "checkbox" },
      { name: "Kissimmee", count: 71, type: "checkbox" },
      { name: "Downtown Orlando", count: 30, type: "checkbox" },
      { name: "Winter Park", count: 23, type: "checkbox" },
      { name: "Celebration", count: 67, type: "checkbox" },
    ],
  },
  {
    category: "Popular Locations",
    filters: [
      { name: "Walt Disney World® Resort", count: 58, type: "checkbox" },
      { name: "Universal Studios Florida", count: 30, type: "checkbox" },
      { name: "Magic Kingdom® Park", count: 57, type: "checkbox" },
      { name: "SeaWorld® Orlando", count: 48, type: "checkbox" },
    ],
  },
  {
    category: "Amenities",
    filters: [
      { name: "Airport shuttle included", count: 0, type: "checkbox" },
      { name: "Pool", count: 62, type: "checkbox" },
      { name: "Hot tub", count: 38, type: "checkbox" },
      { name: "Pet friendly", count: 31, type: "checkbox" },
      { name: "Spa", count: 1, type: "checkbox" },
      { name: "Wifi Included", count: 71, type: "checkbox" },
      { name: "Water park", count: 39, type: "checkbox" },
      { name: "Parking", count: 67, type: "checkbox" },
    ],
  },
  {
    category: "One Key Benefits and Discounts",
    filters: [
      { name: "Member prices", type: "checkbox" },
      { name: "VIP Access properties", count: 3, type: "checkbox" },
      { name: "Discounted properties", type: "checkbox" },
      { name: "Black Friday sale", type: "checkbox" },
    ],
  },
  {
    category: "Guest Rating",
    filters: [
      { name: "Any", type: "radio" },
      { name: "Wonderful 9+", count: 42, type: "checkbox" },
      { name: "Very good 8+", count: 60, type: "checkbox" },
      { name: "Good 7+", count: 62, type: "checkbox" },
    ],
  },
  {
    category: "Property Type",
    filters: [
      { name: "Aparthotel", count: 6, type: "checkbox" },
      { name: "Villa", count: 4, type: "checkbox" },
      { name: "Private vacation home", count: 28, type: "checkbox" },
      { name: "Apartment", count: 6, type: "checkbox" },
    ],
  },
  {
    category: "Accessibility",
    filters: [
      { name: "Roll-in shower", count: 2, type: "checkbox" },
      { name: "Stair-free path to entrance", count: 1, type: "checkbox" },
      { name: "In-room accessibility", count: 24, type: "checkbox" },
      { name: "Wheelchair accessible parking", count: 20, type: "checkbox" },
    ],
  },
  {
    category: "Traveler Experience",
    filters: [
      { name: "Eco-certified", count: 0, type: "checkbox" },
      { name: "LGBTQ welcoming", count: 3, type: "checkbox" },
      { name: "Business friendly", count: 9, type: "checkbox" },
      { name: "Family friendly", count: 71, type: "checkbox" },
    ],
  },
  {
    category: "Availability",
    filters: [
      { name: "Only show available properties", type: "checkbox" },
    ],
  },
];

const About = () => {
  const [appliedFilters, setAppliedFilters] = useState({});
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [dialogCategory, setDialogCategory] = useState(null); // Track the open dialog

  // Handle Checkbox and Radio Filter Changes
  const handleFilterChange = (category, filterName, isChecked) => {
    setAppliedFilters((prevFilters) => {
      const updatedCategory = prevFilters[category] || [];
      if (isChecked) {
        return {
          ...prevFilters,
          [category]: [...updatedCategory, filterName],
        };
      } else {
        return {
          ...prevFilters,
          [category]: updatedCategory.filter((name) => name !== filterName),
        };
      }
    });
  };

  // Handle Price Range Change
  const handlePriceChange = (type, value) => {
    setPriceRange((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const closeDialog = () => setDialogCategory(null);

  return (
    <div className="p-6 md:p-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="block md:hidden">
          {/* Mobile and Tablet Filters */}
          <div className="">
            {/* <h1 className="text-2xl font-bold mb-4 block md:hidden">Filters</h1> */}
          <div className="flex  overflow-x-scroll gap-2 mb-4">
            {hotelFilters.map((filterCategory, index) => (
              <div key={index} className="mb-2">
                <button
                  onClick={() => setDialogCategory(filterCategory.category)}
                  className="text-center w-40 p-2 bg-blue-600 text-white font-semibold rounded"
                >
                  {filterCategory.category}
                </button>
                {dialogCategory === filterCategory.category && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={closeDialog}
                  >
                    <div
                      className="bg-white rounded shadow-lg p-4 w-3/4 max-h-3/4 overflow-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <h2 className="text-lg font-semibold mb-2">
                        {filterCategory.category}
                      </h2>
                      {filterCategory.filters.map((filter, i) => (
                        <FilterItem
                          key={i}
                          filter={filter}
                          category={filterCategory.category}
                          appliedFilters={appliedFilters}
                          priceRange={priceRange}
                          onFilterChange={handleFilterChange}
                          onPriceChange={handlePriceChange}
                        />
                      ))}
                      <button
                        onClick={closeDialog}
                        className="mt-4 w-full bg-blue-500 text-white py-2 rounded"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 space-x-0 md:space-x-4">
          {/* Filters Sidebar */}
          <div className="col-span-1 bg-white p-0 md:p-4 shadow rounded hidden md:block">
            {hotelFilters.map((filterCategory, index) => (
              <Filter
                key={index}
                category={filterCategory}
                appliedFilters={appliedFilters}
                priceRange={priceRange}
                onFilterChange={handleFilterChange}
                onPriceChange={handlePriceChange}
              />
            ))}
          </div>
          {/* Filtered Results */}
          <div className="md:col-span-4">
            <FilteredResults appliedFilters={appliedFilters} priceRange={priceRange} />
          </div>          
        </div>
      </div>
    </div>
  );
};

// Filter Component
const Filter = ({ category, appliedFilters, priceRange, onFilterChange, onPriceChange }) => (
  <div className="mb-6">
    <h2 className="text-lg font-semibold mb-2">{category.category}</h2>
    {category.filters.map((filter, index) => (
      <FilterItem
        key={index}
        filter={filter}
        category={category.category}
        appliedFilters={appliedFilters}
        priceRange={priceRange}
        onFilterChange={onFilterChange}
        onPriceChange={onPriceChange}
      />
    ))}
  </div>
);

// FilterItem Component
const FilterItem = ({ filter, category, appliedFilters, priceRange, onFilterChange, onPriceChange }) => {
  const isChecked = appliedFilters[category]?.includes(filter.name);

  if (filter.type === "checkbox" || filter.type === "radio") {
    return (
      <div className="flex items-center mb-2">
        <input
          type={filter.type}
          id={`${category}-${filter.name}`}
          checked={!!isChecked}
          onChange={(e) => onFilterChange(category, filter.name, e.target.checked)}
          className="mr-2"
        />
        <label htmlFor={`${category}-${filter.name}`} className="text-sm">
          {filter.name} {filter.count ? `(${filter.count})` : ""}
        </label>
      </div>
    );
  }

  if (filter.type === "range") {
    return (
      <div className="mb-2">
        <label className="text-sm block mb-1">{filter.name} ({filter.unit})</label>
        <input
          type="number"
          min={filter.min}
          max={filter.max}
          value={filter.name === "Min" ? priceRange.min : priceRange.max}
          onChange={(e) => onPriceChange(filter.name.toLowerCase(), e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 text-sm w-full"
        />
      </div>
    );
  }

  return null;
};

// FilteredResults Component
const FilteredResults = ({ appliedFilters, priceRange }) => (
  <div>
    <AboutMain />
  </div>
);

export default About;
