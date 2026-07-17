"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { addLessonReward } from "@/utils/progress";


const questions = [
  {
    german: "Hallo",
    options: ["Hello", "Good Night", "Thank You", "Bye"],
    answer: "Hello",
  },
  {
    german: "Danke",
    options: ["Please", "Sorry", "Thank You", "Welcome"],
    answer: "Thank You",
  },
  {
    german: "Guten Morgen",
    options: ["Good Night", "Good Morning", "Good Evening", "Bye"],
    answer: "Good Morning",
  },
];


export default function LessonPage() {

  const [current, setCurrent] = useState(0);
  const [xp, setXp] = useState(0);
  const [hearts, setHearts] = useState(3);
  const [complete, setComplete] = useState(false);
  const [message, setMessage] = useState("");


  function checkAnswer(option: string) {

    if (option === questions[current].answer) {

      setXp((prev) => prev + 10);
      setMessage("Correct! ⭐ +10 XP");

    } else {

      setHearts((prev) => prev - 1);
      setMessage("Wrong Answer ❤️");

    }


    setTimeout(() => {

      setMessage("");


      if (current < questions.length - 1) {

        setCurrent((prev) => prev + 1);

      } else {

        // Save Progress
        addLessonReward();

        setComplete(true);

      }


    }, 1000);

  }



  if (complete) {

    return (

      <main className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br from-green-950 via-black to-yellow-900
      px-6">


        <motion.div

        initial={{
          scale:0.5,
          opacity:0
        }}

        animate={{
          scale:1,
          opacity:1
        }}

        className="
        text-center
        p-10
        rounded-3xl
        bg-white/10
        backdrop-blur-xl
        border border-white/20">


          <div className="text-7xl">
            🎉
          </div>


          <h1 className="
          text-4xl
          font-bold
          text-white
          mt-5">

            Lesson Completed!

          </h1>


          <p className="
          text-yellow-400
          text-3xl
          font-bold
          mt-5">

            +50 XP ⭐

          </p>


          <p className="
          text-gray-300
          mt-3">

            Your progress is saved 🇩🇪

          </p>



          <div className="
          flex
          gap-4
          justify-center
          mt-8">


            <Link
            href="/dashboard"
            className="
            px-6
            py-3
            rounded-full
            bg-yellow-400
            text-black
            font-bold">

              Dashboard

            </Link>



            <Link
            href="/lesson"
            className="
            px-6
            py-3
            rounded-full
            border
            border-white/30
            text-white
            font-bold">

              Next Lesson

            </Link>


          </div>


        </motion.div>


      </main>

    );

  }



  const question = questions[current];


  return (

    <main className="
    min-h-screen
    bg-gradient-to-br from-green-950 via-black to-yellow-900
    px-6 py-10">


      <div className="
      max-w-3xl
      mx-auto">


        <div className="
        flex
        justify-between
        bg-white/10
        backdrop-blur-xl
        rounded-3xl
        p-5
        text-white">


          <span>
            ⭐ XP: {xp}
          </span>


          <span>
            ❤️ Hearts: {hearts}
          </span>


        </div>



        <motion.div

        initial={{
          opacity:0,
          y:40
        }}

        animate={{
          opacity:1,
          y:0
        }}

        className="
        mt-10
        p-8
        rounded-3xl
        bg-white/10
        backdrop-blur-xl
        border border-white/20
        text-center">


          <h1 className="
          text-5xl
          font-bold
          text-white">

            {question.german} 🇩🇪

          </h1>


          <p className="
          text-gray-300
          mt-5">

            Select correct meaning

          </p>



          <div className="
          grid
          gap-4
          mt-8">


            {question.options.map((option)=>(

              <button

              key={option}

              onClick={() => checkAnswer(option)}

              className="
              py-4
              rounded-2xl
              bg-white/10
              border border-white/20
              text-white
              hover:bg-yellow-400
              hover:text-black
              transition">

                {option}

              </button>

            ))}


          </div>



          {message && (

            <motion.p

            initial={{
              scale:0
            }}

            animate={{
              scale:1
            }}

            className="
            mt-6
            text-yellow-400
            text-xl
            font-bold">

              {message}

            </motion.p>

          )}



        </motion.div>


      </div>


    </main>

  );

}