import React, { useRef, useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight, FaHotel } from "react-icons/fa6";

const travelData = [
    {
      title: "Stays in Kathmandu",
      dateRange: "Mon, Dec 16 – Wed, Dec 18",
      details: "1 traveler • 1 room",
      description: "Stays in Kathmandu, from Mon, Dec 16 to Wed, Dec 18, for 1 traveler, 1 room",
    },
    {
      title: "Things to do in Las Vegas",
      dateRange: "Wed, Dec 18 – Thu, Dec 19",
      description: "Things to do in Las Vegas, from Wed, Dec 18 to Thu, Dec 19",
    },
    {
      title: "Stays in Las Vegas",
      dateRange: "Wed, Dec 18 – Thu, Dec 19",
      details: "2 travelers • 1 room",
      description: "Stays in Las Vegas, from Wed, Dec 18 to Thu, Dec 19, for 2 travelers, 1 room",
    },
    {
      title: "Stays in Orlando",
      dateRange: "Wed, Dec 18 – Thu, Dec 19",
      details: "2 travelers • 1 room",
      description: "Stays in Orlando, from Wed, Dec 18 to Thu, Dec 19, for 2 travelers, 1 room",
    },
    {
      title: "Stays in Cairns",
      dateRange: "Tue, Dec 17 – Wed, Dec 18",
      details: "2 travelers • 1 room",
      description: "Stays in Cairns, from Tue, Dec 17 to Wed, Dec 18, for 2 travelers, 1 room",
    },
    {
      title: "Stays in Edinburgh",
      dateRange: "Tue, Dec 17 – Wed, Dec 18",
      details: "2 travelers • 1 room",
      description: "Stays in Edinburgh, from Tue, Dec 17 to Wed, Dec 18, for 2 travelers, 1 room",
    },
  ];

const TravelCard = () => {
  const scrollContainer = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateButtonVisibility = () => {
      if (scrollContainer.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
        setShowLeftButton(scrollLeft > 0);
        setShowRightButton(scrollLeft + clientWidth < scrollWidth);
      }
    };

    const container = scrollContainer.current;
    container.addEventListener("scroll", updateButtonVisibility);

    return () => container.removeEventListener("scroll", updateButtonVisibility);
  }, []);

  const handleScroll = (direction) => {
    const scrollAmount = 300; // Adjust scroll distance
    if (direction === "left") {
      scrollContainer.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    } else if (direction === "right") {
      scrollContainer.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="">
      <h1 className="text-3xl font-semibold mb-6">Your recent searches</h1>
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Scroll Button */}
        {isHovered && showLeftButton && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 hover:bg-gray-200 p-2 rounded-full shadow-lg z-10"
          >
            <FaAngleLeft />
          </button>
        )}

        {/* Right Scroll Button */}
        {isHovered && showRightButton && (
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 hover:bg-gray-200 p-2 rounded-full shadow-lg z-10"
          >
            <FaAngleRight />
          </button>
        )}

        {/* Horizontal Scrollable List */}
        <div
          ref={scrollContainer}
          className="flex w-full overflow-x-scroll scrollbar-hide scroll-smooth space-x-4 pb-6"
        >
          {travelData.map((item, index) => (
            <div
              key={index}
              className="flex justify-start items-center flex-shrink-0 w-[17.3rem] gap-4 bg-[#eff3f7] rounded-xl px-6 py-4 border border-gray-300 hover:shadow-md transition"
            >
                <div>
                    <FaHotel className="text-xl"/>
                </div>
              <div>
              <h2 className="text-md font-bold text-gray-800">{item.title}</h2>
              <p className="text-sm text-gray-800 mb-1">{item.dateRange}</p>
              {item.details && (
                <p className="text-sm text-gray-800 font-medium">{item.details}</p>
              )}
              </div>
              {/* <p className="text-sm text-gray-700">{item.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
