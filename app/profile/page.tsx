"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Trophy,
  Flame,
  Star,
} from "lucide-react";


export default function ProfilePage(){

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



  let level="A1 Beginner";
  let next="A2 Elementary";


  if(xp>=500){

    level="A2 Elementary";
    next="B1 Intermediate";

  }


  if(xp>=1500){

    level="B1 Intermediate";
    next="B2 Upper Intermediate";

  }



  const progress =
    Math.min((xp/500)*100,100);



  return (

    <main className="min-h-screen bg-[#050816] px-6 py-32">

      <div className="mx-auto max-w-5xl">


        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          animate={{
            opacity:1,
            y:0
          }}

          className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"

        >


          <div className="flex items-center gap-5">


            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">

              <User
                size={40}
                className="text-green-400"
              />

            </div>



            <div>

              <h1 className="text-4xl font-black text-white">
                Champion
              </h1>

              <p className="text-slate-400">
                German Learner
              </p>

            </div>


          </div>




          <div className="mt-10 grid gap-6 md:grid-cols-3">


            <div className="rounded-2xl bg-white/5 p-5">

              <Star className="text-yellow-400"/>

              <p className="mt-3 text-slate-400">
                XP
              </p>

              <h2 className="text-3xl font-black text-white">
                {xp}
              </h2>

            </div>



            <div className="rounded-2xl bg-white/5 p-5">

              <Flame className="text-orange-400"/>

              <p className="mt-3 text-slate-400">
                Streak
              </p>

              <h2 className="text-3xl font-black text-white">
                1 Day
              </h2>

            </div>




            <div className="rounded-2xl bg-white/5 p-5">

              <Trophy className="text-green-400"/>

              <p className="mt-3 text-slate-400">
                Lessons
              </p>

              <h2 className="text-3xl font-black text-white">
                {lessons}
              </h2>

            </div>


          </div>




          <div className="mt-10">


            <h2 className="text-2xl font-bold text-white">
              {level}
            </h2>


            <p className="mt-2 text-slate-400">
              Next Level: {next}
            </p>



            <div className="mt-5 h-4 rounded-full bg-white/10">

              <motion.div

                initial={{
                  width:0
                }}

                animate={{
                  width:`${progress}%`
                }}

                className="h-full rounded-full bg-green-500"

              />


            </div>



          </div>


        </motion.div>


      </div>


    </main>

  );

}