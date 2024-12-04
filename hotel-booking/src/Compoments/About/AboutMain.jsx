import React, { useState } from "react";
import {
  BsFillTreeFill,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import {
  FaSwimmer,
  FaWifi,
  FaUtensils,
  FaDog,
  FaUmbrellaBeach,
  FaCocktail,
  FaSpa,
  FaParking,
  FaRegHeart,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";
import {
  GiPathDistance,
  GiFireplace,
  GiGolfFlag,
  GiPriceTag,
} from "react-icons/gi";
import {
  MdFitnessCenter,
  MdFreeBreakfast,
  MdOutlineKingBed,
  MdOutlineLocalParking,
  MdOutlineRoofing,
} from "react-icons/md";

// Mapping amenities to icons
const amenityIcons = {
  Pool: <FaSwimmer className="text-blue-500 mr-1" />,
  "Wi-Fi": <FaWifi className="text-green-500 mr-1" />,
  Kitchen: <FaUtensils className="text-orange-500 mr-1" />,
  "Pet Friendly": <FaDog className="text-yellow-500 mr-1" />,
  "Hiking Trails": <GiPathDistance className="text-gray-500 mr-1" />,
  Fireplace: <GiFireplace className="text-red-500 mr-1" />,
  "Free Parking": <MdOutlineLocalParking className="text-purple-500 mr-1" />,
  "Beach Access": <FaUmbrellaBeach className="text-teal-500 mr-1" />,
  Spa: <FaSpa className="text-pink-500 mr-1" />,
  Gym: <MdFitnessCenter className="text-gray-700 mr-1" />,
  "Free Breakfast": <MdFreeBreakfast className="text-yellow-700 mr-1" />,
  "Rooftop Bar": <MdOutlineRoofing className="text-indigo-500 mr-1" />,
  "Fitness Center": <MdFitnessCenter className="text-blue-500 mr-1" />,
  "Valet Parking": <FaParking className="text-red-400 mr-1" />,
  "Lake View": <BsFillTreeFill className="text-green-500 mr-1" />,
  "Poolside Bar": <FaCocktail className="text-purple-700 mr-1" />,
  "Golf Course": <GiGolfFlag className="text-green-600 mr-1" />,
  "Washer and dryer": <MdOutlineKingBed className="text-gray-600 mr-1" />,
};

// Hotel Data
const hotelData = [
    {
      image: "/ca1.jpg",
      name: "Floridays Resort Orlando",
      location: "Orlando",
      amenities: ["Pool", "Kitchen", "Washer and dryer"],
      hotelTags: "Holiday Savings - Best Rates Today",
      description: "Disney Good Neighbor Resort. Apartment-Style suites with 2 or 3 bedrooms, living room, full kitchen & laundry. Park shuttle daily.",
      refundPolicy: "Fully refundable",
      rating: "8.6",
      ratingText: "Excellent",
      reviews: "11,087 reviews",
      price: "$164",
      discountPrice: "$139",
      taxFee: "$191",
      totalPrice: "includes taxes & fees",
      images: [
        "/ca2.jpg",
        "/ca3.jpg",
        "/ca4.jpg",
      ],
    },
    {
      image: "/ca5.jpg",
      name: "Grand Hotel",
      location: "New York",
      amenities: ["Wi-Fi", "Gym", "Free Breakfast"],
      hotelTags: "Universal at your fingertip",
      description: "Located in the heart of the city, enjoy luxury at its best with premium amenities and breathtaking views.",
      refundPolicy: "Fully refundable",
      rating: "9.0",
      ratingText: "Superb",
      reviews: "5,234 reviews",
      price: "$200",
      discountPrice: "$175",
      taxFee: "$220",
      totalPrice: "includes taxes & fees",
      images: [
        "/ca6.jpg",
        "/ca7.jpg",
        "/ca8.jpg",
      ],
    },
    {
      image: "/ca9.jpg",
      name: "Seaside Retreat",
      location: "Miami",
      amenities: ["Beach Access", "Pool", "Spa"],
      hotelTags: "",
      description: "Escape to a serene seaside retreat with luxurious accommodations and unparalleled service.",
      refundPolicy: "Non-refundable",
      rating: "8.4",
      ratingText: "Very Good",
      reviews: "8,765 reviews",
      price: "$150",
      discountPrice: "$130",
      taxFee: "$160",
      totalPrice: "includes taxes & fees",
      images: [
        "/ca10.jpg",
        "/ca11.jpg",
        "/ca1.jpg",
      ],
    },
    {
      image: "/ca3.jpg",
      name: "Mountain Escape",
      location: "Denver",
      amenities: ["Hiking Trails", "Fireplace", "Pet Friendly"],
      hotelTags: "",
      description: "A cozy mountain retreat perfect for a winter getaway or a summer adventure.",
      refundPolicy: "Fully refundable",
      rating: "9.2",
      ratingText: "Exceptional",
      reviews: "3,210 reviews",
      price: "$180",
      discountPrice: "$160",
      taxFee: "$195",
      totalPrice: "includes taxes & fees",
      images: [
        "/ca5.jpg",
        "/ca7.jpg",
        "/ca9.jpg",
      ],
    },
    {
      image: "/ca11.jpg",
      name: "City Lights Hotel",
      location: "Chicago",
      amenities: ["Rooftop Bar", "Fitness Center", "Valet Parking"],
      hotelTags: "",
      description: "Experience the energy of the city with premium accommodations in the heart of downtown.",
      refundPolicy: "Partially refundable",
      rating: "8.7",
      ratingText: "Fabulous",
      reviews: "7,654 reviews",
      price: "$210",
      discountPrice: "$190",
      taxFee: "$240",
      totalPrice: "includes taxes & fees",
      images: [
        "/ca2.jpg",
        "/ca4.jpg",
        "/ca6.jpg",
      ],
    },
    {
      image: "/ca8.jpg",
      name: "Lakeside Inn",
      location: "Seattle",
      amenities: ["Lake View", "Breakfast Included", "Free Parking"],
      hotelTags: "",
      description: "Relax by the lake in a charming inn offering cozy rooms and spectacular views.",
      refundPolicy: "Fully refundable",
      rating: "8.5",
      ratingText: "Very Good",
      reviews: "4,320 reviews",
      price: "$130",
      discountPrice: "$110",
      taxFee: "$145",
      totalPrice: "includes taxes & fees",
      images: [
        "/ca10.jpg",
        "/ca1.jpg",
        "/ca3.jpg",
      ],
    },
    {
      image: "/ca5.jpg",
      name: "Desert Oasis Resort",
      location: "Phoenix",
      amenities: ["Poolside Bar", "Golf Course", "Pet Friendly"],
      hotelTags: "",
      description: "A tranquil oasis in the desert with modern amenities and beautiful scenery.",
      refundPolicy: "Non-refundable",
      rating: "8.9",
      ratingText: "Fabulous",
      reviews: "6,123 reviews",
      price: "$170",
      discountPrice: "$145",
      taxFee: "$185",
      totalPrice: "includes taxes & fees",
      images: [
        "/ca5.jpg",
        "/ca7.jpg",
        "/ca9.jpg",
      ],
    },
    // Add more similar hotel objects here until you reach 15 total
  ];

// Hotel Card Component
const HotelCard = ({ hotel }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? hotel.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === hotel.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white grid grid-cols-6 mb-6 border border-gray-400 rounded-xl shadow-lg">
      {/* Carousel for Hotel Images */}
      <div className="col-span-2 relative">
        <img
          src={hotel.images[currentImage]}
          alt={hotel.name}
          className="w-full h-full object-cover rounded-l-xl"
        />
        <button
          onClick={handlePrevImage}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-600 bg-opacity-75 text-white p-2 rounded-full"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={handleNextImage}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-600 bg-opacity-75 text-white p-2 rounded-full"
        >
          <FaAngleRight />
        </button>
        <button
          className="absolute top-8 right-2 transform -translate-y-1/2 bg-white p-[6px] rounded-full"
        >
          <FaRegHeart className="text-xl text-red-600" />
        </button>
      </div>

      {/* Hotel Info */}
      <div className="px-4 py-4 col-span-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">{hotel.name}</h2>
        </div>
        <p className="text-sm text-black font-medium mt-1 mb-2">
          {hotel.location}
        </p>

        {/* Amenities */}
        <div className="mb-4 flex flex-wrap">
          {hotel.amenities.map((amenity, index) => (
            <span
              key={index}
              className="text-sm text-gray-700 mr-2 flex items-center"
            >
              {amenityIcons[amenity]} {amenity}
            </span>
          ))}
        </div>

        <p className="text-xs font-semibold">{hotel.hotelTags}</p>
        <p className="text-xs mt-1 font-medium text-gray-700 pr-60">
          {hotel.description}
        </p>

        <div className="flex justify-between items-end">
          {/* Ratings */}
          <div>
            <p className="text-sm text-green-600 mb-6">{hotel.refundPolicy}</p>
            <div className="flex items-center mb-2 gap-2">
              <span className="text-sm font-medium text-white py-1 px-2 bg-green-800 rounded-md">
                {hotel.rating}
              </span>
              <div className="text-start">
                <span className="text-sm text-gray-800 font-bold">
                  {hotel.ratingText}
                </span>
                <p className="text-xs text-gray-800 font-medium">
                  {hotel.reviews}
                </p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mt-4 text-end">
            <div className="flex justify-end items-baseline gap-1">
              <p className="line-through text-gray-800 font-medium text-sm">
                {hotel.price}
              </p>
              <p className="text-xl font-bold text-gray-800">
                {hotel.discountPrice}
              </p>
            </div>
            <p className="text-xs font-semibold text-gray-800">
              {hotel.taxFee} total
            </p>
            <p className="text-xs text-gray-800 font-medium">
              {hotel.totalPrice}
            </p>
            <button className="flex justify-start items-center gap-1 text-xs font-medium bg-blue-600 px-4 py-2 mt-3 rounded-full text-white">
              <GiPriceTag className="text-lg" /> Sign in for extra saving
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Hotel List Component
const HotelList = () => {
  return (
    <div className="container mx-auto p-4">
      
      <div className="grid grid-cols-1 gap-6">
        {hotelData.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
