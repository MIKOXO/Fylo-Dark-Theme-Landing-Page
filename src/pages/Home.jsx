import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";

const Home = () => {
  return (
    <>
      <main className="bg-Navy850 w-full min-h-screen">
        <Navbar />
        <Hero />
      </main>
    </>
  );
};

export default Home;
