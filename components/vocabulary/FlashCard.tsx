"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  german: string;
  english: string;
};

export default function FlashCard({
  german,
  english,
}: Props) {

  const [flip,setFlip] = useState(false);


  return (

    <motion.div
      onClick={()=>setFlip(!flip)}
      whileHover={{
        scale:1.05
      }}
      className="cursor-pointer"
    >

      <div className="relative h-60 w-full">

        <motion.div
          animate={{
            rotateY: flip ? 180 : 0
          }}
          transition={{
            duration:0.5
          }}
          style={{
            transformStyle:"preserve-3d"
          }}
          className="relative h-full w-full"
        >


          {/* Front */}
          <div
            className="absolute inset-0 flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
            style={{
              backfaceVisibility:"hidden"
            }}
          >

            <div>

              <p className="text-sm text-slate-400">
                German
              </p>

              <h2 className="mt-4 text-4xl font-black text-green-400">
                {german}
              </h2>

            </div>

          </div>



          {/* Back */}
          <div
            className="absolute inset-0 flex items-center justify-center rounded-3xl border border-green-500/20 bg-green-500/10 p-6 text-center"
            style={{
              transform:"rotateY(180deg)",
              backfaceVisibility:"hidden"
            }}
          >

            <div>

              <p className="text-sm text-slate-300">
                English
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white">
                {english}
              </h2>

            </div>


          </div>



        </motion.div>

      </div>


    </motion.div>

  );
}