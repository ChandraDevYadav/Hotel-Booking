import React, { useState } from "react";
import AlertDialog from "./AlertDialog";
import { FaPlane, FaHotel, FaCar, FaShip, FaUser, FaLock, FaBell } from "react-icons/fa";
import { GiBackpack, GiPriceTag } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import { BsCashStack } from "react-icons/bs";

const SupportDetail = () => {

    const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("");

  const categories = [
    "Flight",
    "Refunds & Charges",
    "Packages",
    "Lodging",
    "Cruise",
    "Destination Services",
    "Car",
    "Account",
    "Privacy",
    "Security",
    "Loyalty & Rewards",
    "Travel Alerts",
  ];

  const details = {
    Flight: [
      "Book a flight using an airline credit",
      "Change your flight",
      "Cancel your flight",
      "Change your flight",
      "Cancel your flight",
      "Change your flight",
      "Cancel your flight",
      "Change your flight",
      "Cancel your flight",
      "Change your flight",
      "Cancel your flight",
      // Other details...
    ],
    "Refunds & Charges": ["Details about refunds", "Service charges", "Processing times"],
    Packages: ["Vacation packages", "Family packages", "Adventure packages"],
    Lodging: ["Hotel booking", "Resort booking", "Cancellations and refunds"],
    Cruise: ["Book a cruise", "Cruise deals", "Onboard activities"],
    // Add more categories and details as needed
  };

  const iconMapping = {
    Flight: <FaPlane />,
    "Refunds & Charges": <BsCashStack  />,
    Packages: <GiBackpack  />,
    Lodging: <FaHotel />,
    Cruise: <FaShip />,
    "Destination Services": <FaCar />,
    Car: <FaCar />,
    Account: <FaUser />,
    Privacy: <FaLock />,
    Security: <MdSecurity />,
    "Loyalty & Rewards": <GiPriceTag  />,
    "Travel Alerts": <FaBell />,
  };

  const handleOpenDialog = (tab) => {
    setSelectedTab(tab);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="py-6">
        <h1 className="text-xl font-semibold mb-6">Explore help articles</h1>
      <div className="grid grid-cols-3 gap-4">
  {categories.map((category, index) => (
    <button
      key={index}
      onClick={() => handleOpenDialog(category)}
      className="flex items-center gap-2 px-4 py-4 text-gray-800 rounded-lg border border-gray-400 focus:outline-none"
    >
      {/* Render the icon */}
      <span className="text-xl">{iconMapping[category]}</span>
      {/* Render the category name */}
      <span className="text-xl font-medium">{category}</span>
    </button>
  ))}
</div>

      <AlertDialog
        isOpen={isDialogOpen}
        title={`Details for ${selectedTab}`}
        details={details}
        selectedTab={selectedTab}
        icon={iconMapping[selectedTab]}
        onClose={handleCloseDialog}
      />
    </div>
  )
}

export default SupportDetail