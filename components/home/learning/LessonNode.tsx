"use client";

import { motion } from "framer-motion";
import { Check, Lock, Star } from "lucide-react";

type LessonNodeProps = {
  title: string;
  xp: number;
  completed?: boolean;
  locked?: boolean;
  active?: boolean;
};

export default function LessonNode({
  title,
  xp,
  completed = false,
  locked = false,
  active = false,
}: LessonNodeProps) {
  return (
    <motion.div
      whileHover={!locked ? { scale: 1.08, y: -6 } : {}}
      whileTap={!locked ? { scale: 0.95 } : {}}
      className="flex flex-col items-center"
    >
      <div
        className={`
          relative flex h-24 w-24 items-center justify-center rounded-full border-4 shadow-xl transition-all
          ${
            completed
              ? "border-green-400 bg-green-500 text-white"
              : active
              ? "border-yellow-400 bg-yellow-500 text-white animate-pulse"
              : locked
              ? "border-slate-600 bg-slate-700 text-slate-300"
              : "border-cyan-400 bg-cyan-500 text-white"
          }
        `}
      >
        {completed ? (
          <Check size={34} />
        ) : locked ? (
          <Lock size={30} />
        ) : (
          <Star size={30} />
        )}

        <div className="absolute -bottom-3 rounded-full bg-[#111827] px-3 py-1 text-xs font-bold text-green-400 shadow">
          +{xp} XP
        </div>
      </div>

      <h3 className="mt-6 text-center text-lg font-bold text-white">
        {title}
      </h3>
    </motion.div>
  );
}