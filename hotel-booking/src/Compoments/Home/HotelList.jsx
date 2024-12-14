import React from "react";

const hotelData = {
  topDestinations: [
    "United States of America Luxury Hotels",
    "Australia Luxury Hotels",
    "California Luxury Hotels",
    "Canada Luxury Hotels",
    "Florida Luxury Hotels",
    "New South Wales Luxury Hotels",
    "Texas Luxury Hotels",
    "United Kingdom Luxury Hotels",
    "Japan Luxury Hotels",
    "England Luxury Hotels",
    "Victoria Luxury Hotels",
    "North Carolina Luxury Hotels",
    "Queensland Luxury Hotels",
    "New York Luxury Hotels",
    "Arizona Luxury Hotels",
    "New Jersey Luxury Hotels",
    "Mexico Luxury Hotels",
    "Ontario Luxury Hotels",
    "Washington Luxury Hotels",
    "Michigan Luxury Hotels"
  ],
  topCities: [
    "Big Bear Lake Luxury Hotels",
    "Wildwood Luxury Hotels",
    "Zion National Park Luxury Hotels",
    "Pocono Mountains Luxury Hotels",
    "Fredericksburg Luxury Hotels",
    "Yellowstone National Park Luxury Hotels",
    "Gulf Shores Luxury Hotels",
    "Shreveport Luxury Hotels",
    "Mount Rushmore Luxury Hotels",
    "Grand Canyon Luxury Hotels",
    "Punta Gorda Luxury Hotels",
    "Cocoa Beach Luxury Hotels",
    "Columbia Luxury Hotels",
    "Lexington Luxury Hotels",
    "Flagstaff Luxury Hotels"
  ],
  themes: [
    "Hotels with Air Conditioning",
    "All-inclusive Resorts",
    "Hotels with Balconies",
    "Hotels with Bars",
    "Beach Hotels",
    "Boutique Hotels",
    "Cheap Hotels",
    "Business Hotels",
    "Casinos",
    "Hotels with Childcare",
    "Hotel with a Concierge",
    "Hotels with Connecting Rooms",
    "Hotels with Restaurants",
    "Family Hotels",
    "Hotels with Fireplaces",
    "Fishing Resorts & Hotels",
    "Hotels with a Gym",
    "Hotels with Free Airport Shuttle",
    "Hotels with Free Breakfast",
    "Hotels with Free Parking",
    "Hotels with Free Wifi",
    "Golf Hotels",
    "Historic Hotels",
    "Hotels with Hot Tubs",
    "Hotels with an Indoor Pool",
    "Rainforest & Jungle Hotels",
    "Extended Stay Hotels",
    "Hotels with Kitchenettes",
    "Hotels on the Lake",
    "Hotels with Laundry Facilities",
    "Hotels with a Lazy River",
    "Gay friendly Hotels",
    "Honeymoon Resorts & Hotels",
    "Non-Smoking Hotels",
    "Oceanfront Hotels",
    "Hotels with an Outdoor Pool",
    "Pet-friendly Hotels",
    "Hotels with a Pool",
    "Hotels & Resorts for Couples",
    "Hotels on the River",
    "Romantic Hotels",
    "Hotels with Room Service",
    "Quiet Resorts & Hotels",
    "Ski Hotels",
    "Hotels with smoking rooms",
    "Resorts & Hotels with Spas",
    "Hotels with Suites",
    "Green Hotels",
    "Hotels with a Swim-up Bar",
    "Hotels with Tennis Courts",
    "Hotels with a View",
    "Waterpark Hotels",
    "Hotels with Waterslides",
    "Hotel Wedding Venues",
    "Winery Hotels"
  ]
};

const HotelList = () => {
  const { topDestinations, topCities, themes } = hotelData;

  return (
    <div className="px-4 md:px-44 pb-8">
      <h1 className="text-sm font-medium text-blue-600 -w-[100%] md:w-[24%] border-b-[3px] px-2 border-blue-600 pb-2">Explore a world of travel with StayEase</h1>
      <div className="h-44 grid grid-cols-1 md:grid-cols-2 overflow-y-auto border-t p-4">
        {/* Themes */}
        <div>
          <h2 className="text-lg font-bold mb-2">Themes</h2>
          {themes.map((theme, index) => (
            <p key={`theme-${index}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-2">
              {theme}
            </p>
          ))}
        </div>
        {/* Top Destinations */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Top Destinations for Luxury Hotels</h2>
          {topDestinations.map((destination, index) => (
            <p key={`destination-${index}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-2">
              {destination}
            </p>
          ))}
        </div>

        {/* Top Cities */}
        <div className="my-6">
          <h2 className="text-lg font-bold mb-2">Top Cities for Luxury Hotels</h2>
          {topCities.map((city, index) => (
            <p key={`city-${index}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-2">
              {city}
            </p>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HotelList;
