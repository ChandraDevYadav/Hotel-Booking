import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaBed, FaCity, FaUserFriends } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { LuAccessibility } from "react-icons/lu";
import { FaBath, FaCheck, FaWifi } from "react-icons/fa6";
import { IoMdRestaurant } from "react-icons/io";

const HotelCard = ({ room }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % room.images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + room.images.length) % room.images.length
    );
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/payment", { state: { room } });
  };

  return (
    <>
      {/* Hotel Card */}
      <div className="border border-gray-200 rounded-lg shadow-lg">
        <div
          className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden cursor-pointer"
          onClick={openDialog}
        >
          <div className="">
            {/* Carousel for images */}
            <div className="relative">
              <div className="w-full h-72 overflow-hidden">
                <img
                  src={room.images[currentIndex]}
                  alt={room.title}
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out"
                />
              </div>

              {/* Carousel controls */}
              {/* Carousel controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevents event from bubbling up
                  goToPrev();
                }}
                className="absolute z-10 top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-60 hover:opacity-100 transition-opacity"
              >
                <FaAngleLeft />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevents event from bubbling up
                  goToNext();
                }}
                className="absolute z-10 top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-60 hover:opacity-100 transition-opacity"
              >
                <FaAngleRight />
              </button>

            </div>

          </div>
        </div>
        {/* Room details */}
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
          <Link to='' className="flex justify-start items-center gap-2 text-sm font-medium text-blue-600 mt-4">More details <FaAngleRight className="text-md" /></Link>
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
              <button className="bg-blue-600 px-4 py-2 rounded-full text-white font-medium mb-3" onClick={handleBookNow}>Reserve</button>
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

      {/* Alert Dialog */}
      {isDialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-65"
          onClick={closeDialog}
        >
          <div
            className="bg-white rounded-lg overflow-y-scroll shadow-xl px-4 py-6 w-full max-w-[46rem] relative h-[600px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Carousel */}
            <div className="relative mt-12">
              <div className="w-full h-[24rem] overflow-hidden rounded-xl">
                <img
                  src={room.images[currentIndex]}
                  alt={room.title}
                  className="object-fill w-full h-full"
                />
              </div>
              <button
                onClick={goToPrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-60 hover:opacity-100"
              >
                <FaAngleLeft />
              </button>
              <button
                onClick={goToNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-60 hover:opacity-100"
              >
                <FaAngleRight />
              </button>
            </div>

            {/* Room Details */}
            <div className="py-4 px-3">
              <h3 className="text-lg font-semibold text-gray-800">{room.title}</h3>
              <p className="text-sm text-gray-700 font-medium">{room.additionalDetails.view}</p>
              <div className="bg-blue-50 rounded-xl my-4">
                <div className="flex justify-start items-center gap-2 pl-4 pt-4">
                  <div className="w-6 h-6">
                    <svg class="uitk-icon uitk-layout-flex-item" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M19.14 7.25 18 10l-1.14-2.86L14 6l2.86-1.14L18 2l1.14 2.86L22 6l-2.86 1.25zM11 10 9 4l-2 6-6 2 6 2 2 6 2-6 6-2-6-2zm4.5 10.5-1.5-1 1.5-1 1-1.5 1 1.5 1.5 1-1.5 1-1 1.5-1-1.5z"></path></svg>
                  </div>
                  <h4 className="text-md font-semibold text-gray-800">Highlights</h4>
                </div>
                <div className="px-4 py-2">
                  {room.additionalDetails.highlights.map((highlight, index) => (
                    <React.Fragment key={index}>
                      <span className="mr-4 text-sm font-medium text-gray-600">{highlight}</span>
                      {(index + 1) % 4 === 0 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="mt-3">
                <p className="flex items-center gap-2 text-sm">
                  <FaUserFriends className="text-xl" /> Sleeps {room.sleeps}
                </p>
                <p className="flex items-center gap-2 text-sm mt-2"><FaCity className="text-xl" /> {room.additionalDetails.view}</p>
                <p className="flex items-center gap-2 text-sm mt-2">
                  <FaBed className="text-xl" /> {room.bedType}
                </p>
              </div>



              <div className="flex justify-start items-center gap-2 mt-4">
                <div className="bg-green-800 text-white rounded px-2 py-1">
                  <p className="text-xs font-medium">{room.rating}</p>
                </div>
                <div>
                  <p className="text-md text-gray-800 font-semibold">{room.ratingText}</p>
                  <p className="text-xs font-medium text-gray-700">{room.reviews} reviews</p>
                </div>
              </div>
              <div>
                <h4 className="text-md font-semibold text-gray-800 mt-5">Guests like it for</h4>
                <ul className="text-sm text-gray-700 mt-3">
                  {room.additionalDetails.guestLikes.map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>
              </div>

              <p className="mt-5">Room amenities</p>
              <div className="grid grid-cols-2">
                <div>
                  <h4 className="text-md font-semibold text-gray-800 mt-3 flex justify-start items-center gap-2"><LuAccessibility className="text-xl" /> Accessibility</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700 mt-3">
                    {room.additionalDetails.accessibility.map((item, index) => (
                      <li className="mb-2" key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-md font-semibold text-gray-800 mt-3 flex justify-start items-center gap-2"><FaBath className="text-xl"/>Bathroom</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700 mt-3">
                    {room.additionalDetails.bathroom.map((amenity, index) => (
                      <li className="mb-2" key={index}>{amenity}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div>
                  <h4 className="text-md font-semibold text-gray-800 mt-3 flex justify-start items-center gap-2"><FaBed className="text-xl"/> Bedroom</h4>
                  <ul className="list-disc pl-5 text-sm mt-3 text-gray-700">
                    {room.additionalDetails.bedroom.map((item, index) => (
                      <li className="mb-2" key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-md font-semibold text-gray-800 mt-3 flex justify-start items-center gap-2"><FaCheck className="text-xl"/>Entertainment</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700 mt-3">
                    {room.additionalDetails.entertainment.map((amenity, index) => (
                      <li className="mb-2" key={index}>{amenity}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div>
                  <h4 className="text-md font-semibold text-gray-800 mt-5 flex justify-start items-center gap-2"><IoMdRestaurant className="text-xl" />Food & Drink</h4>
                  <ul className="list-disc pl-5 text-sm mt-3 text-gray-700">
                    {room.additionalDetails.foodAndDrink.map((item, index) => (
                      <li className="mb-2" key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-md font-semibold text-gray-800 mt-5 flex justify-start items-center gap-2"><FaWifi className="text-xl"/> Internet</h4>
                  <p className="text-sm text-gray-700 mt-3">{room.additionalDetails.internet}</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h4 className="text-md font-semibold text-gray-800 mt-5 flex justify-start items-center gap-2"><FaCheck className="text-xl"/>More</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700 mt-3">
                    {room.additionalDetails.more.map((item, index) => (
                      <li className="mb-2" key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border border-black rounded-xl px-4 py-4 mt-4">
                <h1 className="text-lg font-semibold">Room Options</h1>
                <p className="text-sm text-green-800 font-medium mt-2">{room.refundPolicy}</p>
                <p className="text-xs text-gray-700 font-medium">{room.refundDate}</p>
                <div className="mt-4">
                  <button className="text-xs text-white bg-green-700 font-medium rounded px-2 py-1">
                    {room.priceDetails.discount}
                  </button>
                  <div className="flex justify-between items-end mt-2">
                    <div>
                      <div className="flex items-baseline space-x-2">
                        <p className="text-xl font-semibold text-gray-800">{room.priceDetails.currentPrice}</p>
                        <p className="text-sm line-through font-medium text-gray-700">{room.priceDetails.originalPrice}</p>
                      </div>
                      <p className="text-xs text-gray-500 font-medium">{room.priceDetails.totalPrice}</p>
                      <p className="text-xs text-gray-500 font-medium">{room.priceDetails.includes}</p>
                      
                    </div>
                    <div>
                    <button className="bg-blue-600 px-4 py-2 rounded-full text-white font-medium mb-3" onClick={handleBookNow}>Reserve</button>
                    <p className="text-xs text-gray-500 font-medium">{room.reservationNote}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="absolute flex justify-start items-center gap-1 top-4 left-3 bg-white text-gray-600 hover:text-gray-800">
              <button
                className="text-xl text-blue-600 p-2 hover:bg-blue-200 hover:rounded-full"
                onClick={closeDialog}
              >
                <RxCross2 />
              </button>
              <p className="text-md font-medium">Room information</p>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HotelCard;
