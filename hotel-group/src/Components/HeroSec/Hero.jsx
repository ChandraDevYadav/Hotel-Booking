import React from 'react'

const Hero = () => {
    return (
        <div>
            <div className="grid grid-cols-2">
                <div>
                    <img src="/bp1.jpg" alt="" className='w-full h-96 rounded-b-full' />
                </div>
                <div>
                    <div className='flex justify-start items-center'>
                        <img src="/logo.png" alt="" className='w-12 h-12' />
                        <p className='text-3xl font-semibold'>EasyStay</p>
                    </div>
                    <p className='text-md text-gray-700 mt-4'>Reach the guests you want—those who truly value your property—with <br /> Expedia Group. Signing up is free, fast, and easy.</p>
                    <div className='bg-white shadow-md px-10 border border-gray-100 py-8 mr-32 rounded-lg mt-6'>
                        <h1 className='text-2xl font-bold text-blue-800 mb-6'>What would you like to list?</h1>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='border-2 border-blue-600 rounded-lg'>
                                <div className='flex flex-col justify-center items-center py-8'>
                                    <img src="/Lodging.svg" alt="" className='w-16 h-12' />
                                    <h1 className='text-xl font-semibold py-2'>Lodging</h1>
                                    <p className='text-xs text-gray-400'>A hotel, motel, or bed and breakfast</p>
                                </div>
                            </div>
                            <div className='border-2 border-blue-600 rounded-lg'>
                                <div className='flex flex-col justify-center items-center py-8'>
                                    <img src="/PrivateResidence.svg" alt="" className='w-16 h-12' />
                                    <h1 className='text-xl font-semibold py-2'>Private residence</h1>
                                    <p className='text-xs text-gray-400'>A private home, apartment, or vacation home</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero