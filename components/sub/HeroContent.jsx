"use client"; // Not sure what this line is meant for, but if it's not necessary, you can remove it

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion"; // Assuming motion variants are correctly defined in this file
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>



{/* animation section */}
        <motion.div
  variants={slideInFromLeft(0.5)}
  className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
>
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
  >
    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
      <span className="text-white bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
        Hello, I&apos;m{" "}
      </span>
      <br></br>
      <TypeAnimation className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        sequence={[
          "Shaun",
          1000,
          "Web Developer",
          1000,
          "Mobile Developer",
          1000,
          "UI/UX Designer",
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </h1>
  </motion.div>
</motion.div>


  {/* <span>
            Upcoming 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Fullstack{" "}
            </span>
            Software Developer
          </span> */}
          
{/* line below intro */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
    variants={slideInFromRight(0.8)}
    className="w-full h-full flex justify-center items-center"
>
    <div className="flex justify-center">
        <Image
            src="/assests/images/mainIconsdark.svg"
            alt="work icons"
            layout="responsive"
            width={650}
            height={650}
        />
    </div>
</motion.div>
    </motion.div>
  );
};

export default HeroContent;
