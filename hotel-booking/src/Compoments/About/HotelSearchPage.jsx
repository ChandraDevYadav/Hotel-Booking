import React, { useState } from 'react';
import FilterPanel from './FilterPanel';
import HotelCard from './HotelCard';


const hotels = [
  {
    name: 'Luxury Resort',
    price: 500,
    location: 'Orlando',
    amenities: ['Pool', 'Hot tub', 'Wifi Included'],
    rating: 9,
    type: 'Hotel',
  },
  {
    name: 'Family Villa',
    price: 300,
    location: 'Lake Buena Vista',
    amenities: ['Kitchen', 'Pet friendly', 'Parking'],
    rating: 8,
    type: 'Private vacation home',
  },
  // Add more hotel objects for demo purposes
];

const HotelSearchPage = () => {
  const [filteredHotels, setFilteredHotels] = useState(hotels);

  const handleFilterChange = (filters) => {
    const { priceRange, amenities, type, rating } = filters;

    const updatedHotels = hotels.filter((hotel) => {
      const matchesPrice = hotel.price >= priceRange.min && hotel.price <= priceRange.max;
      const matchesAmenities = amenities.every((amenity) => hotel.amenities.includes(amenity));
      const matchesType = type ? hotel.type === type : true;
      const matchesRating = rating ? hotel.rating >= rating : true;

      return matchesPrice && matchesAmenities && matchesType && matchesRating;
    });

    setFilteredHotels(updatedHotels);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Hotel Search</h1>
      <div className="flex gap-8">
        <FilterPanel onFilterChange={handleFilterChange} />
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredHotels.map((hotel, index) => (
            <HotelCard key={index} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelSearchPage;
