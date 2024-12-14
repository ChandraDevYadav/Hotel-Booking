import React, { useRef, useState } from "react";
import { roomAds } from "./roomAds "
import { MdBrunchDining, MdFreeBreakfast, MdNightlife, MdOutlineCasino, MdOutlinePool, MdPets } from "react-icons/md";
import { FaAngleLeft, FaAngleRight, FaHotTub, FaParking, FaShuttleVan, FaSpa, FaWifi } from "react-icons/fa";
import { IoMdFitness, IoMdRestaurant } from "react-icons/io";
import { TbAirConditioning } from "react-icons/tb";
// import { LuCircleParking } from "react-icons/lu";




const RoomCarousel = () => {
  const scrollContainerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Card width (same as the `min-w-[300px]` in Tailwind CSS)
  const cardWidth = 300 + 24; // Card width + gap between cards (gap-6 = 24px)

  // Scroll Left: Move 3 cards to the left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -cardWidth * 3, // Move 3 cards left
        behavior: "smooth",
      });
      checkScrollPosition();
    }
  };

  // Scroll Right: Move 3 cards to the right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: cardWidth * 3, // Move 3 cards right
        behavior: "smooth",
      });
      setIsScrolled(true); // Ensure Prev button is shown after clicking Next
    }
  };

  // Check Scroll Position to toggle the "Prev" button visibility
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      setIsScrolled(scrollContainerRef.current.scrollLeft > 0);
    }
  };

  // Icon mapping for features
  const featureIcons = {
    "Pool": <MdOutlinePool />,
    "Free WiFi": <FaWifi />,
    "Restaurant": <IoMdRestaurant />,
    "Air conditioning": <TbAirConditioning />,
    "Breakfast included": <MdFreeBreakfast />,
    "Spa": <FaSpa />,
    "Pet friendly": <MdPets />,
    "Free parking": <FaParking />, // Using FaParking for Parking
    "Free airport shuttle": <FaShuttleVan />,
    "Hot Tub": <FaHotTub />,
    "Fine dining": <MdBrunchDining />,
    "Nightclub": <MdNightlife />,
    "Fitness Center": <IoMdFitness />,
    "Casino": <MdOutlineCasino />,
  };

  return (
    <div className="container mx-auto border-b">
      <h1 className="text-2xl font-semibold my-4">You may also like</h1>
      <div className="relative">
        {/* Scroll Buttons */}
        {isScrolled && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-700 rounded-full p-2 shadow-md hover:bg-gray-300 z-10"
          >
            <FaAngleLeft/>
          </button>
        )}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-700 rounded-full p-2 shadow-md hover:bg-gray-300 z-10"
        >
          <FaAngleRight/>
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-hidden whitespace-nowrap flex gap-6"
          style={{
            marginRight: "-5%", // Adjust so part of the fourth card is visible
            paddingRight: "5%",
          }}
          onScroll={checkScrollPosition}
        >
          {roomAds.map((room, index) => (
            <div
              key={room.id}
              className={`min-w-[300px] bg-white shadow-md border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ${index === roomAds.length - 1 ? "mr-[5%]" : ""}`}
            >
              <img
                src={room.images[0]}
                alt={room.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{room.title}</h2>
                <div className="flex flex-col text-sm mb-2">
                  <p className="text-gray-700 font-medium">{room.location}</p>
                  <p className="text-gray-700 mt-3">
                    <ul className="">
                      {room.features.map((feature, index) => (
                        <li key={index} className="text-xs font-medium mb-1 flex items-center gap-2">
                          {featureIcons[feature]} {feature}
                        </li>
                      ))}
                    </ul>
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <span className="text-white bg-green-800 rounded font-medium text-xs px-2 py-1">{room.rating}</span>
                  <div>
                  <p className="text-gray-800 font-semibold">{room.ratingText}</p>
                  <p className="text-gray-600 font-medium">{room.reviews} reviews</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-end items-center gap-1">
                    <span className="line-through text-gray-700 text-sm font-medium">
                      {room.priceDetails.originalPrice}
                    </span>
                    <p className="text-gray-800 font-bold text-lg">{room.priceDetails.currentPrice}</p>
                  </div>
                  <p className="text-gray-700 font-medium text-xs text-end">
                    {room.priceDetails.perNight}
                  </p>
                  <p className="text-gray-700 font-medium text-xs text-end">
                    {room.priceDetails.totalPrice}
                  </p>
                  <p className="text-gray-700 font-medium text-xs text-end">
                    {room.priceDetails.includes}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomCarousel;
