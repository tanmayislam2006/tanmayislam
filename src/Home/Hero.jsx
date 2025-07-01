import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center text-center px-4 py-20 bg-black/50 overflow-hidden">
      {/* Blurred background shapes */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-96 h-96 rounded-full bg-blue-300 opacity-30 blur-3xl"></div>
        <div className="w-72 h-72 rounded-full bg-blue-200 opacity-20 blur-2xl absolute top-1/3 left-1/4"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Image with glow */}
        <div className="flex-shrink-0 relative">
          {/* Glow behind image */}
          <div className="absolute inset-0 rounded-full bg-blue-300 blur-3xl -z-10"></div>
          <img
            src="https://i.ibb.co/k2h6BGzf/tanmay.png"
            alt="Tanmay Islam"
            className="rounded-full w-48 h-48 md:w-96 md:h-96 object-cover border-4 border-blue-300 shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-300 drop-shadow-lg mb-4">
            Hi, I'm <span className="text-blue-200">Tanmay Islam</span>
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 mb-8 max-w-2xl">
            I build beautiful, modern web experiences with React, Tailwind CSS,
            and a passion for clean code.
          </p>

          {/* Social Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="https://github.com/tanmayislam2006"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-slate-900 font-medium shadow-lg transition-all duration-200"
            >
              <FaGithub className="text-xl" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tanmayislam101"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-slate-900 font-medium shadow-lg transition-all duration-200"
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </a>
            <a
              href="https://x.com/TanmayIsla13054"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-slate-900 font-medium shadow-lg transition-all duration-200"
            >
              <FaXTwitter className="text-xl" />
              Twitter
            </a>
          </div>

          {/* Resume Link */}
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg border border-blue-300 bg-blue-300 text-slate-900 font-bold shadow-lg hover:bg-blue-200 transition-colors duration-200"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
