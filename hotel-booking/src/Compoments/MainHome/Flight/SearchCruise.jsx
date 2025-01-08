import React from 'react'
import PlacesSearch from '../Stays/PlaceSearch'
import CruisesDate from '../../Cruises/CruisesDate'
import DurationDropdown from '../../Cruises/DurationDropdown'

const SearchCruises = () => {
  return (
    <div>
        <p className='text-sm md:text-sm font-medium text-gray-700 px-1 md:px-4 pb-2'>For expert cruise advice, call 1-866-403-9848.</p>
        <div className='flex flex-col md:flex-row justify-start items-center gap-4 px-0 md:px-4 pb-6'>
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