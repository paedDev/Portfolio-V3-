import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Techstack from "./pages/Techstack";
import { Route, Routes } from "react-router-dom";
import LogoLoop from "./pages/LogoLoop";
import Experience from "./pages/Experience";

const App = () => {
  return (
    <main className="bg-white">
      <Navbar />

      <Hero />
      <Techstack />
      <LogoLoop />
      <Experience />
    </main>
  );
};

export default App;
