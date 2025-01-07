import React from 'react'
import Dropdown from './DropDown'
import { MdDownload, MdMessage } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom"

const MainNav = () => {
    return (
        <div>
            <div className='hidden md:block'>
            <div className='flex justify-around items-center w-full bg-white z-50 shadow-sm border-b border-gray-200 py-4'>
                <div className='flex justify-start items-center gap-4'>
                    <Link to='/mainhome' className='flex justify-start items-center gap-3'>
                        <img src="/logo.png" alt="" className='w-8 h-8' />
                        <h1 className='font-medium text-2xl'>StayEase</h1>
                    </Link>
                    <div>
                        <Dropdown />
                    </div>
                </div>
                <div className='flex justify-start items-center gap-4'>
                    <button className='font-semibold border border-gray-600 rounded-lg px-3 py-2 flex justify-start items-center gap-2'><MdDownload /> Get The App</button>
                    <button className='font-semibold rounded-lg px-3 py-2 flex justify-start items-center gap-2'><BsGlobe /> English</button>
                    <Link to='/listproperty' className=''>List Your Property</Link>
                    <p className=''>Support</p>
                    <p className=''>Trips</p>
                    <p className=' text-2xl'><MdMessage />
                    </p>
                    <p className=''>Sign In</p>
                </div>

            </div>
            </div>
            <div className='block md:hidden'>
                <div className='flex justify-between items-center px-2 py-4'>
                <div className='flex justify-start items-center'>
                    <img src="/logo.png" alt="" className='w-8 h-8' /> 
                    <h1 className='font-medium text-lg'>StayEase</h1>
                </div>
                <div className='flex justify-start items-center gap-2'>
                    <button className='border border-gray-400 rounded-full px-4 py-1 flex justify-start items-center gap-1 text-sm'><MdDownload className='text-xl'/> Get the app</button>
                    <FaUserCircle className='text-3xl'/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default MainNav