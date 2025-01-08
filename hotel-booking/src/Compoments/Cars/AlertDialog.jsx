import React from "react";
import Dropdown from "./Dropdown";
import CarDropdown from "./CarDropdown";

const AlertDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    // Check if the clicked element is the overlay itself
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 right-16 md:right-0 flex justify-center sm:justify-start items-center z-50"
      onClick={handleOverlayClick} // Close dialog if clicked outside
    >
      <div
        className="bg-white rounded-lg shadow-lg w-[80%] sm:w-[30rem] border border-gray-100"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
      >
        <CarDropdown />
      </div>
    </div>
  );
};

export default AlertDialog;
