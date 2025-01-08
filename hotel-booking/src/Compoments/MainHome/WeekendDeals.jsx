import React, { useRef, useState, useEffect } from "react";
import { weekendDeals } from "./Data/weekendDeals";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const WeekendDeals = () => {
    const scrollRef = useRef(null);
    const [showPrev, setShowPrev] = useState(false);

    const handleScroll = (direction) => {
        const { current } = scrollRef;
        if (direction === "left") {
            current.scrollBy({ left: -300, behavior: "smooth" });
        } else if (direction === "right") {
            current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const handleScrollEvent = () => {
        const { current } = scrollRef;
        if (current.scrollLeft > 0) {
            setShowPrev(true);
        } else {
            setShowPrev(false);
        }
    };

    useEffect(() => {
        const { current } = scrollRef;
        if (current) {
            current.addEventListener("scroll", handleScrollEvent);
            return () => current.removeEventListener("scroll", handleScrollEvent);
        }
    }, []);

    return (
        <div className="container my-6">
            <h2 className="text-xl md:text-2xl font-bold mb-1 text-gray-800">Last-Minute Weekend Deals</h2>
            <p className="text-gray-600 font-medium text-md mb-2 md:mb-6"><span className="text-sm">Showing deals for</span> : Dec 20 - Dec 22</p>
            <div className="relative group">
                {showPrev && (
                    <button
                        onClick={() => handleScroll("left")}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <FaAngleLeft />
                    </button>
                )}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-scroll scrollbar-hide space-x-4"
                >
                    {weekendDeals.map((deal, index) => (
                        <div
                            key={index}
                            className="min-w-[270px] max-w-[320px] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <DealCard deal={deal} />
                        </div>
                    ))}
                </div>
                <button
                    onClick={() => handleScroll("right")}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <FaAngleRight />
                </button>
            </div>
                    <div className="flex justify-center mt-6">
                    <Link to="" className="text-blue-600 underline font-medium">Sign in for Member Price</Link>
                    </div>
        </div>
    );
};

const DealCard = ({ deal }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % deal.images.length);
    };

    const handlePrev = () => {
        setCurrentImage((prev) =>
            prev === 0 ? deal.images.length - 1 : prev - 1
        );
    };

    return (
        <div className="overflow-hidden">
            <div className="relative h-56 overflow-hidden">
                <img
                    src={deal.images[currentImage]}
                    alt={deal.hotel}
                    className="w-full h-full object-cover"
                />
                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                >
                    <FaAngleLeft />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                >
                    <FaAngleRight />
                </button>
                {deal.access === "VIP Access" && (
                    <p className="absolute top-4 left-4 bg-gray-800 text-white rounded text-xs px-2 py-1 font-medium">
                        {deal.access}
                    </p>
                )}
            </div>
            <div className=" p-4 bg-gray-700 opacity-80 rounded-b-xl">
                <p className="text-xs font-medium text-white">{deal.location}</p>
                <h3 className="text-lg font-semibold text-white">{deal.hotel}</h3>
                <div className="mt-2 flex items-center space-x-1 text-white">
                    <button className="text-white bg-green-600 text-xs font-medium px-2 py-1 rounded">{deal.rating}</button>
                    <span className="text-md text-white font-bold">{deal.reviewText}</span>
                    <span className="text-xs text-white font-medium">({deal.reviews})</span>
                </div>
                <div className="mt-4">
                    <div className="flex justify-start items-center gap-2">
                        <p className="text-white font-bold text-xl">{deal.currentPrice}</p>
                        <p className="text-sm line-through font-medium text-white">{deal.oldPrice}</p>
                    </div>
                    <p className="text-sm text-white">{deal.perNight}</p>
                    <p className="text-sm text-white my-1">{deal.totalPrice}</p>
                    <p className="text-sm text-white">{deal.details}</p>
                    <button
                        className={`text-white font-bold py-2 px-4 rounded mt-2 ${deal.discount.includes("%")
                                ? "bg-green-600 hover:bg-green-700"
                                : deal.discount.toLowerCase() === "membership"
                                    ? "bg-blue-600 hover:bg-blue-700"
                                    : "bg-blue-600 hover:bg-blue-700"
                            }`}
                    >
                        {deal.discount}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WeekendDeals;
