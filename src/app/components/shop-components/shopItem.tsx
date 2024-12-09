import React from 'react'
import Image from 'next/image'

export default function ShopItem() {
    return (
    <div className='font-poppins text-black bg-white'>
        <div className='w-full max-w-[1440px] mx-auto flex flex-col items-center  px-[100px]'>

            {/* Product Grid 1 */}
            <div className="container pt-[88px] flex flex-col md:flex-row md:grid md:grid-cols-2 xl:grid-cols-4 gap-8">
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


            {/* Product Grid 2 */}
            <div className="container pt-[88px] flex flex-col md:flex-row md:grid md:grid-cols-2 xl:grid-cols-4 gap-8">
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
            {/* Product Grid 2 */}
            <div className="container pt-[88px] flex flex-col md:flex-row md:grid md:grid-cols-2 xl:grid-cols-4 gap-8">
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
            {/* Product Grid 2 */}
            <div className="container pt-[88px] flex flex-col md:flex-row md:grid md:grid-cols-2 xl:grid-cols-4 gap-8">
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

            <div className="next-container my-24">

                <div className='flex justify-between items-center h-[50px] w-[300px] lg:h-[60px] lg:w-[392px] '>

                    <div className="flex justify-center items-center h-[50px] w-[50px] lg:h-[60px] lg:w-[60px] bg-[#FFF9E5] text-base sm:text-lg lg:text-xl  rounded-[10px] hover:bg-[#FBEBB5] hover:cursor-pointer">1</div>
                    <div className="flex justify-center items-center h-[50px] w-[50px] lg:h-[60px] lg:w-[60px] bg-[#FFF9E5] text-base sm:text-lg lg:text-xl  rounded-[10px] hover:bg-[#FBEBB5] hover:cursor-pointer">2</div>
                    <div className="flex justify-center items-center h-[50px] w-[50px] lg:h-[60px] lg:w-[60px] bg-[#FFF9E5] text-base sm:text-lg lg:text-xl  rounded-[10px] hover:bg-[#FBEBB5] hover:cursor-pointer">3</div>
                    <div className="flex justify-center items-center h-[50px] w-[75px] lg:h-[60px] lg:w-[98px] bg-[#FFF9E5] text-base sm:text-lg lg:text-xl  rounded-[10px] hover:bg-[#FBEBB5] hover:cursor-pointer">NEXT</div>

                </div>
            </div>




        </div>
    </div>
    )
}
