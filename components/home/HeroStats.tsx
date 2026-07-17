"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "100K+", label: "Students" },
  { value: "5K+", label: "Lessons" },
  { value: "1M+", label: "AI MCQs" },
  { value: "24/7", label: "AI Teacher" },
];

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4"
    >
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/40 hover:bg-white/10"
        >
          <h3 className="text-3xl font-black text-yellow-400">
            {item.value}
          </h3>

          <p className="mt-2 text-sm text-gray-300">
            {item.label}
          </p>
        </div>
      ))}
    </motion.div>
  );
}