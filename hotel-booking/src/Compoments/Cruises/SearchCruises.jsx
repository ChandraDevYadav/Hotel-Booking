import React from 'react'
import { FaCheck } from 'react-icons/fa6'
import DurationDropdown from './DurationDropdown'
import PlacesSearch from '../ThingToDo/PlaceSearch'
import CruisesDate from './CruisesDate'

const SearchCruises = () => {
  return (
    <div>
        <h1 className='text-4xl font-semibold text-gray-800 mt-4'>Find Discount Cruise Deals</h1>
        <p className='text-sm font-medium text-gray-700 px-4 pt-6'>For expert cruise advice, call 1-866-403-9848.</p>
        <div className='flex justify-start items-center gap-4 px-4'>
                <div className="w-full">
                    <PlacesSearch />
                </div>
                <div className="flex justify-between w-full">
                    {/* Date Pickers */}
                    <div className="w-full">
                        <CruisesDate type="Check-In" />
                    </div>
                </div>
                <div className="flex justify-between w-full gap-2">
                    {/* Date Pickers */}
                    <div className="w-full">
                        <DurationDropdown />
                    </div>
                </div>
                <button type="submit" className="bg-blue-600 font-medium text-white py-3 px-6 rounded-full">
                    Search
                </button>
            </div>
            
    </div>
  )
}

export default SearchCruises