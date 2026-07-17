"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Flame,
  Heart,
  BookOpen,
  Brain,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Phone */}
      <div className="h-[650px] w-[330px] rounded-[42px] border border-white/20 bg-[#111827] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">

        {/* Screen */}
        <div className="relative h-full overflow-hidden rounded-[34px] bg-gradient-to-b from-[#0f172a] to-[#020617]">

          {/* Status */}
          <div className="flex items-center justify-between px-6 py-4 text-sm text-white">
            <span>9:41</span>
            <span>🇩🇪 GermanMaster AI</span>
          </div>

          {/* Welcome */}
          <div className="px-6 pt-2">
            <p className="text-sm text-slate-400">
              Welcome Back
            </p>

            <h2 className="mt-1 text-3xl font-black text-white">
              Champion
            </h2>
          </div>

          {/* Progress Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mx-5 mt-6 rounded-3xl bg-gradient-to-r from-green-500 to-emerald-400 p-5"
          >
            <div className="flex justify-between">

              <div>
                <p className="text-sm text-white/80">
                  Daily Progress
                </p>

                <h2 className="mt-2 text-4xl font-black text-white">
                  78%
                </h2>
              </div>

              <Sparkles className="h-10 w-10 text-white" />

            </div>

            <div className="mt-5 h-3 rounded-full bg-white/30">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "78%" }}
                transition={{ duration: 1.5 }}
                className="h-full rounded-full bg-white"
              />

            </div>

          </motion.div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 gap-3 px-5">

            <Stat
              icon={<Trophy className="h-5 w-5 text-yellow-400" />}
              value="1250"
              label="XP"
            />

            <Stat
              icon={<Flame className="h-5 w-5 text-orange-400" />}
              value="21"
              label="Streak"
            />

            <Stat
              icon={<Heart className="h-5 w-5 text-red-400" />}
              value="5"
              label="Lives"
            />

          </div>

          {/* Current Lesson */}
          <div className="mx-5 mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Current Lesson
                </p>

                <h3 className="mt-1 text-xl font-bold text-white">
                  Greetings A1
                </h3>

              </div>

              <BookOpen className="h-8 w-8 text-green-400" />

            </div>

            <button className="mt-5 w-full rounded-2xl bg-green-500 py-3 font-bold text-white transition hover:bg-green-400">
              Continue Learning
            </button>

          </div>

          {/* AI Tutor */}
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
            }}
            className="absolute bottom-5 left-5 right-5 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-4 backdrop-blur-xl"
          >

            <div className="flex items-center gap-3">

              <div className="rounded-2xl bg-cyan-500/20 p-3">
                <Brain className="h-6 w-6 text-cyan-300" />
              </div>

              <div>

                <h4 className="font-bold text-white">
                  AI Tutor
                </h4>

                <p className="text-sm text-slate-300">
                  Ready for speaking practice.
                </p>

              </div>

              <CheckCircle2 className="ml-auto text-green-400" />

            </div>

          </motion.div>

        </div>

      </div>
    </motion.div>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">

      <div className="flex justify-center">
        {icon}
      </div>

      <h4 className="mt-2 text-lg font-bold text-white">
        {value}
      </h4>

      <p className="text-xs text-slate-400">
        {label}
      </p>

    </div>
  );
}