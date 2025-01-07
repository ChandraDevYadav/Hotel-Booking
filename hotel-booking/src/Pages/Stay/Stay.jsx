import React from 'react'
import SearchStays from '../../Compoments/ListYourProperty/SearchStays'
import NextTrip from '../../Compoments/ListYourProperty/NextTrip'
import RecommendedStays from '../../Compoments/MainHome/RecommendedStays'
import WeekendDeals from '../../Compoments/MainHome/WeekendDeals'
import DiscoverStay from '../../Compoments/MainHome/DiscoverStay'
import BeachDestinations from '../../Compoments/MainHome/PopDesCom/BeachDestinations'
import Detail from '../../Compoments/ListYourProperty/Detail'
import HotelList from '../../Compoments/MainHome/HotelList'
import SocialSection from '../../Compoments/Room/SocialSection'


const Stay = () => {
    return (
        <div className='px-44'>
            <SearchStays />
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

export default Stay