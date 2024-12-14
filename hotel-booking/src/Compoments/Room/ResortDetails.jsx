import React, { useState } from "react";
import { resortData } from "./resortData";

const ResortDetails = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 justify-start items-start md:px-12 pt-8">
            <div className="col-span-1">
                <h1 className="text-3xl font-semibold">About this property</h1>
            </div>
            <div className="col-span-2">
            {resortData.map((resort, index) => (
                <div
                    key={index}
                    className=""
                >
                    {/* Title */}
                    <h1 className="text-xl font-semibold text-gray-800 mt-2">{resort.title}</h1>
                    <h1 className="text-md mt-2 font-semibold text-gray-800">{resort.location}</h1>

                    {/* Description */}
                    <p className="text-gray-600 text-sm font-medium mt-2">
                        {showMore ? resort.description : `${resort.description.slice(0, 550)}...`}
                    </p>

                    {/* See More / See Less Button (Below Content) */}
                    {!showMore && (
                        <button
                            className="text-blue-600 text-sm font-medium hover:underline mt-2"
                            onClick={() => setShowMore(true)}
                        >
                            See More
                        </button>
                    )}

                    {/* Toggle-able Content */}
                    {showMore && (
                        <>
                            {/* Amenities */}
                            <div>
                                <h2 className="text-md font-semibold text-gray-700 mt-6">You'll also find perks like:</h2>
                                <ul className="list-disc list-inside text-gray-600 mt-2 text-sm space-y-1 font-medium">
                                    {resort.amenities.map((amenity, idx) => (
                                        <li key={idx}>{amenity}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Highlights */}
                            <div>
                                <h2 className="text-md font-semibold text-gray-700 mt-6">Room features</h2>
                                <ul className="list-disc list-inside text-gray-600 font-medium text-sm mt-2 space-y-1">
                                    {resort.highlights.map((highlight, idx) => (
                                        <li key={idx}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Room Features */}
                            <div>
                                <h2 className="text-md font-semibold text-gray-700 mt-6">More conveniences in all rooms include:</h2>
                                <ul className="list-disc list-inside text-gray-600 text-sm font-medium mt-2 space-y-1">
                                    {resort.rooms.map((room, idx) => (
                                        <li key={idx}>{room}</li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}

                    {/* See Less Button (Only Below Languages) */}
                    {showMore && (
                        <button
                            className="text-blue-600 text-sm font-medium hover:underline mt-4"
                            onClick={() => setShowMore(false)}
                        >
                            See Less
                        </button>
                    )}
                    {/* Languages Section */}
                    <div className="pb-4">
                        <h2 className="text-xl font-semibold text-gray-700 mt-2">Languages Spoken</h2>
                        <p className="text-gray-600 text-sm font-medium mt-2">{resort.languages.join(", ")}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default ResortDetails;
