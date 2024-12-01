import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main CSS
import "react-date-range/dist/theme/default.css"; // Default theme
import { LuCalendarDays } from "react-icons/lu";

const EnhancedDatePicker = () => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [showPicker, setShowPicker] = useState(false);
  const [activeTab, setActiveTab] = useState("Check-In");
  const [errorMessage, setErrorMessage] = useState("");

  const togglePicker = () => setShowPicker(!showPicker);

  const validateDate = (start, end) => {
    if (start > end) {
      setErrorMessage("End date must be after the start date.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleSave = () => {
    const isValid = validateDate(dateRange.startDate, dateRange.endDate);
    if (!isValid) return;

    console.log("Date Range Selected:", {
      start: dateRange.startDate.toLocaleDateString(),
      end: dateRange.endDate.toLocaleDateString(),
    });
    setShowPicker(false);
  };

  const handleDateChange = (item) => {
    const { startDate, endDate } = item.selection;
    if (validateDate(startDate, endDate)) {
      setDateRange(item.selection);
    }
  };

  const formattedStartDate = dateRange.startDate.toLocaleDateString();
  const formattedEndDate = dateRange.endDate.toLocaleDateString();

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
            {activeTab} <br />
            <span className="text-sm font-medium">
              {activeTab === "Check-In" ? formattedStartDate : formattedEndDate}
            </span>
          </p>
        </div>
      </button>

      {/* Calendar Picker */}
      {showPicker && (
        <div className="absolute z-10 mt-2 bg-white border border-gray-500 rounded-md shadow-lg -right-[32rem]">
          {/* Header for Active Tabs */}
          <div className="flex justify-start gap-7 px-4 py-2 bg-gray-100 border-b border-gray-300 text-sm font-medium">
            <button
              onClick={() => setActiveTab("Check-In")}
              className={`${
                activeTab === "Check-In"
                  ? "text-indigo-600 border-b-2 border-indigo-600 font-bold"
                  : "text-gray-500"
              }`}
            >
              Start
            </button>
            <button
              onClick={() => setActiveTab("Check-Out")}
              className={`${
                activeTab === "Check-Out"
                  ? "text-indigo-600 border-b-2 border-indigo-600 font-bold"
                  : "text-gray-500"
              }`}
            >
              End
            </button>
          </div>

          {/* Date Range Calendar */}
          <DateRange
            ranges={[dateRange]}
            onChange={handleDateChange}
            months={2} // Display two months
            direction="horizontal" // Arrange calendars horizontally
            rangeColors={["#4F46E5"]} // Tailwind Indigo-600
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            showDateDisplay={false} // Hide top input fields
            minDate={new Date()} // Prevent selecting past dates
            className="text-lg"
          />

          {/* Error Message */}
          {errorMessage && (
            <div className="p-2 text-red-600 text-sm">{errorMessage}</div>
          )}

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

export default EnhancedDatePicker;
