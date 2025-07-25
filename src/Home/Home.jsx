// src/Home/Home.js
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skill from "./Skill";
import Contact from "./Contact";
import Footer from "./Footer";
import Project from "./Project";

const Home = () => {
  return (
    // This content will be rendered inside the <main> tag of your MainLayout
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Project/>
      <Skill />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
