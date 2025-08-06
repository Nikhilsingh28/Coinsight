"use client"

import Particles from "@tsparticles/react";

const ParticlesBackground = () => {

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: { enable: true },
          },
          modes: {
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#007aff", "#30d158", "#ff9500", "#5e5ce6", "#ff2d92"],
          },
          links: {
            color: "#007aff",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
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
            },
            value: 100,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
        style: {
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100vh",
          zIndex: "0",
          pointerEvents: "none",
        },
      }}
    />
  );
};

export default ParticlesBackground;
