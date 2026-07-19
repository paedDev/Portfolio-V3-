import React from "react";
import { Code, FileText, Send } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 w-full flex justify-center py-2 z-50">
      <nav
        aria-label="Main Navigation"
        className="bg-white/80 backdrop-blur-md border border-gray-100 rounded-full shadow-2xl px-4 sm:px-6 py-2 flex items-center justify-between w-[95%] max-w-lg"
      >
        {/* Left Item */}
        <a
          href="#works"
          aria-label="works"
          className="flex items-center space-x-2 px-4 sm:px-6 py-2 text-xs text-gray-500 transition-colors hover:bg-black rounded-full hover:text-white duration-300"
        >
          <Code size={14} />
          <span className="hidden sm:block uppercase font-bold tracking-wider">
            Projects
          </span>
        </a>

        {/* Center Item */}
        <a
          href="#resume"
          aria-label="Resume"
          className="flex items-center space-x-2 px-4 sm:px-6 py-2 text-xs text-gray-500 transition-colors hover:bg-black rounded-full hover:text-white duration-300"
        >
          <FileText size={14} />
          <span className="hidden sm:block uppercase font-bold tracking-wider">
            Resume
          </span>
        </a>

        {/* Right Item (The CTA) */}
        <a
          href="#contact"
          aria-label="Contact"
          className="relative flex items-center justify-center text-xs px-4 sm:px-6 py-2 rounded-full text-black border border-black overflow-hidden transition-colors duration-300 hover:text-white group"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0" />

          <div className="relative z-10 flex items-center space-x-2 pointer-events-none">
            <Send size={14} />
            <span className="hidden sm:block uppercase font-bold tracking-wider">
              Contact
            </span>
          </div>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
