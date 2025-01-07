import React, { useState } from "react";
import Tabs from "./Tabs";
import RoundTrip from "./RoundTrip";
import OneWay from "./OneWay";
import MultiCity from "./MultiCity";
import Dropdown from "./Dropdown";

const MainTabs = () => {
    const tabCategories = [
        { name: "Roundtrip", key: "roundtrip" },
        { name: "One-way", key: "oneway" },
        { name: "Multi-city", key: "multicity" },
    ];

    const [activeTab, setActiveTab] = useState("roundtrip");
    const [selectedClass, setSelectedClass] = useState("Economy");

    const handleTabClick = (key) => {
        setActiveTab(key);
    };

    const handleClassChange = (event) => {
        setSelectedClass(event.target.value);
        console.log("Selected class:", event.target.value);
    };

    return (
        <div className="mt-4">
            {/* Tab Buttons with Dropdown */}
            <div className="flex justify-start items-center gap-4 mb-4">
                <Tabs tabs={tabCategories} activeTabKey={activeTab} onTabClick={handleTabClick} />
                {/* Dropdown */}
                <Dropdown/>
            </div>

            {/* Tab Content */}
            <div>
                {activeTab === "roundtrip" && <RoundTrip />}
                {activeTab === "oneway" && <OneWay />}
                {activeTab === "multicity" && <MultiCity />}
            </div>
        </div>
    );
};

export default MainTabs;
