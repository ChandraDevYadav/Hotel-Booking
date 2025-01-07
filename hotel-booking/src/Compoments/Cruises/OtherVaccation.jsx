import React from "react";

const hotelData = {
  topCruisesDestinations: [
    "Cruises to Alaska",
    "Cruises to Bahamas",
    "Cruises to Caribbean",
    "Cruises to Europe",
    "Cruises to Hawaii",
    "Cruises to Mexico",
  ],
  topUsCruisesDeparture: [
    "Cruises from Boston",
    "Cruises from Fort Lauderdale",
    "Cruises from Galveston",
    "Cruises from Honolulu",
    "Cruises from Los Angeles",
    "Cruises from Miami",
    "Cruises from New Orleans",
    "Cruises from New York",
    "Cruises from Port Canaveral",
    "Cruises from San Diego",
    "Cruises from San Juan",
    "Cruises from San Francisco",
    "Cruises from Seattle",
    "Cruises from Tampa",
  ],
  topCruisesLine: [
    "Carnival Cruise Lines",
    "Holland America Line",
    "MSC Cruises",
    "Norwegian Cruise Line",
    "Princess Cruises",
    "Royal Caribbean International",
  ],
};

const OtherVaccation = () => {
  const { topCruisesDestinations, topUsCruisesDeparture, topCruisesLine } = hotelData;

  return (
    <div className="py-8">
      <h1 className="text-3xl font-semibold text-gray-900">
      Other vacations you might like</h1>
      <p className="text-sm font-medium text-blue-600 w-full md:w-[24%] border-b-[3px] px-4 border-blue-600 py-4">Explore a world of travel with Expedia</p>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 h-[180px] overflow-y-auto border-t">
        {/* Top Cruises Line */}
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2">Top Cruise Lines</h2>
          <div className="grid grid-cols-2 gap-2">
            {topCruisesLine.map((line, index) => (
              <p
                key={`line-${index}`}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
        {/* Top Destinations */}
        <div>
          <h2 className="text-lg font-bold mb-2 mt-4">Top Cruise Destinations</h2>
          <div className="grid grid-cols-2 gap-2">
            {topCruisesDestinations.map((destination, index) => (
              <p
                key={`destination-${index}`}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {destination}
              </p>
            ))}
          </div>
        </div>
        {/* Top Cities */}
        <div>
          <h2 className="text-lg font-bold mb-2">Top US Cruise Departure Ports</h2>
          <div className="grid grid-cols-2 gap-2">
            {topUsCruisesDeparture.map((city, index) => (
              <p
                key={`city-${index}`}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {city}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherVaccation;
