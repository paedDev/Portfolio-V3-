import React from "react";
import { TiArrowUp } from "react-icons/ti";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-20 py-8 flex flex-col sm:flex-row items-center justify-between text-sm uppercase tracking-wider text-gray-500 font-medium">
        {/* Copyright Section */}
        <div className="mb-4 sm:mb-0 text-center sm:text-left">
          <span className="text-gray-900 font-bold">
            &copy; {new Date().getFullYear()}
          </span>
          <span className="mx-2">|</span>
          <span>Jan Noel Sablaon Paed</span>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 hover:text-gray-900 transition-colors duration-300"
        >
          <span>Back To Top</span>
          {/* 
            The icon sits in a subtle gray circle that turns black 
            and floats up slightly when you hover over the button 
          */}
          <div className="bg-gray-100 p-1.5 rounded-full group-hover:bg-gray-900 group-hover:text-white transition-all duration-300 group-hover:-translate-y-1">
            <TiArrowUp size="18" />
          </div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
