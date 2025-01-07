import React from 'react'

const Footer = () => {
  return (
    <div className='bg-blue-700 px-56 py-12'>
        <div className='flex justify-center items-start gap-24 text-white border-b-2 pb-12'>
            <div>
                <p className='font-semibold'>FAQs</p>
                <p className='font-semibold mt-2'>Sign in</p>
            </div>
            <div>
                <p className='font-semibold'>Inclusion statement</p>
                <p className='font-semibold mt-2'>About Us</p>
            </div>
            <div>
                <img src="/logo.png" className='w-16 h-12' alt="" />
                <p className='text-xs mt-2'>Our lodging partners—inns, hotels, <br /> guesthouses, and more—are supported by <br /> an experienced account management team. <br /> Well-informed on market conditions and <br /> travel trends, they provide insights <br /> and ideas to help you grow your business.</p>
            </div>
        </div>
        <div className='mt-4 text-white text-center'>
            <p className='text-xs'>© 2025 Expedia Group. All rights reserved. Trademarks and logos are the property of their respective owners. Confidential and proprietary.</p>
            <p className='font-medium text-xs'>Terms of Use  |  Privacy Policy  |  Expedia Group Cookie Policy  |  Government Regulations  |  Partner Central Help  |  EU hotel supply agreement</p>
        </div>
    </div>
  )
}

export default Footer