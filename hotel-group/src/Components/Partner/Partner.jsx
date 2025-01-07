import React from 'react'
import YouTubePlayer from './YouTubePlayer'

const Partner = () => {
    return (
        <div className='px-48 pt-16'>
            <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col justify-center items-start'>
                    <h1 className='text-2xl font-bold'>Drive demand like our hotel partners</h1>
                    <p className='py-3 pr-20'>Hear how Expedia Group helps Edwardian Hotels London reach higher-value travelers across our global market from Commercial Director Hasnain Alloo.</p>
                    <a className='text-blue-600 underline font-bold' href=''>List your property</a>
                </div>
                <div>
                    <YouTubePlayer/>
                </div>
            </div>
        </div>
    )
}

export default Partner