import React from "react";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <header>
      <nav className="mx-auto container flex flex-row justify-between lg:items-center p-4 lg:p-6">
        <div className="cursor-pointer">
          <img src={logo} alt="Fylo Logo" className="h-6 lg:h-10" />
        </div>

        {/* Links */}
        <div className="flex flex-row gap-3 lg:gap-8 text-White font-medium font-Raleway max-sm:text-sm">
          <a href="#" className="link">
            Features
          </a>
          <a href="#" className="link">
            Team
          </a>
          <a href="#" className="link">
            Sign In
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
