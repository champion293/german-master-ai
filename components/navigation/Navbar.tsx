"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between 
      bg-white/10 backdrop-blur-xl border border-white/20 
      rounded-2xl px-6 py-3">

        {/* Logo */}
        <Link 
          href="/"
          className="text-2xl font-extrabold text-white"
        >
          🇩🇪 German<span className="text-yellow-400">Master</span>
        </Link>


        {/* Menu */}
        <div className="hidden md:flex gap-8 text-white">

          <Link 
            href="/"
            className="hover:text-yellow-400 transition"
          >
            Home
          </Link>

          <Link 
            href="/courses"
            className="hover:text-yellow-400 transition"
          >
            Courses
          </Link>

          <Link 
            href="/leaderboard"
            className="hover:text-yellow-400 transition"
          >
            Leaderboard
          </Link>

        </div>


        {/* Buttons */}
        <div className="flex gap-3">

          <Link
            href="/login"
            className="px-5 py-2 rounded-full 
            border border-white/30 text-white
            hover:bg-white/10 transition"
          >
            Login
          </Link>


          <Link
            href="/register"
            className="px-5 py-2 rounded-full
            bg-yellow-400 text-black font-bold
            hover:scale-105 transition"
          >
            Join
          </Link>

        </div>

      </div>
    </motion.nav>
  );
}