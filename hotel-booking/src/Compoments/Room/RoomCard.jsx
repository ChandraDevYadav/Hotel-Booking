import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaAngleLeft, FaAngleRight, FaStar, FaUserFriends } from "react-icons/fa";
import { FaBed, FaI } from "react-icons/fa6";
import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
    return (
        <div className="max-w-md mx-auto bg-white border rounded-lg shadow-md overflow-hidden">
            {/* Carousel */}
            <div className="relative">
                <Carousel
                    showThumbs={false}
                    infiniteLoop
                    showIndicators={false} // Hide dots
                    showStatus={false}
                    renderArrowPrev={(onClickHandler, hasPrev, label) => (
                        <button
                            type="button"
                            onClick={onClickHandler}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 p-2 rounded-full shadow-lg hover:bg-blue-500 hover:text-white focus:outline-none z-10"
                            aria-label={label}
                        >
                            <FaAngleLeft size={20} />
                        </button>
                    )}
                    renderArrowNext={(onClickHandler, hasNext, label) => (
                        <button
                            type="button"
                            onClick={onClickHandler}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 p-2 rounded-full shadow-lg hover:bg-blue-500 hover:text-white focus:outline-none z-10"
                            aria-label={label}
                        >
                            <FaAngleRight size={20} />
                        </button>
                    )}
                >
                    {room.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Room ${room.title}`}
                            className="w-full h-64 object-cover"
                        />
                    ))}
                </Carousel>
            </div>

            {/* Room Details */}
            <div className="p-4">
                <h3 className="text-md font-semibold text-gray-800">{room.title}</h3>
                <div className="flex justify-start items-center gap-2">
                    <div className="bg-green-800 text-white rounded px-2 py-1">
                        <p className="text-xs font-medium">{room.rating}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-800 font-semibold">{room.ratingText}</p>
                        <p className="text-xs font-medium text-gray-700">{room.reviews} reviews</p>
                    </div>
                </div>
                {/* <p className="text-sm text-gray-600"></p> */}
                <div className="mt-3">
                    <p className="flex justify-start items-center gap-2 text-sm"><FaUserFriends className="text-lg" />  Sleeps {room.sleeps}</p>
                    <p className="flex justify-start items-center gap-2 text-sm mt-1"><FaBed className="text-lg" /> {room.bedType}</p>
                </div>
                <div className="flex justify-start items-center gap-2 mt-2">
                <p className="text-sm text-green-800 font-medium">{room.refundPolicy}</p>
                <div className="w-4 h-4">
                    <svg class="uitk-icon uitk-more-info-trigger-icon uitk-more-info-trigger-icon-theme-positive uitk-icon-small" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm11-1v6h-2v-6h2zm-1 9a8.01 8.01 0 0 1 0-16 8.01 8.01 0 0 1 0 16zm1-13v2h-2V7h2z" clip-rule="evenodd"></path></svg>
                </div>
                </div>

                <p className="text-xs text-gray-700 font-medium">{room.refundDate}</p>
                <Link to='' className="flex justify-start items-center gap-2 text-sm font-medium text-blue-600 mt-4">More details <FaAngleRight className="text-md"/></Link>
                <div className="mt-4">
                    <button className="text-xs text-white bg-green-700 font-medium rounded px-2 py-1">{room.priceDetails.discount}</button>
                    <div className="flex justify-between items-end">
                    <div>
                    <div className="flex items-baseline space-x-2">
                        <p className="text-xl font-semibold text-gray-800">{room.priceDetails.currentPrice}</p>
                        <p className="text-sm line-through font-medium text-gray-700">{room.priceDetails.originalPrice}</p>
                    </div>
                    <p className="text-xs text-gray-500 font-medium">
                        {room.priceDetails.totalPrice}
                    </p>
                    </div>
                    <button className="text-md bg-blue-600 text-white px-4 py-1 rounded-full">Reserve</button>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-600 font-medium">{room.priceDetails.includes}</p>
                <p className="text-xs text-gray-600 font-medium">{room.reservationNote}</p>
                </div>
                {/* <button className="w-full mt-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    Reserve {room.title}
                </button> */}
            </div>
        </div>
    );
};

export default RoomCard;
