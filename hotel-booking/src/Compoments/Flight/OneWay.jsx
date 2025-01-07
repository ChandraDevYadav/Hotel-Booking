import React from 'react'
import FlightSearch from './FlightSearch'
import PersonPicker from './PersonPicker'
import OneWayDatePicker from './OneWayDatePicker'

const OneWay = () => {
  return (
    <div>
        <div className='flex justify-start items-center gap-4 py-4'>
            <div>
                <FlightSearch/>
            </div>
            <div className=''>
                <OneWayDatePicker/>
            </div>
            <div className=''>
                <PersonPicker/>
            </div>
            <div>
                <button className='text-white bg-blue-600 px-10 py-3 rounded-md font-medium'>Search</button>
            </div>
        </div>
        <div className='flex justify-start items-center gap-4 pb-4'>
            <div className='flex justify-start items-center gap-2'>
                <input type="checkbox" className='w-4 h-4' />
                <label htmlFor="" className='text-sm text-gray-800 font-medium'>Add a place to stay</label>
            </div>
            <div className='flex justify-start items-center gap-2'>
                <input type="checkbox" className='w-4 h-4' />
                <label htmlFor="" className='text-sm text-gray-800 font-medium'>Add a car</label>
            </div>
        </div>
    </div>
  )
}

export default OneWay