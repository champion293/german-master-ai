"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-950 via-black to-yellow-900 px-6">

      {/* Animated Circles */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl"
      />


      <div className="relative z-10 max-w-5xl text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
        >
          Learn German
          <span className="text-yellow-400"> Like a Game </span>
          with AI 🚀
        </motion.h1>


        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
        >
          GermanMaster AI helps you learn German with interactive lessons,
          speaking practice, quizzes, XP points and daily streaks.
        </motion.p>


        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-5 justify-center"
        >

          <Link
            href="/register"
            className="px-8 py-4 rounded-full bg-yellow-400 text-black font-bold text-lg hover:scale-105 transition shadow-xl"
          >
            Start Learning 🇩🇪
          </Link>


          <Link
            href="/login"
            className="px-8 py-4 rounded-full border border-white/30 text-white font-bold text-lg hover:bg-white/10 transition"
          >
            Login
          </Link>

        </motion.div>


        {/* AI Card */}
        <motion.div
          animate={{ y:[0,-10,0] }}
          transition={{duration:3,repeat:Infinity}}
          className="mt-16 mx-auto max-w-md p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20"
        >
          <h3 className="text-2xl font-bold text-white">
            🤖 AI German Tutor
          </h3>

          <p className="text-gray-300 mt-2">
            Practice conversations with your personal AI teacher.
          </p>
        </motion.div>

      </div>

    </section>
  );
}