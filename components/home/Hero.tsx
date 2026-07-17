"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Trophy, Flame } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816]">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-[-150px] top-[-150px] h-[350px] w-[350px] rounded-full bg-green-500/20 blur-[120px]" />
        <div className="absolute right-[-150px] bottom-[-150px] h-[350px] w-[350px] rounded-full bg-yellow-400/20 blur-[120px]" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-green-400"
            >
              <Sparkles size={18} />
              AI Powered German Learning
            </motion.div>

            <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
              Learn
              <span className="block bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                German
              </span>
              Faster with AI
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Master German from A1 to C2 with interactive lessons,
              flashcards, quizzes, AI speaking practice and daily streaks.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <button className="group flex items-center gap-2 rounded-full bg-green-500 px-8 py-4 font-bold text-white transition hover:scale-105">
                Start Learning
                <ArrowRight className="transition group-hover:translate-x-1" />
              </button>

              <button className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-white transition hover:bg-white/10">
                <Play size={20} />
                Watch Demo
              </button>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >

            {/* Phone */}

            <div className="relative h-[650px] w-[320px] rounded-[45px] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">

              <div className="h-full rounded-[35px] bg-[#0B1220] p-6">

                <div className="flex justify-between">

                  <div>

                    <p className="text-sm text-gray-400">
                      Welcome Back
                    </p>

                    <h3 className="text-2xl font-bold text-white">
                      Champion
                    </h3>

                  </div>

                  <div className="h-14 w-14 rounded-full bg-green-500" />

                </div>

                <div className="mt-8">

                  <div className="rounded-3xl bg-green-500 p-5">

                    <p className="text-sm text-white/80">
                      Daily Goal
                    </p>

                    <h2 className="mt-2 text-4xl font-black text-white">
                      75%
                    </h2>

                  </div>

                </div>

              </div>

            </div>

            {/* Floating XP */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute -left-10 top-24 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl"
            >

              <div className="flex items-center gap-3">

                <Trophy className="text-yellow-400" />

                <div>

                  <p className="text-sm text-gray-400">
                    XP
                  </p>

                  <h4 className="text-xl font-bold text-white">
                    12,580
                  </h4>

                </div>

              </div>

            </motion.div>

            {/* Floating Streak */}

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -right-10 bottom-28 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl"
            >

              <div className="flex items-center gap-3">

                <Flame className="text-orange-400" />

                <div>

                  <p className="text-sm text-gray-400">
                    Streak
                  </p>

                  <h4 className="text-xl font-bold text-white">
                    128 Days
                  </h4>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}