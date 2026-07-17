"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Lamp, Eye, EyeOff, Sparkles } from "lucide-react";

export default function LoginPage() {
  const [lampOn, setLampOn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] px-6">

      {/* Background Glow */}
      <div
        className={`absolute h-96 w-96 rounded-full blur-[140px] transition ${
          lampOn
            ? "bg-yellow-400/30"
            : "bg-slate-800/20"
        }`}
      />


      <div className="relative z-10 w-full max-w-md">

        {/* Lamp */}
        <motion.button
          onClick={() => setLampOn(!lampOn)}
          animate={{
            rotate: lampOn ? [0, -5, 5, 0] : 0,
          }}
          className="mx-auto mb-10 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <Lamp
            size={45}
            className={
              lampOn
                ? "text-yellow-400 drop-shadow-[0_0_25px_#facc15]"
                : "text-slate-400"
            }
          />
        </motion.button>


        {!lampOn && (
          <p className="mb-6 text-center text-slate-400">
            Turn on the lamp to continue ✨
          </p>
        )}


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: lampOn ? 1 : 0.3,
            y: lampOn ? 0 : 40,
          }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >

          <div className="text-center">

            <Sparkles className="mx-auto text-green-400" />

            <h1 className="mt-4 text-3xl font-black text-white">
              Welcome Back
            </h1>

            <p className="mt-2 text-slate-400">
              Login to GermanMaster AI
            </p>

          </div>


          <div className="mt-8 space-y-4">

            <input
              disabled={!lampOn}
              type="email"
              placeholder="Email"
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none placeholder:text-slate-500"
            />


            <div className="relative">

              <input
                disabled={!lampOn}
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Password"
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none placeholder:text-slate-500"
              />


              <button
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-4 text-slate-400"
              >
                {showPassword ? (
                  <EyeOff />
                ) : (
                  <Eye />
                )}
              </button>

            </div>


            <button
              disabled={!lampOn}
              className="w-full rounded-2xl bg-green-500 py-4 font-bold text-white transition hover:bg-green-400 disabled:opacity-40"
            >
              Login
            </button>

          </div>

        </motion.div>

      </div>

    </main>
  );
}