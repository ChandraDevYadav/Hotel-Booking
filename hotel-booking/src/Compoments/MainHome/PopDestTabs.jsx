import React, { useState } from "react";
import Hello from "./Stays/Hello";
import BeachDestinations from "./PopDesCom/BeachDestinations";

const PopDestTabs = () => {
    const tabCategories = [
        { name: "Beach", key: "beach" },
        { name: "Culture", key: "culture" },
        { name: "Ski", key: "ski" },
        { name: "Family", key: "family" },
        { name: "Fitness", key: "wellness" },
    ];

    const [activeTab, setActiveTab] = useState("beach");

    const handleTabClick = (key) => {
        setActiveTab(key);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case "beach":
                return <div className="px-2">
                    <BeachDestinations/>
                </div>;
            case "culture":
                return <div>
                    <BeachDestinations/>
                </div>;
            case "ski":
                return <div><BeachDestinations/></div>;
            case "family":
                return <div><BeachDestinations/></div>;
            case "wellness":
                return <div><BeachDestinations/></div>;
            default:
                return null;
        }
    };

    return (
        <div className="mt-4">
            {/* Tab Buttons */}
            <div className="flex space-x-4 overflow-x-scroll scrollbar-hide border-b">
                {tabCategories.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => handleTabClick(tab.key)}
                        className={`py-2 px-4 text-sm font-medium text-gray-600 ${
                            activeTab === tab.key ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-900"
                        }`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="my-6">{renderTabContent()}</div>
        </div>
    );
};

export default PopDestTabs;
