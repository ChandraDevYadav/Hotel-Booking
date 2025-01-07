import React from 'react'
import PickUpPlace from './PickUpPlace'
import CarDatePicker from './CarDatePicker'
import PickupDropoffTime from './TimeDropdown'
import AirToHotelPlaceSearch from './AirToHotel/AirToHotelPlaceSearch'

const RentalCars = () => {
  return (
    <div className='grid grid-cols-9 justify-start items-center gap-3'>
        <div className='col-span-3'>
        <AirToHotelPlaceSearch/>
        </div>
        <div className='col-span-2'>
        <CarDatePicker/>
        </div>
        <div className='col-span-3'>
        <PickupDropoffTime/>
        </div>
        <div className=''>
        <button className='bg-blue-600 w-full text-white font-medium px-4 py-3 rounded-full'>Search</button>
        </div>
    </div>
  )
}

export default RentalCars