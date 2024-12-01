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
    <div className="px-44 py-3">
      <h1 className="text-5xl font-semibold mt-4">Family Hotels</h1>
      <div className="flex justify-around items-center gap-4 mt-6">
        {/* Location Dropdown */}
        <div>
          <PlacesSearchDropdown onSelect={(loc) => setLocation(loc)} />
        </div>

        {/* Date Pickers */}
        <div>
          <EnhancedDatePicker type="Check-In" />
        </div>
        <div>
          <EnhancedDatePicker type="Check-Out" />
        </div>

        {/* Room Selector */}
        <div>
          <AlertDialog />
        </div>

        {/* Search Button */}
        <div>
          <button
            onClick={handleSearch}
            className="py-3 px-20 rounded-full bg-blue-600 text-white hover:bg-blue-700"
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
