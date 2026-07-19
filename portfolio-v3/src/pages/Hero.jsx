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
      // Create ONE master timeline with the ScrollTrigger
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=500",
          scrub: 1,
        },
      });

      // All animations are added to the timeline.
      // Do NOT add individual scrollTriggers in here.
      tl.fromTo(".move-left", { x: 0 }, { x: 100, duration: 1 }, 0)
        .fromTo(".move-right", { x: 0 }, { x: -100, duration: 1 }, 0)
        // Note: You used a standalone gsap.fromTo for description.
        // I added it to the timeline so it scrubs smoothly with the rest.
        .fromTo(
          "#description",
          { y: 20, opacity: 1 },
          { duration: 1, y: 0, opacity: 0 },
          0,
        )
        .fromTo(
          ".move-up",
          { y: 0, opacity: 1 },
          {
            y: -100,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
            opacity: 0,
          },
          0,
        )
        .fromTo(
          ".move-left2right",
          { y: 0, x: 0, opacity: 1 },
          {
            y: -100,
            x: -50,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
            opacity: 0,
          },
          0,
        )
        .fromTo(
          ".move-bottom",
          { y: 0, opacity: 1 },
          { y: 100, duration: 1, ease: "power2.out", stagger: 0.2, opacity: 0 },
          0,
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="max-w-5xl mx-auto h-screen px-6 py-12 relative flex flex-col space-y-8 justify-center overflow-hidden"
    >
      <h1 className="uppercase font-bold leading-none tracking-tight">
        <div className="flex flex-col font-display lg:text-9xl text-6xl name">
          <span className="move-left inline-block">JAN NOEL</span>
          <span className="move-right inline-block">Sablaon</span>
          <span className="move-left inline-block">PAED</span>
        </div>
      </h1>

      {/* Description */}
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
        <span className="block font-semibold tracking-widest lg:text-lg text-sm">
          EXPLORE WORK
        </span>
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </a>

      {/* Socials */}
      <div className="absolute bottom-6 right-6 flex flex-col items-end justify-center space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">
          Socials
        </h2>
        <div className="flex">
          <a
            href="https://github.com/paedDev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center px-4 py-3 text-gray-800 transition-all duration-300 hover:scale-110 hover:text-gray-500"
          >
            <FaGithub className="lg:size-6 size-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/jan-noel-s-paed-paed-115358347/"
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

      {/* Images Section */}
      <div className="absolute right-8 top-6 move-up z-10 hidden lg:block">
        <img
          src="/images/hero-profile-grad.jpg"
          alt="Jan Noel Profile - Graduation"
          className="h-56 w-40 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer rotate-2"
        />
      </div>

      {/* Mid: overlaps, slight negative tilt. REMOVED backticks on rotation */}
      <div className="absolute right-56 top-24 move-left2right z-20 hidden lg:block">
        <img
          src="/images/hero-profile-1.jpg"
          alt="Jan Noel Profile - Casual"
          className="h-48 w-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer -rotate-[1.5deg]"
        />
      </div>

      {/* Bottom-right anchor */}
      <div className="absolute right-14 bottom-40 move-bottom z-10 hidden lg:block">
        <img
          src="/images/hero-profile-2.jpg"
          alt="Jan Noel Profile - Professional"
          className="h-52 w-44 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer rotate-3"
        />
      </div>
    </section>
  );
};

export default Hero;
