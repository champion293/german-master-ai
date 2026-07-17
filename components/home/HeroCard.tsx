"use client";

import { motion } from "framer-motion";
import {
  FaRobot,
  FaMicrophone,
  FaBrain,
  FaBookOpen,
  FaLanguage,
} from "react-icons/fa";

const features = [
  "AI Teacher",
  "Speaking Practice",
  "Grammar Check",
  "Vocabulary",
  "A1 → C2",
];

export default function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
    >
      {/* Glow */}
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-yellow-400/20 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-2xl bg-yellow-400 p-4 text-2xl text-black">
            <FaRobot />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              AI Teacher
            </h2>

            <p className="text-sm text-gray-400">
              Available 24/7
            </p>
          </div>
        </div>

        <div className="space-y-4">

          <Feature icon={<FaMicrophone />} text="Speaking Feedback" />

          <Feature icon={<FaBrain />} text="Smart AI Grammar" />

          <Feature icon={<FaBookOpen />} text="Interactive Lessons" />

          <Feature icon={<FaLanguage />} text="German A1 → C2" />

        </div>

        <div className="mt-8 rounded-2xl bg-yellow-400/10 p-5">
          <p className="text-yellow-300 font-semibold">
            Learning Progress
          </p>

          <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "72%" }}
              transition={{ duration: 1.5 }}
              className="h-full rounded-full bg-yellow-400"
            />
          </div>

          <p className="mt-2 text-sm text-gray-300">
            72% Complete
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {features.map((item) => (
            <span
              key={item}
              className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs text-yellow-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Feature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
      <div className="text-yellow-400">{icon}</div>
      <span className="text-gray-200">{text}</span>
    </div>
  );
}