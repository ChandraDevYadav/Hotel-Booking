import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaCheck, FaHotel, FaLayerGroup, FaRunning } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { FaClockRotateLeft, FaHeartPulse, FaLock, FaUsers } from "react-icons/fa6";
import { PaymentTabs } from "./PaymentTab";
import { BsLayers } from "react-icons/bs";
import { GiPriceTag } from "react-icons/gi";


const Payment = () => {
  const location = useLocation();
  const { room } = location.state || {};

  console.log(room);

  if (!room) {
    return <p>No room data available!</p>;
  }

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  // State to keep track of the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % room.images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? room.images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="min-h-screen px-44">
      <p className="text-2xl font-bold my-6">Secure booking</p>
      <div className="flex justify-start items-center gap-2 px-4 py-8 border border-gray-400 rounded-md mb-6">
        <div>
          <img src="/cale.png" className="object-fill w-12 h-12" alt="" />
        </div>
        <div>
          <p className="text-sm font-bold text-gray-800">Fully refundable before Sun, Dec 15, 11:59pm (property local time)</p>
          <p className="text-sm text-gray-600">You can change or cancel this stay for a full refund if plans change. Because flexibility matters.</p>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {/* Payment Form Section */}
        <div className="col-span-3">
          <div className="flex justify-between items-center bg-gray-800 px-4 py-4 rounded-md mb-6">
            <div>
              <img src="/seq.svg" className="w-12 h-12" alt="" />
            </div>
            <div>
              <p className="text-md font-bold text-white">Sign in or create an account to earn $2.70 in OneKeyCash™ after this trip.</p>
            </div>
            <div>
              <FaAngleRight className="text-xl text-white" />
            </div>
          </div>
          <form className="space-y-4 bg-white shadow-md rounded-lg p-6">
            <div>
              <p className="text-2xl font-bold text-gray-800">Who's checking in?</p>
              <p className="text-sm font-medium text-gray-600 mt-2"><span className="text-lg font-semibold text-gray-800">Room1 : </span>{room.bedType}</p>
            </div>
            <div className="flex justify-start items-center gap-4 pr-44">
              <div className="w-full">
                <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
                  Cardholder Name
                </label>
                <input
                  id="cardName"
                  type="text"
                  className="mt-1 block w-full rounded border py-2 px-4 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div className="w-full">
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                  Card Number
                </label>
                <input
                  id="cardNumber"
                  type="text"
                  className="mt-1 block w-full rounded border py-2 px-4 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
            </div>

            <div className="flex space-x-4 pr-44">
              <div className="w-1/2">
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  id="expiryDate"
                  type="text"
                  className="mt-1 block w-full rounded border py-2 px-4 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="MM/YY"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  id="cvv"
                  type="text"
                  className="mt-1 block w-full rounded border py-2 px-4 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="123"
                />
              </div>
            </div>
            <div className="w-full pr-44">
              <select name="" id="country" className="w-full border py-2 px-4 rounded-sm">
                <option value="country">Country</option>
                <option value="nepal">Nepal</option>
                <option value="india">India</option>
                <option value="china">China</option>
                <option value="usa">USA</option>
                <option value="england">England</option>
                <option value="canada">Canada</option>
                <option value="maxico">Maxico</option>
                <option value="Columbia">Columbia</option>
                <option value="Germeny">Germeny</option>
                <option value="Franch">Franch</option>
                <option value="Poland">Poland</option>
                <option value="Norway">Norway</option>
              </select>
              <div className="flex justify-start items-center mt-3">
                <input type="checkbox" />
                <label htmlFor="" className="text-sm ml-1">Receive text alerts about this trip. Message and data rates may apply.</label>
              </div>
            </div>
            {/* <div className="mr-44">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Pay Now
              </button>
            </div> */}
          </form>
          <div className="mt-6 border border-gray-300 rounded-md px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Payment method</h1>
            <div className="flex justify-start items-center gap-6">
              <div className="flex justify-start items-center gap-2 text-green-800">
                <FaCheck className="text-sm" />
                <p className="text-sm">We use secure transmission</p>
              </div>
              <div className="flex justify-start items-center gap-2 text-green-800">
                <FaCheck className="text-sm" />
                <p className="text-sm">We protect your personal information</p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-4 font-medium text-blue-500 text-sm mt-4">
              <PaymentTabs />
            </div>

          </div>
          <div className="mt-6 border border-gray-300 rounded-md px-4 py-8">
            <div>
              <button className="bg-green-600 text-white px-3 py-2 rounded text-md font-medium">Recommended</button>
              <p className="font-semibold text-2xl mt-2">Protect your stay</p>
              <div className="my-6">
                <ul>
                  <li className="flex justify-start items-center gap-2 mb-2">
                    <MdCancel /> Cancellation and interruption protection up to $100,000 per plan
                    benefit-icon</li>
                  <li className="flex justify-start items-center gap-2 mb-2"><FaRunning /> Emergency assistance and transportation up to $100,000 per plan
                    benefit-icon</li>
                  <li className="flex justify-start items-center gap-2 mb-2"><FaHotel /> Material misrepresentation of advertised property up to $500 per plan
                    benefit-icon</li>
                  <li className="flex justify-start items-center gap-2 mb-2"><FaClockRotateLeft /> Expenses due to travel delay up to $5,000 per plan
                    benefit-icon</li>
                  <li className="flex justify-start items-center gap-2 mb-2"><FaHeartPulse /> Medical expenses up to $100,000 per plan</li>
                </ul>
              </div>
              <Link to='' className="text-sm text-blue-600 font-medium">View Benifit Details</Link>
              <div className="flex justify-start items-center gap-2 border border-gray-400 mt-6 w-full py-4 px-4 rounded-md">
                <FaUsers className="text-xl" />
                <p className="text-sm"><b>33000+</b> travelers protected their stay on Expedia last week.</p>
              </div>
              <div>
                <p className="text-sm font-medium mt-6">Select Yes or No to continue booking</p>
                <div className="flex justify-between items-center border border-gray-400 w-full px-4 py-3 mt-4 bg-blue-50">
                  <div className="flex justify-start items-center">
                    <input type="checkbox" name="" id="" className="" />
                    <label htmlFor="" className="ml-2 text-sm font-bold">Yes, I want to add protection to my stay.</label>
                  </div>
                  <div>
                    <p className="text-lg font-bold">$4.50</p>
                    <p className="text-xs font-medium">per person</p>
                  </div>
                </div>
                <div className="border border-gray-200 w-full px-4 py-3 mt-4 bg-gray-100">
                  <div className="flex justify-start items-start gap-2 border-b border-gray-400 pb-4">
                    <input type="checkbox" name="" id="" className="mt-1" />
                    <label htmlFor="" className="text-sm">
                      <div>
                        <p className="font-bold">No, I'm willing to risk my $153.29 stay booking.</p>
                        <p className="text-xs">I understand by declining this coverage that I may be responsible for certain cancellation fees and delay expenses personally or through alternate coverage.</p>
                      </div>
                    </label>
                  </div>
                  <div className="mx-4">
                    <p className="text-sm">
                      {isExpanded
                        ? `“A 4th time return customer, had 3 claims in the past, all handled in a VERY competent and timely manner.”
              - Joel L, United States`
                        : `“A 4th time return customer, had 3 claims in the past...”`}
                    </p>
                    <button
                      onClick={toggleReadMore}
                      className="mt-1 text-sm text-blue-500 hover:underline focus:outline-none"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  </div>
                </div>
                <div>
                  <p className="flex justify-start items-center gap-2 text-xs text-blue-600 my-4">View plan details and disclosures (Opens in a new Window) <BsLayers /> </p>
                  <p className="text-gray-700 text-xs">The cost of this plan includes travel insurance and assistance services.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 border border-gray-300 rounded-md px-4 py-6">
            <h1 className="text-2xl font-bold">Cancellation policy</h1>
            <ul className="list-disc pl-4 mt-4">
              <li className="text-sm mb-2 text-green-500"><span className="text-green-600 font-medium">Fully refundable</span> before Sun, Dec 15</li>
              <li className="text-sm text-gray-400">Cancellations or changes made after 11:59pm (property local time) on Dec 15, 2024 or no-shows are subject to a property fee equal to 100% of the total amount paid for the reservation.</li>
            </ul>
          </div>
          <div className="mt-6 border border-gray-300 rounded-md px-4 py-6">
            <h1 className="text-2xl font-bold">Important information</h1>
            <ul className="list-disc pl-4 mt-4 border-b border-gray-300 pb-8">
              <li className="text-sm mb-2 text-gray-600">If you are planning to arrive after midnight please contact the property in advance using the information on the booking confirmation. Front desk staff will greet guests on arrival.</li>
              <li className="text-sm text-gray-600">
                <p>You'll be asked to pay the following charges at the property. Fees may include applicable taxes:</p>
                <ul className="list-disc ml-8">
                  <li className="my-2">Deposit: USD 150.00 per night</li>
                  <li>Resort fee: USD 56.69 per accommodation, per night</li>
                </ul>
                <p className="my-2">The resort fee includes:</p>
                <ul className="list-disc ml-8">
                  <li className="mb-2">Additional inclusions</li>
                  <li className="mb-2">Fitness center access</li>
                  <li className="mb-2">Phone calls</li>
                  <li>WiFi access (may be limited)</li>
                </ul>
              </li>
            </ul>
            <div className="flex justify-start items-center gap-8 w-full border-b border-gray-300 py-6">
              <div>
                <p className="text-sm font-semibold">Check-in:</p>
                <p className="text-sm text-gray-600">Wed, Dec 18, 3:00 PM</p>
              </div>
              <div>
                <p className="text-sm font-semibold">Check-out:</p>
                <p className="text-sm text-gray-600">Thu, Dec 19, 11 AM (1-night stay)</p>
              </div>
            </div>
            <div>
              <p className="text-sm mt-4 text-gray-600">By clicking on the button below, I acknowledge that I have reviewed the Privacy Statement and Government Travel Advice and have reviewed and accept the Rules & Restrictions and Terms of Use.</p>
              <button className="flex justify-start items-center gap-1 font-semibold bg-blue-600 px-4 py-2 text-white rounded-md text-lg mt-5">Complete Booking <FaAngleRight/></button>
              <p className="flex justify-start items-center gap-2 text-xs text-gray-600 font-medium mt-4"><FaLock/>We use secure transmission and encrypted storage to protect your personal information.</p>
              <p className="flex justify-start items-center gap-2 text-xs text-gray-600 font-medium mt-4 ml-5">Payments are processed in the U.S. except where the travel provider (hotel / airline etc) processes your payment outside the U.S., in which case your card issuer may charge a foreign transaction fee.</p>
            </div>
          </div>
        </div>

        {/* Hotel Card Section */}
        <div className="col-span-2">
          <div className="border border-gray-300 p-6 mb-6 rounded-md">
            {/* Carousel Section */}
            <div className="relative">
                <img
                  src={room.images[currentSlide]}
                  alt={room.title}
                  className="w-full h-44 object-cover rounded-md"
                />
                {/* Next and Previous buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white text-blue-600 p-2 rounded-full"
                >
                  <FaAngleLeft className="text-xl"/>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white text-blue-600 p-2 rounded-full"
                >
                  <FaAngleRight className="text-xl" />
                </button>
              </div>

            <div className="md:ml-6 mt-4 md:mt-0">
              <h3 className="text-lg font-semibold mt-4">{room.title}</h3>
              <div className="flex justify-start items-center gap-2">
                <button className="text-xs text-white bg-green-600 px-2 py-1 rounded font-medium">{room.rating}</button>
                <div>
                  <p className="text-sm text-gray-600 font-semibold">{room.ratingText}</p>
                  <p className="text-xs text-gray-600 mt-1">( {room.reviews} Reviews )</p>
                </div>
              </div>
              <div className="mt-2 border-b border-gray-300 pb-3">
                <p><span className="font-medium">1 Room :</span> {room.title}</p>
                <p className="text-sm mt-4"><span className="font-semibold">Check-in:</span> Wed, Dec 18</p>
                <p className="text-sm"><span className="font-semibold">Check-out:</span> Thu, Dec 19</p>
                <p className="">1-night stay</p>
              </div>
              <div className="flex justify-start items-center gap-3 mt-3 border-b border-gray-300 pb-4">
                <div>
                  <button className="bg-gray-800 font-medium py-2 px-2 rounded-full text-white">VIP</button>
                </div>
                <div>
                  <p className="text-sm">Expect outstanding service at this top-rated VIP Access stay.</p>
                </div>
              </div>
              <div className="flex justify-between items-center gap-3 mt-3 border-b border-gray-300 pb-4">
                <div>
                  <p className="text-sm font-medium">Special/Accessibility requests (optional)</p>
                </div>
                <div>
                  <FaAngleRight/>
                </div>
              </div>
              
            </div>
          </div>
          <div className="flex justify-start items-start gap-2 border border-gray-300 p-6 mb-6 rounded-md text-green-600">
            <FaCheck className="mt-1"/>
            <p className="text-sm text-green-500 pr-6">You have good taste! Book now before someone else grabs it!</p>
          </div>
          <div className="border border-gray-300 mb-6 rounded-md py-4">
            <p className="text-xl text-gray-800 font-bold border-b border-gray-300 w-full px-4 pb-4">Price details</p>
            <div className="flex justify-between items-center px-4">
              <p>1 room x 1 night</p>
              <p className="text-md font-medium mt-4">{room.priceDetails.originalPrice}</p>
            </div>
            <button className="text-sm rounded ml-4 flex justify-start items-center gap-1 font-medium mt-2 bg-green-600 text-white px-2"><GiPriceTag/>{room.priceDetails.discount}</button>
            <div className="flex justify-between items-center px-4 mt-4">
              <p>Taxes and fees </p>
              <p className="text-md font-medium mt-4">$18.09</p>
            </div>
            <div className="flex justify-between items-start px-4 mt-4">
              <div>
              <p className="font-medium">Local tax</p>
              <p className="text-gray-600 text-sm">Payable at property</p>
              </div>
              <p className="text-md font-medium mt-4">$6.69</p>
            </div>
            <div className="flex justify-between items-start mx-4 mt-4 pb-4 border-b border-gray-300">
              <div>
              <p className="font-medium">Resort fee</p>
              <p className="text-gray-600 text-sm">per night payable at property</p>
              </div>
              <p className="text-md font-medium mt-2">$50.00</p>
            </div>
            <div className="flex justify-between items-center px-4 mt-4">
              <p className="text-lg font-bold">Total</p>
              <p className="text-lg font-bold">{room.priceDetails.totalPrice}</p>
            </div>
            <div className="flex justify-between items-center px-4 mt-4 text-gray-600">
              <p className="text-md">Pay now</p>
              <p className="text-md font-medium">{room.priceDetails.currentPrice}</p>
            </div>
            <div className="flex justify-between items-center px-4 text-gray-600 mt-2">
              <p>Pay at property</p>
              <p className="text-md font-medium">{room.priceDetails.discount}</p>
            </div>
            <Link to='' className="text-xs text-blue-600 px-4 mt-4">Use a coupon, credit, or promotion code</Link>
            <p className="text-xs text-gray-600 px-4 mt-6">Rates are quoted in US dollars. Taxes and Fees due at the property are based on current exchange rates, and are payable in local currency.</p>
          </div>

          {/* <p className="text-sm text-gray-600 mt-2">{room.sleeps}</p>
              <p className="text-sm text-gray-600 mt-2">{room.bedType}</p>
              <p className="text-sm text-gray-600 mt-2">{room.refundPolicy}</p>
              <p className="text-sm text-gray-600 mt-2">{room.refundDate}</p>
              <p className="text-lg font-bold text-blue-600 mt-4">{room.priceDetails.discount} / night</p>
              <p className="text-md font-bold text-blue-600 mt-4">{room.priceDetails.currentPrice}</p>
              
              <p className="text-xl font-bold text-blue-600 mt-4">{room.priceDetails.totalPrice}</p>
              <p className="text-xl font-bold text-blue-600 mt-4">{room.reservationNote}</p>
              <p className="text-xl font-bold text-blue-600 mt-4">{room.additionalDetails.description}</p>
              <p className="text-xl font-bold text-blue-600 mt-4">{room.priceDetails.highlights}</p> */}
        </div>


      </div>
      <div className="flex justify-center mt-6">
      <Link to='' className="text-center text-sm text-blue-600">[+] Tell us what you think</Link>
      </div>
    </div>
  );
};

export default Payment;
