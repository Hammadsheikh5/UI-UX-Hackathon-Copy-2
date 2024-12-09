import React from 'react'
import { PiCirclesFourFill } from "react-icons/pi";
import { BsViewList } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";

export default function Filter() {
    return (
        <div className='text-black font-poppins '>
            <div className="bg-[#FAF4F4] w-full max-w-[1440px] mx-auto h-auto mt-8 lg:mt-14 flex flex-wrap lg:flex-nowrap gap-4 px-4 py-4 lg:px-[100px] justify-between items-center">

                {/* Container 1 */}
                <div className='container-1 flex justify-center lg:justify-between items-center gap-3 w-full lg:w-auto'>
                    <div className="filter h-[25px] w-[60px ] lg:h-[30px] lg:w-[85px] flex justify-between items-center">
                        <CiFilter className='text-lg lg:text-2xl' />
                        <p className='font-normal text-base lg:text-xl'> Filter</p>
                    </div>
                    <PiCirclesFourFill className='text-lg lg:text-2xl' />
                    <BsViewList className='text-lg lg:text-2xl' />
                    <div className="font-normal text-xs sm:text-sm h-[30px] w-[190px] lg:text-base lg:h-[37px] lg:w-[237px] flex justify-end lg:justify-end items-center border-l-2 border-black">
                        Showing 1–16 of 32 results
                    </div>
                </div>

                {/* Container 2 */}
                <div className='container-2 flex justify-center lg:justify-between items-center gap-3 w-full lg:w-auto'>
                    <div className="h-[35px] w-[90px] lg:h-[55px] lg:w-[126px] font-normal text-sm lg:text-xl flex justify-between items-center">
                        <p>Show</p>
                        <div className=' h-[35px] w-[35px] flex justify-center items-center text-[#9F9F9F] lg:h-[55px] lg:w-[55px] bg-white'>
                            16
                        </div>
                    </div>

                    <div className="h-[35px] w-[180px] lg:h-[55px] lg:w-[288px] font-normal text-sm lg:text-xl flex justify-between items-center">
                        <p>Sort by</p>
                        <div className=' h-[35px] w-[120px] flex justify-center items-center text-[#9F9F9F] lg:h-[55px] lg:w-[188px] bg-white'>
                            Default
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
