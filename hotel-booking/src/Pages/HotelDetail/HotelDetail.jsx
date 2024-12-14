import React from 'react'
import DetailSearch from '../../Compoments/HotelDetail/DetailSearch'
import Gallery from '../../Compoments/HotelDetail/Gallery'
import { MdOutlineIosShare } from 'react-icons/md'
import { FaHeart } from 'react-icons/fa'
import PageNavigation from '../../Compoments/HotelDetail/PageNavigation'
import SocialSection from '../../Compoments/Room/SocialSection'
import HotelAds from '../../Compoments/HotelDetail/HotelAds'

const HotelDetail = () => {
  return (
    <div className='px-4 md:px-44 py-6'>
      <div className='grid grid-cols-7 gap-2'>
        <div className='col-span-7 md:col-span-6'>
          <DetailSearch />
          <Gallery />
          <PageNavigation />
          
        </div>
        <div className='hidden md:block'>
          <HotelAds/>
        </div>
        <div className='col-span-7'>
        <SocialSection/>
        </div>
      </div>
    </div>
    
  )
}

export default HotelDetail