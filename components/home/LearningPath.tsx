"use client";

import { motion } from "framer-motion";
import LessonPath from "./learning/LessonPath";

export default function LearningPath() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-24">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-green-500/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 text-sm font-semibold text-green-400">
            Learning Journey
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Learn German
            <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              One Lesson at a Time
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Complete lessons, earn XP, unlock new chapters and build your
            daily learning streak just like a premium language learning app.
          </p>
        </motion.div>

        <LessonPath />

      </div>

    </section>
  );
}