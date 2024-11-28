import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main CSS
import "react-date-range/dist/theme/default.css"; // Default theme
import { LuCalendarDays } from "react-icons/lu";

const CalendarOnlyDatePicker = () => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [showPicker, setShowPicker] = useState(false);

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  const handleSave = () => {
    console.log("Selected Date Range:", {
      start: dateRange.startDate.toLocaleDateString(),
      end: dateRange.endDate.toLocaleDateString(),
    });
    setShowPicker(false); // Optionally close picker after saving
  };

  return (
    <div className="relative">
      {/* Date Display */}
      <button
        onClick={togglePicker}
        className="px-4 py-2 bg-white border border-black rounded-md shadow-sm text-gray-700 flex justify-start items-center"
      >
        {/* {`Start: ${dateRange.startDate.toLocaleDateString()} - End: ${dateRange.endDate.toLocaleDateString()}`} */}
        <LuCalendarDays/>
        <div>
          <p className="text-xs">Check-In</p>
          <p className="text-sm">Select Date</p>
        </div>
      </button>

      {/* Calendar Picker */}
      {showPicker && (
        <div className="absolute z-10 mt-2 bg-white border border-gray-500 rounded-md shadow-lg">

          <DateRange
            ranges={[dateRange]}
            onChange={(item) => setDateRange(item.selection)}
            months={2}
            direction="horizontal"
            rangeColors={["#4F46E5"]} // Tailwind Indigo-600
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            showDateDisplay={false} // Hide top input fields
            className="text-lg"
          />
          {/* Save Button */}
          <div className="p-2 flex justify-end border-t border-gray-300">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarOnlyDatePicker;
