'use client'
import Image from 'next/image';
import { Socials } from "../../constants"
import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="/Home"
          className="h-auto w-auto flex flex-row items-center px-4 md:px-0"
        >
          <Image
            src="/assests/images/NavLogo.png"
            alt="logo"
            width={85}
            height={85}
            className="cursor-pointer hover:animate-slowspin"
            priority
          />

<span className="font-bold ml-[10px] hidden md:inline-block text-gray-300 px-4 md:px-0">
  Shaun Portfolio
</span>
        </a>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-200 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-8 w-8 ${mobileMenuOpen ? 'hidden' : 'block'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-8 w-8 ${mobileMenuOpen ? 'block' : 'hidden'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row items-center justify-between w-[500px] md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer md:px-4 md:py-2 hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-200">
              About me
            </a>
            <a href="#skills" className="cursor-pointer md:px-4 md:py-2 hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-200">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer md:px-4 md:py-2 hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-200">
              Projects
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden flex flex-col absolute top-[65px] right-0 bg-[#03001417] backdrop-blur-md py-2 px-4 w-full">
            <a href="#about-me" className="cursor-pointer text-gray-200 block py-2 hover:bg-gray-700">
              About me
            </a>
            <a href="#skills" className="cursor-pointer text-gray-200 block py-2 hover:bg-gray-700">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer text-gray-200 block py-2 hover:bg-gray-700">
              Projects
            </a>
          </div>
        )}

        {/* Social Icons */}
        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
