import React from 'react'
import MainTabs from '../../Compoments/MainHome/MainTabs'
import TravelCard from '../../Compoments/MainHome/Stays/TravelCard'
import Deals from '../../Compoments/MainHome/Stays/Deals'
import RecentlyViewed from '../../Compoments/MainHome/Stays/RecentlyViewed'
import Offer from '../../Compoments/MainHome/Offer'
import DiscoverStay from '../../Compoments/MainHome/DiscoverStay'
import RecommendedStays from '../../Compoments/MainHome/RecommendedStays'
import Saving from '../../Compoments/MainHome/Saving'
import PopDestTabs from '../../Compoments/MainHome/PopDestTabs'
import DiscoverFlights from '../../Compoments/MainHome/DiscoverFlights'
import WeekendDeals from '../../Compoments/MainHome/WeekendDeals'
import ExplorePackagesTabs from '../../Compoments/MainHome/ExplorePackagesTabs'
import ExploreHighlights from '../../Compoments/MainHome/ExploreHighlights'
import TravelDeals from '../../Compoments/MainHome/TravelDeals'
import HotelList from '../../Compoments/MainHome/HotelList'
import SocialSection from '../../Compoments/Room/SocialSection'

const MainHome = () => {
  return (
    <div className='px-40'>
        <MainTabs/>
        <Deals/>
        <TravelCard/>
        <RecentlyViewed/>
        <Offer/>
        <DiscoverStay/>
        <RecommendedStays/>
        <Saving/>
        <PopDestTabs/>
        <DiscoverFlights/>
        <WeekendDeals/>
        <ExplorePackagesTabs/>
        <ExploreHighlights/>
        <TravelDeals/>
        <HotelList/>
        <div className='mb-6'>
        <SocialSection/>
        </div>
    </div>
  )
}

export default MainHome