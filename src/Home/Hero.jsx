import React from 'react';

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center text-center px-4 py-16  border-white bg-black/50 ">
            {/* Blurred background shape */}
            <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                aria-hidden="true"
            >
                <div className="w-96 h-96 rounded-full bg-blue-300 opacity-30 blur-3xl"></div>
                <div className="w-72 h-72 rounded-full bg-blue-200 opacity-20 blur-2xl absolute top-1/3 left-1/4"></div>
            </div>
            <div className="z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold text-blue-300 drop-shadow-lg mb-4">
                    Hi, I'm <span className="text-blue-200">Tanmay Islam</span>
                </h1>
                <p className="text-lg md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    I build beautiful, modern web experiences with React, Tailwind CSS, and a passion for clean code.
                </p>
                <a
                    href="#contact"
                    className="inline-block px-8 py-3 rounded-lg bg-blue-300 text-slate-900 font-bold shadow-md hover:bg-blue-200 transition-colors duration-200 border border-blue-200"
                >
                    Get in Touch
                </a>
            </div>
        </section>
    );
};

export default Hero;