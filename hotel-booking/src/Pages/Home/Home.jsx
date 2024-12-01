import React from 'react'
import Hero from '../../Compoments/Home/Hero'
import Search from '../../Compoments/Home/Search'
import Carousel from '../../Compoments/Home/Carousel'
import LuxuryHotels from '../../Compoments/Home/LuxuryHotels'

const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <Search/>
      <Carousel/>
      <LuxuryHotels/>
    </div>
  )
}

export default Home