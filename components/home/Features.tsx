"use client";

import { motion } from "framer-motion";
import {
  Brain,
  BookOpen,
  Trophy,
  Mic,
  Volume2,
  Flame,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Tutor",
    description:
      "Practice conversations with an AI tutor and receive instant feedback.",
  },
  {
    icon: BookOpen,
    title: "Vocabulary",
    description:
      "Learn thousands of German words using interactive flashcards.",
  },
  {
    icon: Volume2,
    title: "Pronunciation",
    description:
      "Listen to native pronunciation and improve your accent.",
  },
  {
    icon: Mic,
    title: "Speaking Practice",
    description:
      "Speak German and build confidence with guided exercises.",
  },
  {
    icon: Trophy,
    title: "XP & Achievements",
    description:
      "Earn XP, unlock achievements and level up every day.",
  },
  {
    icon: Flame,
    title: "Daily Streak",
    description:
      "Stay consistent and keep your learning streak alive.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#050816] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-5xl font-black text-white">
            Why Choose GermanMaster AI?
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Learn German with modern AI tools, interactive lessons and a
            motivating learning experience inspired by the world's best
            language apps.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/20">
                  <Icon className="h-8 w-8 text-green-400" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}