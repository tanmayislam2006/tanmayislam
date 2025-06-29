import React from 'react';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center text-center px-4 py-20 bg-black/50 border-white overflow-hidden">
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
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src="https://i.ibb.co/SD1cxtWF/431866632-950268886315781-7178799859184248457-n.jpg" // Replace this with your actual photo!
            alt="Tanmay Islam"
            className="w-48 h-48 md:w-96 md:h-96 rounded-full object-cover border-4 border-blue-300 shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-300 drop-shadow-lg mb-4">
            Hi, I'm <span className="text-blue-200">Tanmay Islam</span>
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 mb-8 max-w-2xl">
            I build beautiful, modern web experiences with React, Tailwind CSS, and a passion for clean code.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-lg bg-blue-300 text-slate-900 font-bold shadow-md hover:bg-blue-200 transition-colors duration-200 border border-blue-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
