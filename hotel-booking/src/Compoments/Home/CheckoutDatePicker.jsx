import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main CSS
import "react-date-range/dist/theme/default.css"; // Default theme
import { LuCalendarDays } from "react-icons/lu";

const CheckoutDatePicker = () => {
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
    console.log("Selected Check-Out Date Range:", {
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
        className="pl-4 pr-14 py-[7px] bg-white border border-black rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex justify-start items-center gap-3"
      >
        <LuCalendarDays />
        <div className="text-start">
          <p className="text-xs">
            Check-Out <br />{" "}
            <span className="text-sm font-medium">Select Date</span>
          </p>
        </div>
      </button>

      {/* Calendar Picker */}
      {showPicker && (
        <div className="absolute -right-[32rem] z-10 mt-2 bg-white border border-black rounded-md shadow-lg">
          <DateRange
            ranges={[dateRange]}
            onChange={(item) => setDateRange(item.selection)}
            months={2}
            direction="horizontal"
            rangeColors={["#4F46E5"]}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            showDateDisplay={true}
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

export default CheckoutDatePicker;
