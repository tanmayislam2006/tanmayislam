import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // For smaller bundle size

const  ParticlesBackground=()=> {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles container loaded", container);
  }, []);

  // Configuration for the particles background
  const particlesOptions = {
    background: {
      color: {
        value: "#1a1a2e", // Dark background color
      },
      // Assuming 'coolbackgrounds-particles-compute.jpg' is in the public directory
      image: `url('/coolbackgrounds-particles-compute.jpg')`,
      repeat: "no-repeat",
      size: "cover",
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab", // Grab mode for connecting lines on hover
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        grab: {
          distance: 150,
          links: {
            opacity: 0.5,
          },
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#00bfff", // Light blue color for particles
      },
      links: {
        color: "#00bfff", // Light blue color for lines
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80, // Number of particles
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 2, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles-background" // Unique ID for this Particles instance
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
      className="absolute inset-0 z-0" // Stretches to fill parent, behind other content
    />
  );
}

export default ParticlesBackground;
