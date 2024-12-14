import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import HotelDetail from './Pages/HotelDetail/HotelDetail';
import Payment from './Pages/Payment/Payment';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/hoteldetail' element={<HotelDetail />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
    </>
  )
}

export default App
