import React, { useState } from "react";
import RentalCars from "./RentalCars";
import Tabs from "./Tabs";
import RoundTrip from "./RoundTrip";
import HotelToAirport from "./HotelToAirport";
import AirToHotel from "./AirToHotel";
import AirportToHotel from "./AirportToHotel";

const AirTranTabs = () => {
    const tabCategories = [
        { name: "Airport to hotel", key: "airporttohotel" },
        { name: "Hotel to airport", key: "hoteltoairport" },
        { name: "Roundtrip", key: "roundtrip" },
    ];

    const [activeTab, setActiveTab] = useState("airporttohotel");
    const [selectedClass, setSelectedClass] = useState("Economy");

    const handleTabClick = (key) => {
        setActiveTab(key);
    };

    const handleClassChange = (event) => {
        setSelectedClass(event.target.value);
        console.log("Selected class:", event.target.value);
    };

    return (
        <div className="mt-0 md:mt-4 px-0 sm:px-6 md:px-8">
            {/* Tab Buttons with Dropdown */}
            <div className="flex justify-start items-center gap-4 mb-0 md:mb-4 pb-4">
                <Tabs tabs={tabCategories} activeTabKey={activeTab} onTabClick={handleTabClick} />
            </div>

            {/* Tab Content */}
            <div>
                {activeTab === "airporttohotel" && <AirportToHotel />}
                {activeTab === "hoteltoairport" && <HotelToAirport />}
                {activeTab === "roundtrip" && <RoundTrip />}
            </div>
        </div>
    );
};

export default AirTranTabs;
