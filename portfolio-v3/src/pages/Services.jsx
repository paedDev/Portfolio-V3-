import React, { useEffect, useRef } from "react";
import { FiLayout, FiDatabase, FiCpu, FiShare2 } from "react-icons/fi";
import { MdConnectWithoutContact } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header entrance (left title & right description)
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      headerTl
        .from(".services-header-left", {
          x: -60,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
        })
        .from(
          ".services-header-right",
          {
            x: 60,
            opacity: 0,
            duration: 1.1,
            ease: "power3.out",
          },
          "<0.15",
        );

      // 2. Table header & staggered service rows
      gsap.from(".services-table-header", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-table",
          start: "top 80%",
        },
      });

      gsap.from(".service-row", {
        y: 45,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        clearProps: "transform", // Keeps hover transitions crisp after reveal
        scrollTrigger: {
          trigger: ".services-table",
          start: "top 78%",
        },
      });

      // 3. Bottom availability bar
      gsap.from(".services-footer", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-footer",
          start: "top 92%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
    <div
      ref={sectionRef}
      className="flex flex-col items-center min-h-screen w-full max-w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden py-16 lg:py-30 relative"
    >
      <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full max-w-7xl mx-auto gap-6 lg:gap-20">
        {/* Left side Header */}
        <div className="services-header-left flex-1">
          <h1 className="uppercase text-gray-500 font-bold tracking-widest text-xs mb-4">
            My Services
          </h1>
          <p className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-none text-gray-900">
            CORE <span className="block">CAPABILITIES</span>
          </p>
        </div>
        <div className="services-header-right flex-1 lg:max-w-md pb-2 lg:pb-4">
          <p className="text-sm lg:text-xs xl:text-lg font-medium text-gray-600 leading-relaxed">
            Expanding your digital footprint with specialized engineering, fluid
            interfaces, and scalable architectures designed for modern web
            demands.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start justify-between w-full max-w-7xl mx-auto gap-8 lg:gap-20 mt-10 lg:mt-20 mb-8">
        <div className="services-table max-w-6xl mx-auto w-full text-gray-600">
          <div className="services-table-header hidden lg:grid grid-cols-[100px_1fr_2fr_1fr] border-b border-gray-300">
            <div className="p-10 text-3xl"></div>
            <div className="font-bold text-left p-10">Services</div>
            <div className="font-bold text-left p-10">Description</div>
            <div className="font-bold text-left p-10">Stack</div>
          </div>

          {/* Table Body (Rows) */}
          {services.map((service, index) => (
            <div
              key={index}
              className="service-row group relative flex flex-col lg:grid lg:grid-cols-[100px_1fr_2fr_1fr] border-b border-gray-300 cursor-pointer overflow-hidden z-10 py-4 lg:py-0"
            >
              <div className="absolute inset-0 bg-gray-50 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10"></div>

              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-900 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-50"></div>

              <div className="px-4 pt-4 pb-2 lg:p-10 text-3xl flex items-center w-fit lg:w-auto rounded-lg lg:rounded-none group-hover:bg-gray-900 group-hover:text-white transition-colors duration-500 ease-in">
                {service.icons}
              </div>

              <div className="px-4 py-2 lg:p-10 font-display text-xl sm:text-2xl lg:text-3xl text-gray-900 font-bold tracking-tight flex items-center">
                {service.title}
              </div>

              <div className="px-4 py-2 lg:p-10 text-gray-500 text-sm font-bold flex items-center group-hover:text-gray-700 transition-colors duration-500 ease-in">
                {service.description}
              </div>

              <div className="px-4 pt-3 pb-4 lg:p-10 flex flex-wrap gap-2 items-center">
                {service.stack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 lg:px-4 lg:py-2 group-hover:border-gray-900 group-hover:bg-gray-900 group-hover:text-white border border-gray-300 rounded-md bg-white text-gray-600 uppercase text-[11px] lg:text-xs duration-500 transition-all ease-in font-bold tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="services-footer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full lg:w-[80%] uppercase text-xs text-gray-400 font-semibold tracking-widest">
        <p>4 Services Available</p>
        <div className="flex space-x-3 sm:space-x-4 items-center text-gray-900">
          <MdConnectWithoutContact className="size-7 sm:size-8 animate-bounce" />
          <BsArrowRight />
          <span>OPEN FOR WORK</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
