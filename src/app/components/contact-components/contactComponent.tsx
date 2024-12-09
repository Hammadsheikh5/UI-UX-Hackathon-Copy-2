import React from 'react';
import { MdLocationPin, MdPhone, MdAccessTimeFilled } from "react-icons/md";

export default function ContactComponent() {
    return (
        <div className="font-poppins text-black bg-white">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-[191px] py-[50px] lg:h-[1144px]">
                <div className="text-center mb-10">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-5">
                        Get In Touch With Us
                    </p>
                    <p className="text-sm sm:text-base font-normal text-[#9F9F9F]">
                        For More Information About Our Product & Services. Please Feel Free To Drop Us <br className="hidden md:block" />
                        An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
                    {/* Contact Details */}
                    <div className="w-full lg:w-[393px] lg:h-[537px] flex flex-col justify-between items-start py-8 xl:py-16 ">
                        <div className="flex gap-6 ">
                            <MdLocationPin className="w-[25px] sm:w-[30px] h-[25px] sm:h-[30px]" />
                            <div className="flex flex-col w-[212px]">
                                <p className="text-xl sm:text-2xl font-medium">Address</p>
                                <p className="text-sm sm:text-base font-normal">
                                236 5th SE Avenue, New York NY10000, United States
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6 ">
                            <MdPhone className="w-[25px] sm:w-[30px] h-[25px] sm:h-[30px]" />
                            <div className="flex flex-col">
                                <p className="text-xl sm:text-2xl font-medium">Phone</p>
                                <p className="text-sm sm:text-base font-normal">
                                    +1 (234) 567-890
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <MdAccessTimeFilled className="w-[25px] sm:w-[30px] h-[25px] sm:h-[30px]" />
                            <div className="flex flex-col">
                                <p className="text-xl sm:text-2xl font-medium">Working Time</p>
                                <p className="text-sm sm:text-base font-normal">
                                    Monday to Friday: 9:00 AM - 6:00 PM
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="w-full lg:w-[635px] ">
                        <form className="mx-auto lg:h-[937px]">
                            {/* Name Field */}
                            <div className="mb-10 max-w-[530px]">
                                <label htmlFor="name" className="block text-sm sm:text-base font-medium mb-8">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full h-[48px] lg:h-[75px] px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your name"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="mb-10 max-w-[530px]">
                                <label htmlFor="email" className="block text-sm sm:text-base  font-medium mb-8">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full h-[48px] lg:h-[75px] px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your email address"
                                />
                            </div>

                            {/* Subject Field */}
                            <div className="mb-10 max-w-[530px]">
                                <label htmlFor="subject" className="block text-sm sm:text-base  font-medium mb-8">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full h-[48px] lg:h-[75px] px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter the subject"
                                />
                            </div>

                            {/* Message Field */}
                            <div className="mb-10 max-w-[530px]" >
                                <label htmlFor="message" className="block text-sm sm:text-base  font-medium mb-8">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="w-full h-[160px] px-6 py-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="text-center ">
                                <button
                                    type="submit"
                                    className="w-[237px] h-[48px]  text-black text-base font-medium border border-black rounded-[15px] mx-auto"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
