import React from 'react'
import PlacesSearch from './PlaceSearch'
import DatePicker from './DatePickerWithTabs'

const ThingToDoSearch = () => {
  return (
    <div>
        <h1 className='text-4xl font-semibold text-gray-800 mb-6'>Search things to do, attractions and activities</h1>
        <p className='text-sm text-gray-700 font-medium mb-3'>Looking for sports, concerts, or music festivals? Search event tickets</p>
        <div className='flex justify-start items-center gap-4'>
                <div className="w-full">
                    <PlacesSearch />
                </div>
                <div className="w-full">
                        <DatePicker type="Check-In" />
                    </div>
                <button type="submit" className="bg-blue-600 font-medium text-white py-3 px-4 rounded-full">
                    Search
                </button>
            </div>
    </div>
  )
}

export default ThingToDoSearch