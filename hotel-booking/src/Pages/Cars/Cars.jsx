import React, { useState } from 'react'
import MainTabs from '../../Compoments/Cars/CarTabs'
import SocialSection from '../../Compoments/Room/SocialSection';
import HotelList from '../../Compoments/MainHome/HotelList';
import Detail from '../../Compoments/ListYourProperty/Detail';
import NextTrip from '../../Compoments/ListYourProperty/NextTrip';
import PopularRentalCarChoices from '../../Compoments/Cars/PopularRentalCarChoices';
import TrendingCarDestinations from '../../Compoments/Cars/TrendingCarDestinations';
import Advertisement from '../../Compoments/Cars/Advertisement';

const Cars = () => {

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);
  const handleConfirm = () => {
    console.log("Confirmed!");
    setIsDialogOpen(false);
  };

  return (
    <div className='px-44 pb-6'>
      <MainTabs />
      <NextTrip />
      <PopularRentalCarChoices />
      <TrendingCarDestinations />
      <Advertisement />
      <Detail />
      <HotelList />
      <div className='mb-6'>
        <SocialSection />
      </div>
    </div>
  )
}

export default Cars