import React from 'react'

const Saving = () => {
    return (
        <div className='py-8'>
            <div className='relative rounded-xl'>
                <img src="/str1.jpg" alt="" className='w-full h-[32rem] rounded-xl' />
                <div className='bg-white absolute top-32 left-14 rounded-2xl py-6 pl-6 pr-10'>
                    <h1 className='text-4xl font-semibold'>Savings in the city</h1>
                    <p className='my-5'>In the mood for adventure? Treat yourself to <br /> an unforgettable city break and save with <br /> Member Prices.</p>
                    <button className='bg-blue-600 text-white font-medium px-5 py-3 rounded-full'>Unlock your deals</button>
                </div>
            </div>
        </div>
    )
}

export default Saving