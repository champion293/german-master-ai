"use client";

import { motion } from "framer-motion";
import { UserPlus, Sparkles, Lamp } from "lucide-react";
import { useState } from "react";

export default function RegisterPage() {
  const [lampOn, setLampOn] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#020617] px-6">

      <div className="relative w-full max-w-md">

        {/* Lamp */}
        <motion.button
          onClick={() => setLampOn(!lampOn)}
          animate={{
            rotate: lampOn ? [0, -5, 5, 0] : 0,
          }}
          className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
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


        <motion.div
          animate={{
            opacity: lampOn ? 1 : 0.35,
            y: lampOn ? 0 : 30,
          }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >

          <div className="text-center">

            <Sparkles className="mx-auto text-green-400" />

            <h1 className="mt-4 text-3xl font-black text-white">
              Create Account
            </h1>

            <p className="mt-2 text-slate-400">
              Join GermanMaster AI
            </p>

          </div>


          <div className="mt-8 space-y-4">

            <input
              disabled={!lampOn}
              placeholder="Full Name"
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none"
            />


            <input
              disabled={!lampOn}
              type="email"
              placeholder="Email"
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none"
            />


            <input
              disabled={!lampOn}
              type="password"
              placeholder="Password"
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none"
            />


            <button
              disabled={!lampOn}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 py-4 font-bold text-white transition hover:bg-green-400 disabled:opacity-40"
            >
              <UserPlus size={20}/>
              Create Account
            </button>

          </div>


          {!lampOn && (
            <p className="mt-5 text-center text-sm text-slate-400">
              Turn on the lamp to register ✨
            </p>
          )}

        </motion.div>

      </div>

    </main>
  );
}