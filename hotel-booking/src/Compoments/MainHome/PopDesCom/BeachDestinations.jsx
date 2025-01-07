import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const BeachDestinations = () => {
  const beachDestinations = [
    {
      name: "Bangkok",
      location: "Bangkok Province, Thailand",
      description:
        "Trekking in Upper Mustang usually begins in this airport. This flight has just arrived from Pokhara. The mountain on the background is Nilgiri.",
      image: "/be1.jpg",
    },
    {
      name: "Jomsom",
      location: "Gandaki, Nepal",
      description:
        "A beautiful town surrounded by breathtaking Himalayan scenery.",
      image: "/be2.jpg",
    },
    {
      name: "Phuket",
      location: "Phuket Province, Thailand",
      description:
        "A tropical paradise with stunning beaches and vibrant nightlife.",
      image: "/be3.jpg",
    },
    {
      name: "Mumbai",
      location: "Maharashtra, India",
      description:
        "A bustling city known for its iconic Marine Drive and vibrant culture.",
      image: "/be4.jpg",
    },
    {
      name: "Pattaya",
      location: "Chonburi Province, Thailand",
      description:
        "A popular beach destination with a lively atmosphere and beautiful coastline.",
      image: "/be5.jpg",
    },
    {
      name: "Krabi",
      location: "Krabi Province, Thailand",
      description:
        "Famous for its stunning limestone cliffs and clear turquoise waters.",
      image: "/be6.jpg",
    },
    {
      name: "Patong",
      location: "Phuket Province, Thailand",
      description: "Known for its bustling nightlife and pristine beaches.",
      image: "/be7.jpg",
    },
    {
      name: "Colombo",
      location: "Western Province, Sri Lanka",
      description:
        "A blend of heritage elements and beautiful sunsets over the ocean.",
      image: "/be8.jpg",
    },
    {
      name: "Cancun",
      location: "Quintana Roo, Mexico",
      description:
        "A tropical haven with white sandy beaches and crystal-clear waters.",
      image: "/be9.jpg",
    },
  ];

  const scrollRef = useRef(null);
  const [showPrev, setShowPrev] = useState(false); // Tracks whether to show the "Prev" button

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled from the start
      if (scrollRef.current.scrollLeft > 0) {
        setShowPrev(true);
      } else {
        setShowPrev(false);
      }
    };

    const scrollElement = scrollRef.current;
    scrollElement.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      scrollElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (direction) => {
    const scrollAmount = 300; // Adjust the scroll distance as needed

    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* Left Button */}
      {showPrev && (
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-2 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300 z-10"
        >
          <FaAngleLeft />
        </button>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll scrollbar-hide py-4"
      >
        {beachDestinations.map((destination, index) => (
          <div
            key={index}
            className="flex-none w-64 bg-white border rounded-xl overflow-hidden hover:shadow-sm transition-shadow duration-300"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md font-semibold text-gray-800">
                {destination.name}
              </h3>
              <p className="text-md text-gray-700">{destination.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={() => handleScroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-2 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300 z-10"
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default BeachDestinations;
