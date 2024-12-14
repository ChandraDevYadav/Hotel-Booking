import React, { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa"; // Import necessary icons
import { attractionAds } from "./attractionAds ";

const AttractionCarousel = () => {
    const scrollContainerRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const cardWidth = 300 + 24;

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -cardWidth * 3,
                behavior: "smooth",
            });
            checkScrollPosition();
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: cardWidth * 3,
                behavior: "smooth",
            });
            setIsScrolled(true);
        }
    };

    const checkScrollPosition = () => {
        if (scrollContainerRef.current) {
            setIsScrolled(scrollContainerRef.current.scrollLeft > 0);
        }
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-xl font-bold mb-4 mt-2">126 popular things to do nearby</h1>
            <div className="relative">
                {isScrolled && (
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-blue-600 bg-white rounded-full p-2 shadow-md hover:bg-gray-300 z-10"
                    >
                        <FaAngleLeft />
                    </button>
                )}
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-blue-600 bg-white rounded-full p-2 shadow-md hover:bg-gray-300 z-10"
                >
                    <FaAngleRight/>
                </button>

                <div
                    ref={scrollContainerRef}
                    className="overflow-hidden whitespace-nowrap flex gap-4"
                    style={{
                        marginRight: "-5%",
                        paddingRight: "5%",
                    }}
                    onScroll={checkScrollPosition}
                >
                    {attractionAds.map((attraction, index) => (
                        <div
                            key={attraction.id}
                            className={`min-w-[230px] border bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ${index === attractionAds.length - 1 ? "mr-[5%]" : ""}`}
                        >
                            <img
                                src={attraction.imageUrl}
                                alt={attraction.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-2">
                                <h2 className="text-sm text-gray-700 font-semibold">
                                    {attraction.title
                                        .match(/.{1,27}/g) // Split the string into chunks of 20 characters
                                        .map((chunk, index) => (
                                            <React.Fragment key={index}>
                                                {chunk}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                </h2>
                                <p className="text-xs font-medium text-gray-600">{attraction.distance}</p>
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="text-gray-700 text-md font-bold">
                                        {attraction.rating}
                                    </span>
                                    <span className="text-gray-600 font-medium">{attraction.reviews}</span>
                                </div>
                                <div className="flex flex-col text-sm mb-2">
                                    <p className="text-gray-700">{attraction.location}</p>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-end items-center gap-1">
                                        {attraction.priceDetails.originalPrice && (
                                            <span className="line-through text-gray-700 text-sm font-medium">
                                                {attraction.priceDetails.originalPrice}
                                            </span>
                                        )}
                                        <p className="text-gray-800 font-bold text-3xl">
                                            {attraction.priceDetails.currentPrice}
                                        </p>
                                    </div>
                                    <p className="text-gray-500 font-medium text-xs text-end">
                                        {attraction.priceDetails.perAdult}
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

export default AttractionCarousel;
