import React, { useState } from "react";
import PlacesSearchDropdown from "./PlacesSearchDropdown";
import EnhancedDatePicker from "./EnhancedDatePicker";
import AlertDialog from "./AlertDialog";

const Search = () => {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    console.log("Searching hotels in:", location);
  };

  return (
    <div className="px-4 md:px-44 py-3 md:py-3">
      <h1 className="text-5xl font-semibold mt-4">Family Hotels</h1>
      <div className="flex flex-col md:flex-row justify-around items-center gap-6 mt-6">
        {/* Location Dropdown */}
        <div className="w-full">
          <PlacesSearchDropdown onSelect={(loc) => setLocation(loc)} />
        </div>

        <div className="flex justify-between w-full gap-2">
          {/* Date Pickers */}
        <div className="w-full">
          <EnhancedDatePicker type="Check-In" />
        </div>
        <div className="w-full">
          <EnhancedDatePicker type="Check-Out" />
        </div>
        </div>

        {/* Room Selector */}
        <div className="w-full">
          <AlertDialog />
        </div>

        {/* Search Button */}
        <div className="w-full">
          <button
            onClick={handleSearch}
            className="py-3 px-20 w-full rounded-full bg-blue-600 text-white hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </div>
      <h1 className="text-3xl font-semibold mt-10">Pamper yourself with luxurious lodgings</h1>
      <p className="mt-2 text-sm font-medium">Are you looking for the best of everything? Chances are you'll find it at a luxury resort or hotel. These properties aim for the highest standard, from first-in-class services to top-of-the-line amenities.</p>
      <p className="mt-2 text-sm font-medium">Typically, luxury hotels are 4.5- or 5-star accommodations. They often feature high-end shopping, premium bedding, and award-winning restaurants as part of the experience. If you're looking for the royal treatment, a luxury accommodation may be the place for you.</p>
    </div>
  );
};

export default Search;
