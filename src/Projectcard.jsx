import React from "react";
import { FaGithub, FaEye } from "react-icons/fa";

const projects = [
  {
    title: "Handy Haven Web App",
    description: "Ecommerce app for dev",
    githubLink: "https://github.com/Raptor-trooper/JSD8_raptor_trooper_website",
    liveLink: "https://jsd-8-raptor-trooper-website.vercel.app/",
    imageUrl: "/Images/Handy_Haven.png",
  },
];

const ProjectSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group w-full text-white rounded-lg overflow-hidden shadow-lg"
          >
            {/* Background Image */}
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-80 object-cover transition duration-300"
            />
            {/* Text (Always visible) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/60 to-black/30 z-20">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>
            {/* Overlay with Buttons (Hover entire card) */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 z-10">
              <div className="flex space-x-8">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 text-white bg-white rounded-full hover:bg-gray-300 transition"
                >
                  <FaGithub className="text-2xl text-black" />{" "}
                  {/* GitHub Icon */}
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 text-white bg-white rounded-full hover:bg-gray-300 transition"
                >
                  <FaEye className="text-2xl text-black" /> {/* Eye Icon */}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
