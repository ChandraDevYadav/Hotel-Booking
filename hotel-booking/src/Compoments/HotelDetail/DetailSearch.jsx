import React from 'react'
import PlacesSearchDropdown from '../Home/PlacesSearchDropdown'
import EnhancedDatePicker from '../Home/EnhancedDatePicker'
import AlertDialog from '../Home/AlertDialog'
import { MdOutlineIosShare } from 'react-icons/md'
import { FaHeart } from 'react-icons/fa'
import PageNavigation from './PageNavigation'
import DetailPlaceSearch from './DetailPlacaSearch'
import DetailDatePicker from './DetailDatePicker'
import DetailPersonPicker from './DetailPersonPicker'

const DetailSearch = () => {
    return (
        <div className='mb-9'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                <div className='w-full'>
                    <DetailPlaceSearch onSelect={(loc) => setLocation(loc)} />
                </div>

                {/* Date Pickers */}
                <div className='w-full'>
                    <DetailDatePicker type="Check-In" />
                </div>
                <div className='w-full'>
                    <DetailPersonPicker />
                </div>
                <div className='w-full'>
                    <button className='bg-blue-600 w-full text-white px-4 py-3 font-semibold rounded-full'>Search</button>
                </div>
            </div>
            
        </div>
    )
}

export default DetailSearch