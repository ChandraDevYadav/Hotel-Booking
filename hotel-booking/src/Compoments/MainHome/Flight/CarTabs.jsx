import React, { useState } from "react";
import { FaAngleDown, FaCheck } from "react-icons/fa6";
import Tabs from "../Tabs";
import AlertDialog from "../../Cars/AlertDialog";
import RentalCars from "../../Cars/RentalCars";
import AirportTransportation from "../../Cars/AirportTransportation";

const CarTabs = () => {
    const tabCategories = [
        { name: "Rental-cars", key: "rentalcars" },
        { name: "Airport-transportation", key: "airporttransportation" },
    ];

    const [activeTab, setActiveTab] = useState("rentalcars");
    const [selectedClass, setSelectedClass] = useState("Economy");

    const handleTabClick = (key) => {
        setActiveTab(key);
    };

    const handleClassChange = (event) => {
        setSelectedClass(event.target.value);
        console.log("Selected class:", event.target.value);
    };

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleOpenDialog = () => setIsDialogOpen(true);
    const handleCloseDialog = () => setIsDialogOpen(false);
    const handleConfirm = () => {
        console.log("Confirmed!");
        setIsDialogOpen(false);
    };

    return (
        <div className="mt-0 md:mt-4 px-1 sm:px-6 md:px-8">
            {/* Tab Buttons with Dropdown */}
            <div className="flex justify-start items-center gap-4 mb-0 md:mb-4 pb-4">
                <Tabs tabs={tabCategories} activeTabKey={activeTab} onTabClick={handleTabClick} />
            </div>

            {/* Tab Content */}
            <div>
                {activeTab === "rentalcars" && <RentalCars />}
                {activeTab === "airporttransportation" && <AirportTransportation />}
            </div>

            {/* Additional Controls */}
            <div className="mt-6">
                <div className="flex flex-col sm:flex-row justify-start items-center gap-3">
                    <div className="">
                        <button className="border border-black px-4 py-2 rounded-full hover:bg-blue-200 text-xs w-full sm:w-auto">
                            Show AARP rates
                        </button>
                    </div>
                    <div className="flex items-center justify-center w-full sm:w-auto">
                        <button
                            onClick={handleOpenDialog}
                            className="border border-black flex justify-between items-center gap-4 px-4 py-2 rounded-full hover:bg-blue-200 text-xs w-full sm:w-auto"
                        >
                            <span>Discount codes</span>
                            <FaAngleDown />
                        </button>

                        <AlertDialog
                            isOpen={isDialogOpen}
                            onClose={handleCloseDialog}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarTabs;
