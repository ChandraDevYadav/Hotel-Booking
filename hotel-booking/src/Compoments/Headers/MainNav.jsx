import React from 'react'
import Dropdown from './DropDown'
import { MdDownload, MdMessage } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";

const MainNav = () => {
  return (
    <div>
        <div className='flex justify-around items-center fixed top-0 w-full bg-white z-50 shadow-lg border-b border-gray-400 py-4'>
            <div className='flex justify-start items-center gap-4'>
                <div className='flex justify-start items-center gap-3'>
                <img src="/logo.png" alt="" className='w-8 h-8'/>
                <h1 className='font-medium text-2xl'>StayEase</h1>
                </div>
                <div>
                    <Dropdown/>
                </div>
            </div>
            <div className='flex justify-start items-center gap-4'>
                <button className='font-semibold border border-gray-600 rounded-lg px-3 py-2 flex justify-start items-center gap-2'><MdDownload/> Get The App</button>
                <button className='font-semibold rounded-lg px-3 py-2 flex justify-start items-center gap-2'><BsGlobe/> English</button>
                <p className=''>List Your Property</p>
                <p className=''>Support</p>
                <p className=''>Trips</p>
                <p className=' text-2xl'><MdMessage />
                </p>
                <p className=''>Sign In</p>
            </div>
            
        </div>
    </div>
  )
}

export default MainNav