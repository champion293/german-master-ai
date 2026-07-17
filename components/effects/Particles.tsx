"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

export default function BackgroundParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="particles"
      options={{
        fullScreen: false,
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 60,
          },
          color: {
            value: ["#FACC15", "#A855F7", "#38BDF8"],
          },
          move: {
            enable: true,
            speed: 1,
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.15,
          },
          opacity: {
            value: 0.4,
          },
          size: {
            value: { min: 2, max: 4 },
          },
        },
      }}
      className="absolute inset-0"
    />
  );
}