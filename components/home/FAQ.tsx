"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const questions = [
  {
    question: "Is GermanMaster AI completely free?",
    answer:
      "Yes. GermanMaster AI is designed to provide free German learning lessons, vocabulary, quizzes and AI-powered practice.",
  },
  {
    question: "Do I need any German knowledge to start?",
    answer:
      "No. You can start from A1 beginner level and gradually progress towards advanced German.",
  },
  {
    question: "Can I practice speaking German?",
    answer:
      "Yes. You will be able to practice pronunciation, conversations and speaking exercises.",
  },
  {
    question: "How many lessons are available?",
    answer:
      "GermanMaster AI includes structured lessons from beginner to advanced levels with vocabulary and quizzes.",
  },
  {
    question: "Can I use it on mobile?",
    answer:
      "Yes. The platform is fully responsive and works on mobile, tablet and desktop devices.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#050816] py-24">
      <div className="mx-auto max-w-4xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-black text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-slate-400">
            Everything you need to know about GermanMaster AI.
          </p>
        </motion.div>


        <div className="mt-12 space-y-5">

          {questions.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >

                <span className="text-lg font-bold text-white">
                  {item.question}
                </span>

                <ChevronDown
                  className={`text-green-400 transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>


              {open === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="px-6 pb-6 text-slate-400"
                >
                  {item.answer}
                </motion.div>
              )}

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}