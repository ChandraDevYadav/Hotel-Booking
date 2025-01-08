import React, { useState } from "react";
import Tabs from "./Tabs";
import PlacesSearch from "./Stays/PlaceSearch";
import EnhancedDatePicker from "../Home/EnhancedDatePicker";
import PersonPicker from "./Stays/PersonPicker";
import DatePicker from "./Stays/DatePickerWithTabs";
import FlightTab from "./Flight/FlightTab";
import CarTabs from "./Flight/CarTabs";
import PackageTab from "./Flight/PackageTab";
import ToDoTab from "./Flight/TodoTab";
import SearchCruises from "./Flight/SearchCruise";

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
        console.log("Form submitted!");
    };

    return (
        <div className="mt-4">
            {/* Tab Buttons */}
            <Tabs tabs={tabCategories} activeTabKey={activeTab} onTabClick={handleTabClick} />

            {/* Tab Content */}
            <div className="border border-t-0 p-6 rounded-b-xl">
                {activeTab === "stays" && (
                    <div>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col md:flex-row gap-4 items-center"
                        >
                            <div className="w-full md:w-1/3">
                                <PlacesSearch />
                            </div>
                            <div className="w-full md:w-1/3">
                                <DatePicker type="Check-In" />
                            </div>
                            <div className="w-full md:w-1/3">
                                <PersonPicker />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white py-3 px-4 rounded w-full md:w-auto"
                            >
                                Search
                            </button>
                        </form>

                        {/* Additional Options */}
                        <div className="flex justify-start items-center gap-4 mt-8">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4" />
                                <label htmlFor="" className="text-sm font-medium text-gray-600">
                                    Add a flight
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4" />
                                <label htmlFor="" className="text-sm font-medium text-gray-600">
                                    Add a car
                                </label>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "flights" && <FlightTab />}
                {activeTab === "cars" && <CarTabs />}
                {activeTab === "packages" && <PackageTab />}
                {activeTab === "things_to_do" && <ToDoTab />}
                {activeTab === "cruises" && <SearchCruises />}
            </div>
        </div>
    );
};

export default MainTabs;
