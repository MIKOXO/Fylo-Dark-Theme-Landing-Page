import React from "react";
import illustrationProductivity from "../../assets/illustration-stay-productive.png";
import iconArrow from "../../assets/icon-arrow.svg";

const Productivity = () => {
  return (
    <section className="bg-Navy900 relative -top-[180px] lg:-top-[250px] max-sm:pt-20 z-10 min-h-screen">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        {/* Image */}
        <div>
          <img src={illustrationProductivity} alt="Stay Productive" />
        </div>

        {/* Text Content */}
        <div className="lg:w-[50%] lg:ml-16 text-White">
          <h1 className="text-[20px] sm:text-[36px] font-Raleway font-bold mb-6 mt-10 lg:mt-0 lg:max-w-[450px]">
            Stay productive, wherever you are
          </h1>
          <p className="max-sm:text-[14px] mb-4 opacity-75 lg:w-[80%] font-OpenSans">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="max-sm:text-[14px] mb-4 opacity-75 lg:w-[80%] font-OpenSans">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>

          <a
            href="#"
            className="max-sm:text-[14px] text-Teal200 border-b-[0.5px] border-Teal200 py-1 font-OpenSans"
          >
            See how Fylo works
            <img src={iconArrow} className="inline-block ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Productivity;
