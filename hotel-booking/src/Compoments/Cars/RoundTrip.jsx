import React from 'react';
import AirToHotelPlaceSearch from './AirToHotel/AirToHotelPlaceSearch';
import PersonPicker from './AirToHotel/PersonPicker';
import CarDatePicker from './CarDatePicker';
import PickupDropoffTime from './AirToHotel/ArrivalTime';

const RoundTrip = () => {
  return (
    <div className="px-1 sm:px-6 md:px-8">
      <div>
        <AirToHotelPlaceSearch />
      </div>

      <div className="flex flex-col sm:flex-row justify-start items-center gap-4 my-4">
        <div className="w-full sm:w-1/2">
          <PersonPicker />
        </div>
        <div className="w-full sm:w-1/2">
          <CarDatePicker />
        </div>
      </div>

      <div className="w-full">
        <PickupDropoffTime />
      </div>

      <div>
        <button className="bg-blue-600 text-white px-4 py-3 font-medium rounded-full mt-4 w-full sm:w-auto">
          Search
        </button>
      </div>
    </div>
  );
};

export default RoundTrip;
