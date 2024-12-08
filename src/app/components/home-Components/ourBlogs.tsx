import Link from 'next/link'
import React from 'react'

export default function OurBlogs() {
    return (
        <div className='font-poppins text-black bg-white'>
            <div className='w-full max-w-[1440px] mx-auto flex flex-col items-center py-[55px] px-[100px]'>

                <div className='flex w-[479px] h-[91px] flex-col justify-between items-center'>
                    <p className=' text-2xl md:text-3xl xl:text-4xl font-medium'>Our Blogs</p>
                    <p className='text-[#9F9F9F] text-xs md:text-base font-medium ' >Find a bright ideal to suit your taste with our great selection</p>
                </div>
                <div className='w-[110px] h-[35px] md:w-[120px] md:h-[40px] xl:w-[126px] xl:h-[49px] text-base md:text-lg xl:text-xl font-medium mt-8'>
                    <p><Link href={"/Pages/blog"}>View All Post</Link></p>
                    <hr className='w-full border-t-2 border-black mt-2' />
                </div>

            </div>


        </div>
    )
}
