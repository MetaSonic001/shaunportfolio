"use client"

import Link from "next/link";
import React from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineDesktopComputer, HiOutlineDocumentText } from 'react-icons/hi';
// import { GitHub, LinkedIn } from 'react-feather';
import { Skill_data } from "../../constants";



export default function Component() {
  return (
    <footer className="w-full py-10 md:py-10 xl:py-24 bg-[#030014] overflow-x-hidden">
      <div className="container mx-auto px-4 grid gap-4 text-center md:grid-cols-2 lg:grid-cols-3 md:px-6" style={{ maxWidth: '1423px' }}>
        {/* About Me */}
        <div className="space-y-4">
          <h2 className="text-lg md:text-xl font-bold tracking-tighter sm:text-2xl text-white">About Me</h2>
          <div className="mx-auto max-w-md text-gray-500 md:text-sm">
            <p>
              Computer engineering student with a passion for software development and innovation. Experienced in web
              development, cloud computing, and embedded systems. Enthusiastic about open-source projects and continuous
              learning.
            </p>
          </div>
        </div>
        {/* Contact Information */}
        <div className="space-y-4">
          <h2 className="text-lg md:text-xl font-bold tracking-tighter sm:text-2xl text-white">Contact Information</h2>
          <div className="mx-auto max-w-sm space-y-2">
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="#" className="flex items-center gap-2 text-gray-500 hover:text-gray-900">
                  <HiOutlineMail className="w-4 h-4 md:w-5 md:h-5" />
                  Email: shaunkmmendes@gmail.com 
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 text-gray-500 hover:text-gray-900">
                  <HiOutlinePhone className="w-4 h-4 md:w-5 md:h-5" />
                  Call: +91 9920778067
                </Link>
              </li>
              {/* <li>
                <Link href="https://github.com/MetaSonic001" className="flex items-center gap-2 text-gray-500 hover:text-gray-900">
                  <GitHub className="w-4 h-4 md:w-5 md:h-5" />
                  GitHub: https://github.com/MetaSonic001
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 text-gray-500 hover:text-gray-900">
                  <LinkedIn className="w-4 h-4 md:w-5 md:h-5" />
                  LinkedIn
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        {/* Recent Projects */}
        <div className="space-y-4">
          <h2 className="text-lg md:text-xl font-bold tracking-tighter sm:text-2xl text-white">Recent Projects</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
            {/* Project Cards */}
            <div className="flex flex-col md:flex-row items-start gap-4">
              {/* Project One */}
              <div className="w-full md:w-auto flex-shrink-0">
                {/* Image */}
                <img
                  alt="Project thumbnail"
                  className="rounded-lg object-cover bg-gray-200"
                  src="/placeholder.svg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder.svg";
                  }}
                  style={{
                    aspectRatio: "80/60",
                    objectFit: "cover",
                    height: "60px",
                    width: "80px",
                  }}
                />
              </div>
              {/* Project Details */}
              <div className="space-y-1.5">
                <h3 className="text-sm md:text-base font-semibold">Project One</h3>
                <p className="text-xs md:text-sm text-gray-500">
                  Description of the first project. It a very interesting project that involves creativity and innovation.
                </p>
              </div>
            </div>
            {/* Repeat similar structure for other projects */}
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="space-y-4 py-4">
            <h2 className="text-lg md:text-xl font-bold tracking-tighter sm:text-2xl text-white text-center py-2">Skills</h2>
            <div className="grid grid-cols-5 gap-2 items-center justify-center">
              {/* Map over skills data */}
              {Skill_data.map((skill, index) => (
                <span key={index} className="inline-flex h-3 md:h-4 items-center rounded-full bg-gray-100 px-2 text-2xs md:text-xs">
                  {skill.skill_name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl border-t border-gray-200" />
      <div className="flex flex-col gap-4 items-center justify-center min-[500px] md:flex-row">
        <div className="text-center text-sm md:text-base text-gray-600">
          © 2023 Shaun Mendes Portfolio Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
