import React from "react";
import bgImage from "../../assets/bg-curvy-desktop.svg";
import bgImageMobile from "../../assets/bg-curvy-mobile.svg";
import iconAccessAnywhere from "../../assets/icon-access-anywhere.svg";
import iconSecurity from "../../assets/icon-security.svg";
import iconCollaboration from "../../assets/icon-collaboration.svg";
import iconAnyFile from "../../assets/icon-any-file.svg";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: iconAccessAnywhere,
      title: "Access your files, anywhere",
      description:
        "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      id: 2,
      icon: iconSecurity,
      title: "Security you can trust",
      description:
        "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
      id: 3,
      icon: iconCollaboration,
      title: "Real-time collaboration",
      description:
        "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
      id: 4,
      icon: iconAnyFile,
      title: "Store any type of file",
      description:
        "Whether you're sharing holiday photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ];

  return (
    <>
      {/* Background Image Based on Screen Size */}
      <div className="relative -top-[180px] lg:-top-[250px] z-0">
        <img src={bgImage} alt="" className="w-full hidden md:block" />
        <img src={bgImageMobile} alt="" className="w-full md:hidden" />
      </div>

      <section className="bg-Navy900 relative -top-[180px] lg:-top-[250px] z-10 lg:-mt-10 max-sm:pt-20 min-h-screen">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 justify-items-center">
          {features.map((feature) => (
            <div key={feature.id} className="text-center">
              <img
                src={feature.icon}
                alt={feature.title}
                className="mx-auto mb-4"
              />
              <h1 className="text-xl sm:text-2xl text-White font-Raleway font-bold mb-2">
                {feature.title}
              </h1>
              <p className="text-White font-OpenSans max-sm:text-[14px] max-w-[400px] mx-auto opacity-80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Features;
