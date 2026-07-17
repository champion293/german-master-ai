"use client";

import { motion } from "framer-motion";
import {
  Flame,
  Trophy,
  BookOpen,
  Star,
  Target,
} from "lucide-react";
import { useEffect, useState } from "react";


export default function Dashboard(){

  const [xp,setXp]=useState(0);
  const [lessons,setLessons]=useState(0);


  useEffect(()=>{

    setXp(
      Number(localStorage.getItem("xp")) || 0
    );

    setLessons(
      Number(localStorage.getItem("lessons")) || 0
    );

  },[]);



  const stats=[

    {
      title:"Daily Streak",
      value:"🔥 1 Day",
      icon:Flame
    },

    {
      title:"XP Earned",
      value:`${xp} XP`,
      icon:Star
    },

    {
      title:"Lessons",
      value:`${lessons} Completed`,
      icon:BookOpen
    },

    {
      title:"Achievements",
      value:"New",
      icon:Trophy
    }

  ];



  return (

    <main className="min-h-screen bg-[#050816] px-6 py-32">

      <div className="mx-auto max-w-7xl">


        <h1 className="text-5xl font-black text-white">
          Learning Dashboard
        </h1>



        <div className="mt-12 grid gap-6 md:grid-cols-4">


          {stats.map((item)=>{

            const Icon=item.icon;


            return(

              <motion.div

              key={item.title}

              whileHover={{
                y:-8
              }}

              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"

              >

                <Icon className="text-green-400"/>


                <h2 className="mt-5 text-white">
                  {item.title}
                </h2>


                <p className="mt-2 text-2xl font-black text-green-400">
                  {item.value}
                </p>


              </motion.div>

            )

          })}


        </div>


      </div>

    </main>

  );

}