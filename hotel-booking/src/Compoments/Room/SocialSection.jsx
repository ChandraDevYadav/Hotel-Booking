import React from 'react'

const SocialSection = () => {
    return (
        <div className='px-4'>
            <div className="grid grid-cols-1 md:grid-cols-6 justify-start items-start gap-0 md:gap-4 border border-black mt-6 rounded-xl">
                <div className='col-span-2'>
                    <img src="/h1.jpg" alt="" className='object-fill rounded-l-none md:rounded-l-xl rounded-tl-xl md:rounded-tl-none rounded-t-xl md:rounded-t-none' />
                </div>
                <div className='col-span-3 px-4 md:px-0'>
                    <p className='text-2xl md:text-3xl font-semibold mt-10'>Go further with the Expedia app</p>
                    <p className='text-sm text-gray-600 font-medium my-4'>Save even more - get up to 20% on select hotels when you book on the app. Our app deals help you to save on trips so you can travel more and manage it all on the go.</p>
                    <p className='text-gray-700 text-md'>Scan the QR code with your device camera and download our app</p>
                </div>
                <div className='p-16 md:p-0'>
                    <img src="/qr-code.png" alt="" className='object-fill mt-10 pr-0 md:pr-4' />
                </div>
            </div>
        </div>
    )
}

export default SocialSection