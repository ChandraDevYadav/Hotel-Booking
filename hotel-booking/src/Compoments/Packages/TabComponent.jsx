import React, { useState } from "react";
import FlightSearch from "../Flight/FlightSearch";
import FlightDatePicker from "../Flight/FlightDatePicker";
import PersonPicker from "../Flight/PersonPicker";

const TabComponent = () => {
    const [activeTabs, setActiveTabs] = useState(["Stay added", "Flight added"]);
    const [isChecked, setIsChecked] = useState(false);

    const tabs = ["Stay added", "Flight added", "Car"];

    const toggleTab = (tab) => {
        if (activeTabs.includes(tab)) {
            setActiveTabs(activeTabs.filter((t) => t !== tab));
        } else {
            setActiveTabs([...activeTabs, tab]);
        }
    };

    const areFirstTwoTabsActive = () =>
        activeTabs.includes("Stay added") && activeTabs.includes("Flight added");

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="">
            {/* Tab Buttons */}
            <div className="flex justify-start items-center gap-4 mb-6">
                <div className="flex space-x-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => toggleTab(tab)}
                            className={`px-4 py-2 rounded-full text-xs font-medium 
                            ${activeTabs.includes(tab) ? "bg-blue-100 text-black border-2 border-gray-500" : "bg-gray-200 text-gray-700 border-2 border-gray-300"} 
                            transition duration-300`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Economy Dropdown (Hidden if first two tabs are not active) */}
                {areFirstTwoTabsActive() && (
                    <div className="relative inline-block">
                        <select className="block w-28 px-4 py-2 text-xs text-black bg-blue-100 border-2 border-gray-500 rounded-full shadow-sm focus:outline-none">
                            <option value="Economy">Economy</option>
                            <option value="Business">Business</option>
                            <option value="First Class">First Class</option>
                        </select>
                    </div>
                )}
            </div>

            {/* Main Content */}
            {activeTabs.length > 1 ? (
                <div className="">
                    <div className='flex justify-start items-center gap-4'>
                        <div>
                            <FlightSearch />
                        </div>
                        <div className=''>
                            <FlightDatePicker />
                        </div>
                        <div className=''>
                            <PersonPicker />
                        </div>
                        <div>
                            <button className='text-white bg-blue-600 px-10 py-3 rounded-md font-medium'>Search</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="p-4 text-center bg-red-100 text-red-500 rounded-lg shadow-md">
                    Need to select at least two tabs to show the content.
                </div>
            )}

            {/* Checkbox */}
            <div className="flex items-center my-6">
                <input
                    type="checkbox"
                    id="accommodation-checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
                />
                <label
                    htmlFor="accommodation-checkbox"
                    className="ml-2 text-sm font-medium text-gray-700"
                >
                    I only need accommodation for part of my trip
                </label>
            </div>

            {/* Input Field (Visible when checkbox is checked) */}
            {isChecked && (
                <div className="mb-6">
                    <label
                        htmlFor="accommodation-details"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Specify accommodation details:
                    </label>
                    <input
                        type="text"
                        id="accommodation-details"
                        placeholder="Enter your accommodation details"
                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
            )}
        </div>
    );
};

export default TabComponent;
