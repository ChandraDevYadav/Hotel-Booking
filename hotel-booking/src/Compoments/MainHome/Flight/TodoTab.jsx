import React from 'react'
import PlacesSearch from '../../ThingToDo/PlaceSearch'
import DatePicker from '../../ThingToDo/DatePickerWithTabs'


const ToDoTab = () => {
  return (
    <div>
        <p className='text-sm text-gray-700 font-medium mb-3'>Looking for sports, concerts, or music festivals? Search event tickets</p>
        <div className='flex flex-col md:flex-row justify-start items-center gap-4'>
                <div className="w-full">
                    <PlacesSearch />
                </div>
                <div className="w-full">
                        <DatePicker type="Check-In" />
                    </div>
                <button type="submit" className="bg-blue-600 font-medium text-white py-3 px-12 md:px-4 rounded-full">
                    Search
                </button>
            </div>
    </div>
  )
}

export default ToDoTab