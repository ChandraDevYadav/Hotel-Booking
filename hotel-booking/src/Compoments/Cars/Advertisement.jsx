import React from 'react'
import DiscoverStay from '../MainHome/DiscoverStay'

const Advertisement = () => {
  return (
    <div>
        <div className='border-b border-b-gray-300'>
                <div className='flex justify-start items-center gap-8 px-8 py-6'>
                    <div>
                        <img src="bl2.png" alt="" className='w-12 h-12' />
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold text-gray-800'>Royal Jordanian—enjoy seamless transits</h1>
                        <p className='text-sm text-gray-700 font-medium'>Relax on Aqaba's beaches, discover sparkling Dubai, and explore dynamic Cairo.</p>
                    </div>
                </div>
                <DiscoverStay />
            </div>
    </div>
  )
}

export default Advertisement