import React from 'react';

export default function OurInstagram() {
    return (
        <div className='font-poppins'>
            <div 
                className='w-full max-w-[1440px] mx-auto flex items-center justify-center h-[450px] sm:h-[350px] lg:h-[400px] xl:h-[450px]'
                style={{ backgroundImage: "url('/home images/our-instagram-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className='w-[90%] max-w-[454px] flex flex-col justify-between items-center text-center'>
                    <div className='flex flex-col justify-between items-center'>
                        <p className='font-bold text-[28px] sm:text-[36px] lg:text-[48px] xl:text-[60px]'>Our Instagram</p>
                        <p className='font-normal text-sm sm:text-sm lg:text-lg xl:text-xl'>Follow our store on Instagram</p>
                    </div>
                    <div className='w-[80%] max-w-[255px] h-[48px] sm:h-[50px] lg:h-[56px] xl:h-[64px] bg-[#FAF4F4] flex justify-center items-center rounded-full font-normal text-sm lg:text-lg xl:text-xl mt-4'>
                        Follow Us
                    </div>
                </div>
            </div>
        </div>
    );
}