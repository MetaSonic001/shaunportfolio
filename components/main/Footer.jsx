'use client'

import Link from "next/link";
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  // Other_skill,
  Skill_data,
} from "../../constants";
export default function Component() {
  return (
    <footer >
      <div className="w-full py-8 md:py-16 xl:py-24 bg-[#030014] overflow-x-hidden">
  <div className="container px-4 mx-auto grid gap-4 text-center md:px-6 md:grid-cols-2 lg:grid-cols-3" style={{ maxWidth: '1423px' }}>
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
        <div className="space-y-4">
          <h2 className="text-lg md:text-xl font-bold tracking-tighter sm:text-2xl text-white">Contact Information</h2>
          <div className="mx-auto max-w-sm space-y-2">
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  className="flex items-center gap-2 text-gray-500 hover:text-gray-900"
                  href="#"
                >
                  <MailIcon className="w-4 h-4 md:w-5 md:h-5" />
                  Email: shaunkmmendes@gmail.com 
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2 text-gray-500 hover:text-gray-900"
                  href="#"
                >
                  <PhoneIcon className="w-4 h-4 md:w-5 md:h-5" />
                  Call: +91 9920778067
                </Link>
              </li>
            

<li>
  <Link href="https://github.com/MetaSonic001">
    <div className="flex items-center gap-2 text-gray-500 hover:text-gray-900">
      <GithubIcon className="w-4 h-4 md:w-5 md:h-5" />
      GitHub: https://github.com/MetaSonic001
    </div>
  </Link>
</li>

              <li>
                <Link
                  className="flex items-center gap-2 text-gray-500 hover:text-gray-900"
                  href="#"
                >
                  <LinkedInIcon className="w-4 h-4 md:w-5 md:h-5" />
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg md:text-xl font-bold tracking-tighter sm:text-2xl text-white">Recent Projects</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">


          <div className="flex items-start gap-4">
  <img
    alt="Project thumbnail"
    className="rounded-lg object-cover bg-gray-200"
    src="/placeholder.svg"
    onError={(e) => {
      e.target.onerror = null; // Prevents infinite loop if placeholder image fails to load
      e.target.src = "/placeholder.svg"; // Path to your placeholder image
    }}
    style={{
      aspectRatio: "80/60",
      objectFit: "cover",
      height: "60px", // Adjust the height to your preference
      width: "80px", // Adjust the width to your preference
    }}
  />
  <div className="space-y-1.5">
    <h3 className="text-sm md:text-base font-semibold">Project One</h3>
    <p className="text-xs md:text-sm text-gray-500">
      Description of the first project. It a very interesting project that involves creativity and innovation.
    </p>
  </div>
</div>



<div className="flex items-start gap-4">
  <img
    alt="Project thumbnail"
    className="rounded-lg object-cover bg-gray-200"
    src="/placeholder.svg"
    onError={(e) => {
      e.target.onerror = null; // Prevents infinite loop if placeholder image fails to load
      e.target.src = "/placeholder.svg"; // Path to your placeholder image
    }}
    style={{
      aspectRatio: "80/60",
      objectFit: "cover",
      height: "60px", // Adjust the height to your preference
      width: "80px", // Adjust the width to your preference
    }}
  />
  <div className="space-y-1.5">
    <h3 className="text-sm md:text-base font-semibold">Project One</h3>
    <p className="text-xs md:text-sm text-gray-500">
      Description of the first project. It a very interesting project that involves creativity and innovation.
    </p>
  </div>
</div>


          </div>
        </div>
        </div>
        

        
        <div className="container mx-auto px-4">
  <div className="flex flex-col items-center justify-center">
    <div className="space-y-4 py-4">
      <h2 className="text-lg md:text-xl font-bold tracking-tighter sm:text-2xl text-white text-center py-2">Skills</h2>
      <div className="grid grid-cols-5 gap-2 items-center justify-center">
      {Skill_data.map((skill, index) => (
  <span key={index} className="inline-flex h-3 md:h-4 items-center rounded-full bg-gray-100 px-2 text-2xs md:text-xs">
    {skill.skill_name}
  </span>
))}

      </div>
    </div>
  </div>
</div>

      
      </div>
      <div className="mx-auto max-w-2xl border-t border-gray-200" />


        <div className="flex flex-col gap-4 items-center justify-center min-[500px] md:flex-row">
  <div className="text-center text-sm md:text-base text-gray-600">
    © 2023 Shaun Mendes Portfolio Website. All rights reserved.
  </div>
  {/* <nav className="flex gap-4 text-sm md:text-base">
    <Link className="text-gray-600 hover:underline" href="#">
      Privacy Policy
    </Link>
    <Link className="text-gray-600 hover:underline" href="#">
      Terms of Service
    </Link>
  </nav> */}
</div>

    </footer>
  );
}

function GithubIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    );
  }
  
  function MailIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    );
  }
  
  function PhoneIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    );
  }
  
  function LinkedInIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 2H4C2.897 2 2 2.897 2 4V20C2 21.103 2.897 22 4 22H20C21.103 22 22 21.103 22 20V4C22 2.897 21.103 2 20 2Z" />
        <path d="M8 8H6V18H8V8Z" />
        <path d="M7 5.5C6.172 5.5 5.5 6.172 5.5 7C5.5 7.828 6.172 8.5 7 8.5C7.828 8.5 8.5 7.828 8.5 7C8.5 6.172 7.828 5.5 7 5.5Z" />
        <path d="M17 8H15V12.5C15 14.709 13.209 16.5 11 16.5C8.791 16.5 7 14.709 7 12.5V8H5V18H7V13.5C7 15.709 8.791 17.5 11 17.5C13.209 17.5 15 15.709 15 13.5V8H17V8Z" />
      </svg>
    );
  }
