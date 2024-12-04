import React from 'react'
import Hero from '../../Compoments/Home/Hero'
import Search from '../../Compoments/Home/Search'
import Carousel from '../../Compoments/Home/Carousel'
import LuxuryHotels from '../../Compoments/Home/LuxuryHotels'
import FrequentlyAsked from '../../Compoments/Home/FrequentlyAsked'
import HotelList from '../../Compoments/Home/HotelList'

const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <Search/>
      <Carousel/>
      <LuxuryHotels/>
      <FrequentlyAsked/>
      <HotelList/>
    </div>
  )
}

export default Home