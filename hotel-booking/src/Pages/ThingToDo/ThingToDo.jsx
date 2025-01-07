import React from 'react'
import ThingToDoSearch from '../../Compoments/ThingToDo/ThingToDoSearch'
import AdSection from '../../Compoments/ThingToDo/AdSection'
import TopThingsToDo from '../../Compoments/ThingToDo/TopThingsToDo'
import TravelActivities from '../../Compoments/ThingToDo/TravelActivities'
import Detail from '../../Compoments/ThingToDo/Detail'
import SocialSection from '../../Compoments/Room/SocialSection'
import HotelList from '../../Compoments/MainHome/HotelList'

const ThingToDo = () => {
  return (
    <div className='px-44 py-4'>
      <ThingToDoSearch/>
      <AdSection/>
      <TopThingsToDo/>
      <TravelActivities/>
      <Detail/>
      <HotelList/>
      <SocialSection/>
    </div>
  )
}

export default ThingToDo