'use client'
import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import projectsData from "../../constants/data";
import { motion } from "framer-motion";
import { slideInFromLeft } from "../../utils/motion"; // Assuming motion variants are correctly defined in this file

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const handleLoadMore = () => {
    setVisibleProjects(visibleProjects + 3);
  };

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects" style={{ zIndex: 999 }}>
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        {projectsData.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            href={project.href} // Set the href prop based on the project index
          />
        ))}
      </div>
      {/* {visibleProjects < projectsData.length && (
        <button
          onClick={handleLoadMore}
          className="bg-purple-500 text-white px-4 py-2 mt-5 rounded-md hover:bg-purple-600 focus:outline-none"
        >
          Load More
        </button>
      )} */}
      <div className="my-10 py-2">
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-4 px-8 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href="/Projects"
        >
          Go to Projects Page
        </motion.a>
      </div>
    </div>
  );
};

export default Projects;
