import React, { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"; // Import necessary icons
// import { reviewAds } from "./reviewAds"; // Import reviewAds
import { reviewAds } from "../../Data/reviewAds";

const ReviewCarousel = () => {
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
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-12 px-4">
            <div>
                <p className="text-5xl text-green-800 font-medium">9.0/10</p>
                <p className="text-lg font-medium mt-2">Wonderful</p>
                <div className="flex justify-start items-center gap-1 mt-2">
                    <p className="text-sm font-medium">16,593 verified reviews</p>
                    <div className="text-green-700 w-4 h-4">
                    <svg class="uitk-icon uitk-more-info-trigger-icon uitk-more-info-trigger-icon-theme-default uitk-icon-small" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm11-1v6h-2v-6h2zm-1 9a8.01 8.01 0 0 1 0-16 8.01 8.01 0 0 1 0 16zm1-13v2h-2V7h2z" clip-rule="evenodd"></path></svg>
                    </div>
                </div>
            </div>
            <div className="col-span-2">
            <h1 className="text-xl font-bold mb-4 mt-2">Recent Reviews</h1>
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
                    <FaAngleRight />
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
                    {reviewAds.map((review) => (
                        <div
                            key={review.id}
                            className="min-w-[300px] border bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {review.score}
                                </h2>
                                <p className="text-sm text-gray-600 mt-2">{review.summary}</p>
                                <div className="mt-4">
                                    <p className="text-sm font-medium text-gray-800">
                                        {review.reviewer}
                                    </p>
                                    <p className="text-xs text-gray-500">{review.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-start items-center mt-6">
            <button className="text-md font-semibold text-blue-600 px-6 py-3 border border-blue-600 rounded-full">See all 16,593 reviews</button>
        </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-6">
            <p className="text-sm font-medium">Tell us how we can improve our site</p>
            <button className="border border-black rounded-full px-6 py-1 font-medium text-blue-600 mt-4">Share feedback</button>
        </div>
        </div>
    );
};

export default ReviewCarousel;
