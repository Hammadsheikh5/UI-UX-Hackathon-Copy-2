'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FiMenu, FiX } from 'react-icons/fi';





export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div  className='font-poppins'>
      <div className="bg-[#FBEBB5] w-full max-w-[1440px] mx-auto py-6 px-4 sm:px-8 flex justify-between items-center">
        {/* Hamburger Menu for Small Screens */}
        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Menu Section */}
        <div
          className={`content ${isMenuOpen ? "flex" : "hidden"
            } sm:flex flex-col sm:flex-row absolute sm:static top-[70px] sm:top-0 left-0 sm:left-auto bg-[#FBEBB5] sm:bg-transparent w-full sm:w-auto gap-6 sm:gap-12 px-6 sm:px-0`}
        >
          <ul className="flex flex-col sm:flex-row text-base font-poppins font-medium text-center gap-4 sm:gap-12">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/shop"}>Shop</Link>
            </li>
            <li>
              <Link href={"#"}>About</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Icon Section */}
        <div className="flex items-center justify-between gap-6 sm:gap-8 text-[24px] sm:text-[28px]">
        <Link href={"/myAccount"}><CiUser /></Link>
        <Link href={"#"}><CiSearch /></Link>
        <Link href={"#"}><CiHeart /></Link>
        <Link href={"/cart"}><CiShoppingCart /></Link>
        </div>
      </div>
    </div>
  );
}
