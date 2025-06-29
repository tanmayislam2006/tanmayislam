import React from "react";

const projects = [
  {
    title: "Green Connect",
    image: "https://i.ibb.co/qLh79CX1/green-connect.png",
    features: [
      "Community Gardening Tips: Browse and share expert advice on sustainable gardening, filtered by category and difficulty.",
      "Gardener Profiles: Explore other users’ profiles to see their contributions, favorite tips, and connect with local gardeners.",
      "Theme Toggle & Responsive UI: Seamless light/dark mode with a mobile-friendly design and smooth animations for an engaging experience.",
    ],
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Firebase",
      "MongoDB",
      "React Router",
      "AOS",
      "React Toastify",
    ],
    live: "https://green-connect-app.web.app/",
    source: "https://github.com/tanmayislam2006/green-connect-server.git",
    details:
      "Green Connect is a modern community platform for sustainable gardening. Users can share their tips, discover new techniques, and build local networks of fellow gardeners. With Firebase authentication, a responsive design, and rich interactive features, it aims to inspire eco-friendly living and knowledge-sharing among users of all experience levels.",
  },
  {
    title: "FOODCart",
    image:
      "https://i.ibb.co/JRSXxZnx/foodcart.png",
    features: [
      "Dynamic Menu with Categories: Browse food items by type (Breakfast, Lunch, Dinner) with intuitive filtering and pagination.",
      "Role-Based Access: Customers and admins have dedicated views with JWT-secured authentication and protected routes.",
      "Order Management Dashboard: Admin panel for managing menu items, tracking orders, and controlling user roles.",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "React Router",
      "Tailwind CSS",
    ],
    live: "#",
    source: "#",
    details:
      "FOODCart is a full-stack restaurant management and ordering platform that offers customers an easy way to browse, select, and order meals while providing admins with a powerful dashboard to manage menu items and track orders. It features role-based access, secure authentication with JWT, and a clean, responsive design.",
  },
  {
    title: "Skillora",
    image:
      "https://i.ibb.co/XP8jC9j/skillora.png",
    features: [
      "Service Discovery & Booking: Browse and filter local services by category and area, with easy calendar-based booking.",
      "Provider Profiles & Listings: Users can offer their own services with detailed profiles, descriptions, and availability management.",
      "Secure Auth & Theming: Firebase authentication, responsive UI with light/dark mode, and smooth AOS-powered transitions.",
    ],
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Firebase",
      "MongoDB",
      "React Router",
      "AOS",
      "React Toastify",
    ],
    live: "https://skillora-11.web.app/",
    source: "#",
    details:
      "Skillora is a modern platform for discovering, sharing, and managing skills and services. Users can offer their own services, book others’ services with built-in scheduling, and connect through detailed provider profiles. It includes secure authentication, theme toggling, and a responsive design that ensures a smooth experience across devices.",
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center my-20 border-2 border-blue-300 py-10 px-6 rounded-2xl"
    >
      <h3 className="text-4xl text-center font-bold text-blue-200 mb-12">
        Projects
      </h3>
      <div className="flex flex-col gap-10 w-full">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className={`flex flex-col md:flex-row ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            } bg-black/60 border-2 border-blue-300 rounded-xl shadow-xl overflow-hidden`}
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
                <h4 className="text-2xl font-bold text-blue-200 mb-3">
                  {project.title}
                </h4>
                <p className="text-blue-100 mb-4">{project.details}</p>
                <ul className="list-disc list-inside text-blue-100 mb-4 pl-2">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
