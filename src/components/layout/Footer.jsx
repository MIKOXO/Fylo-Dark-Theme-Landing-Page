import React from "react";
import logo from "../../assets/logo.svg";
import { MdLocationPin, MdPhone, MdEmail } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-Navy950 text-White px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-4 pt-24 gap-16 mx-auto container place-items-start px-8">
        <div className="flex flex-col">
          <img src={logo} alt="Logo" className="w-[96px] lg:w-[150px]" />
          <div className="flex flex-row items-start gap-3">
            <MdLocationPin className="text-[100px] opacity-75" />
            <p className="mt-8 font-OpenSans text-[14px] opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              nulla, illum magni fugit nam modi recusandae! Amet, cupiditate.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:mt-16 gap-4 text-[14px] font-OpenSans opacity-75 lg:ml-10">
          <div className="flex flex-row gap-4">
            <MdPhone className="text-[24px]" />
            <p className="">+1 (123) 456-7890</p>
          </div>
          <div className="flex flex-row gap-4">
            <MdEmail className="text-[24px]" />
            <p className="">example@example.com</p>
          </div>
        </div>

        <div className="flex flex-row lg:ml-10 gap-8 lg:gap-16 text-[14px] text-White lg:mt-16 opacity-75 font-OpenSans">
          <div className="flex flex-col space-y-4">
            <a href="#">About Us</a>
            <a href="#">Jobs</a>
            <a href="#">Press</a>
            <a href="#">Blog</a>
          </div>
          <div className="flex flex-col space-y-4">
            <a href="#">Contact Us</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>
        </div>

        <div className="flex flex-row items-center gap-6 lg:ml-10 lg:mt-16">
          <div className="p-2 border-[0.5px] border-White rounded-full">
            <FaFacebook className="text-[22px] cursor-pointer" />
          </div>
          <div className="p-2 border-[0.5px] border-White rounded-full">
            <FaTwitter className="text-[22px] cursor-pointer" />
          </div>
          <div className="p-2 border-[0.5px] border-White rounded-full">
            <FaInstagram className="text-[22px] cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
