import React, { useState } from "react";
import RoomList from "./RoomList";

const roomData = [
  {
    id: 1,
    title: "Luxury Room, 1 King Bed",
    rating: 9.2,
    ratingText: "Wonderful",
    reviews: 197,
    sleeps: 4,
    bedType: "1 King Bed",
    refundPolicy: "Fully refundable",
    refundDate: "Before Sun, Dec 15",
    priceDetails: {
      discount: "$42 off",
      currentPrice: "$170",
      originalPrice: "$212",
      totalPrice: "$249",
      includes: "includes taxes & fees",
    },
    reservationNote: "You will not be charged yet",
    images: ["/h1.jpg", "/h2.jpg", "/h3.jpg"],
  },
  {
    id: 2,
    title: "Deluxe Room, 2 Queen Beds",
    rating: 8.5,
    ratingText: "Very Good",
    reviews: 150,
    sleeps: 6,
    bedType: "2 Queen Beds",
    refundPolicy: "Fully refundable",
    refundDate: "Before Fri, Dec 20",
    priceDetails: {
      discount: "$30 off",
      currentPrice: "$180",
      originalPrice: "$210",
      totalPrice: "$240",
      includes: "includes taxes & fees",
    },
    reservationNote: "You will not be charged yet",
    images: ["/h4.jpg", "/h5.jpg", "/h6.jpg"],
  },
  // Other room objects...
];

const RoomFilter = () => {
  const [selectedBedType, setSelectedBedType] = useState("all");

  // Filter rooms based on selected bed type
  const filteredRooms = roomData.filter((room) =>
    selectedBedType === "all" ? true : room.bedType === selectedBedType
  );

  return (
    <div>
      {/* Filter Buttons */}
      <div className="mb-4">
        <button
          onClick={() => setSelectedBedType("all")}
          className="bg-blue-500 text-white p-2 rounded mr-2"
        >
          All Rooms
        </button>
        <button
          onClick={() => setSelectedBedType("1 King Bed")}
          className="bg-blue-500 text-white p-2 rounded mr-2"
        >
          1 Bed
        </button>
        <button
          onClick={() => setSelectedBedType("2 Queen Beds")}
          className="bg-blue-500 text-white p-2 rounded"
        >
          2 Beds
        </button>
      </div>

      {/* Display Filtered Rooms */}
      <RoomList roomData={filteredRooms} />
    </div>
  );
};

export default RoomFilter;
