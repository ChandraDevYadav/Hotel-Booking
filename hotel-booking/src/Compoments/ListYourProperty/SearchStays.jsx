import React from 'react'
import { FaCheck } from 'react-icons/fa6'
import PlacesSearch from '../MainHome/Stays/PlaceSearch'
import DatePicker from '../MainHome/Stays/DatePickerWithTabs'
import PersonPicker from '../MainHome/Stays/PersonPicker'

const SearchStays = () => {
  return (
    <div>
        <h1 className='text-4xl font-semibold text-gray-800 mt-6'>Search Stays</h1>
        <div className='flex justify-start items-center gap-6'>
                <div className="w-full">
                    <PlacesSearch />
                </div>
                <div className="flex justify-between w-full gap-2">
                    {/* Date Pickers */}
                    <div className="w-full">
                        <DatePicker type="Check-In" />
                    </div>
                </div>
                <div className="flex justify-between w-full gap-2">
                    {/* Date Pickers */}
                    <div className="w-full">
                        <PersonPicker />
                    </div>
                </div>
                <button type="submit" className="bg-blue-600 font-medium text-white py-3 px-6 rounded">
                    Search
                </button>
            </div>
            <div className='flex justify-start items-center gap-6'>
                <div className='flex justify-start items-center gap-2'>
                <input type="checkbox" name="" id="" className='w-4 h-4' />
                <label htmlFor="">Add a flight</label>
                </div>
                <div className='flex justify-start items-center gap-2'>
                <input type="checkbox" name="" id="" className='w-4 h-4' />
                <label htmlFor="">Add a car</label>
                </div>
            </div>
            <div className='flex justify-start items-center gap-6 px-4 py-6'>
                <div className='flex justify-start items-center gap-3'>
                <FaCheck className='w-6 h-6' />
                <p className='text-sm text-gray-900'>Most hotels are fully refundable. Because flexibility matters.</p>
                </div>
                <div className='flex justify-start items-center gap-3'>
                <FaCheck className='w-6 h-6' />
                <p className='text-sm text-gray-900'>As a One Key member you can save 10% or more on over 100,000 hotels worldwide.</p>
                </div>
                <div className='flex justify-start items-center gap-3'>
                <FaCheck className='w-6 h-6' />
                <p className='text-sm text-gray-900'>Save up to 30% when you add a hotel to your flight as a One Key member.</p>
                </div>
            </div>
    </div>
  )
}

export default SearchStays