"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, ArrowRight } from "lucide-react";
import { germanMCQ } from "@/data/germanMCQ";


export default function LessonPage(){

  const [current,setCurrent]=useState(0);
  const [selected,setSelected]=useState("");
  const [score,setScore]=useState(0);
  const [finished,setFinished]=useState(false);



  const quiz=germanMCQ[current];



  function completeLesson(){

    const oldXP =
      Number(localStorage.getItem("xp")) || 0;


    const oldLessons =
      Number(localStorage.getItem("lessons")) || 0;



    localStorage.setItem(
      "xp",
      String(oldXP + score * 10)
    );


    localStorage.setItem(
      "lessons",
      String(oldLessons + 1)
    );


  }




  function checkAnswer(){

    let newScore=score;


    if(selected===quiz.answer){

      newScore=score+1;
      setScore(newScore);

    }



    if(current + 1 < germanMCQ.length){

      setCurrent(current+1);
      setSelected("");

    }

    else{

      setFinished(true);


      setTimeout(()=>{

        completeLesson();

      },100);

    }

  }




  if(finished){

    return(

      <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6">

        <motion.div

          initial={{
            scale:0
          }}

          animate={{
            scale:1
          }}

          className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl"

        >

          <Trophy
            size={70}
            className="mx-auto text-yellow-400"
          />


          <h1 className="mt-6 text-4xl font-black text-white">
            Lesson Completed 🎉
          </h1>


          <p className="mt-4 text-2xl text-green-400">
            Score: {score}/{germanMCQ.length}
          </p>


          <p className="mt-3 text-slate-400">
            +{score * 10} XP Added
          </p>


        </motion.div>


      </main>

    );

  }




  return(

    <main className="min-h-screen bg-[#050816] px-6 py-32">

      <div className="mx-auto max-w-3xl">


        <h1 className="text-4xl font-black text-white">
          German Basics Lesson
        </h1>


        <p className="mt-3 text-slate-400">
          Question {current+1}/{germanMCQ.length}
        </p>



        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">


          <h2 className="text-2xl font-bold text-white">
            {quiz.question}
          </h2>



          <div className="mt-8 space-y-4">


            {quiz.options.map((option)=>(

              <button

                key={option}

                onClick={()=>setSelected(option)}

                className={`w-full rounded-2xl border p-4 text-left ${
                  selected===option
                  ?
                  "border-green-400 bg-green-500/20 text-green-300"
                  :
                  "border-white/10 text-white"
                }`}

              >

                {option}

              </button>

            ))}


          </div>



          <button

            disabled={!selected}

            onClick={checkAnswer}

            className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 py-4 font-bold text-white disabled:opacity-40"

          >

            Next
            <ArrowRight/>

          </button>


        </div>


      </div>


    </main>

  );

}