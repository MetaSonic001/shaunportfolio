import Image from "next/image";
import React from "react";
import Hero from "../../components/main/Hero";
import Skills from "../../components/main/Skills";
import Projects from "../../components/main/Projects";


const page = () => {
  return (
    <div><main className="h-full w-full">
    <div className="flex flex-col gap-20">
      <Hero/>
      <Skills/>
      <Projects/>

    </div>
  </main></div>
  )
}

export default page