"use client";

import { motion } from "framer-motion";
import {
  Brain,
  BookOpen,
  Mic,
  Languages,
  HeartHandshake,
  Globe,
} from "lucide-react";

const reasons = [
  {
    icon: BookOpen,
    title: "All Lessons Free",
    description: "Every German lesson from A1 to C2 is available at no cost.",
  },
  {
    icon: Brain,
    title: "AI Tutor Included",
    description: "Learn grammar and vocabulary with AI assistance for free.",
  },
  {
    icon: Mic,
    title: "Speaking Practice",
    description: "Practice pronunciation and speaking without any subscription.",
  },
  {
    icon: Languages,
    title: "Unlimited Vocabulary",
    description: "Access thousands of German words and phrases anytime.",
  },
  {
    icon: Globe,
    title: "Learn Anywhere",
    description: "Use GermanMaster AI on desktop, tablet, or mobile devices.",
  },
  {
    icon: HeartHandshake,
    title: "Education for Everyone",
    description: "Our mission is to make quality German education accessible to all.",
  },
];

export default function WhyFree() {
  return (
    <section className="bg-[#07111f] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
            100% Free Forever
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Learn German Without Paying
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            GermanMaster AI is built with one goal: make high-quality German
            education freely available to everyone.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/20">
                  <Icon className="h-7 w-7 text-green-400" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}