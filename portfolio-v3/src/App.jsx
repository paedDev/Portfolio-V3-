import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Techstack from "./pages/Techstack";
import LogoLoop from "./pages/LogoLoop";
import Experience from "./pages/Experience";
import Works from "./pages/Works";

const App = () => {
  return (
    <main className="bg-white relative">
      <Navbar />
      <Hero />
      <Techstack />
      <LogoLoop />

      <div className="relative z-10">
        <Experience />
      </div>

      {/* LAYER 2: Works (Z-20) 
          The -mt-[100vh] tells this section to slide up over the Experience 
          section exactly during that extra pin time we added in GSAP!
      */}
      <div className="relative z-20 -mt-[100vh] bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.5)] rounded-t-[80px]">
        <Works />
      </div>
    </main>
  );
};

export default App;
