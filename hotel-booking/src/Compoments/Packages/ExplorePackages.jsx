import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaStar, FaPlane, FaHotel } from "react-icons/fa6";
import { GiAirplaneDeparture } from "react-icons/gi";

const ExplorePackages = () => {
    const packages = [
        {
            name: "ST Signature Bugis Middle + Flight",
            location: "Singapore",
            stars: 2,
            rating: "8.6/10 Excellent (78)",
            route: "Kathmandu (KTM) - Singapore (SIN)",
            discount: "$291 off",
            currentPrice: "$983",
            originalPrice: "$1,274",
            perTraveler: "per traveler",
            dates: "Fri, Jan 17 - Thu, Jan 23 (6 nights)",
            image: "/h1.jpg",
        },
        {
            name: "ST Signature Chinatown + Flight",
            location: "Singapore",
            stars: 2.5,
            rating: "8.2/10 Very Good (83)",
            route: "Kathmandu (KTM) - Singapore (SIN)",
            discount: "$222 off",
            currentPrice: "$867",
            originalPrice: "$1,089",
            perTraveler: "per traveler",
            dates: "Fri, Jan 17 - Thu, Jan 23 (6 nights)",
            image: "/h2.jpg",
        },
        {
            name: "Momentus Hotel Alexandra + Flight",
            location: "Singapore",
            stars: 3.5,
            rating: "8.6/10 Excellent (51)",
            route: "Kathmandu (KTM) - Singapore (SIN)",
            discount: "$295 off",
            currentPrice: "$1,206",
            originalPrice: "$1,501",
            perTraveler: "per traveler",
            dates: "Fri, Jan 17 - Thu, Jan 23 (6 nights)",
            image: "/h3.jpg",
        },
        {
            name: "The Grand Hotel + Flight",
            location: "Tokyo",
            stars: 4,
            rating: "9.0/10 Superb (67)",
            route: "Kathmandu (KTM) - Tokyo (NRT)",
            discount: "$320 off",
            currentPrice: "$1,450",
            originalPrice: "$1,770",
            perTraveler: "per traveler",
            dates: "Thu, Feb 20 - Mon, Feb 24 (4 nights)",
            image: "/h4.jpg",
        },
        {
            name: "Paradise Resort + Flight",
            location: "Maldives",
            stars: 5,
            rating: "9.5/10 Exceptional (89)",
            route: "Kathmandu (KTM) - Malé (MLE)",
            discount: "$500 off",
            currentPrice: "$2,100",
            originalPrice: "$2,600",
            perTraveler: "per traveler",
            dates: "Tue, Mar 5 - Sat, Mar 9 (4 nights)",
            image: "/h5.jpg",
        },
        {
            name: "Skyline Suites + Flight",
            location: "Dubai",
            stars: 4.5,
            rating: "8.8/10 Excellent (73)",
            route: "Kathmandu (KTM) - Dubai (DXB)",
            discount: "$250 off",
            currentPrice: "$1,300",
            originalPrice: "$1,550",
            perTraveler: "per traveler",
            dates: "Sun, Apr 14 - Thu, Apr 18 (4 nights)",
            image: "/h6.jpg",
        },
        {
            name: "Venetian Elegance + Flight",
            location: "Venice",
            stars: 5,
            rating: "9.7/10 Superb (94)",
            route: "Kathmandu (KTM) - Venice (VCE)",
            discount: "$450 off",
            currentPrice: "$2,800",
            originalPrice: "$3,250",
            perTraveler: "per traveler",
            dates: "Wed, May 22 - Sun, May 26 (4 nights)",
            image: "/h7.jpg",
        },
        {
            name: "Beachfront Escape + Flight",
            location: "Hawaii",
            stars: 4.5,
            rating: "9.2/10 Excellent (88)",
            route: "Kathmandu (KTM) - Honolulu (HNL)",
            discount: "$400 off",
            currentPrice: "$2,300",
            originalPrice: "$2,700",
            perTraveler: "per traveler",
            dates: "Mon, Jun 10 - Fri, Jun 14 (4 nights)",
            image: "/h8.jpg",
        },

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
        <div>
            <div className="relative group">
            {/* Left Button */}
            {showPrev && (
                <button
                    onClick={() => handleScroll("left")}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-2 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300 z-10 group-hover:opacity-100 opacity-0"
                >
                    <FaAngleLeft />
                </button>
            )}

            {/* Scrollable Container */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-scroll scrollbar-hide py-4"
            >
                {packages.map((pkg, index) => (
                    <div
                        key={index}
                        className="flex-none w-[18rem] bg-white border rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
                    >
                        <img
                            src={pkg.image}
                            alt={pkg.name}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-md font-semibold text-gray-800">{pkg.name}</h3>
                            <p className="text-sm font-medium text-gray-900 mb-3">{pkg.location}</p>
                            <div className="flex items-center gap-4 my-2">
                                <FaHotel className="text-gray-900" />
                                <span className="text-xs font-medium text-gray-900">{pkg.stars} Stars</span>
                                <span className="text-xs font-medium text-gray-900">· {pkg.rating}</span>
                            </div>
                            <p className="text-xs text-gray-900 font-medium flex items-center gap-3">
                                <GiAirplaneDeparture className="text-gray-900 text-xl" /> {pkg.route}
                            </p>
                            <div className="flex justify-end items-center pt-2">
                                <div>
                                    <div className="flex justify-end">
                                        <button className="bg-green-800 px-2 text-xs rounded-md py-1 text-white font-semibold mt-2">{pkg.discount}</button>
                                    </div>
                                    <div className="flex justify-end items-center gap-1">
                                        <p className="text-xl font-semibold flex justify-start items-center gap-2 text-gray-900">{pkg.currentPrice}</p>
                                        <p className="text-sm line-through font-medium flex justify-start items-center gap-1 text-gray-700">
                                        <div className="w-4">
                                            <svg class="uitk-icon uitk-layout-flex-item uitk-icon-small" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm11-1v6h-2v-6h2zm-1 9a8.01 8.01 0 0 1 0-16 8.01 8.01 0 0 1 0 16zm1-13v2h-2V7h2z" clip-rule="evenodd"></path></svg>
                                            </div>
                                            <span>{pkg.originalPrice}</span>
                                        </p>
                                    </div>
                                    <p className="text-xs text-gray-900 font-medium text-end">{pkg.perTraveler}</p>
                                    <p className="text-xs text-gray-900 font-medium">{pkg.dates}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Button */}
            <button
                onClick={() => handleScroll("right")}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-2 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300 z-10 group-hover:opacity-100 opacity-0"
            >
                <FaAngleRight />
            </button>
        </div>
        <button className="text-md font-semibold text-white bg-blue-600 px-6 py-2 rounded-full">See all packages</button>
        </div>
    );
};

export default ExplorePackages;
