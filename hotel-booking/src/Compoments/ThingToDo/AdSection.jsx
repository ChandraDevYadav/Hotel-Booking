import React from 'react'
import { FaI, FaX } from 'react-icons/fa6'
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from 'react-router-dom'

const AdSection = () => {
    return (
        <div>
            <div>
                <div className='grid grid-cols-6 gap-8 my-4 pb-6 border-b border-b-gray-300'>
                    <div className='col-span-4 border border-gray-300 rounded-xl relative'>
                        <div className=''>
                            <img src="/be7.jpg" alt="" className='w-full h-60 rounded-t-xl' />
                            <div className='flex justify-start items-center gap-6 py-3 px-10'>
                                <div>
                                    <img src="/bl1.png" alt="" className='w-16 h-16' />
                                </div>
                            <div>
                            <p className='text-lg font-semibold text-gray-800 mt-2'>Explore hidden adventure trekking and hiking sites.</p>
                            <p className='text-gray-800 text-sm font-medium'>Discover the Nepal adventurer site to explore the height and site seens around.</p>
                            </div>
                            </div>
                        </div>
                        <div className='absolute top-2 left-2'>
                            <Link to='' className='text-xs font-medium bg-white px-2 py-1'>Ad</Link>
                        </div>
                        <div className='flex justify-start items-center'>
                        <div className='absolute top-2 right-8 bg-white'>
                        <Link to='' className='text-xl text-blue-600'><AiOutlineInfoCircle /></Link>
                        </div>
                        <div className='absolute top-2 right-2 bg-white p-1'>
                        <Link to='' className='text-xs text-blue-600'><FaX /></Link>
                        </div>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className='grid grid-cols-6 justify-start items-center gap-4 border border-gray-300 rounded-xl'>
                            <div className='col-span-2'>
                                <img src="/be1.jpg" alt="" className='h-40 rounded-l-xl' />
                            </div>
                            <div className='col-span-4'>
                                <h1 className='text-lg text-gray-800 font-medium'>Everest Basecamp Treking</h1>
                                <p className='text-sm text-gray-700'>Explore the beautiful hiking and trekking throughout</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-6 justify-start items-center gap-4 border border-gray-300 rounded-xl mt-2'>
                            <div className='col-span-2'>
                                <img src="/be2.jpg" alt="" className='h-40 rounded-l-xl' />
                            </div>
                            <div className='col-span-4'>
                                <h1 className='text-lg text-gray-800 font-medium'>Annapurna Basecamp Treking</h1>
                                <p className='text-sm text-gray-700'>Explore the beautiful hiking and trekking throughout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdSection