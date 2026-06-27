import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SiGsap, SiMongodb, SiExpress, SiPostman } from "react-icons/si";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { PiMouseLeftClick } from "react-icons/pi";
const LogoTicker = () => {
  const containerRef = useRef(null);
  const tl = useRef(null);

  const logos = [
    { logoIcons: <FaReact />, logoText: "React" },
    { logoIcons: <SiMongodb />, logoText: "MongoDB" },
    { logoIcons: <SiExpress />, logoText: "Express" },
    { logoIcons: <SiPostman />, logoText: "Postman" },
    { logoIcons: <SiGsap />, logoText: "GSAP" },
    { logoIcons: <FaNodeJs />, logoText: "Node.js" },
    { logoIcons: <FaGithub />, logoText: "GitHub" },
    { logoIcons: <RiTailwindCssFill />, logoText: "Tailwind CSS" },
    { logoIcons: <BiLogoPostgresql />, logoText: "PostgreSQL" },
  ];
  useEffect(() => {
    tl.current = gsap.timeline({ repeat: -1 });
    tl.current.to(containerRef.current, {
      xPercent: -50,
      duration: 25,
      ease: "linear",
    });
  }, []);

  const handleMouseEnter = () => tl.current.pause();
  const handleMouseLeave = () => tl.current.play();

  return (
    <div className="overflow-hidden w-full py-40  flex items-center justify-center relative">
      <div
        className="rotate-[-5deg] w-[120%] border-2 border-gray-100 rounded-lg p-12 flex items-center gap-16   "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={containerRef} className="flex gap-16 w-max">
          {[...logos, ...logos].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-8  font-bold whitespace-nowrap space-x-5 cursor-pointer text-gray-200 transition-all duration-500 ease-in-out group"
            >
              <div className="flex items-center gap-8 ">
                <span className="text-6xl inline-block transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:text-gray-900 group-hover:-translate-y-2">
                  {item.logoIcons}
                </span>
                <span className="text-7xl uppercase font-display  tracking-tight group-hover:text-gray-900 transition-colors duration-300">
                  {item.logoText}
                </span>
              </div>
              <span className="text-6xl group-hover:text-gray-700">|</span>
            </div>
          ))}
        </div>
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 ">
          <PiMouseLeftClick className="inline-block mr-2 animate-bounce size-7 text-gray-700" />
          <span className="text-gray-400">Hover to Interact</span>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
