import React from 'react'
import projectsData from '../../constants/data';
import ProjectCard from '../../components/sub/ProjectCard';

const page = () => {
    return (
      <div className="flex flex-col items-center justify-center py-20" id="projects">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              src={project.src}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    );
  };

export default page