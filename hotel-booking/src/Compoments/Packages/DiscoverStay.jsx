import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const DiscoverStay = () => {
  const stays = [
    { title: 'Culture', image: '/h1.jpg', hoverImage: '/ca1.jpg' },
    { title: 'Nature', image: '/h2.jpg', hoverImage: '/ca2.jpg' },
    { title: 'Adventure', image: '/h3.jpg', hoverImage: '/ca3.jpg' },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
  const visibleStays = stays.slice(startIndex, startIndex + visibleCount);

  const handleLeft = () => setStartIndex((prev) => Math.max(prev - 1, 0));
  const handleRight = () =>
    setStartIndex((prev) => Math.min(prev + 1, stays.length - visibleCount));

  return (
    <div className="relative w-full pb-6">
      {/* Visible stays */}
      <div className="grid grid-cols-3 gap-4">
        {visibleStays.map((stay, index) => (
          <div
            key={index}
            className=" relative group rounded-lg shadow-lg"
          >
            {/* Background image */}
            <div className="relative">
              <img
                src={stay.image}
                alt={stay.title}
                className="w-full h-52 object-cover transition duration-500 group-hover:opacity-0 rounded-lg"
              />
              <img
                src={stay.hoverImage}
                alt={stay.title}
                className="absolute inset-0 w-full h-full rounded-lg object-cover opacity-0 transition duration-500 group-hover:opacity-100"
              />
            </div>

            {/* Left navigation button */}
            {index === 0 && startIndex > 0 && (
              <button
                onClick={handleLeft}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 hover:bg-opacity-80 transition"
              >
                <FaAngleLeft/>
              </button>
            )}

            {/* Right navigation button */}
            {index === visibleStays.length - 1 &&
              startIndex + visibleCount < stays.length && (
                <button
                  onClick={handleRight}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 hover:bg-opacity-80 transition"
                >
                  <FaAngleRight/>
                </button>
              )}

            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 right-0 text-white text-start py-2 px-2 text-sm font-semibold opacity-100 group-hover:opacity-100 transition duration-500">
              {stay.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverStay;
