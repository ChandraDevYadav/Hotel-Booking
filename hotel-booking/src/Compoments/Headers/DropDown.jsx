import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown, FaCar, FaHotel, FaTruckPlane, FaVrCardboard } from "react-icons/fa6";
import { GiCommercialAirplane, GiCruiser } from "react-icons/gi";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {/* Dropdown Trigger */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 justify-start w-full text-sm font-medium text-gray-800"
      >
        <span>Shop travel</span>
        <FaAngleDown className="text-xs mt-[2px]" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute mt-6 pt-2 z-40 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {/* Dropdown Items */}
            <Link
              to="/stay"
              className="flex justify-start items-center gap-4 p-4 text-sm font-medium text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <FaHotel className="text-lg"/>
              <span>Stays</span>
            </Link>
            <Link
              to="/flight"
              className="flex justify-start items-center gap-4 p-4 text-sm font-medium text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <GiCommercialAirplane className="text-lg" />
              <span>Flights</span>
            </Link>
            <Link
              to="/cars"
              className="flex justify-start items-center gap-4 p-4 text-sm font-medium text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <FaCar className="text-lg"/>
              <span>Cars</span>
            </Link>
            <Link
              to="/packages"
              className="flex justify-start items-center gap-4 p-4 text-sm font-medium text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <FaTruckPlane className="text-lg"/>
              <span>Packages</span>
            </Link>
            <Link
              to="/thingtodo"
              className="flex justify-start items-center gap-4 p-4 text-sm font-medium text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <FaVrCardboard className="text-lg" />
              <span>Things to do</span>
            </Link>
            <Link
              to="/cruises"
              className="flex justify-start items-center gap-4 p-4 text-sm font-medium text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              <GiCruiser className="text-lg" />
              <span>Cruises</span>
            </Link>
            <hr />
            <Link
              to=""
              className="flex justify-start items-center gap-4 p-4 text-sm font-medium text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              Deals
            </Link>
            <a
              href="#"
              className="flex justify-start items-center gap-4 p-4 text-sm font-medium text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              Groups & meetings
            </a>
            <a
              href="#"
              className="flex justify-start items-center gap-4 p-4 text-sm font-medium text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              Expedia magazine
            </a>
            <a
              href="#"
              className="flex justify-start items-center gap-4 p-4 text-sm font-medium text-gray-800 hover:bg-gray-100"
              role="menuitem"
            >
              One Key credit cards
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
