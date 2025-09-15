import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Features from "../components/layout/Features";

const Home = () => {
  return (
    <>
      <main className="bg-Navy850 w-full min-h-screen">
        <Navbar />
        <Hero />
        <Features />
      </main>
    </>
  );
};

export default Home;
