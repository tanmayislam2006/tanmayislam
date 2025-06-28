import React from "react";

const skills = [
  { name: "HTML", color: "bg-orange-200 text-orange-800" },
  { name: "CSS", color: "bg-blue-200 text-blue-800" },
  { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-800" },
  { name: "JavaScript", color: "bg-yellow-100 text-yellow-800" },
  { name: "React", color: "bg-blue-100 text-blue-700" },
  { name: "Node.js", color: "bg-green-100 text-green-800" },
  { name: "MongoDB", color: "bg-green-200 text-green-900" },
  { name: "Firebase", color: "bg-yellow-200 text-yellow-900" },
  { name: "JWT", color: "bg-pink-100 text-pink-800" },
  { name: "Git", color: "bg-red-100 text-red-800" },
];

const Skill = () => {
  return (
    <section
      id="skill"
      className="relative flex items-center justify-center my-32 bg-black/60 border-2 border-blue-300  rounded-xl shadow-xl p-10"
    >
      {/* Blurred background shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Large blue blur top left */}
        <div className="absolute -bottom-20 -right-24 w-96 h-96 rounded-full bg-blue-300 opacity-30 blur-3xl"></div>
        {/* Soft green blur bottom right */}
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-green-200 opacity-20 blur-2xl"></div>
      </div>
      {/* Main content card */}
      <div className="w-full p-10 ">
        <h3 className="text-4xl text-center font-bold text-blue-200 mb-8">
          My Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`flex items-center justify-center rounded-lg font-semibold text-lg shadow ${skill.color} py-3`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
