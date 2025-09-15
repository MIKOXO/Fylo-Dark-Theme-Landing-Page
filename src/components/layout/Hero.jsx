import React from "react";
import heroImage from "../../assets/illustration-intro.png";

const Hero = () => {
  return (
    <section className="z-50 relative overflow-hidden mt-5 lg:mt-14 mx-auto container p-6">
      <div className="flex flex-col items-center">
        {/* Image */}
        <div>
          <img src={heroImage} alt="illustration-intro" />
        </div>

        {/* Text Content */}
        <div className="text-center mt-10 max-w-2xl text-White">
          <h1 className="font-Raleway font-bold text-[24px] sm:text-[36px] mb-6 max-w-[700px] mx-auto">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="font-OpenSans max-w-[500px] mx-auto max-sm:text-[14px]">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends,
            family and co-workers.
          </p>
          <button className="font-OpenSans font-semibold px-8 py-3 rounded-full w-[250px] text-White bg-gradient-to-r from-Teal200 to-Cyan500 my-4">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
