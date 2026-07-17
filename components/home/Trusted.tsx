"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "10K+",
    label: "Active Learners",
  },
  {
    number: "1,000+",
    label: "German Words",
  },
  {
    number: "5,000+",
    label: "Quiz Questions",
  },
  {
    number: "98%",
    label: "Success Rate",
  },
];

export default function Trusted() {
  return (
    <section className="border-y border-white/10 bg-[#07111f] py-16">
      <div className="mx-auto max-w-7xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-white"
        >
          Trusted by Future German Speakers
        </motion.h2>

        <p className="mt-3 text-center text-slate-400">
          Learn faster with AI-powered lessons, quizzes and speaking practice.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
            >
              <h3 className="text-4xl font-black text-green-400">
                {item.number}
              </h3>

              <p className="mt-3 text-slate-300">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}