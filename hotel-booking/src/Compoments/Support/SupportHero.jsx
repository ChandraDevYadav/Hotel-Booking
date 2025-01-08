import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SupportHero = () => {
  return (
    <div>
        <h1 className='text-4xl font-bold text-center py-14'>Welcome to Help Center</h1>
        <div className='flex justify-start items-center gap-4 mb-4'>
            <div className='relative w-full'>
                <input type="text" placeholder='How can we help?' className='w-full py-3 px-12 placeholder:text-gray-800 rounded-lg border border-gray-400' />
                <div className='absolute top-4 left-4'>
                    <FaSearch className='text-xl'/>
                </div>
            </div>
            <button className='bg-blue-600 text-white px-8 font-medium py-3 rounded-lg'>Search</button>
        </div>
    </div>
  )
}

export default SupportHero