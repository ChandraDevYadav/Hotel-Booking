import React, { useState, useEffect, useRef } from "react";
import { FaRegClock } from "react-icons/fa6";

const DurationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [minNights, setMinNights] = useState("");
  const [maxNights, setMaxNights] = useState("");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDone = () => {
    setIsOpen(false);
  };

  const getButtonLabel = () => {
    if (minNights && maxNights) {
      return `${minNights} - ${maxNights} nights`;
    }
    if (minNights) {
      return `Duration: Min ${minNights} nights`;
    }
    if (maxNights) {
      return `Duration: Max ${maxNights} nights`;
    }
    return "Duration";
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block w-full text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="px-4 py-1 w-full text-start bg-white text-gray-900 font-medium rounded-md border border-black"
      >
        <div className="flex justify-start items-center gap-3">
          <FaRegClock className="text-xl" />
          <div>
            <p className="text-xs">Duration</p>
            <span>{getButtonLabel()}</span>
          </div>
        </div>
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Min Nights
              </label>
              <input
                type="number"
                value={minNights}
                onChange={(e) => setMinNights(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter minimum nights"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Max Nights
              </label>
              <input
                type="number"
                value={maxNights}
                onChange={(e) => setMaxNights(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter maximum nights"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleDone}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DurationDropdown;
