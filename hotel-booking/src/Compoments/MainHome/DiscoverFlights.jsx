import React, { useRef, useState, useEffect } from "react";
import { GiCommercialAirplane } from "react-icons/gi";


const DiscoverFlights = () => {
  const flightsData = [
    {
      flightNumber: "FlexFlight",
      airline: "Air India",
      class: "Economy",
      departureTime: "9:40am",
      arrivalTime: "10:55am",
      route: "Kathmandu (KTM) - Delhi (DEL)",
      returnFlightNumber: "FlexFlight",
      returnAirline: "Air India",
      returnClass: "Economy",
      returnDepartureTime: "12:45pm",
      returnArrivalTime: "2:45pm",
      price: "$208",
      tripType: "Round trip per traveler",
    },
    {
      flightNumber: "IndiGo",
      airline: "IndiGo",
      class: "Economy",
      departureTime: "8:00am",
      arrivalTime: "10:30am",
      route: "Kathmandu (KTM) - Delhi (DEL)",
      returnFlightNumber: "IndiGo",
      returnAirline: "IndiGo",
      returnClass: "Economy",
      returnDepartureTime: "3:30pm",
      returnArrivalTime: "6:00pm",
      price: "$185",
      tripType: "Round trip per traveler",
    },
    {
      flightNumber: "Nepal Airlines",
      airline: "Nepal Airlines",
      class: "Business",
      departureTime: "11:00am",
      arrivalTime: "12:45pm",
      route: "Kathmandu (KTM) - Delhi (DEL)",
      returnFlightNumber: "Nepal Airlines",
      returnAirline: "Nepal Airlines",
      returnClass: "Business",
      returnDepartureTime: "5:00pm",
      returnArrivalTime: "6:30pm",
      price: "$300",
      tripType: "Round trip per traveler",
    },
    {
      flightNumber: "Buddha Air",
      airline: "Buddha Air",
      class: "Economy",
      departureTime: "10:00am",
      arrivalTime: "11:30am",
      route: "Kathmandu (KTM) - Pokhara (PKR)",
      returnFlightNumber: "Buddha Air",
      returnAirline: "Buddha Air",
      returnClass: "Economy",
      returnDepartureTime: "3:00pm",
      returnArrivalTime: "4:30pm",
      price: "$150",
      tripType: "Round trip per traveler",
    },
    {
      flightNumber: "Himalaya Airlines",
      airline: "Himalaya Airlines",
      class: "Business",
      departureTime: "9:30am",
      arrivalTime: "11:15am",
      route: "Kathmandu (KTM) - Bangkok (BKK)",
      returnFlightNumber: "Himalaya Airlines",
      returnAirline: "Himalaya Airlines",
      returnClass: "Business",
      returnDepartureTime: "7:00pm",
      returnArrivalTime: "9:00pm",
      price: "$500",
      tripType: "Round trip per traveler",
    },
    {
      flightNumber: "Yeti Airlines",
      airline: "Yeti Airlines",
      class: "Economy",
      departureTime: "8:00am",
      arrivalTime: "9:45am",
      route: "Kathmandu (KTM) - Biratnagar (BIR)",
      returnFlightNumber: "Yeti Airlines",
      returnAirline: "Yeti Airlines",
      returnClass: "Economy",
      returnDepartureTime: "4:00pm",
      returnArrivalTime: "5:45pm",
      price: "$120",
      tripType: "Round trip per traveler",
    },
    {
      flightNumber: "Thai Airways",
      airline: "Thai Airways",
      class: "Premium Economy",
      departureTime: "2:00pm",
      arrivalTime: "6:00pm",
      route: "Kathmandu (KTM) - Singapore (SIN)",
      returnFlightNumber: "Thai Airways",
      returnAirline: "Thai Airways",
      returnClass: "Premium Economy",
      returnDepartureTime: "9:00am",
      returnArrivalTime: "1:00pm",
      price: "$700",
      tripType: "Round trip per traveler",
    },
    {
      flightNumber: "Qatar Airways",
      airline: "Qatar Airways",
      class: "First Class",
      departureTime: "6:00am",
      arrivalTime: "8:45am",
      route: "Kathmandu (KTM) - Doha (DOH)",
      returnFlightNumber: "Qatar Airways",
      returnAirline: "Qatar Airways",
      returnClass: "First Class",
      returnDepartureTime: "5:00pm",
      returnArrivalTime: "7:45pm",
      price: "$1000",
      tripType: "Round trip per traveler",
    },  
  ];

  const scrollRef = useRef(null);
  const [showPrev, setShowPrev] = useState(false);

  const handleScroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollBy({ left: -300, behavior: "smooth" });
    } else if (direction === "right") {
      current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleScrollEvent = () => {
    const { current } = scrollRef;
    if (current.scrollLeft > 0) {
      setShowPrev(true);
    } else {
      setShowPrev(false);
    }
  };

  useEffect(() => {
    const { current } = scrollRef;
    if (current) {
      current.addEventListener("scroll", handleScrollEvent);
      // Cleanup listener on unmount
      return () => current.removeEventListener("scroll", handleScrollEvent);
    }
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Discover Flights</h2>
      <div className="relative group">
        {showPrev && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Prev
          </button>
        )}
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll scrollbar-hide space-x-4 p-2"
        >
          {flightsData.map((flight, index) => (
            <div
              key={index}
              className="min-w-[270px] max-w-[320px] bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <p className="text-xs font-medium text-gray-800 flex justify-start items-center gap-1"><GiCommercialAirplane/>{flight.flightNumber}</p>
                  <p className="text-xs font-medium text-gray-800">{flight.class}</p>
                </div>
                {/* <p className="text-sm text-gray-500">{flight.airline}</p> */}
                <p className="mt-2">
                  <span className="font-bold text-gray-700">
                    {flight.departureTime} - {flight.arrivalTime}
                  </span>
                </p>
                <p className="text-sm text-gray-600 font-medium mt-2">{flight.route}</p>
                <hr className="my-4"/>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-medium text-gray-800 flex justify-start items-center gap-1"><GiCommercialAirplane/>{flight.returnFlightNumber}</p>
                  <p className="text-xs font-medium text-gray-800">{flight.returnClass}</p>
                </div>
                <p className="mt-2">
                  <span className="font-bold text-gray-700">
                    {flight.returnDepartureTime} - {flight.returnArrivalTime}
                  </span>
                </p>
                <p className="text-sm text-gray-600 font-medium mt-2">{flight.route}</p>
                <div>
                <p className="text-lg font-bold text-gray-800 text-end mt-4">{flight.price}</p>
                <p className="text-sm text-gray-500 text-end">{flight.tripType}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Next
        </button>
      </div>
      <div className="flex justify-between items-center py-2">
        <button className="text-white font-medium bg-blue-600 px-4 py-2 rounded-full text-md hover:bg-blue-800">See all flights</button>
        <button className="text-blue-600 font-medium text-sm underline hover:text-blue-800">Terms and conditions apply</button>
      </div>
    </div>
  );
};

export default DiscoverFlights;
