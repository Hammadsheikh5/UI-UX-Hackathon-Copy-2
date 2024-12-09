import Link from 'next/link';
import { MdDelete } from "react-icons/md";
import Image from 'next/image';
import React from 'react';

export default function CartDetail() {
    return (
        <div className='font-poppins text-black bg-white'>
            <div className='w-full max-w-[1440px] mx-auto h-auto xl:h-[525px]'>
                <div className='px-6 sm:px-12 lg:px-[100px] py-6 sm:py-8 lg:py-[70px] flex flex-col xl:flex-row justify-between items-start gap-6 lg:gap-2'>

                    {/* Product Section */}
                    <div className="w-full xl:w-[817px]">
                        <div className="h-[55px] w-full flex items-center justify-between bg-[#FFF9E5] px-4 lg:px-4">
                            <div>
                                <p className="font-medium text-sm sm:text-base">Product</p>
                            </div>

                            <div className='flex justify-between w-[60%]'>
                                <p className="font-medium text-sm sm:text-base">Price</p>
                                <p className="font-medium text-sm sm:text-base">Quantity</p>
                                <p className="font-medium text-sm sm:text-base">Subtotal</p>
                                <p className="font-medium text-sm sm:text-base">Delete</p>
                            </div>
                            
                            
                        </div>
                        <div className="w-full flex items-center justify-between font-normal text-sm sm:text-base py-4">
                            <div className='flex items-center gap-4'>
                                <div className='h-[80px] w-[80px] sm:h-[106px] sm:w-[106px] bg-[#FBEBB5] rounded-[10px]'>
                                    <Image
                                        src="/cart images/Asgaard sofa 4.png"
                                        width={112}
                                        height={92}
                                        alt="Asgaard sofa"
                                        className=""
                                    />
                                </div>
                                <p className="text-[#9F9F9F]">Asgaard sofa</p>
                            </div>
                            <p className="text-lg text-[#9F9F9F]">Rs. 250,000.00</p>
                            <div className="h-[28px] w-[28px] sm:h-[32px] sm:w-[32px] flex justify-center items-center border-2 rounded-[5px] border-solid border-[#9F9F9F]">1</div>
                            <p>Rs. 250,000.00</p>
                            <MdDelete className='text-[24px] sm:text-[28px] text-[#FBEBB5]' />
                        </div>
                    </div>

                    {/* Cart Totals Section */}
                    <div className="w-full h-[280px] xl:w-[390px] xl:h-[390px] bg-[#FFF9E5] px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 flex flex-col items-center justify-between">
                        <div className="font-medium text-lg sm:text-2xl lg:text-[32px]">
                            Cart Totals
                        </div>
                        <div className="flex gap-6 sm:gap-8 items-center">
                            <p className='text-sm sm:text-base font-medium'>Subtotal</p>
                            <p className="text-sm sm:text-base font-normal text-[#9F9F9F]">Rs. 250,000.00</p>
                        </div>
                        <div className="flex gap-6 sm:gap-8 items-center">
                            <p className='text-sm sm:text-base font-medium'>Total</p>
                            <p className="text-lg sm:text-xl xl:text-2xl font-medium text-[#B88E2F]">Rs. 250,000.00</p>
                        </div>
                        <div className='h-[40px] sm:h-[50px] lg:h-[58px] w-[140px] sm:w-[180px] lg:w-[222px] text-sm sm:text-lg lg:text-xl font-normal border-2 border-black flex justify-center items-center rounded-[15px]'>
                            <button><Link href={"/Pages/checkout"}>Check Out</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
