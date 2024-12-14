import React from "react";
import { accessibilityData } from "./accessibilityData";
import { FaHotel } from "react-icons/fa";
import { MdOutlineMeetingRoom } from "react-icons/md";

const AccessibilityList = () => {
  const accessibilityDescription = accessibilityData.find(
    (section) => section.category === "Accessibility"
  )?.description;

  const commonAreas = accessibilityData.find(
    (section) => section.category === "Common areas"
  )?.features;

  const rooms = accessibilityData.find(
    (section) => section.category === "Rooms"
  )?.features;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
      {/* Accessibility Description */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Accessibility</h1>
        <p className="text-gray-600 text-sm font-medium">{accessibilityDescription}</p>
      </div>

      {/* Common Areas */}
      <div className="mb-8">
        <h2 className="text-xl flex justify-start items-center gap-2 font-semibold text-gray-700 mb-4"><FaHotel className="text-xl md:text-2xl"/>Common Areas</h2>
        <ul className="text-sm text-gray-600 font-medium space-y-2 pl-8">
          {commonAreas.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Rooms */}
      <div>
        <h2 className="text-xl font-semibold flex justify-start items-center gap-2 text-gray-700 mb-4"><MdOutlineMeetingRoom className="text-2xl md:text-3xl"/> Rooms</h2>
        <ul className="text-sm text-gray-600 font-medium space-y-2 pl-10">
          {rooms.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccessibilityList;
