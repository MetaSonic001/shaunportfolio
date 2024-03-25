'use client'
import React from "react"
import { Avatar, AvatarImage } from "../sub/Avatar"
import { CardContent, Card } from "../sub/Card"
import Link from "next/link";
// import {
//   MailIcon,
//   PhoneIcon,
//   CakeIcon
//   LocateIcon,
//   FacebookIcon,
//   TwitterIcon,
//   InstagramIcon,
//   LaptopIcon,
//   CodeIcon,
//   SmartphoneIcon,
//   CameraIcon,
// } from "../sub/Icons"

import Experience from "../sub/Experience"
import ContactUs from "./Contact"

export default function Component() {
    return (
        <div className="bg-[#1a1a1a] text-white" style={{zIndex:9999}}>
        <div className="flex flex-col lg:flex-row">
        <aside className="p-8 bg-[#111] w-full lg:w-1/4">
        <div className="flex flex-col items-center text-center mb-8">
        <Avatar>
        <AvatarImage alt="Shaun Mendes" src="/assests/images/Shaun.jpg" />
        </Avatar>
        <h1 className="mt-4 text-2xl font-bold">Shaun Mendes</h1>
        <p className="text-sm">Web developer</p>
        </div>
        <div className="space-y-4">
        <div className="flex items-center">
        <MailIcon className="text-yellow-500" />
        <span className="ml-2">shaunkmmendes@gmail.com</span>
        </div>
        <div className="flex items-center">
        <PhoneIcon className="text-yellow-500" />
        <span className="ml-2">(+91) 9920778067</span>
        </div>
        <div className="flex items-center">
        <CakeIcon className="text-yellow-500" />
        <span className="ml-2">March 1, 2004</span>
        </div>
        <div className="flex items-center">
        <LocateIcon className="text-yellow-500" />
        <span className="ml-2">Mumbai, India</span>
        </div>
        <div className="flex justify-center">
        <Link
        className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-600"
        href="#Contact"
        >
        Contact Me
        </Link>
        </div>
        <div className="flex justify-center space-x-2">
        <FacebookIcon className="text-yellow-500" />
        <TwitterIcon className="text-yellow-500" />
        <InstagramIcon className="text-yellow-500" />
        </div>
        </div>
        </aside>
        <main className="p-8 space-y-8 w-full lg:w-3/4">
        <section>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="mb-4">
        I am Shaun Mendes, a second-year Computer Engineering student at Fr. Conceicao Rodrigues College of Engineering (FR. CRCE), Mumbai, with a passion for technology.
        </p>
        <p>
        I&apos;ve dived into web development, learning HTML, CSS, and Bootstrap, and advanced to React, Vue, Next.js, and database management through hands-on projects like the college website and a blockchain-based client project. I enjoy sharing my knowledge, conducting coding sessions and bootcamps, and was part of organizing the Bit N Build international hackathon. I&apos;m eager to keep learning and applying new skills in computer engineering.
        </p>
        </section>
        <section>
        <h2 className="text-3xl font-bold mb-4">What I&apos;m Doing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-[#222]">
        <CardContent>
        <CodeIcon className="text-yellow-500" />
        <h3 className="text-xl font-semibold my-2">Web Development</h3>
        <p>High-quality development of sites at the professional level.</p>
        </CardContent>
        </Card>
        <Card className="bg-[#222]">
        <CardContent>
        <LaptopIcon className="text-yellow-500" />
        <h3 className="text-xl font-semibold my-2">Web Design</h3>
        <p>The most modern and high-quality design made at a professional level.</p>
        </CardContent>
        </Card>
        
        <Card className="bg-[#222]">
        <CardContent>
        <SmartphoneIcon className="text-yellow-500" />
        <h3 className="text-xl font-semibold my-2">Learning Mobile App Development</h3>
        <p>Learning development of applications for iOS and Android.</p>
        </CardContent>
        </Card>
        <Card className="bg-[#222]">
        <CardContent>
        <CameraIcon className="text-yellow-500" />
        <h3 className="text-xl font-semibold my-2">Learning AI/ML and Blockchain</h3>
        <p>I am in the learning process of new technologies related to AI/ML and Blockchain.</p>
        </CardContent>
        </Card>
        </div>
        </section>
        <section>
        <h2 className="text-3xl font-bold mb-4 underline">About My Journey</h2>
        <div>
        <h3 className="text-xl font-semibold my-2">Education</h3>
        
        
        <section>
        <Experience/>
        </section>
        
        
        <h3 className="text-xl font-semibold my-2">Skills</h3>
        <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-[#222] rounded-lg">
        <h4 className="text-lg font-semibold">Frontend Development</h4>
        <p>Building interactive and responsive web applications.</p>
        </div>
        <div className="p-4 bg-[#222] rounded-lg">
        <h4 className="text-lg font-semibold">UI/UX Design</h4>
        <p>Creating intuitive and user-friendly designs.</p>
        </div>
        
        <div className="p-4 bg-[#222] rounded-lg">
        <h4 className="text-lg font-semibold">Responsive Design</h4>
        <p>Designing websites that adapt to various screen sizes.</p>
        </div>
        <div className="p-4 bg-[#222] rounded-lg">
        <h4 className="text-lg font-semibold">Mobile Apps</h4>
        <p>Creating Mobile Applications.</p>
        </div>
        </div>
        </div>
        </section>
        
        
        
        <section>
        {/* <h2 className="text-3xl font-bold mb-4 underline" id="Contact">Contact </h2> */}
        <ContactUs/>
        </section>
        
        
        
        </main>
        </div>
        </div>
        );
    }
    
    function CakeIcon(props) {
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
            <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
            <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
            <path d="M2 21h20" />
            <path d="M7 8v2" />
            <path d="M12 8v2" />
            <path d="M17 8v2" />
            <path d="M7 4h.01" />
            <path d="M12 4h.01" />
            <path d="M17 4h.01" />
            </svg>
            );
        }
        
        function CameraIcon(props) {
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
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                <circle cx="12" cy="13" r="3" />
                </svg>
                );
            }
            
            function CodeIcon(props) {
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
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                    </svg>
                    );
                }
                
                function FacebookIcon(props) {
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
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                        );
                    }
                    
                    function InstagramIcon(props) {
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
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                            );
                        }
                        
                        function LaptopIcon(props) {
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
                                <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
                                </svg>
                                );
                            }
                            
                            function LocateIcon(props) {
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
                                    <line x1="2" x2="5" y1="12" y2="12" />
                                    <line x1="19" x2="22" y1="12" y2="12" />
                                    <line x1="12" x2="12" y1="2" y2="5" />
                                    <line x1="12" x2="12" y1="19" y2="22" />
                                    <circle cx="12" cy="12" r="7" />
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
                                        
                                        function SmartphoneIcon(props) {
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
                                                <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                                                <path d="M12 18h.01" />
                                                </svg>
                                                );
                                            }
                                            
                                            function TwitterIcon(props) {
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
                                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                                    </svg>
                                                    );
                                                }