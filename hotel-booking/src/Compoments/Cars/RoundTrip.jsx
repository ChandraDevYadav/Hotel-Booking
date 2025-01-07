import React from 'react'
import AirToHotelPlaceSearch from './AirToHotel/AirToHotelPlaceSearch'
import PersonPicker from './AirToHotel/PersonPicker'
import CarDatePicker from './CarDatePicker'
import PickupDropoffTime from './AirToHotel/ArrivalTime'

const RoundTrip = () => {
  return (
    <div>
        <div>
            <div>
                <AirToHotelPlaceSearch/>
            </div>
            <div className='flex justify-start items-center gap-4 my-4'>
            <div className='w-full'>
                <PersonPicker/>
            </div>
            <div className='w-full'>
                <CarDatePicker/>
            </div>
            </div>
            <div className='w-full'>
                <PickupDropoffTime/>
            </div>
            <div>
                <button className='bg-blue-600 text-white px-4 py-3 font-medium rounded-full mt-4'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default RoundTrip