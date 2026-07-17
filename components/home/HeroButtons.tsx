"use client";

import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
    >
      <button className="rounded-full bg-yellow-400 px-8 py-4 text-lg font-bold text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,.6)]">
        🚀 Start Learning
      </button>

      <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white/10">
        🤖 Try AI Demo
      </button>
    </motion.div>
  );
}