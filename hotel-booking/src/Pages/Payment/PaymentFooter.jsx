import React from 'react'
import { BsLayers } from 'react-icons/bs'

const PaymentFooter = () => {
  return (
    <div className='bg-gray-200 py-4 md:py-12'>
        <div className='flex flex-col md:flex-row justify-center items-center text-sm'>
            <button className='flex justify-start items-center gap-2'>Privacy Policy <BsLayers /></button>
            <button className='flex justify-start items-center gap-2'>Terms of Use <BsLayers /></button>
            <button className='flex justify-start items-center gap-2'>Accessibility <BsLayers /></button>
            <button className='flex justify-start items-center gap-2'>Your Privacy Choices <BsLayers /></button>
        </div>
        <p className='text-center mt-4 text-sm'>© 2024 Expedia, Inc, an Expedia Group Company. All rights reserved.</p>
        <h1 className='text-center text-2xl md:text-3xl font-bold mt-4 text-gray-800'>StayEase Group</h1>
    </div>
  )
}

export default PaymentFooter