"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ali Khan",
    country: "Pakistan",
    text: "GermanMaster AI made learning German simple and enjoyable. The AI tutor is incredibly helpful.",
  },
  {
    name: "Emma Müller",
    country: "Germany",
    text: "A modern learning platform with a beautiful interface. Perfect for beginners.",
  },
  {
    name: "John Smith",
    country: "United Kingdom",
    text: "The daily streaks and quizzes keep me motivated every single day.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#07111f] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-black text-white">
            What Students Say
          </h2>

          <p className="mt-6 text-slate-400">
            Thousands of learners are improving their German with GermanMaster AI.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="mb-5 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-7 text-slate-300">
                "{item.text}"
              </p>

              <div className="mt-8">
                <h4 className="font-bold text-white">
                  {item.name}
                </h4>

                <p className="text-sm text-slate-400">
                  {item.country}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}