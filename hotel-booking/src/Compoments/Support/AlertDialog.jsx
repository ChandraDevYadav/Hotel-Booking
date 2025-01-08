import React from "react";
import { FaPlane, FaHotel, FaCar, FaShip, FaUser, FaLock, FaBell } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const AlertDialog = ({ isOpen, title, details, selectedTab, onClose, icon }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full pl-6 pt-4 pb-4">
        {/* Close Button */}
        <div className="mb-4 flex justify-start items-center">
          <button
            onClick={onClose}
            className="text-md font-medium text-gray-800 focus:outline-none flex justify-start items-start gap-3"
          >
            <FaX className="mt-1"/>
            <span>Explore help articles</span>
          </button>
        </div>
        {/* Title with Icon */}
        <div className="flex items-center gap-2 mb-4">
          {icon && <span className="text-blue-500 text-xl">{icon}</span>}
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        </div>

        {/* Subcategories or Details */}
        {details[selectedTab]?.length > 0 ? (
          <ul className="mt-4 space-y-2 overflow-y-scroll h-40">
            {details[selectedTab].map((item, index) => (
              <li
                key={index}
                className="text-gray-700 text-sm font-medium hover:text-blue-600 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm text-gray-500">No details available.</p>
        )}

        
      </div>
    </div>
  );
};

export default AlertDialog;
