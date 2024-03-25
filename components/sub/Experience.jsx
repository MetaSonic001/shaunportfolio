import React from "react";

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative wrap overflow-hidden p-4 lg:p-10 ">
        {/* <img
          src="/assests/images/Shaun.jpg"
          alt="Placeholder"
          className="hidden lg:block mr-8 w-auto lg:w-1/3" // Updated classes for responsive design
        /> */}
        
        <div
          className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border hidden lg:block"
          style={{ left: "50%" }}
        ></div>
        <div className="mb-8 flex flex-col lg:flex-row justify-between items-center w-full left-timeline">
          <div className="order-1 w-full lg:w-5/12 mb-4 lg:mb-0"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-full lg:w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white">Matriculation</h3>
            <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
              2010 - 2020
              <br />
              Gokuldham High School and Junior College
            </p>
          </div>
        </div>
        <div className="mb-8 flex flex-col lg:flex-row justify-between items-center w-full left-timeline">
          <div className="order-1 w-full lg:w-5/12 mb-4 lg:mb-0"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-full lg:w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white">Higher Secondary Education</h3>
            <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
              2020 - 2022
              <br />
              12th Grade - Pace Junior Science College, Andheri
            </p>
          </div>
        </div>
        <div className="mb-8 flex flex-col lg:flex-row justify-between items-center w-full left-timeline">
          <div className="order-1 w-full lg:w-5/12 mb-4 lg:mb-0"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-full lg:w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white">B.E Computer Engineering</h3>
            <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
              2022 - 2026
              <br />
              Fr. Conceicao Rodrigues College of Engineering, Bandra
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
