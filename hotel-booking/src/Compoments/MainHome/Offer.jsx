import React from 'react'

const Offer = () => {
    return (
        <div>
            <div className='relative pb-10 pt-2'>
                <div className='grid grid-cols-1 md:grid-cols-4 bg-gray-200 rounded-xl shadow'>
                    <div className='col-span-2 pl-10 pt-8'>
                        <button className='bg-gray-900 px-2 py-1 text-sm font-medium text-white rounded'>New</button>
                        <h1 className='text-lg text-gray-900 font-bold mt-4'>Earn up to $400 in OneKeyCash™</h1>
                        <p className='text-sm text-gray-600 font-medium mt-1 mb-4 leading-relaxed'>after qualifying purchases. Terms apply. <br /> OneKeyCash is not redeemable for cash.</p>
                        <button className='bg-white text-blue-700 px-4 py-2 mb-4 md:mb-0 rounded-full border font-semibold border-gray-300'>Learn more</button>
                    </div>
                    <div className='col-span-2 relative'>
                        <div className=''>
                            <img src="/bit2.jpg" alt="" className='w-full h-60 rounded-r-xl' />
                        </div>
                        <div className='absolute -left-16 top-8 hidden md:block'>
                            <img src="/co.png" alt="" className='w-full h-44' />
                        </div>
                    </div>
                </div>
                <div className='absolute'>

                </div>
            </div>
        </div>
    )
}

export default Offer