import React, { useRef, useState } from "react";
import { MdOutlinePool, MdPets } from "react-icons/md";
import { FaWifi, FaParking, FaShuttleVan, FaHotTub, FaHeart, FaRegHeart } from "react-icons/fa";
import { IoMdRestaurant, IoMdFitness } from "react-icons/io";
import { TbAirConditioning } from "react-icons/tb";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaSpa } from "react-icons/fa6";

// Define feature icons
const featureIcons = {
  "Pool": <MdOutlinePool />,
  "Free WiFi": <FaWifi />,
  "Restaurant": <IoMdRestaurant />,
  "Air conditioning": <TbAirConditioning />,
  "Spa": <FaSpa />,
  "Pet friendly": <MdPets />,
  "Free parking": <FaParking />,
  "Free airport shuttle": <FaShuttleVan />,
  "Fitness Center": <IoMdFitness />,
  "Hot Tub": <FaHotTub />,
};

// Example SimilarResortsData
const SimilarResortsData = [
    {
      id: 1,
      title: "The Palazzo at The Venetian",
      location: "Las Vegas Strip",
      images: ["/h1.jpg"],
      features: ["Pool", "Hot Tub", "Spa"],
      rating: 9.2,
      ratingText: "Wonderful",
      reviews: 7458,
      priceDetails: {
        originalPrice: "$212",
        currentPrice: "$170",
        perNight: "per night",
        totalPrice: "$249 for 1 night",
        includes: "Includes taxes and fees",
      },
    },
    {
      id: 2,
      title: "Bellagio",
      location: "Las Vegas Strip",
      images: ["/h2.jpg"],
      features: ["Pool", "Hot Tub", "Spa"],
      rating: 8.8,
      ratingText: "Excellent",
      reviews: 10990,
      priceDetails: {
        originalPrice: "$189",
        currentPrice: "$151",
        perNight: "per night",
        totalPrice: "$234 for 1 night",
        includes: "Includes taxes and fees",
      },
    },
    {
      id: 3,
      title: "Wynn Las Vegas",
      location: "Las Vegas Strip",
      images: ["/h3.jpg"],
      features: ["Pool", "Hot Tub", "Spa"],
      rating: 9.2,
      ratingText: "Wonderful",
      reviews: 9517,
      priceDetails: {
        originalPrice: "$229",
        currentPrice: "$192",
        perNight: "per night",
        totalPrice: "$275 for 1 night",
        includes: "Includes taxes and fees",
      },
    },
    {
      id: 4,
      title: "Treasure Island - TI Las Vegas Hotel Casino",
      location: "Las Vegas Strip",
      images: ["/h4.jpg"],
      features: ["Pool", "Hot Tub", "Spa"],
      rating: 8.4,
      ratingText: "Very Good",
      reviews: 26428,
      priceDetails: {
        originalPrice: "$50",
        currentPrice: "$35",
        perNight: "per night",
        totalPrice: "$96 for 1 night",
        includes: "Includes taxes and fees",
      },
    },
    {
      id: 5,
      title: "Paris Las Vegas Resort & Casino",
      location: "Las Vegas Strip",
      images: ["/h5.jpg"],
      features: ["Pool", "Hot Tub", "Spa"],
      rating: 7.8,
      ratingText: "Good",
      reviews: 20390,
      priceDetails: {
        originalPrice: "$52",
        currentPrice: "$42",
        perNight: "per night",
        totalPrice: "$104 for 1 night",
        includes: "Includes taxes and fees",
      },
    },
    {
      id: 6,
      title: "The Cosmopolitan Of Las Vegas",
      location: "Las Vegas Strip",
      images: ["/h6.jpg"],
      features: ["Pool", "Hot Tub", "Spa"],
      rating: 8.8,
      ratingText: "Excellent",
      reviews: 8328,
      priceDetails: {
        originalPrice: "$170",
        currentPrice: "$136",
        perNight: "per night",
        totalPrice: "$217 for 1 night",
        includes: "Includes taxes and fees",
      },
    },
    {
      id: 7,
      title: "ARIA Resort & Casino",
      location: "Las Vegas Strip",
      images: ["/h7.jpg"],
      features: ["Pool", "Hot Tub", "Spa"],
      rating: 8.6,
      ratingText: "Excellent",
      reviews: 7856,
      priceDetails: {
        originalPrice: "$145",
        currentPrice: "$116",
        perNight: "per night",
        totalPrice: "$194 for 1 night",
        includes: "Includes taxes and fees",
      },
    },
    {
      id: 8,
      title: "MGM Grand Hotel & Casino",
      location: "Las Vegas Strip",
      images: ["/h8.jpg"],
      features: ["Pool", "Hot Tub", "Spa"],
      rating: 8.0,
      ratingText: "Very Good",
      reviews: 15643,
      priceDetails: {
        originalPrice: "$50",
        currentPrice: "$40",
        perNight: "per night",
        totalPrice: "$102 for 1 night",
        includes: "Includes taxes and fees",
      },
    },
    {
      id: 9,
      title: "Caesars Palace",
      location: "Las Vegas Strip",
      images: ["/h9.jpg"],
      features: ["Pool", "Hot Tub", "Spa"],
      rating: 7.6,
      ratingText: "Good",
      reviews: 10970,
      priceDetails: {
        originalPrice: "$153",
        currentPrice: "$100",
        perNight: "per night",
        totalPrice: "$170 for 1 night",
        includes: "Includes taxes and fees",
      },
    },
    {
      id: 10,
      title: "Fontainebleau Las Vegas",
      location: "Las Vegas Strip",
      images: ["/h10.jpg"],
      features: ["Pool", "Spa", "Free WiFi"],
      rating: 9.4,
      ratingText: "Exceptional",
      reviews: 6880,
      priceDetails: {
        originalPrice: "$190",
        currentPrice: "$152",
        perNight: "per night",
        totalPrice: "$223 for 1 night",
        includes: "Includes taxes and fees",
      },
    },
  ];
  


