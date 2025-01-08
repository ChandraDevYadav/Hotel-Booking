import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const DiscoverStay = () => {
  const stays = [
    { title: "Spa", image: "/h1.jpg", hoverImage: "/ca1.jpg" },
    { title: "Resort", image: "/h2.jpg", hoverImage: "/ca2.jpg" },
    { title: "Cabin", image: "/h3.jpg", hoverImage: "/ca3.jpg" },
    { title: "Hot Tub", image: "/h4.jpg", hoverImage: "/ca4.jpg" },
    { title: "Pet Friendly", image: "/h5.jpg", hoverImage: "/ca5.jpg" },
    { title: "Castle", image: "/h6.jpg", hoverImage: "/ca6.jpg" },
    { title: "Ocean View", image: "/h7.jpg", hoverImage: "/ca7.jpg" },
    { title: "Chalet", image: "/h8.jpg", hoverImage: "/ca8.jpg" },
    { title: "Condo", image: "/h9.jpg", hoverImage: "/ca9.jpg" },
    { title: "Cottage", image: "/h10.jpg", hoverImage: "/ca10.jpg" },
  ];

  const scrollRef = useRef(null);
  const [showPrev, setShowPrev] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current.scrollLeft > 0) {
        setShowPrev(true);
      } else {
        setShowPrev(false);
      }
    };

    const scrollElement = scrollRef.current;
    scrollElement.addEventListener("scroll", handleScroll);

    return () => {
      scrollElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (direction) => {
    const scrollAmount = 300;

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
        {stays.map((stay, index) => (
          <div
            key={index}
            className="flex-none w-32 md:w-64 bg-white border rounded-xl overflow-hidden hover:shadow-sm transition-shadow duration-300 relative"
          >
            <div className="relative">
              <img
                src={stay.image}
                alt={stay.title}
                className="w-full h-40 object-fill transition duration-500"
              />
              <img
                src={stay.hoverImage}
                alt={stay.title}
                className="absolute inset-0 w-full h-full object-fill opacity-0 hover:opacity-100 transition duration-500"
              />
            </div>
            <div className="p-2 md:p-4">
              <h3 className="text-md font-semibold text-gray-800">
                {stay.title}
              </h3>
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

export default DiscoverStay;
