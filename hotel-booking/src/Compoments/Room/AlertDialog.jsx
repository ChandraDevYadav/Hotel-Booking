import React, { useState } from "react";
import { FaCar, FaMapMarkerAlt } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { IoMdRestaurant } from "react-icons/io";

const data = {
    title: "Las Vegas",
    description: "Las Vegas which includes signage and a casino",
    images: [
        "/h1.jpg",
        "/h2.jpg",
        "/h3.jpg",
        "/h4.jpg",
    ],
    highlights: [
        { place: "The Venetian Casino", time: "1 min walk" },
        { place: "Colosseum at Caesars Palace", time: "10 min walk" },
        { place: "Fountains of Bellagio", time: "13 min walk" },
        { place: "Bellagio Casino", time: "3 min drive" },
        { place: "Las Vegas Convention Center", time: "3 min drive" },
    ],
    about: `Located in Las Vegas Strip neighborhood, The Venetian Resort Las Vegas is connected to a shopping center. 
    Fashion Show Mall and Las Vegas Premium Outlets North are worth checking out if shopping is on the agenda, while
    those wishing to experience the area's natural beauty can explore Red Rock Canyon National Conservation Area.
    Looking to enjoy an event or a game? See what's going on at T-Mobile Arena or Thomas and Mack Center. Guests love the resort's central location.`,
    nearby: [
        "The Venetian Casino - 1 min walk",
        "Treasure Island Casino - 4 min walk",
        "Fashion Show Mall - 6 min walk",
        "The Linq - 8 min walk",
        "The Venetian Expo Center - 10 min walk",
    ],
    transportation: [
        "Harrah’s & The LINQ Station - 8 min walk",
        "Flamingo - Caesars Palace Monorail Station - 12 min walk",
        "Ballys and Paris Las Vegas Monorail Station - 11 min drive",
        "Las Vegas, NV (LAS-Harry Reid Intl.) - 15 min drive",
        "Las Vegas, NV (VGT-North Las Vegas) - 17 min drive",
    ],
    restaurants: [
        "Tao Nightclub - 1 min walk",
        "Black Tap Las Vegas - 1 min walk",
        "Noodle Asia - 1 min walk",
        "Smith & Wollensky - Las Vegas - 1 min walk",
        "Chica - 2 min walk",
    ],
};

const AlertDialog = () => {
    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <div className="">
            {/* Show More Button */}
            <button
                className="text-blue-600 font-medium text-sm hover:text-blue-700 flex justify-start items-center gap-2 mt-4"
                onClick={handleOpenDialog}
            >
                View More Details
                <FaAngleRight />
            </button>

            {/* Alert Dialog */}
            {isDialogOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={handleCloseDialog}
                >
                    <div
                        className="bg-white rounded-lg shadow-lg w-11/12 max-w-3xl p-6 overflow-y-auto max-h-[80vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Images Section */}
                        <div className="mb-6">
                            <div className="grid grid-cols-2 gap-4">
                                {data.images.map((image, index) => (
                                    <div>
                                        <img
                                        key={index}
                                        src={image}
                                        alt={`Image ${index + 1}`}
                                        className="h-auto object-cover rounded-lg"
                                    />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Title and Description */}
                        <h2 className="text-xl font-bold mb-4">{data.title}</h2>
                        <p className="text-gray-700 mb-4">{data.about}</p>

                        {/* Highlights Section */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Highlights</h3>
                            <ul className="space-y-2">
                                {data.highlights.map((highlight, index) => (
                                    <li key={index} className="text-gray-700 flex justify-between items-center">
                                        <span>{highlight.place}</span>
                                        <span className="text-sm text-gray-500">{highlight.time}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Nearby Places Section */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">What's Nearby</h3>
                            <ul className="list-disc pl-2 space-y-2 mb-4">
                                {data.nearby.map((place, index) => (
                                    <li key={index} className="text-gray-700 flex items-center">
                                        <FaMapMarkerAlt className="mr-2 text-gray-500" />
                                        {place}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Transportation Section */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Getting Around</h3>
                            <ul className="list-disc pl-2 space-y-2 mb-4">
                                {data.transportation.map((transport, index) => (
                                    <li key={index} className="text-gray-700 flex items-center">
                                        <FaCar className="mr-2 text-gray-500" />
                                        {transport}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Restaurants Section */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Restaurants</h3>
                            <ul className="list-disc pl-2 space-y-2">
                                {data.restaurants.map((restaurant, index) => (
                                    <li key={index} className="text-gray-700 flex items-center">
                                        <IoMdRestaurant className="mr-2 text-gray-500" />
                                        {restaurant}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Close Button */}
                        <button
                            className="mt-6 bg-red-600 text-white px-4 py-2 rounded-lg"
                            onClick={handleCloseDialog}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AlertDialog;
