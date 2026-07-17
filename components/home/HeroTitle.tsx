"use client";

import { motion } from "framer-motion";

export default function HeroTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <span className="inline-block rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2 text-sm font-semibold tracking-widest text-yellow-400">
        🇩🇪 AI POWERED GERMAN LEARNING
      </span>

      <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl xl:text-8xl">
        Learn German
        <br />
        <span className="text-yellow-400">Smarter with AI</span>
      </h1>

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
        Master German from A1 to C2 with AI lessons, speaking practice,
        vocabulary, grammar, listening, writing, and unlimited mock exams.
      </p>
    </motion.div>
  );
}