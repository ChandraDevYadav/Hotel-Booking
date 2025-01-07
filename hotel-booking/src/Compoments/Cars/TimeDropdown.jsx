import React, { useState, useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";

const TimeDropdown = ({ label }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTime, setSelectedTime] = useState("Select Time");
    const dropdownRef = useRef(null);

    // Sample times for the dropdown
    const times = [
        "12:00 AM", "01:00 AM", "02:00 AM", "03:00 AM", "04:00 AM",
        "05:00 AM", "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM",
        "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM",
        "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM",
        "08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM"
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (time) => {
        setSelectedTime(time);
        setIsOpen(false);
    };

    // Close dropdown if clicked outside
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative inline-block text-left w-48">
            
            <button
                onClick={toggleDropdown}
                className="flex justify-between items-center w-full px-4 py-[13px] bg-white text-sm font-medium text-gray-700 border border-black rounded-lg shadow-sm focus:outline-none"
            >
                {label}
                <span className="ml-2"><FaAngleDown/></span> {/* Down Arrow */}
            </button>

            {isOpen && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                    {times.map((time, index) => (
                        <div
                            key={index}
                            onClick={() => handleOptionClick(time)}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 cursor-pointer"
                        >
                            {time}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const PickupDropoffTime = () => {
    return (
        <div className="flex flex-col md:flex-row justify-start gap-4">
            {/* Pickup Time Dropdown */}
            <TimeDropdown label="Pickup Time" />

            {/* Drop-off Time Dropdown */}
            <TimeDropdown label="Drop-off Time" />
        </div>
    );
};

export default PickupDropoffTime;
