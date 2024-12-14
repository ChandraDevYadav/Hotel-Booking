import React from 'react'
import { FaSearch } from 'react-icons/fa'

const QuestionSect = () => {
    return (
        <div className='bg-orange-100 px-6 py-6 mt-8 rounded-2xl'>
            <div className='flex justify-between items-center'>
                <h1>Have a question?</h1>
                <div className='flex justify-start items-center bg-black gap-1  px-2 py-2 rounded-lg'>
                    <div className='text-xs font-medium w-4 h-4'>
                        <svg
                            class="uitk-icon uitk-icon-small"
                            aria-describedby="romie-description"
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                            <desc id="romie-description">AI icon</desc>
                            <path
                                d="M16.582 11.737c.163.051.163.419 0 .47a6.324 6.324 0 0 0-4.125 4.126c-.051.163-.418.163-.47 0a6.324 6.324 0 0 0-4.125-4.126c-.163-.051-.163-.419 0-.47a6.324 6.324 0 0 0 4.125-4.126c.052-.163.419-.163.47 0a6.324 6.324 0 0 0 4.125 4.126Z"
                                fill="white"
                            ></path>
                            <path
                                d="M3.25 19.404V8.562c0-.212.084-.415.234-.565l2.04-2.04a.2.2 0 0 1 .342.14v12.287h12.286a.2.2 0 0 1 .141.34l-2.04 2.042a.798.798 0 0 1-.565.234H4.846a1.596 1.596 0 0 1-1.596-1.596Zm18-14.808v10.842a.798.798 0 0 1-.234.564l-2.04 2.041a.2.2 0 0 1-.341-.14V5.615H6.347a.2.2 0 0 1-.141-.341l2.04-2.041A.798.798 0 0 1 8.813 3h10.842c.881 0 1.596.715 1.596 1.596Z"
                                fill="white"
                            ></path>
                        </svg>

                    </div>
                    <p className='text-xs text-white font-medium'>Beta</p>
                </div>
            </div>
            <div>
                <p className='text-md md:text-xl font-semibold mt-2'>Get instant answers with AI powered search of property information and reviews.</p>
            </div>
            <div className='flex justify-between items-center gap-2 md:gap-4 mt-4'>
                <div className='w-full'>
                    <div className='flex justify-start items-center gap-4 rounded-lg bg-white px-4 py-1'>
                        <div className="">
                            <FaSearch />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="" className='text-xs font-medium'>Ask a Question</label> <br />
                            <input
                                type="text"
                                placeholder="Is there free parking?"
                                className="w-full focus:outline-none focus:border-transparent"
                            />

                        </div>
                    </div>
                </div>
                <div>
                    <div className='bg-cyan-600 text-center text-white p-3 text-xl rounded-full'>
                        <FaSearch />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionSect