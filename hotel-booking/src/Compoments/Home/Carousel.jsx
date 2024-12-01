import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Carousel = () => {
    const destinations = [
        {
          id: 1,
          title: "Maldives",
          image: "/ca1.jpg",
          hoverImage: "/ca2.jpg",
          hoverText: "Explore Paradise in Maldives",
        },
        {
          id: 2,
          title: "Bali",
          image: "/ca3.jpg",
          hoverImage: "/ca4.jpg",
          hoverText: "Unwind in the Heart of Bali",
        },
        {
          id: 3,
          title: "Santorini",
          image: "/ca5.jpg",
          hoverImage: "/ca6.jpg",
          hoverText: "Experience Luxury in Santorini",
        },
        {
          id: 4,
          title: "Dubai",
          image: "/ca7.jpg",
          hoverImage: "/ca8.jpg",
          hoverText: "Discover Opulence in Dubai",
        },
        {
          id: 5,
          title: "Paris",
          image: "/ca9.jpg",
          hoverImage: "/ca10.jpg",
          hoverText: "Romantic Getaway in Paris",
        },
        {
          id: 6,
          title: "Tokyo",
          image: "/ca2.jpg",
          hoverImage: "/ca1.jpg",
          hoverText: "Explore the Culture of Tokyo",
        },
        {
          id: 7,
          title: "Dubai",
          image: "/ca4.jpg",
          hoverImage: "/ca3.jpg",
          hoverText: "Discover Opulence in Dubai",
        },
        {
          id: 8,
          title: "Paris",
          image: "/ca6.jpg",
          hoverImage: "/ca5.jpg",
          hoverText: "Romantic Getaway in Paris",
        },
        {
          id: 9,
          title: "Tokyo",
          image: "/ca8.jpg",
          hoverImage: "/ca7.jpg",
          hoverText: "Explore the Culture of Tokyo",
        },
        {
          id: 10,
          title: "Dubai",
          image: "/ca10.jpg",
          hoverImage: "/ca9.jpg",
          hoverText: "Discover Opulence in Dubai",
        },
        {
          id: 11,
          title: "Paris",
          image: "/ca4.jpg",
          hoverImage: "/ca1.jpg",
          hoverText: "Romantic Getaway in Paris",
        },
        {
          id: 12,
          title: "Tokyo",
          image: "/ca7.jpg",
          hoverImage: "/ca9.jpg",
          hoverText: "Explore the Culture of Tokyo",
        },
      ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false); // Track button visibility
  const visibleItems = 4;

  const nextSlide = () => {
    if (currentIndex + 1 < destinations.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleMouseEnter = () => setShowButtons(true);
  const handleMouseLeave = () => setShowButtons(false);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-2 text-start px-40 py-3">Popular Destinations for Luxury Hotels</h1>
        <div
      className=" flex flex-col items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Prev Button */}
        {showButtons && currentIndex > 0 && (
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full shadow-md hover:bg-gray-800 z-10"
          >
            <FaAngleLeft />
          </button>
        )}
        {/* Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 overflow-hidden">
          {destinations
            .slice(currentIndex, currentIndex + visibleItems)
            .map((destination) => (
              <div
                key={destination.id}
                className="flex-shrink-0 transition-transform duration-500"
              >
                <div className="group relative">
                  {/* Default Image */}
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:hidden"
                  />
                  {/* Hover Image */}
                  <img
                    src={destination.hoverImage}
                    alt={destination.title}
                    className="w-full h-64 object-cover rounded-lg shadow-lg hidden group-hover:block"
                  />
                  {/* Text */}
                  <div className="absolute bottom-4 left-4 text-white px-4 py-2 rounded-lg">
                    <h2 className="text-md font-semibold group-hover:hidden">
                      {destination.title}
                    </h2>
                    <h2 className="text-md font-semibold hidden group-hover:block">
                      {destination.hoverText}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* Next Button */}
        {showButtons && currentIndex + visibleItems < destinations.length && (
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full shadow-md hover:bg-gray-800 z-10"
          >
            <FaAngleRight />
          </button>
        )}
      </div>
    </div>
    </div>
  );
};

export default Carousel;
