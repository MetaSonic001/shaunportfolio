import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <img
        src={src}
        alt={title}
        className="object-cover w-full h-60 md:h-auto"
      />
      <div className="p-4">
        <h1 className="text-2xl md:text-xl lg:text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
