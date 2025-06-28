import React from "react";

const projects = [
  {
    title: "Bill Payment Platform",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    features: [
      "Secure online bill payments",
      "Real-time transaction tracking",
      "User-friendly dashboard"
    ],
    tech: ["React", "Node.js", "MongoDB"],
    live: "#",
    source: "#",
    details: "#"
  },
  {
    title: "Service Sharing Platform",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    features: [
      "Real-time chat & notifications",
      "Service provider profiles",
      "Easy booking system"
    ],
    tech: ["React", "Firebase", "JWT"],
    live: "#",
    source: "#",
    details: "#"
  },
  {
    title: "Parcel Delivery System",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    features: [
      "Interactive delivery maps",
      "Order tracking",
      "Admin management panel"
    ],
    tech: ["React", "Node.js", "MongoDB"],
    live: "#",
    source: "#",
    details: "#"
  }
];

const Project = () => {
  return (
    <section id="projects" className="relative flex flex-col items-center justify-center   my-20 border-2 border-blue-300 py-10 px-6 rounded-2xl">
      <h3 className="text-4xl text-center font-bold text-blue-200 mb-12">Projects</h3>
      <div className="flex flex-col gap-10 w-full">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className={`flex flex-col md:flex-row ${idx % 2 === 1 ? "md:flex-row-reverse" : ""} bg-black/60 border-2 border-blue-300 rounded-xl shadow-xl overflow-hidden`}
          >
            {/* Image */}
            <div className="md:w-1/3 w-full flex-shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-56 md:h-full"
              />
            </div>
            {/* Content */}
            <div className="flex flex-col justify-between p-6 md:w-2/3 w-full">
              <div>
                <h4 className="text-2xl font-bold text-blue-200 mb-2">{project.title}</h4>
                <ul className="list-disc list-inside text-blue-100 mb-3 pl-2">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-blue-200 text-slate-900 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-2">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-blue-300 text-slate-900 font-bold shadow hover:bg-blue-200 transition-colors duration-200 border border-blue-200 text-sm"
                >
                  Live
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-blue-300 text-slate-900 font-bold shadow hover:bg-blue-200 transition-colors duration-200 border border-blue-200 text-sm"
                >
                  Source Code
                </a>
                <a
                  href={project.details}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-blue-300 text-slate-900 font-bold shadow hover:bg-blue-200 transition-colors duration-200 border border-blue-200 text-sm"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Project