"use client";

import { motion } from "framer-motion";
import { Brain, Mic, MessageCircle, Volume2, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI German Tutor",
    desc: "Learn with an intelligent AI tutor that explains grammar and vocabulary in simple language.",
  },
  {
    icon: Mic,
    title: "Speaking Practice",
    desc: "Improve your pronunciation through guided speaking exercises and instant feedback.",
  },
  {
    icon: MessageCircle,
    title: "AI Conversations",
    desc: "Chat naturally in German and build confidence for real-world conversations.",
  },
  {
    icon: Volume2,
    title: "Native Pronunciation",
    desc: "Listen to realistic pronunciation and repeat words like a native speaker.",
  },
];

export default function AISection() {
  return (
    <section className="bg-[#050816] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-400">
            AI Powered Learning
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Learn German with
            <span className="block bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Practice vocabulary, grammar, pronunciation and conversations with
            a modern AI learning assistant.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20">
                  <Icon className="h-8 w-8 text-cyan-400" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 font-bold text-white transition hover:bg-green-400">
            Try AI Tutor
            <ArrowRight size={20} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}