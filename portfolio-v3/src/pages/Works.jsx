import GithubCalendar from "@/components/GithubCalendar";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
const Works = () => {
  const projects = [
    {
      image: "../images/ProjectImages/Mojito.png",
      title: "MOJITO",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      skills: ["React", "Tailwind CSS", "GSAP"],
      button: "View Live",
      Link: "https://mojito-website-pexs3h5gj-jnpaeds-projects-63050fe3.vercel.app/",
    },
    {
      image: "placeholder.jpg",
      title: "Project Title 2",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      skills: ["React", "Tailwind CSS", "GSAP"],
      button: "View Live",
      Link: "http://example.com",
    },
    {
      image: "placeholder.jpg",
      title: "Project Title 3",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      skills: ["React", "Tailwind CSS", "GSAP"],
      button: "View Live",
      Link: "http://example.com",
    },
    {
      image: "placeholder.jpg",
      title: "Project Title 4",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      skills: ["React", "Tailwind CSS", "GSAP"],
      button: "View Live",
      Link: "http://example.com",
    },
    {
      image: "placeholder.jpg",
      title: "Project Title 5",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      skills: ["React", "Tailwind CSS", "GSAP"],
      button: "View Live",
      Link: "http://example.com",
    },
  ];
  return (
    <div
      id="works"
      className="min-h-screen w-full max-w-full mx-auto flex flex-col justify-center px-20 overflow-hidden py-10 relative "
    >
      <div className="flex flex-col justify-center gap-4 uppercase">
        <h1 className="lg:text-xs text-[12px] font-bold text-gray-400 tracking-[0.25em]">
          Portfolio
        </h1>
        <div className="lg:text-9xl text-7xl font-bold font-display text-gray-900 tracking-tight">
          <div>SELECTED</div>
          <span>WORKS</span>
        </div>
      </div>
      <div className="flex items-center justify-center lg:justify-end lg:-mt-12 mt-4 font-bold text-gray-900">
        <button className="flex items-center justify-center gap-2 px-6 py-4 text-xs tracking-[.25em] uppercase border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-500 hover:scale-105">
          View All Projects
          <GoArrowUpRight size="20" />
        </button>
      </div>

      {/* Projects/ WOrks */}
      <div className="flex flex-col gap-16 mt-12 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid lg:grid-cols-5 grid-cols-1 gap-8 mt-12 max-w-7xl mx-auto"
          >
            <div
              className={`order-1 lg:col-span-3 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"} relative`}
            >
              <img
                src={project.image}
                alt="Project"
                // CHANGED: object-contain to object-cover. Added object-center to keep the focus in the middle.
                className="relative w-full h-[60vh] lg:h-[80vh] object-cover object-center border border-gray-300 rounded-lg shadow-lg transition-transform duration-500"
              />
            </div>
            {/* Description Right */}
            <div
              className={`flex flex-col justify-center lg:col-span-2 order-2 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
            >
              <h3 className="text-7xl font-display font-bold text-gray-900 mb-4 tracking-tight">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 font-bold">
                {project.description}
              </p>
              <a
                href={project.Link}
                className="text-gray-700 tracking-wider hover:text-gray-700 font-bold underline underline-offset-4 uppercase"
              >
                View Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
