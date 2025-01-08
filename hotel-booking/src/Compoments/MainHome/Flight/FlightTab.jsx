import React, { useState } from "react";
import Tabs from "../../Flight/Tabs";
import Dropdown from "../../Flight/Dropdown";
import RoundTrip from "../../Flight/RoundTrip";
import OneWay from "../../Flight/OneWay";
import MultiCity from "../../Flight/MultiCity";

const FlightTab = () => {
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
    <div className="mt-0 md:mt-0">
      {/* Tab Buttons with Dropdown */}
      <div className="flex flex-wrap gap-4 items-center mb-4">
        <div className="w-full sm:w-auto">
          <Tabs tabs={tabCategories} activeTabKey={activeTab} onTabClick={handleTabClick} />
        </div>
        {/* Dropdown */}
        <div className="w-full sm:w-auto">
          <Dropdown />
        </div>
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

export default FlightTab;
