import React from 'react'
import PlacesSearchDropdown from './PlacesSearchDropdown'
import DatePicker from './CalendarOnlyDatePicker'
import CalendarOnlyDatePicker from './CalendarOnlyDatePicker'

const Search = () => {
  return (
    <div className='px-44 py-3'>
        <h1 className='text-5xl font-semibold'>Family Hotels</h1>
        <div className='flex justify-start items-center gap-4'>
        <div>
            <PlacesSearchDropdown/>
        </div>
        <div>
            <CalendarOnlyDatePicker/>
        </div>
        </div>
    </div>
  )
}

export default Search