import React from 'react'

const Slogon = () => {
  return (
    <div className='mt-20 px-24'>
        <h1 className='text-center text-2xl font-semibold text-gray-900'>Bring the right guests within reach</h1>
        <p className='text-center text-md text-gray-800'>Connect with millions of people whose purpose, taste and budget make your property the <br /> perfect place to stay.</p>
        <div className='grid grid-cols-3 gap-4 mt-16'>
            <div className='border-l border-l-blue-400 px-6'>
                <img src="/er.png" alt="" className='w-24 h-24' />
                <h1 className='text-lg font-bold text-blue-800 my-3'>Access a world of travelers</h1>
                <p className='text-sm text-gray-800'>From long-range planners to last-minute bookers, bring travelers to your door from around the world.</p>
            </div>
            <div className='border-l border-l-blue-400 px-6'>
                <img src="/ig.png" alt="" className='w-24 h-24' />
                <h1 className='text-lg font-bold text-blue-800 my-3'>Attract your ideal guests</h1>
                <p className='text-sm text-gray-800'>Book your ideal guests—travelers who delight in what you provide and want to return again and again.</p>
            </div>
            <div className='border-l border-l-blue-400 px-6'>
                <img src="/gb.png" alt="" className='w-24 h-24' />
                <h1 className='text-lg font-bold text-blue-800 my-3'>Grow your business</h1>
                <p className='text-sm text-gray-800'>Make decisions based on real-time data, be more competitive &amp; help increase visibility and bookings.</p>
            </div>
        </div>
    </div>
  )
}

export default Slogon