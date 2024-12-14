import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { MdOutlineIosShare } from "react-icons/md";

const galleryData = [
    {
        main: "/ca1.jpg",
        tabs: ["/ca2.jpg", "/ca3.jpg", "/ca4.jpg", "/ca5.jpg"],
    },
    {
        main: "/ca6.jpg",
        tabs: ["/ca7.jpg", "/ca8.jpg", "/ca9.jpg", "/ca10.jpg"],
    },
    {
        main: "/ca2.jpg",
        tabs: ["/ca3.jpg", "/ca4.jpg", "/ca5.jpg", "/ca6.jpg"],
    },
];

const tabCategories = [
    { name: "All Photos", key: "all" },
    { name: "Rooms", key: "rooms" },
    { name: "Bathroom", key: "bathroom" },
    { name: "Living Area", key: "living_area" },
    { name: "Pool", key: "pool" },
    { name: "Common Area", key: "common_area" },
    { name: "Dining Area", key: "dining_area" },
];

const galleryTabData = {
    all: [
        "/ca1.jpg",
        "/ca2.jpg",
        "/ca3.jpg",
        "/ca4.jpg",
        "/ca5.jpg",
        "/ca6.jpg",
        "/ca7.jpg",
        "/ca8.jpg",
        "/ca9.jpg",
        "/ca10.jpg",
    ],
    rooms: ["/ca1.jpg", "/ca2.jpg", "/ca3.jpg"],
    bathroom: ["/ca4.jpg", "/ca5.jpg"],
    living_area: ["/ca6.jpg", "/ca7.jpg"],
    pool: ["/ca8.jpg"],
    common_area: ["/ca2.jpg", "/ca3.jpg"],
    dining_area: ["/ca4.jpg", "/ca5.jpg"],
};

const Gallery = () => {
    const [currentGallery, setCurrentGallery] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("all");

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="">

           <div className="relative">
           <div className="flex justify-end items-center gap-2 mb-4">
                        <button className="flex items-center gap-1 border font-medium border-gray-600 px-2 py-1 rounded-full">
                            <MdOutlineIosShare className="text-blue-600 text-lg" /> Share
                        </button>
                        <button className="flex items-center gap-1 border border-gray-400 px-3 py-2 font-medium text-xs rounded-full">
                            <FaHeart className="text-red-600 text-lg" /> Save
                        </button>
                    </div>
             {/* Main Image and Tabs */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {/* Main Image */}
                <div>
                    <img
                        src={galleryData[currentGallery].main}
                        alt="Main"
                        className="w-full h-full rounded-md object-cover cursor-pointer"
                        onClick={handleImageClick}
                    />
                </div>

                {/* Tabs */}
                <div className="grid grid-cols-2 gap-4">
                    {galleryData[currentGallery].tabs.map((tab, index) => (
                        <div key={index}>
                            <img
                                src={tab}
                                alt={`Tab ${index + 1}`}
                                className="w-full h-full rounded-md object-cover cursor-pointer"
                                onClick={handleImageClick}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Overlay with Gallery Count */}
            <div className="absolute right-3 bottom-3">
                <p className="flex justify-start items-center gap-2 font-semibold bg-gray-600 opacity-90 rounded-full px-4 py-2 text-white">
                    <GrGallery className="text-xl" />
                    {galleryData.length * galleryData[0].tabs.length}+
                </p>
            </div>
            
           </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 top-32 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white z-50 w-3/4 p-6 rounded-lg overflow-y-scroll">
                        <div className="flex justify-between items-center pb-4">
                            <div className="flex justify-start items-center gap-3">
                            <button
                                onClick={handleCloseModal}
                                className="px-3 py-1 hover:bg-blue-100 text-blue-600 font-bold rounded-full"
                            >
                                X
                            </button>
                            <p className="font-semibold">The Venetian Resort Las Vegas</p>
                            </div>
                            <button
                                className="px-6 py-2 bg-blue-600 text-white rounded-md"
                            >
                                Reserve a room
                            </button>
                        </div>
                        {/* Tabs */}
                        <div className="flex space-x-4 mb-4 border-b pb-2">
                            {tabCategories.map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`px-4 py-2 rounded ${activeTab === tab.key
                                            ? "bg-gray-800 text-white"
                                            : "bg-gray-200"
                                        }`}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="grid grid-cols-3 gap-4">
                            {galleryTabData[activeTab].map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`${activeTab} ${index + 1}`}
                                    className="w-full h-32 object-cover rounded-md"
                                />
                            ))}
                        </div>

                        {/* Close Button */}

                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
