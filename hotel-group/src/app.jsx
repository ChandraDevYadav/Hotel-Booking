import './app.css'
import CookiesAlert from './Components/Cookies/Cookies'
import Footer from './Components/Footer/Footer'
import FreqAsk from './Components/FrequentlyAsk/FreqAsk'
import Navbar from './Components/Header/Navbar'
import Hero from './Components/HeroSec/Hero'
import ListProperty from './Components/ListProperty/ListProperty'
import MemGroup from './Components/MemberGroup/MemGroup'
import Partner from './Components/Partner/Partner'
import Slogon from './Components/Slogon/Slogon'

export function App() {

  return (
    <>
      <CookiesAlert/>
      <Navbar/>
      <Hero/>
      <Slogon/>
      <MemGroup/>
      <Partner/>
      <FreqAsk/>
      <ListProperty/>
      <Footer/>
    </>
  )
}
