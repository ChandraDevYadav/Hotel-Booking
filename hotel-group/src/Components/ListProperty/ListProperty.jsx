import React from 'react'

const ListProperty = () => {
    return (
        <div className='flex justify-center items-center bg-gray-200 pt-14 pb-6'>
            <div>
                <h1 className='text-center text-2xl font-bold text-gray-800'>Ready to get started?</h1>
                <p className='text-center my-3 text-gray-900'>Join us today and unlock access to high-value guests.</p>
                <div className='flex justify-center'>
                <button className='bg-blue-800 text-white font-semibold px-4 py-3'>List your property</button>
                </div>
                <p className='text-center mt-10 text-gray-900'>Already a partner with Expedia Group?</p>
            </div>
        </div>
    )
}

export default ListProperty