import React from 'react'
import FlightsTabs from '../../Compoments/Flight/FlightTab'
import { MdOutlineAirplanemodeActive } from 'react-icons/md'
import { GiPriceTag } from 'react-icons/gi'
import { FaCheckCircle } from 'react-icons/fa'
import NextTrip from '../../Compoments/ListYourProperty/NextTrip'
import RecommendedStays from '../../Compoments/MainHome/RecommendedStays'
import WeekendDeals from '../../Compoments/MainHome/WeekendDeals'
import DiscoverStay from '../../Compoments/MainHome/DiscoverStay'
import BeachDestinations from '../../Compoments/MainHome/PopDesCom/BeachDestinations'
import Detail from '../../Compoments/ListYourProperty/Detail'
import HotelList from '../../Compoments/MainHome/HotelList'
import SocialSection from '../../Compoments/Room/SocialSection'

const Flight = () => {
  return (
    <div className='px-44'>
      <h1 className="text-2xl font-bold my-6">Travel Search</h1>
      <FlightsTabs />
      <div className='flex justify-start items-center gap-6 px-4 py-6'>
        <div className='flex justify-start items-center gap-3'>
          <FaCheckCircle className='w-6 h-6' />
          <p className='text-sm text-gray-900'>Most hotels are fully refundable. Because flexibility matters.</p>
        </div>
        <div className='flex justify-start items-center gap-3'>
          <MdOutlineAirplanemodeActive className='w-6 h-6' />
          <p className='text-sm text-gray-900'>As a One Key member you can save 10% or more on over 100,000 hotels worldwide.</p>
        </div>
        <div className='flex justify-start items-center gap-3'>
          <GiPriceTag className='w-6 h-6' />
          <p className='text-sm text-gray-900'>Save up to 30% when you add a hotel to your flight as a One Key member.</p>
        </div>
      </div>
      <NextTrip />
            <RecommendedStays />
            <WeekendDeals />
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
            <div>
                <h1 className='text-3xl font-semibold text-gray-800 mt-9'>Explore stays in trending destinations</h1>
                <BeachDestinations />
            </div>
            <Detail />
            <HotelList />
            <div className='mb-6'>
                <SocialSection />
            </div>
    </div>
  )
}

export default Flight