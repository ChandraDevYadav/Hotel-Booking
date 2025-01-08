import React from 'react'
import SupportHero from '../../Compoments/Support/SupportHero'
import SupportDetail from '../../Compoments/Support/SupportDetail'
import SocialSection from '../../Compoments/Room/SocialSection'

const Support = () => {
  return (
    <div className='px-44 py-6'>
        <SupportHero/>
        <SupportDetail/>
        <SocialSection/>
    </div>
  )
}

export default Support