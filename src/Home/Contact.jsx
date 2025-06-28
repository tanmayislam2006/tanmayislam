import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex items-center justify-center my-20
      bg-black/60
      "
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Blurred background shapes */}
        <div className="absolute -top-20 -left-24 w-96 h-96 rounded-full bg-blue-300 opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-green-200 opacity-20 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full bg-blue-100 opacity-10 blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="relative z-10 w-full   border-2 border-blue-300 rounded-xl shadow-xl p-8 flex flex-col md:flex-row gap-8">
        {/* Left: Animation or illustration */}
        <div className="flex-1 flex items-center justify-center">
          {/* Example animation: bouncing mail icon */}
          <div className="">
            <svg width="400" height="400" viewBox="0 0 24 24" fill="none">
              <rect
                width="100%"
                height="100%"
                rx="20"
                fill="#93c5fd"
                opacity="0.15"
              />
              <path
                d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7zm2 0v.01L12 13l7-5.99V7H5zm0 2.236V17h14V9.236l-7 5.998-7-5.998z"
                fill="#93c5fd"
              />
            </svg>
          </div>
        </div>
        {/* Right: Contact form */}
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-blue-200 my-6 text-center md:text-left">
            Contact Me
          </h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-lg px-4 py-3 bg-slate-900/80 border border-blue-300 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="rounded-lg px-4 py-3 bg-slate-900/80 border border-blue-300 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="rounded-lg px-4 py-3 bg-slate-900/80 border border-blue-300 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
            />
            <button
              type="submit"
              className="mt-2 px-6 py-3 rounded-lg bg-blue-300 text-slate-900 font-bold shadow hover:bg-blue-200 transition-colors duration-200 border border-blue-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
