import React, { useState } from "react";
import Tabs from "./Tabs";
import PlacesSearch from "./Stays/PlaceSearch";
import EnhancedDatePicker from "../Home/EnhancedDatePicker";
import PersonPicker from "./Stays/PersonPicker";
import DatePicker from "./Stays/DatePickerWithTabs";

const MainTabs = () => {
    const tabCategories = [
        { name: "Stays", key: "stays" },
        { name: "Flights", key: "flights" },
        { name: "Cars", key: "cars" },
        { name: "Packages", key: "packages" },
        { name: "Things to do", key: "things_to_do" },
        { name: "Cruises", key: "cruises" },
    ];

    const [activeTab, setActiveTab] = useState("stays");

    const handleTabClick = (key) => {
        setActiveTab(key);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your custom form submission logic here
        console.log("Form submitted!");
    };

    return (
        <div className="mt-4">
            {/* Tab Buttons */}
            <Tabs tabs={tabCategories} activeTabKey={activeTab} onTabClick={handleTabClick} />

            {/* Tab Content */}
            <div className="border border-t-0 p-4 rounded-b-xl">
                {activeTab === "stays" && (
                    <form onSubmit={handleSubmit} className="flex justify-around items-center gap-6">
                        <div className="w-full">
                            <PlacesSearch />
                        </div>
                        <div className="flex justify-between w-full gap-2">
                            {/* Date Pickers */}
                            <div className="w-full">
                                <DatePicker type="Check-In" />
                            </div>
                            {/* <div className="w-full">
          <EnhancedDatePicker type="Check-Out" />
        </div> */}
                        </div>
                        <div className="flex justify-between w-full gap-2">
                            {/* Date Pickers */}
                            <div className="w-full">
                                <PersonPicker />
                            </div>
                        </div>
                        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
                            Search
                        </button>
                    </form>
                )}

                {activeTab === "flights" && (
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Search Flights</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-x-2">
                                <label className="inline-flex items-center">
                                    <input type="radio" name="tripType" className="mr-2" /> Roundtrip
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" name="tripType" className="mr-2" /> One-way
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" name="tripType" className="mr-2" /> Multi-city
                                </label>
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Leaving from</label>
                                <input type="text" className="w-full border rounded px-4 py-2" placeholder="Departure location" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Going to</label>
                                <input type="text" className="w-full border rounded px-4 py-2" placeholder="Destination" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Dates</label>
                                <input type="text" className="w-full border rounded px-4 py-2" placeholder="Select dates" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Travelers</label>
                                <input type="text" className="w-full border rounded px-4 py-2" placeholder="Number of travelers" />
                            </div>
                            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
                                Search
                            </button>
                        </form>
                    </div>
                )}

                {activeTab === "cars" && (
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Search Cars</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium">Pick-up</label>
                                <input type="text" className="w-full border rounded px-4 py-2" placeholder="Pick-up location" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Drop-off</label>
                                <input type="text" className="w-full border rounded px-4 py-2" placeholder="Drop-off location" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Dates</label>
                                <input type="text" className="w-full border rounded px-4 py-2" placeholder="Select dates" />
                            </div>
                            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
                                Search
                            </button>
                        </form>
                    </div>
                )}

                {activeTab === "packages" && (
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Search Packages</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>Stays, Flights, Cars</div>
                            <div>
                                <label className="block text-sm font-medium">Going to</label>
                                <input type="text" className="w-full border rounded px-4 py-2" placeholder="Enter destination" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Dates</label>
                                <input type="text" className="w-full border rounded px-4 py-2" placeholder="Select dates" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Travelers</label>
                                <input type="text" className="w-full border rounded px-4 py-2" placeholder="Number of travelers" />
                            </div>
                            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
                                Search
                            </button>
                        </form>
                    </div>
                )}

                {activeTab === "things_to_do" && (
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Things to Do</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>Looking for sports, concerts, or music festivals? Search event tickets</div>
                            <div>
                                <label className="block text-sm font-medium">Going to</label>
                                <input type="text" className="w-full border rounded px-4 py-2" placeholder="Enter destination" />
                            </div>
                            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
                                Search
                            </button>
                        </form>
                    </div>
                )}

                {activeTab === "cruises" && (
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Search Cruises</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>For expert cruise advice, call 1-866-403-9848.</div>
                            <div>
                                <label className="block text-sm font-medium">Going to</label>
                                <input type="text" className="w-full border rounded px-4 py-2" placeholder="Enter destination" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Departing Between</label>
                                <input type="text" className="w-full border rounded px-4 py-2" placeholder="Select dates" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Duration</label>
                                <input type="text" className="w-full border rounded px-4 py-2" placeholder="Duration in nights" />
                            </div>
                            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
                                Search
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainTabs;
