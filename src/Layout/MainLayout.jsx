// src/Layout/MainLayout.js
import React from "react";
import { Outlet } from "react-router";
import ParticlesBackground from "./ParticlesBackground";

const MainLayout = () => {
  return (
    // Main container for positioning
    <div className="relative min-h-screen w-full bg-slate-900  max-w-7xl mx-auto  overflow-x-clip">
      {/* Background sits behind everything */}
      <ParticlesBackground />
      {/* Content area sits on top and is centered */}
      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
