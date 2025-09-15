import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Features from "../components/layout/Features";
import Productivity from "../components/layout/Productivity";

const Home = () => {
  return (
    <>
      <main className="bg-Navy850 w-full min-h-screen">
        <Navbar />
        <Hero />
        <Features />
        <Productivity />
      </main>
    </>
  );
};

export default Home;
