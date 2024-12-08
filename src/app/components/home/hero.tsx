import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='font-poppins'>

      <div className='bg-[#FBEBB5] w-full max-w-[1440px] mx-auto h-[600px] flex flex-col lg:flex-row justify-center items-center sm:h-[700px] lg:h-[900px]'>
        {/* Text Section */}
        <div className='w-[250px] h-[150px] flex flex-col justify-between relative lg:left-[90px] sm:w-[300px] sm:h-[200px] lg:w-[440px] lg:h-[276px]'>
          <p className='text-[36px] font-medium  lg:text-[54px] xl:text-[64px]'>
            Rocket single seater
          </p>
          <div className='text-base xl:text-2xl font-medium w-[100px] h-[28px]  lg:w-[121px] lg:h-[36px]'>
            <p>Shop Now</p>
            <hr className='w-full border-t-2 border-black mt-2' />
          </div>
        </div>

        {/* Image Section */}
        <div className='imageContainer w-[350px] h-[500px] sm:w-[400px] sm:h-[700px] md:w-[500px] md:h-[800px]  lg:w-[853px] lg:h-[1000px]'>
          <Image
            src="/home images/single-seater.png"
            width={853}
            height={1000}
            alt="Plain console with teak mirror 1.png"
            className='object-contain w-full h-full lg:w-[853px] lg:h-[1000px]'
          />
        </div>
      </div>
    </div>
  )
}
