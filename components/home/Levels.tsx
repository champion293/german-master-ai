"use client";

import { motion } from "framer-motion";

const levels = [
  {
    level: "A1",
    title: "Beginner",
    color: "from-green-500 to-emerald-400",
    lessons: 10,
  },
  {
    level: "A2",
    title: "Elementary",
    color: "from-cyan-500 to-blue-500",
    lessons: 12,
  },
  {
    level: "B1",
    title: "Intermediate",
    color: "from-yellow-500 to-orange-500",
    lessons: 15,
  },
  {
    level: "B2",
    title: "Upper Intermediate",
    color: "from-pink-500 to-rose-500",
    lessons: 18,
  },
  {
    level: "C1",
    title: "Advanced",
    color: "from-violet-500 to-purple-500",
    lessons: 20,
  },
  {
    level: "C2",
    title: "Master",
    color: "from-indigo-500 to-sky-500",
    lessons: 25,
  },
];

export default function Levels() {
  return (
    <section className="bg-[#07111f] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-black text-white">
            German Course Levels
          </h2>

          <p className="mt-5 text-slate-400">
            Progress from complete beginner to fluent German with structured
            lessons and AI-powered practice.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {levels.map((item, index) => (
            <motion.div
              key={item.level}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div
                className={`inline-flex rounded-2xl bg-gradient-to-r ${item.color} px-5 py-3 text-3xl font-black text-white`}
              >
                {item.level}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-400">
                {item.lessons} interactive lessons
              </p>

              <button className="mt-8 w-full rounded-2xl bg-green-500 py-3 font-bold text-white transition hover:bg-green-400">
                Explore
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}