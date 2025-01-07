import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { GiPriceTag } from 'react-icons/gi'
import { MdOutlineAirplanemodeActive } from 'react-icons/md'
import NextTrip from '../ListYourProperty/NextTrip'
import BeachDestinations from '../MainHome/PopDesCom/BeachDestinations'
import HotelList from '../MainHome/HotelList'
import SocialSection from '../Room/SocialSection'
import ExplorePackagesTabs from './ExplorePackagesTabs'
import VacationCards from './VacationCards'
import Detail from './Detail'
import DiscoverStay from './DiscoverStay'

const MainContent = () => {
  return (
    <div>
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
            <ExplorePackagesTabs />
            <VacationCards/>
            <Detail />
            {/* <WeekendDeals /> */}
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
            <div className='mt-12 mb-4'>
                <h1 className='text-center text-sm font-medium text-gray-800'>Explore a world of travel with Expedia</h1>
                <p className='text-sm text-center font-medium text-blue-600'>Discover new places and experiences</p>
            </div>
            <div className='mb-6'>
                <SocialSection />
            </div>
    </div>
  )
}

export default MainContent