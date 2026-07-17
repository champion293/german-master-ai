"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-950 via-black to-yellow-900 px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 rounded-3xl 
        bg-white/10 backdrop-blur-xl 
        border border-white/20"
      >

        <h1 className="text-4xl font-bold text-white text-center">
          Create Account 🇩🇪
        </h1>

        <p className="text-gray-300 text-center mt-3">
          Start your German learning journey
        </p>


        <div className="mt-8 space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-5 py-3 rounded-xl 
            bg-white/10 text-white outline-none
            border border-white/20"
          />


          <input
            type="email"
            placeholder="Email"
            className="w-full px-5 py-3 rounded-xl 
            bg-white/10 text-white outline-none
            border border-white/20"
          />


          <input
            type="password"
            placeholder="Password"
            className="w-full px-5 py-3 rounded-xl 
            bg-white/10 text-white outline-none
            border border-white/20"
          />


          <button
            className="w-full py-3 rounded-xl
            bg-yellow-400 text-black
            font-bold text-lg
            hover:scale-105 transition"
          >
            Register 🚀
          </button>

        </div>


        <p className="text-gray-300 text-center mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-yellow-400 font-bold"
          >
            Login
          </Link>
        </p>


      </motion.div>

    </main>
  );
}