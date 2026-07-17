"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Mail,
  Globe,
  Heart,
} from "lucide-react";

const links = [
  "Lessons",
  "Vocabulary",
  "AI Tutor",
  "Practice",
  "Community",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617] py-16">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 md:grid-cols-3">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-3xl font-black text-white">
              GermanMaster
              <span className="text-green-400">
                AI
              </span>
            </h2>

            <p className="mt-5 max-w-sm text-slate-400">
              Learn German with AI-powered lessons,
              vocabulary and speaking practice.
            </p>

          </motion.div>


          <div>

            <h3 className="text-xl font-bold text-white">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">
              {links.map((link)=>(
                <li
                  key={link}
                  className="text-slate-400 hover:text-green-400"
                >
                  {link}
                </li>
              ))}
            </ul>

          </div>


          <div>

            <h3 className="text-xl font-bold text-white">
              Connect
            </h3>

            <div className="mt-5 flex gap-4">

              <div className="rounded-xl bg-white/5 p-3 text-green-400">
                <Code2 size={22}/>
              </div>

              <div className="rounded-xl bg-white/5 p-3 text-green-400">
                <Mail size={22}/>
              </div>

              <div className="rounded-xl bg-white/5 p-3 text-green-400">
                <Globe size={22}/>
              </div>

            </div>

          </div>

        </div>


        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-500">

          © {new Date().getFullYear()} GermanMaster AI

          <br />

          Developed with 
          <Heart
            size={14}
            className="mx-1 inline text-red-400"
          />
          by Champion

        </div>

      </div>

    </footer>
  );
}