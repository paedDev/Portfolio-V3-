import GithubCalendar from "@/components/GithubCalendar";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Works = () => {
  const projects = [
    {
      image: "../images/ProjectImages/Mojito.png",
      title: "MOJITO",
      description:
        "An interactive, motion-driven brand landing page built with smooth GSAP scroll animations, fluid transitions, and a clean responsive layout.",
      skills: ["React", "Tailwind CSS", "GSAP"],
      button: "View Live",
      Link: "https://mojito-website-pexs3h5gj-jnpaeds-projects-63050fe3.vercel.app/",
    },
    {
      image: "../images/ProjectImages/PetitionSystem2.png",
      title: "Petition System",
      description:
        "A full-stack school petition platform enabling students to create, sign, and track campus initiatives with real-time signature updates and secure backend management.",
      skills: [
        "React",
        "Tailwind CSS",
        "GSAP",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      button: "View Live",
      Link: "https://petition-system-in-school-nnoc.vercel.app/",
    },
    {
      image: "../images/ProjectImages/Motorent.png",
      title: "MOTORENT",
      description:
        "A full-stack motorcycle rental platform powered by MERN architecture, featuring a real-time availability engine, curated fleet browsing, and seamless ride booking.",
      skills: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      button: "View Live",
      Link: "http://example.com",
    },
    {
      image: "../images/ProjectImages/HospitalManagement.png",
      title: "HMS Management",
      description:
        "A hospital and clinic appointment management system featuring 24/7 online patient booking, real-time slot availability, doctor schedule controls, and role-based admin dashboards.",
      skills: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      button: "View Live",
      Link: "http://example.com",
    },
  ];

  return (
    <div
      id="works"
      className="min-h-screen w-full max-w-full mx-auto flex flex-col justify-center px-4 md:px-10 lg:px-20 overflow-hidden py-10 relative"
    >
      <div className="flex flex-col justify-center gap-2 lg:gap-4 uppercase">
        <h1 className="text-[12px] lg:text-xs font-bold text-gray-400 tracking-[0.25em]">
          Portfolio
        </h1>
        <div className="text-5xl md:text-7xl lg:text-9xl font-bold font-display text-gray-900 tracking-tight">
          <div>SELECTED</div>
          <span>WORKS</span>
        </div>
      </div>

      <div className="flex items-center justify-center lg:justify-end mt-8 lg:-mt-12 font-bold text-gray-900">
        <button className="flex items-center justify-center gap-2 px-6 py-4 text-xs tracking-[.25em] uppercase border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-500 hover:scale-105">
          View All Projects
          <GoArrowUpRight size="20" />
        </button>
      </div>

      {/* Projects / Works */}
      <div className="flex flex-col gap-12 lg:gap-16 mt-12 max-w-7xl mx-auto w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 mt-6 lg:mt-12 max-w-7xl mx-auto w-full"
          >
            <div
              className={`order-1 lg:col-span-3 ${
                index % 2 === 0 ? "lg:order-1" : "lg:order-2"
              } relative`}
            >
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="relative w-full h-[40vh] md:h-[60vh] lg:h-[80vh] object-cover object-center border border-gray-300 rounded-lg shadow-lg transition-transform duration-500 cursor-pointer hover:scale-105"
              />
            </div>

            {/* Description */}
            <div
              className={`flex flex-col justify-center order-2 lg:col-span-2 ${
                index % 2 === 0 ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <h3 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-gray-900 mb-4 tracking-tight">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-5 font-medium text-sm lg:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 border border-gray-300 rounded-md bg-white text-gray-600 uppercase text-[11px] font-bold tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={project.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 tracking-wider hover:text-gray-600 font-bold underline underline-offset-4 uppercase inline-flex items-center gap-1 w-fit transition-colors"
              >
                {project.button}
                <GoArrowUpRight size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
