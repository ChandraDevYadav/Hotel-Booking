import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaHotel, FaStar } from "react-icons/fa6";

const ExplorePackages = () => {
  const packages = [
    {
        name: "Hotel Sarowar + Flight",
        location: "Pokhara",
        stars: 4,
        rating: "8/10 Very Good (21)",
        route: "Kathmandu (KTM)",
        discount: "$105 off",
        currentPrice: "$568",
        originalPrice: "$673",
        perTraveler: "per traveler",
        dates: "Wed, Feb 12 - Fri, Feb 14 (2 nights)",
        image: "/h1.jpg",
      },
      {
        name: "Marina Bay Sands + Flight",
        location: "Singapore",
        stars: 5,
        rating: "9/10 Excellent (52)",
        route: "Singapore (SIN)",
        discount: "$200 off",
        currentPrice: "$1,200",
        originalPrice: "$1,400",
        perTraveler: "per traveler",
        dates: "Sat, Mar 10 - Tue, Mar 13 (3 nights)",
        image: "/h2.jpg",
      },
      {
        name: "Jetwing Blue + Flight",
        location: "Colombo",
        stars: 5,
        rating: "8.5/10 Very Good (34)",
        route: "Colombo (CMB)",
        discount: "$150 off",
        currentPrice: "$850",
        originalPrice: "$1,000",
        perTraveler: "per traveler",
        dates: "Fri, Apr 20 - Sun, Apr 22 (2 nights)",
        image: "/h3.jpg",
      },
      {
        name: "Bali Resort + Flight",
        location: "Bali",
        stars: 5,
        rating: "9.5/10 Exceptional (45)",
        route: "Denpasar (DPS)",
        discount: "$300 off",
        currentPrice: "$1,000",
        originalPrice: "$1,300",
        perTraveler: "per traveler",
        dates: "Thu, May 15 - Sun, May 18 (3 nights)",
        image: "/h4.jpg",
      },
      {
        name: "The Somerset Hotel + Flight",
        location: "Malé",
        stars: 4,
        rating: "8.7/10 Excellent (29)",
        route: "Malé (MLE)",
        discount: "$120 off",
        currentPrice: "$920",
        originalPrice: "$1,040",
        perTraveler: "per traveler",
        dates: "Mon, Jun 5 - Wed, Jun 7 (2 nights)",
        image: "/h5.jpg",
      },
      {
        name: "Hilton Dubai + Flight",
        location: "Dubai",
        stars: 5,
        rating: "9.2/10 Superb (50)",
        route: "Dubai (DXB)",
        discount: "$250 off",
        currentPrice: "$1,150",
        originalPrice: "$1,400",
        perTraveler: "per traveler",
        dates: "Tue, Jul 10 - Fri, Jul 13 (3 nights)",
        image: "/h6.jpg",
      },
      {
        name: "The Ritz-Carlton + Flight",
        location: "New York",
        stars: 5,
        rating: "9.6/10 Exceptional (62)",
        route: "New York (JFK)",
        discount: "$400 off",
        currentPrice: "$2,500",
        originalPrice: "$2,900",
        perTraveler: "per traveler",
        dates: "Thu, Aug 20 - Sun, Aug 23 (3 nights)",
        image: "/h7.jpg",
      },
      {
        name: "Sheraton Grand + Flight",
        location: "Bangkok",
        stars: 4,
        rating: "8.8/10 Excellent (40)",
        route: "Bangkok (BKK)",
        discount: "$180 off",
        currentPrice: "$890",
        originalPrice: "$1,070",
        perTraveler: "per traveler",
        dates: "Mon, Sep 14 - Wed, Sep 16 (2 nights)",
        image: "/h8.jpg",
      },
      {
        name: "Hyatt Regency + Flight",
        location: "Tokyo",
        stars: 5,
        rating: "9.1/10 Superb (38)",
        route: "Tokyo (NRT)",
        discount: "$300 off",
        currentPrice: "$1,700",
        originalPrice: "$2,000",
        perTraveler: "per traveler",
        dates: "Fri, Oct 2 - Sun, Oct 4 (2 nights)",
        image: "/h9.jpg",
      },
      {
        name: "Four Seasons + Flight",
        location: "Paris",
        stars: 5,
        rating: "9.8/10 Exceptional (75)",
        route: "Paris (CDG)",
        discount: "$500 off",
        currentPrice: "$3,000",
        originalPrice: "$3,500",
        perTraveler: "per traveler",
        dates: "Mon, Nov 16 - Thu, Nov 19 (3 nights)",
        image: "/h10.jpg",
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
            className="flex-none w-[17rem] bg-white border border-b-0 rounded-xl overflow-hidden hover:shadow-sm transition-shadow duration-300"
          >
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md font-semibold text-gray-800">{pkg.name}</h3>
              <p className="text-sm text-gray-700">{pkg.location}</p>
              <div className="flex justify-start items-center gap-2">
                <p><FaStar/></p>
              <p className="text-xs text-gray-700">{pkg.stars} Stars</p>
              <p className="text-sm text-gray-700">{pkg.rating}</p>
              </div>
              <p className="text- text-gray-600 flex justify-start items-center gap-2"><FaHotel/>{pkg.route}</p>
              <p className="text-green-500 font-semibold">{pkg.discount}</p>
              <p className="text-md text-black font-bold">{pkg.currentPrice}</p>
              <p className="text-sm line-through text-gray-400">
                {pkg.originalPrice}
              </p>
              <p className="text-sm text-gray-600">{pkg.perTraveler}</p>
              <p className="text-sm text-gray-500">{pkg.dates}</p>
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
  );
};

export default ExplorePackages;
