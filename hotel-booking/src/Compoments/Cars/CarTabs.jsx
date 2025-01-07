import React, { useState } from "react";
import RentalCars from "./RentalCars";
import AirportTransportation from "./AirportTransportation";
import Tabs from "./Tabs";
import AlertDialog from "./AlertDialog";
import { FaAngleDown, FaCheck } from "react-icons/fa6";

const MainTabs = () => {
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
        <div className="mt-4">
            {/* Tab Buttons with Dropdown */}
            <div className="flex justify-start items-center gap-4 mb-4 pb-4">
                <Tabs tabs={tabCategories} activeTabKey={activeTab} onTabClick={handleTabClick} />
            </div>

            {/* Tab Content */}
            <div>
                {activeTab === "rentalcars" && <RentalCars />}
                {activeTab === "airporttransportation" && <AirportTransportation />}
            </div>
            <div>
            <div className='flex justify-start items-center gap-3 mt-6'>
        <div>
          <button className='border border-black px-4 py-2 rounded-full hover:bg-blue-200 text-xs'>Show AARP rates</button>
        </div>
        <div className="flex items-center justify-center">
      <button
        onClick={handleOpenDialog}
        className="border border-black flex justify-start items-center gap-4 px-4 py-2 rounded-full hover:bg-blue-200 text-xs"
      >
        <span>Discount codes</span>
        <FaAngleDown/>
      </button>

      <AlertDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </div>
      </div>
      <div className='flex justify-start items-center gap-6 px-4 py-6'>
        <div className='flex justify-start items-center gap-3'>
          <FaCheck className='w-6 h-6' />
          <p className='text-sm text-gray-900'>Most hotels are fully refundable. Because flexibility matters.</p>
        </div>
        <div className='flex justify-start items-center gap-3'>
          <FaCheck className='w-6 h-6' />
          <p className='text-sm text-gray-900'>As a One Key member you can save 10% or more on over 100,000 hotels worldwide.</p>
        </div>
        <div className='flex justify-start items-center gap-3'>
          <FaCheck className='w-6 h-6' />
          <p className='text-sm text-gray-900'>Save up to 30% when you add a hotel to your flight as a One Key member.</p>
        </div>
      </div>
            </div>
        </div>
    );
};

export default MainTabs;