const SimilarResortsCarousel = () => {
  const scrollContainerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const cardWidth = 300 + 24; // Card width + gap between cards (gap-6 = 24px)

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
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-semibold my-4">You may also like</h1>
      <div className="relative">
        {isScrolled && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-700 rounded-full p-2 shadow-md hover:bg-gray-300 z-10"
          >
            <FaAngleLeft />
          </button>
        )}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-700 rounded-full p-2 shadow-md hover:bg-gray-300 z-10"
        >
          <FaAngleRight />
        </button>

        <div
          ref={scrollContainerRef}
          className="overflow-hidden whitespace-nowrap flex gap-6"
          onScroll={checkScrollPosition}
          style={{ marginRight: "-5%", paddingRight: "5%" }}
        >
          {SimilarResortsData.map((resort, index) => (
            <div
              key={resort.id}
              className={`min-w-[230px] bg-white shadow-md border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                index === SimilarResortsData.length - 1 ? "mr-[5%]" : ""
              }`}
            >
              <div className="relative">
              <img
                src={resort.images[0]}
                alt={resort.title}
                className="w-full h-40 object-cover"
              />
              <div className="absolute top-2 right-2 bg-white p-1 rounded-full">
                <FaRegHeart className="text-red-600"/>
              </div>
              </div>
              <div className="pl-2 pr-4 pt-4">
              <h2 className="text-md text-gray-700 font-semibold">
                                    {resort.title
                                        .match(/.{1,27}/g) // Split the string into chunks of 20 characters
                                        .map((chunk, index) => (
                                            <React.Fragment key={index}>
                                                {chunk}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                </h2>
                <div className="flex flex-col text-sm my-2">
                  <p className="text-gray-700 font-medium">{resort.location}</p>
                  <p className="text-gray-700 mt-3">
                    <ul>
                      {resort.features.map((feature, index) => (
                        <li
                          key={index}
                          className="text-xs font-medium mb-1 flex items-center gap-2"
                        >
                          {featureIcons[feature]} {feature}
                        </li>
                      ))}
                    </ul>
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <span className="text-white bg-green-800 rounded font-medium text-xs px-2 py-1">
                    {resort.rating}
                  </span>
                  <div>
                    <p className="text-gray-800 font-semibold">{resort.ratingText}</p>
                    <p className="text-gray-600 font-medium">{resort.reviews} reviews</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-end items-center gap-1">
                    <span className="line-through text-gray-700 text-sm font-medium">
                      {resort.priceDetails.originalPrice}
                    </span>
                    <p className="text-gray-800 font-bold text-lg">
                      {resort.priceDetails.currentPrice}
                    </p>
                  </div>
                  <p className="text-gray-700 font-medium text-xs text-end">
                    {resort.priceDetails.perNight}
                  </p>
                  <p className="text-gray-700 font-medium text-xs text-end">
                    {resort.priceDetails.totalPrice}
                  </p>
                  <p className="text-gray-700 font-medium text-xs text-end">
                    {resort.priceDetails.includes}
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

export default SimilarResortsCarousel;
