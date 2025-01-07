import React from 'react'
import SearchCruises from '../../Compoments/Cruises/SearchCruises'
import ImageOverlay from '../../Compoments/Cruises/ImageOverlay'
import CruisesAds from '../../Compoments/Cruises/CruisesAds'
import PopularCruises from '../../Compoments/Cruises/PopularCruises'
import DeparturePorts from '../../Compoments/Cruises/DeparturePorts'
import PopularCruiseLines from '../../Compoments/Cruises/PopularCruiseLines'
import CruiseAbout from '../../Compoments/Cruises/CruiseAbout'
import OtherVaccation from '../../Compoments/Cruises/OtherVaccation'

const Cruises = () => {
  return (
    <div className='px-40'>
      <SearchCruises/>
      <ImageOverlay/>
      <CruisesAds/>
      <PopularCruises/>
      <DeparturePorts/>
      <PopularCruiseLines/>
      <CruiseAbout/>
      <OtherVaccation/>
    </div>
  )
}

export default Cruises