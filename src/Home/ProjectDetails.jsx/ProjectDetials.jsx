import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ProjectDetials = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  const project = projects.find((p) => String(p.id) === String(id));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        {loading ? (
          <div className="text-blue-200 text-xl">Loading...</div>
        ) : !project ? (
          <div className="text-red-400 text-xl">Project not found.</div>
        ) : (
          <div className="w-full  bg-black/70 border-2 border-blue-300 rounded-xl shadow-xl p-8 relative overflow-hidden">
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-fit object-cover rounded-lg mb-6 border border-blue-200 shadow"
            />
            {/* Title */}
            <h2 className="text-3xl font-bold text-blue-200 mb-4">
              {project.title}
            </h2>
            {/* Description */}
            <p className="text-blue-100 mb-4">{project.description}</p>
            {/* Features */}
            <ul className="list-disc list-inside text-blue-100 mb-4 pl-2">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-blue-200 text-slate-900 text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* Action Buttons */}
            <div className="flex gap-3">
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
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetials;
