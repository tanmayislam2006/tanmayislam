import { BorderBeam } from "@stianlarsen/border-beam";
import React from "react";

const skills = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "bg-orange-100",
    text: "text-orange-700",
    colorFrom: "#e34c26",
    colorTo: "#f16529",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "bg-blue-100",
    text: "text-blue-700",
    colorFrom: "#2965f1",
    colorTo: "#3c99f6",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "bg-yellow-100",
    text: "text-yellow-700",
    colorFrom: "#f7df1e",
    colorTo: "#ffe873",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "bg-blue-50",
    text: "text-blue-400",
    colorFrom: "#61dafb",
    colorTo: "#1e90ff",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "bg-green-100",
    text: "text-green-700",
    colorFrom: "#10aa50",
    colorTo: "#3fa037",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    color: "bg-yellow-50",
    text: "text-yellow-700",
    colorFrom: "#ffcb2b",
    colorTo: "#ffa000",
  },
  {
    name: "Tailwind CSS",
    icon: "https://i.ibb.co/W45GhwjL/tailwind-css.png",
    color: "bg-cyan-50",
    text: "text-cyan-700",
    colorFrom: "#06b6d4",
    colorTo: "#0ea5e9",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "bg-green-50",
    text: "text-green-700",
    colorFrom: "#3c873a",
    colorTo: "#68a063",
  },
];

const Skill = () => {
  return (
    <section
      id="skill"
      className="relative flex items-center justify-center my-32 bg-black/60 border-2 border-blue-300 rounded-xl shadow-xl p-10"
    >
      {/* Blurred background shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -bottom-20 -right-24 w-96 h-96 rounded-full bg-blue-300 opacity-30 blur-3xl"></div>
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-green-200 opacity-20 blur-2xl"></div>
      </div>
      {/* Main content card */}
      <div className="w-full p-10">
        <h3 className="text-4xl text-center font-bold text-blue-200 mb-8">
          My Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`relative flex flex-col items-center justify-center rounded-xl shadow ${skill.color} ${skill.text} py-6 px-2 transition-all overflow-hidden cursor-pointer group hover:scale-105 hover:shadow-2xl hover:z-20`}
            >
              <BorderBeam
                borderWidth={4}
                duration={8}
                colorFrom={skill.colorFrom}
                colorTo={skill.colorTo}
                className="absolute inset-0 z-0"
              />
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 mb-2 z-10 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="font-bold text-lg z-10 group-hover:tracking-wide transition-all duration-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;