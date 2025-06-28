import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-black/70 border-t border-blue-300 text-center text-blue-200 text-sm mt-32">
      © {new Date().getFullYear()} Tanmay Islam. All rights reserved.
    </footer>
  );
};
export default Footer;
