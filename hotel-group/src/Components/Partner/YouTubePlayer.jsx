import React, { useState } from "react";
import { FaClock, FaShareAlt } from "react-icons/fa";

const YouTubePlayer = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="w-full max-w-lg mx-auto">
            {/* Video Container */}
            <div className="relative bg-black rounded-lg overflow-hidden shadow-lg">
                {/* Video Player */}
                <video
                    className="w-full"
                    controls
                    poster="https://via.placeholder.com/640x360"
                >
                    <source
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                {/* Header with Logo */}
                <div className="absolute top-2 left-2 flex items-center space-x-2">
                    {/* Hover Subscribe Button */}
                    <div
                        className="absolute top-2 left-2"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        {hovered ? (
                            <div className="flex justify-between items-center gap-4 w-[24rem] bg-gray-800 px-4 py-1 rounded-full">
                                <div className="flex justify-start items-center">
                                <img src="/logo.png" className="w-8 h-8" alt="" />
                                <div>
                                <p className="text-white font-medium">EasyStay For Partner</p>
                                <p className="text-white text-xs font-medium">2.67K Subscriber</p>
                                </div>
                                </div>
                                <button className="bg-red-600 text-white px-2 py-1 rounded-full hover:bg-red-700">
                                    Subscribe
                                </button>
                            </div>
                        ) : (
                            <div className="bg-gray-800 text-sm font-medium text-white px-4 py-2 rounded-md">
                                EasyStay
                            </div>
                        )}
                    </div>
                    {/* <p className="text-white font-semibold">YouTube</p> */}
                </div>

                {/* Icons */}
                <div className="absolute top-2 right-2 flex items-center space-x-3">
                    <button className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700">
                        <FaClock className="text-xl" />
                    </button>
                    <button className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700">
                        <FaShareAlt className="text-xl" />
                    </button>
                </div>


            </div>
        </div>
    );
};

export default YouTubePlayer;
