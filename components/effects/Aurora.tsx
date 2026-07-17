"use client";

import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      <motion.div
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[140px]"
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-0 h-[450px] w-[450px] rounded-full bg-yellow-400/25 blur-[140px]"
        animate={{
          x: [0, -90, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-cyan-500/20 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}