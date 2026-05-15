import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Techstack from "./pages/Techstack";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <main className="bg-white">
      <Navbar />

      <Hero />
      <Techstack />
    </main>
  );
};

export default App;
