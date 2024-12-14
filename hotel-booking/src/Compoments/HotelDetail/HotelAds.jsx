import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const HotelAds = () => {
  const [isHidden1, setIsHidden1] = useState(false);
  const [isHidden2, setIsHidden2] = useState(false);
  const [showOptions1, setShowOptions1] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);

  const handleStopSeeingAd = (adNumber) => {
    if (adNumber === 1) setShowOptions1(true);
    if (adNumber === 2) setShowOptions2(true);
  };

  const handleOptionSelect = (adNumber) => {
    if (adNumber === 1) {
      setIsHidden1(true);
      setShowOptions1(false);
    }
    if (adNumber === 2) {
      setIsHidden2(true);
      setShowOptions2(false);
    }
  };

  const renderAdContent = (adNumber) => (
    <div className='h-full min-h-screen bg-gray-100 px-2'>
      <button
        className='text-blue-500 mt-3'
        onClick={() => (adNumber === 1 ? setIsHidden1(false) : setIsHidden2(false))}
      >
        <FaArrowLeft />
      </button>
      <p className='text-lg text-gray-600 text-center'>
        Ads by <br />
        <b className='text-2xl'>Google</b>
      </p>
      {!showOptions1 && !showOptions2 ? (
        <button
          className='bg-blue-600 w-full py-1 px-4 text-white text-center text-md rounded mt-3'
          onClick={() => handleStopSeeingAd(adNumber)}
        >
          Stop seeing this ad
        </button>
      ) : (
        <div className='mt-3 space-y-2'>
          <button
            className='bg-white w-full px-4 py-2 text-gray-600 text-center text-md rounded'
            onClick={() => handleOptionSelect(adNumber)}
          >
            Ad covered content
          </button>
          <button
            className='bg-white w-full px-4 py-2 text-gray-600 text-center text-md rounded'
            onClick={() => handleOptionSelect(adNumber)}
          >
            Ad was inappropriate
          </button>
          <button
            className='bg-white w-full px-4 py-2 text-gray-600 text-center text-md rounded'
            onClick={() => handleOptionSelect(adNumber)}
          >
            Not interested in this ad
          </button>
        </div>
      )}
      <button className='bg-white w-full px-4 my-3 py-2 text-gray-600 text-center text-md rounded'>
        Why this ad?
      </button>
    </div>
  );

  return (
    <div>
      {/* First Ad */}
      <div className='relative'>
        {!isHidden1 ? (
          <img src="/adv2.gif" alt="Advertisement 1" className='object-fill' />
        ) : (
          renderAdContent(1)
        )}
        {!isHidden1 && (
          <div className='absolute top-1 right-1'>
            <button
              onClick={() => setIsHidden1(true)}
              className='p-1 flex justify-start items-center bg-white shadow-lg gap-1 relative'
            >
              <div className='w-4 h-4 relative group'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 15 15"
                >
                  <path d="M7.5,1.5a6,6,0,1,0,0,12a6,6,0,1,0,0,-12m0,1a5,5,0,1,1,0,10a5,5,0,1,1,0,-10ZM6.625,11l1.75,0l0,-4.5l-1.75,0ZM7.5,3.75a1,1,0,1,0,0,2a1,1,0,1,0,0,-2Z"></path>
                </svg>
                <div className="absolute left-[-95px] -top-1 w-max bg-white text-black text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Ads by Google
                </div>
              </div>
              <FaX className='w-3 h-3' />
            </button>
          </div>
        )}
      </div>

      {/* Second Ad */}
      <div className='mt-4 relative'>
        {!isHidden2 ? (
          <img src="/adv1.jpg" alt="Advertisement 2" className='object-fill' />
        ) : (
          renderAdContent(2)
        )}
        {!isHidden2 && (
          <div className='absolute top-1 right-1'>
            <button
              onClick={() => setIsHidden2(true)}
              className='p-1 flex justify-start items-center bg-white shadow-lg gap-1 relative'
            >
              <div className='w-4 h-4 relative group'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 15 15"
                >
                  <path d="M7.5,1.5a6,6,0,1,0,0,12a6,6,0,1,0,0,-12m0,1a5,5,0,1,1,0,10a5,5,0,1,1,0,-10ZM6.625,11l1.75,0l0,-4.5l-1.75,0ZM7.5,3.75a1,1,0,1,0,0,2a1,1,0,1,0,0,-2Z"></path>
                </svg>
                <div className="absolute left-[-95px] -top-1 w-max bg-white text-black text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Ads by Google
                </div>
              </div>
              <FaX className='w-3 h-3' />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelAds;
