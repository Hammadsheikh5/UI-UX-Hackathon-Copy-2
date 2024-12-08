import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AsgardSofa() {
    return (
        <div className='font-poppins text-black'>

            <div className='group23 bg-[#FFF9E5] w-full max-w-[1440px] mx-auto h-[450px] flex flex-col lg:flex-row justify-center lg:justify-around items-center sm:h-[500px] lg:h-[639px] '>
                <div className="image-div relative bottom-3 right-5 sm:bottom-0 sm:right-0 lg:bottom-3 lg:right-5">
                    <Image
                        src="/home images/Asgaard sofa 1.png"
                        width={900}
                        height={620}
                        alt="Asgaard sofa 1.png"
                        className="object-cover w-[350px] h-[250px] sm:w-[350px] sm:h-[250px] lg:w-[600px] lg:h-[400px] xl:w-[900px] xl:h-[620px]"
                    />
                </div>

                <div className='w-[250px] h-[160px] flex flex-col justify-between items-center sm:w-[280px] sm:h-[180px] lg:w-[331px] lg:h-[205px]'>
                    <div className='flex flex-col justify-between items-center'>
                        <p className='text-lg font-medium sm:text-xl lg:text-2xl'>New Arrivals</p>
                        <p className='text-[30px] font-bold sm:text-[36px] lg:text-[48px]'>Asgaard sofa</p>
                    </div>
                    <div className='h-[45px] w-[180px] text-base font-normal border-2 border-black border-solid flex justify-center items-center sm:text-lg  lg:text-xl sm:h-[50px] sm:w-[200px] lg:h-[64px] lg:w-[255px]'>
                        <button><Link href={"/Pages/singleProduct"}>Order Now</Link></button>
                    </div>
                </div>
            </div>

        </div>
    )
}
