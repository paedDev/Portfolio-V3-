import React from "react";
import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const PickACardCTA = () => {
  const cards = [
    {
      id: 1,
      title: "Email Me",
      icon: <Mail size={48} strokeWidth={1.5} />,
      bgColor: "bg-gradient-to-br from-[#d4ff46] to-[#88ce02]",
      textColor: "text-gray-900",
      rotate: "-rotate-12",
      translate: "-translate-x-[120px] lg:-translate-x-[180px] translate-y-8",
      zIndex: "z-10",
      href: "mailto:your.email@example.com",
    },
    {
      id: 2,
      title: "GitHub",
      icon: <FaGithub size={48} />,
      bgColor: "bg-gradient-to-br from-[#ff8a00] to-[#e52e71]",
      textColor: "text-white",
      rotate: "-rotate-4",
      translate: "-translate-x-[40px] lg:-translate-x-[60px] translate-y-2",
      zIndex: "z-20",
      href: "#",
    },
    {
      id: 3,
      title: "LinkedIn",
      icon: <FaLinkedin size={48} />,
      bgColor: "bg-gradient-to-br from-[#90e0ef] to-[#00b4d8]",
      textColor: "text-gray-900",
      rotate: "rotate-4",
      translate: "translate-x-[40px] lg:translate-x-[60px] translate-y-2",
      zIndex: "z-30",
      href: "#",
    },
    {
      id: 4,
      title: "Resume",
      icon: <FileText size={48} strokeWidth={1.5} />,
      // Deep Navy/Dark Blue gradient
      bgColor: "bg-gradient-to-br from-[#14213d] to-[#000000]",
      textColor: "text-white",
      rotate: "rotate-12",
      translate: "translate-x-[120px] lg:translate-x-[180px] translate-y-8",
      zIndex: "z-40",
      href: "#resume",
    },
  ];

  return (
    <section className="relative w-full py-32 bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center border-t border-gray-900">
      {/* Header Text */}

      <div className="text-center z-50 mb-16 px-4">
        <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 tracking-tight">
          Experience the Magic
        </h2>
        <div className="flex items-center justify-center gap-2 text-gray-400 italic font-medium">
          {/* A simple curved arrow using SVG */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="rotate-90"
          >
            <path d="M9 10s3-3 8-3v4l5-5-5-5v4c-5 0-10 4-10 9" />
          </svg>
          <span>Pick a card</span>
        </div>
      </div>
      {/* Cards Container */}
      <div className="relative flex justify-center items-center h-[350px] lg:h-[450px] w-full max-w-4xl mx-auto">
        {cards.map((card) => (
          <a
            href={card.href}
            key={card.id}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              absolute w-48 h-64 lg:w-64 lg:h-80 rounded-2xl lg:rounded-3xl shadow-2xl 
              flex flex-col items-center justify-center cursor-pointer 
              origin-bottom 
              transition-all duration-500 ease-out 
              hover:-translate-y-16 hover:rotate-0 hover:scale-110 hover:z-50 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]
              ${card.bgColor} ${card.rotate} ${card.translate} ${card.zIndex} ${card.textColor}
            `}
          >
            <div className="absolute inset-0 rounded-2xl lg:rounded-3xl border border-white/30 bg-gradient-to-tr from-white/5 to-white/40 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center gap-4 drop-shadow-md">
              {card.icon}
              <span className="font-bold font-display uppercase tracking-widest text-sm lg:text-lg">
                {card.title}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PickACardCTA;
