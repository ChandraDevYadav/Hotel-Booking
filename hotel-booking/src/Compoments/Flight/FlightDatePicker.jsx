import React, { useState, useEffect, useRef } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main CSS
import "react-date-range/dist/theme/default.css"; // Default theme
import { IoMdCalendar } from "react-icons/io";
import { LuCalendarDays } from "react-icons/lu";

const FlightDatePicker = () => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [selectedTab, setSelectedTab] = useState("calendar"); // 'calendar' or 'flexible'
  const [flexibleStay, setFlexibleStay] = useState("1 night");
  const [selectedMonths, setSelectedMonths] = useState([]);

  const [showPicker, setShowPicker] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dialogRef = useRef(null); // Ref for the dialog

  const togglePicker = () => setShowPicker(!showPicker);

  const handleTabChange = (tab) => setSelectedTab(tab);

  const validateDate = (start, end) => {
    if (start > end) {
      setErrorMessage("End date must be after the start date.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleSave = () => {
    if (selectedTab === "calendar") {
      const isValid = validateDate(dateRange.startDate, dateRange.endDate);
      if (!isValid) return;

      console.log("Date Range Selected:", {
        start: formattedStartDate,
        end: formattedEndDate,
      });
    } else {
      console.log("Flexible Dates Selected:", {
        stay: flexibleStay,
        months: selectedMonths,
      });
    }
    setShowPicker(false);
  };

  const handleDateChange = (item) => {
    const { startDate, endDate } = item.selection;
    if (validateDate(startDate, endDate)) {
      setDateRange(item.selection);
    }
  };

  const handleFlexibleStayChange = (stay) => setFlexibleStay(stay);

  const handleMonthToggle = (month) => {
    setSelectedMonths((prev) =>
      prev.includes(month) ? prev.filter((m) => m !== month) : [...prev, month]
    );
  };

  // Format the date to show only month and day
  const formatDate = (date) =>
    date.toLocaleDateString("en-US", { month: "short", day: "numeric" });

  const formattedStartDate = formatDate(dateRange.startDate);
  const formattedEndDate = formatDate(dateRange.endDate);

  // Close the dialog if click is outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setShowPicker(false); // Close the picker if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      {/* Date Display */}
      <div className="relative">
        <button
          onClick={togglePicker}
          className="w-full pl-4 pr-24 py-1 bg-white border border-black rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex justify-start items-center gap-3"
        >
          <LuCalendarDays />
          <div className="text-start">
            <p className="text-xs">Dates</p>
            <div className="flex justify-start items-center font-medium">
              <p className="text-sm">{formattedEndDate}</p>
              <p className="text-md font-bold"> - </p>
              <p className="text-sm">{formattedStartDate}</p>
            </div>
          </div>
        </button>

        {showPicker && (
          <div
            ref={dialogRef} // Attach the ref to the dialog
            className="absolute -top-2 z-10 mt-2 bg-white rounded-md shadow-lg w-[40rem]"
          >
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-300">
              <button
                onClick={() => handleTabChange("calendar")}
                className={`w-full py-2 ${selectedTab === "calendar"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-black"
                  } font-medium focus:outline-none`}
              >
                Calendar
              </button>
              <button
                onClick={() => handleTabChange("flexible")}
                className={`w-full py-2 ${selectedTab === "flexible"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-black"
                  } font-medium focus:outline-none`}
              >
                Flexible Dates
              </button>
            </div>

            {/* Calendar Tab */}
            {selectedTab === "calendar" && (
              <div>
                <DateRange
                  ranges={[dateRange]}
                  onChange={handleDateChange}
                  months={2}
                  direction="horizontal"
                  rangeColors={["#4F46E5"]}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  showDateDisplay={false}
                  minDate={new Date()}
                  className="text-sm w-[39.5rem] rounded-md"
                />
                {errorMessage && (
                  <div className="p-2 text-red-600 text-sm">{errorMessage}</div>
                )}
                <div className="flex flex-wrap gap-2 pl-2 pb-3">
                  {["Exact dates", "± 1 day", "± 2 days", "± 3 days", "± 7 days"].map(
                    (stay) => (
                      <button
                        key={stay}
                        onClick={() => handleFlexibleStayChange(stay)}
                        className={`border border-gray-400 px-2 py-2 rounded-full text-xs font-medium ${flexibleStay === stay
                          ? "border-2 border-gray-900 px-2 py-2 rounded-full text-xs font-medium bg-blue-100"
                          : "bg-white text-black"
                          }`}
                      >
                        {stay}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Flexible Dates Tab */}
            {selectedTab === "flexible" && (
              <div className="p-4 space-y-4">
                <div>
                  <p className="font-medium mb-4 text-center">How long do you want to stay?</p>
                  <div className="flex justify-center flex-wrap gap-2">
                    {["1 night", "2-3 nights", "4-5 nights", "6-7 nights"].map(
                      (stay) => (
                        <button
                          key={stay}
                          onClick={() => handleFlexibleStayChange(stay)}
                          className={`border border-gray-400 px-2 py-2 rounded-full text-xs font-medium ${flexibleStay === stay
                            ? "border-2 border-gray-900 px-2 py-2 rounded-full text-xs font-medium bg-blue-100"
                            : "bg-white text-black"
                            }`}
                        >
                          {stay}
                        </button>
                      )
                    )}
                  </div>
                  <div className="flex justify-center items-center mt-4">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="pl-2 text-sm font-medium text-gray-600">Must include weekend</label>
                  </div>
                </div>

                <div className="border-t border-gray-300 pt-6">
                  <p className="font-medium text-center text-gray-700 mb-2">
                    When do you want to travel? <br />
                    <span className="text-sm text-gray-500">You can select more than one month.</span>
                  </p>
                  <div className="flex justify-center items-center gap-3 pt-4">
                    {[
                      "December 2024",
                      "January 2025",
                      "February 2025",
                      "March 2025",
                      "April 2025",
                      "May 2025",
                    ].map((month) => (
                      <button
                        key={month}
                        onClick={() => handleMonthToggle(month)}
                        className={`px-4 py-2 border border-gray-400 rounded-md w-full text-[11px] ${selectedMonths.includes(month)
                            ? "bg-indigo-600 text-white"
                            : "bg-white text-black"
                          }`}
                      >
                        <div className="flex justify-center text-xl mb-1"><IoMdCalendar/></div>
                        <span className="font-semibold">{month.split(" ")[0]}</span> <br /> <span className="text-gray-500 text-xs font-medium">{month.split(" ")[1]}</span>
                      </button>
                    ))}
                  </div>

                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="p-4 flex justify-end shadow-md bg-gray-50">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightDatePicker;
