import React from 'react'
import AirToHotelPlaceSearch from './AirToHotel/AirToHotelPlaceSearch'
import PersonPicker from './AirToHotel/PersonPicker'
import CarDatePicker from './CarDatePicker'
import PickupDropoffTime from './AirToHotel/ArrivalTime'

const AirToHotel = () => {
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
            <div className='w-full'>
                <PickupDropoffTime/>
            </div>
            </div>
            <div>
                <button className='bg-blue-600 text-white px-4 py-3 font-medium rounded-full'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default AirToHotel