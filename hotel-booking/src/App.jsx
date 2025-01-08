import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import HotelDetail from './Pages/HotelDetail/HotelDetail';
import Payment from './Pages/Payment/Payment';
import MainHome from './Pages/MainHome/MainHome';
import ListYourProperty from './Pages/ListYourProperty/ListYourProperty';
import Stay from './Pages/Stay/Stay';
import Flight from './Pages/Flight/Flight';
import Cars from './Pages/Cars/Cars';
import Packages from './Pages/Packages/Packages';
import ThingToDo from './Pages/ThingToDo/ThingToDo';
import Cruises from './Pages/Cruises/Cruises';
import Support from './Pages/Support/Support';
import Trip from './Pages/Trip/Trip';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainHome />} />
        <Route path='/about' element={<About />} />
        <Route path='/hoteldetail' element={<HotelDetail />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/mainhome' element={<Home />} />
        <Route path='/listproperty' element={<ListYourProperty />} />
        <Route path='/stay' element={<Stay />} />
        <Route path='/flight' element={<Flight />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/Packages' element={<Packages />} />
        <Route path='/thingtodo' element={<ThingToDo />} />
        <Route path='/cruises' element={<Cruises />} />
        <Route path='/support' element={<Support />} />
        <Route path='/trip' element={<Trip />} />
      </Routes>
    </>
  )
}

export default App
