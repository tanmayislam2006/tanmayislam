import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex items-center justify-center my-20 bg-black/60"
    >
      {/* Blurred background shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -left-24 w-96 h-96 rounded-full bg-blue-300 opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-green-200 opacity-20 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full bg-blue-100 opacity-10 blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="relative z-10 w-full border-2 border-blue-300 rounded-xl shadow-xl p-8 flex flex-col md:flex-row gap-8">
        {/* Left: Contact Info */}
        <div className="flex-1 flex flex-col justify-center gap-6">
          <h3 className="text-3xl font-bold text-blue-200 mb-4 text-center md:text-left">
            Get In Touch
          </h3>
          <div className="flex items-center gap-4 text-blue-100">
            <FaPhoneAlt className="text-blue-300 text-2xl" />
            <span className="text-lg">+880 1997-337756</span>
          </div>
          <div className="flex items-center gap-4 text-blue-100">
            <FaWhatsapp className="text-green-400 text-2xl" />
            <span className="text-lg">+880 1997-337756</span>
          </div>
          <div className="flex items-center gap-4 text-blue-100">
            <FaEnvelope className="text-blue-300 text-2xl" />
            <span className="text-lg">tanmayislam101@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 text-blue-100">
            <FaMapMarkerAlt className="text-red-400 text-2xl" />
            <span className="text-lg">Dhaka, Bangladesh</span>
          </div>
        </div>
        {/* Right: Contact form */}
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-blue-200 my-6 text-center md:text-left">
            Contact Me
          </h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col gap-4"
          >
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300" />
              <input
                type="text"
                placeholder="Your Name"
                className="pl-10 rounded-lg px-4 py-3 bg-slate-900/80 border border-blue-300 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300" />
              <input
                type="email"
                placeholder="Your Email"
                className="pl-10 rounded-lg px-4 py-3 bg-slate-900/80 border border-blue-300 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
              />
            </div>
            <div className="relative">
              <FaPhoneAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300" />
              <input
                type="text"
                placeholder="Your Phone"
                className="pl-10 rounded-lg px-4 py-3 bg-slate-900/80 border border-blue-300 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
              />
            </div>
            <div className="relative">
              <textarea
                placeholder="Your Message"
                rows={5}
                className="rounded-lg px-4 py-3 bg-slate-900/80 border border-blue-300 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none w-full"
              />
            </div>
            <button
              type="submit"
              className="mt-2 px-6 py-3 cursor-pointer rounded-lg bg-blue-300 text-slate-900 font-bold shadow hover:bg-blue-200 transition-colors duration-200 border border-blue-200"
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
