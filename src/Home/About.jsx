import React from "react";

const About = () => {
  return (
    <section id="about" className="relative flex items-center justify-center min-h-screen px-4 py-20">
      {/* Blurred background shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Large blue blur top left */}
        <div className="absolute -top-20 -left-24 w-96 h-96 rounded-full bg-blue-300 opacity-30 blur-3xl"></div>
        {/* Soft green blur bottom right */}
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-green-200 opacity-20 blur-2xl"></div>
        {/* Subtle accent blur center */}
        <div className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full bg-blue-100 opacity-10 blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Main content card */}
      <div className="relative z-10 w-full  bg-black/40 border-2 border-blue-300 rounded-xl shadow-xl p-10 backdrop-blur-md">
        <h3 className="text-4xl text-center font-bold text-blue-200 mb-8">
          About Me
        </h3>
        <p className="max-w-2xl text-lg text-center text-blue-100 mx-auto mb-2">
          I'm Tanmay, a full-stack web developer from Bangladesh. I love
          crafting modern, user-friendly web apps that solve real problems.
        </p>
        <p className="max-w-2xl text-lg text-center text-blue-100 mx-auto">
          My work includes building a bill payment site, a real-time
          service-sharing platform, and a parcel delivery system with
          interactive maps. I specialize in React, Firebase, Node.js, Express,
          and MongoDB, and I'm always eager to learn more. Whether it's writing
          clean code or discussing big ideas, I'm here for it—let's connect!
        </p>
      </div>
    </section>
  );
};

export default About;
