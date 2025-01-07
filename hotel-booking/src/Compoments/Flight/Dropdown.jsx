import React, { useState, useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedClass, setSelectedClass] = useState("Economy");
    const dropdownRef = useRef(null);

    const options = ["Economy", "Premium Economy", "Business Class", "First Class"];

    const handleOptionClick = (option) => {
        setSelectedClass(option);
        setIsOpen(false);
        console.log("Selected class:", option);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
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
        <div ref={dropdownRef} className="relative inline-block text-left w-52">
            {/* Selected Option */}
            <button
                onClick={toggleDropdown}
                className="flex justify-start items-center px-4 py-2 bg-blue-200 text-xs font-medium text-gray-700 border-2 border-gray-500 rounded-full shadow-sm focus:outline-none"
            >
                {selectedClass}
                <span className="ml-2"><FaAngleDown/></span> {/* Down Arrow */}
            </button>

            {/* Dropdown Options */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 cursor-pointer"
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
