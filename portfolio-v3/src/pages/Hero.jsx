import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=500",
          scrub: 1,
        },
      });

      tl.fromTo(".left", { x: 0 }, { x: 100, duration: 1 }, 0);

      tl.fromTo(".right", { x: 0 }, { x: -100, duration: 1 }, 0);

      gsap.fromTo(
        "#description",
        {
          y: 40,
          opacity: 0,
        },
        {
          duration: 2,
          opacity: 1,
          y: 0,
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      id="hero"
      ref={containerRef}
      className="max-w-5xl mx-auto h-screen px-6 py-12 relative flex flex-col space-y-8 justify-center   "
    >
      <h1 className="uppercase   font-bold  leading-none tracking-tight">
        <div className="flex flex-col font-display lg:text-9xl text-6xl name">
          <span className="left inline-block">JAN NOEL</span>
          <span className="right inline-block">Sablaon</span>
          <span className="left inline-block">PAED</span>
        </div>
      </h1>{" "}
      {/* description */}
      <p
        id="description"
        className="max-w-lg lg:text-lg text-sm font-semibold tracking-wider text-gray-800"
      >
        Creative Full-Stack Web Developer. Crafting immersive digital
        experiences and scalable architectures for the modern web.
      </p>
      <a
        href="#projects"
        className="group flex w-max items-center space-x-2 border border-gray-900 px-7 py-3 transition-colors hover:bg-gray-900 hover:text-white cursor-pointer"
      >
        <span className="block font-semibold tracking-widest lg:text-lg text-sm ">
          EXPLORE WORK
        </span>
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </a>
      <div className="absolute bottom-6 right-6 flex flex-col items-end justify-center space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">
          Socials
        </h2>
        <div className="flex">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center px-4 py-3 text-gray-800 transition-all duration-300 hover:scale-110 hover:text-gray-500"
          >
            <FaGithub className="lg:size-6 size-4" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center px-4 py-3 text-gray-800 transition-all duration-300 hover:scale-110 hover:text-blue-600"
          >
            <FaLinkedin className="lg:size-6 size-4" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="flex items-center justify-center px-4 py-3 text-gray-800 transition-all duration-300 hover:scale-110 hover:text-blue-400"
          >
            <FaTwitter className="lg:size-6 size-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
