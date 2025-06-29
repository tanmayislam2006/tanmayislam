import React from "react";
import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="bg-black/70 shadow-xl px-4 py-3 flex justify-between items-center sticky top-0 z-20 backdrop-blur-md border-b border-blue-300/30 overflow-hidden">
      {/* Noise overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
        <div className="w-full h-full noise-bg"></div>
      </div>
      {/* Brand */}
      <a href="/" className="z-10 flex items-center">
        <div className="w-16 h-16">
          <img src={Logo} alt="" className="" />
        </div>
      </a>
      {/* Nav Links */}
      <div className="z-10 hidden md:flex">
        <ul className="flex gap-6 text-blue-200 text-lg font-semibold">
          <li>
            <a
              href="/"
              className="hover:text-blue-300 transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-300 transition-colors duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skill"
              className="hover:text-blue-300 transition-colors duration-200"
            >
              Skill
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-300 transition-colors duration-200"
            >
              Project
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-300 transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* Contact Button */}
      <div className="z-10">
        <a
          href="#contact"
          className="px-5 py-2 rounded-lg bg-blue-300 text-slate-900 font-bold shadow-md hover:bg-blue-200 transition-colors duration-200 border border-blue-200"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
