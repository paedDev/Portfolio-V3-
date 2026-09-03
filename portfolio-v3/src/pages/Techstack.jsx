import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import GithubCalendar from "@/components/GithubCalendar";
gsap.registerPlugin(ScrollTrigger);

const Techstack = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-in",
        {
          y: 60,
          opacity: 0,
        },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        },
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="techstack"
      ref={containerRef}
      aria-labelledby="techstack-heading"
      className="min-h-screen max-w-7xl mx-auto py-12 md:py-20 px-4 sm:px-6"
    >
      {/* Reduced gap on mobile, expanded on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left Container */}
        <div className="flex flex-col space-y-6 md:space-y-8">
          <span className="block uppercase text-gray-500 font-bold tracking-widest text-xs fade-in">
            Philosophy
          </span>
          {/* Scaled text for mobile (text-5xl) up to desktop (lg:text-7xl) */}
          <h2
            id="techstack-heading"
            className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.85] max-w-lg uppercase fade-in"
          >
            Crafting Scalable, Impactful Web Applications.
          </h2>

          <div
            className="h-0.5 w-32 bg-gray-800 fade-in"
            aria-hidden="true"
          ></div>

          <p className="text-base md:text-lg font-semibold text-gray-600 max-w-[45ch] leading-relaxed fade-in">
            Development is not just about writing clean code; it's about telling
            a brand's story and providing robust solutions through memorable
            digital experiences.
          </p>
          <span className="font-bold tracking-widest text-sm text-gray-900 fade-in uppercase">
            FULL-STACK MERN ARCHITECTURE
          </span>
        </div>

        {/* Right Container */}
        <div className="flex flex-col w-full">
          <span className="block uppercase text-gray-500 font-bold tracking-widest text-xs mb-4 md:mb-6 fade-in">
            Tech Stack / Tools
          </span>

          <div className="flex flex-col gap-4 w-full fade-in">
            {/* Changed from 'flex gap-2' to 'flex-col md:flex-row gap-4' to stack on mobile */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Frontend */}
              <div className="flex-1 space-y-4 bg-gray-50 border border-gray-200 rounded-lg p-5 md:p-6 fade-in">
                <h3 className="font-display text-lg lg:text-xl font-bold tracking-wider text-gray-900">
                  FRONTEND & UI
                </h3>
                <ul className="flex flex-wrap gap-2">
                  <li className="inline-block rounded-sm border border-gray-300 px-3 py-1 text-xs font-bold text-gray-700">
                    REACT
                  </li>
                  <li className="inline-block rounded-sm border border-gray-300 px-3 py-1 text-xs font-bold text-gray-700">
                    TAILWINDCSS
                  </li>
                  <li className="inline-block rounded-sm border border-gray-300 px-3 py-1 text-xs font-bold text-gray-700">
                    GSAP
                  </li>
                  <li className="inline-block rounded-sm border border-gray-300 px-3 py-1 text-xs font-bold text-gray-700">
                    THREE.JS
                  </li>
                  <li className="inline-block rounded-sm border border-gray-300 px-3 py-1 text-xs font-bold text-gray-700">
                    VITE
                  </li>
                </ul>
              </div>

              {/* Backend */}
              <div className="flex-1 space-y-4 bg-gray-50 border border-gray-200 rounded-lg p-5 md:p-6 fade-in">
                <h3 className="font-display text-lg lg:text-xl font-bold tracking-wider text-gray-900">
                  BACKEND & DATABASE
                </h3>
                <ul className="flex flex-wrap gap-2">
                  <li className="inline-block rounded-sm border border-gray-300 px-3 py-1 text-xs font-bold text-gray-700">
                    NODE.JS
                  </li>
                  <li className="inline-block rounded-sm border border-gray-300 px-3 py-1 text-xs font-bold text-gray-700">
                    EXPRESS
                  </li>
                  <li className="inline-block rounded-sm border border-gray-300 px-3 py-1 text-xs font-bold text-gray-700">
                    MONGODB
                  </li>
                  <li className="inline-block rounded-sm border border-gray-300 px-3 py-1 text-xs font-bold text-gray-700">
                    POSTGRESQL
                  </li>
                  <li className="inline-block rounded-sm border border-gray-300 px-3 py-1 text-xs font-bold text-gray-700">
                    DRIZZLE ORM
                  </li>
                  <li className="inline-block rounded-sm border border-gray-300 px-3 py-1 text-xs font-bold text-gray-700">
                    JWT
                  </li>
                </ul>
              </div>
            </div>

            {/* Architecture tools */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 md:p-6 space-y-3 fade-in">
              <h3 className="font-display text-lg lg:text-xl tracking-wider font-bold">
                ARCHITECTURE TOOLS
              </h3>
              <ul className="flex flex-wrap gap-2">
                <li className="inline-block rounded-sm border border-gray-300 px-3 py-1 text-xs font-bold text-gray-700">
                  AXIOS
                </li>
                <li className="inline-block rounded-sm border border-gray-300 px-3 py-1 text-xs font-bold text-gray-700">
                  POSTMAN
                </li>
                <li className="inline-block rounded-sm border border-gray-300 px-3 py-1 text-xs font-bold text-gray-700">
                  GIT
                </li>
                <li className="inline-block rounded-sm border border-gray-300 px-3 py-1 text-xs font-bold text-gray-700">
                  GITHUB
                </li>
                <li className="inline-block rounded-sm border border-gray-300 px-3 py-1 text-xs font-bold text-gray-700">
                  VSCODE
                </li>
                <li className="inline-block rounded-sm border border-gray-300 px-3 py-1 text-xs font-bold text-gray-700">
                  DISCORD
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-16 w-full overflow-x-auto fade-in">
        <GithubCalendar />
      </div>
    </section>
  );
};

export default Techstack;
