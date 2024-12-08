import React from 'react'
import Image from 'next/image'

export default function Product() {
  return (
    <div className='font-poppins'>
      <div className="group19 w-full max-w-[1440px] mx-auto flex flex-col items-center py-[55px] px-[100px]">
        {/* Title and Description */}
        <div className="container flex flex-col text-center justify-center gap-5 font-medium">
          <p className='text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl '>
            Top Picks For You
          </p>
          <p className='text-[#9F9F9F] text-xs  md:text-sm lg:text-base xl:text-base'>
            Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
          </p>
        </div>

        {/* Product Grid */}
        <div className="container py-[88px] flex flex-col md:flex-row md:grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Product 1 */}
          <div className="group15 flex flex-col items-center">
            <div className="image-div h-[287px] w-[287px] flex justify-center items-center">
              <Image
                src="/home images/Trenton modular sofa_3 1.png"
                width={287}
                height={287}
                alt="Trenton modular sofa_3"
                className="object-contain"
              />
            </div>
            <div className='h-[71px] w-[194px] flex flex-col justify-between'>
              <p className='text-sm  md:text-base lg:text-base xl:text-base font-normal'>
                Trenton modular sofa_3
              </p>
              <p className='text-md  md:text-lg lg:text-2xl xl:text-2xl font-medium'>
                Rs. 25,000.00
              </p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="group16 flex flex-col items-center">
            <div className="image-div h-[287px] w-[287px] flex justify-center items-center">
              <Image
                src="/home images/Granite dining table with dining chair 1.png"
                width={287}
                height={287}
                alt="Granite dining table with dining chair 1.png"
                className="object-contain"
              />
            </div>
            <div className='h-[71px] w-[194px] flex flex-col justify-between'>
              <p className='text-sm md:text-base lg:text-base xl:text-base font-normal'>
                Granite dining table with dining chair
              </p>
              <p className='text-md  md:text-lg lg:text-2xl xl:text-2xl font-medium'>
                Rs. 25,000.00
              </p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="group17 flex flex-col items-center">
            <div className="image-div h-[287px] w-[287px] flex justify-center items-center">
              <Image
                src="/home images/Outdoor bar table and stool 1.png"
                width={287}
                height={287}
                alt="Outdoor bar table and stool 1.png"
                className="object-contain"
              />
            </div>
            <div className='h-[71px] w-[194px] flex flex-col justify-between'>
              <p className='text-sm md:text-base lg:text-base xl:text-base font-normal'>
                Outdoor bar table and stool
              </p>
              <p className='text-md  md:text-lg lg:text-2xl xl:text-2xl font-medium'>
                Rs. 25,000.00
              </p>
            </div>
          </div>

          {/* Product 4 */}
          <div className="group18 flex flex-col items-center">
            <div className="image-div h-[287px] w-[287px] flex justify-center items-center">
              <Image
                src="/home images/Plain console with teak mirror 1.png"
                width={287}
                height={287}
                alt="Plain console with teak mirror 1.png"
                className="object-contain"
              />
            </div>
            <div className='h-[71px] w-[194px] flex flex-col justify-between'>
              <p className='text-sm md:text-base lg:text-base xl:text-base font-normal'>
                Plain console with teak mirror
              </p>
              <p className='text-md  md:text-lg lg:text-2xl xl:text-2xl font-medium'>
                Rs. 25,000.00
              </p>
            </div>
          </div>
        </div>

        {/* View More Section */}
        <div className='group8 flex flex-col gap-2 w-[104px] items-center text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl font-medium'>
          <p>View More</p>
          <hr className='w-full border-t-2 border-black mt-2' />
        </div>
      </div>
    </div>
  )
}
