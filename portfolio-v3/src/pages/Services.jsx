import React from "react";
import { FiLayout, FiDatabase, FiCpu, FiShare2 } from "react-icons/fi";
import { MdConnectWithoutContact } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
const Services = () => {
  const services = [
    {
      icons: <FiLayout size={36} />,
      title: "Frontend & UI/UX Engineering",
      description:
        "Crafting pixel-perfect, highly responsive user interfaces with an emphasis on modern aesthetics and fluid layout configurations.",
      stack: ["React", "Tailwind CSS", "GSAP"],
    },
    {
      icons: <FiDatabase size={36} />,
      title: "Database & Serverless Architecture",
      description:
        "Designing highly efficient, scalable relational data infrastructures powered by modern ORMs and serverless cloud environments.",
      stack: ["PostgreSQL", "Neon DB", "Drizzle ORM", "Node.js"],
    },
    {
      icons: <FiCpu size={36} />,
      title: "Custom Enterprise Solutions",
      description:
        "Developing secure, high-performance internal tools and management systems tailored to streamline complex operational workflows.",
      stack: ["React", "Express", "MongoDB", "Node.js"],
    },
    {
      icons: <FiShare2 size={36} />,
      title: "API Design & Microservices",
      description:
        "Architecting reliable, well-documented backend services to support high-traffic web applications and seamless third-party integrations.",
      stack: ["Node.js", "Express", "RESTful APIs", "JWT"],
    },
  ];
  return (
    <div className="flex flex-col  items-center min-h-screen w-full max-w-full mx-auto px-20 overflow-hidden py-30 relative">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full max-w-7xl mx-auto gap-12 lg:gap-20">
        {/* Left side Header */}
        <div className="flex-1">
          <h1 className="uppercase text-gray-500 font-bold tracking-widest text-xs mb-4">
            My Services
          </h1>
          <p className="font-display text-6xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-none text-gray-900 ">
            CORE <span className="block">CAPABILITIES</span>
          </p>
        </div>
        <div className="flex-1 lg:max-w-md pb-2 lg:pb-4">
          <p className="text-sm lg:text-xs xl:text-lg font-medium text-gray-600 leading-relaxed">
            Expanding your digital footprint with specialized engineering, fluid
            interfaces, and scalable architectures designed for modern web
            demands.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start justify-between w-full max-w-7xl mx-auto gap-12 lg:gap-20 mt-12 lg:mt-20 mb-8">
        <div className="max-w-6xl mx-auto w-full text-gray-600">
          <div className="hidden lg:grid grid-cols-[100px_1fr_2fr_1fr] border-b border-gray-300">
            <div className="p-10 text-3xl"></div>
            <div className="font-bold text-left p-10">Services</div>
            <div className="font-bold text-left p-10">Description</div>
            <div className="font-bold text-left p-10">Stack</div>
          </div>

          {/* Table Body (Rows) */}
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col lg:grid lg:grid-cols-[100px_1fr_2fr_1fr] border-b border-gray-300 cursor-pointer overflow-hidden z-10"
            >
              <div className="absolute inset-0 bg-gray-50 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10"></div>

              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-900 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-50"></div>

              <div className="p-10 text-3xl flex items-center group-hover:bg-gray-900 group-hover:text-white transition-colors duration-500 ease-in">
                {service.icons}
              </div>

              <div className="p-10 font-display lg:text-3xl text-gray-900 text-2xl font-bold tracking-tight flex items-center">
                {service.title}
              </div>

              <div className="p-10 text-gray-500 text-sm font-bold flex items-center group-hover:text-gray-700 transition-colors duration-500 ease-in">
                {service.description}
              </div>

              <div className="p-10 flex flex-wrap gap-2 items-center">
                {service.stack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 group-hover:border-gray-900 group-hover:bg-gray-900 group-hover:text-white border border-gray-300 rounded-md bg-white text-gray-600  uppercase text-xs duration-500 transition-all ease-in font-bold tracking-wide
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between w-[80%] uppercase text-xs text-gray-400 font-semibold tracking-widest">
        <p className="">4 Services Available</p>
        <div className="flex space-x-4 items-center text-gray-900">
          <MdConnectWithoutContact className="size-8 animate-bounce " />
          <BsArrowRight />
          <span>OPEN FOR WORK</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
