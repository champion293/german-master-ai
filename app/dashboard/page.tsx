"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Dashboard() {

  return (
    <main className="
    min-h-screen
    bg-gradient-to-br from-green-950 via-black to-yellow-900
    px-6 py-10
    ">


      <div className="max-w-6xl mx-auto">


        {/* Profile Header */}

        <motion.div
          initial={{opacity:0,y:-30}}
          animate={{opacity:1,y:0}}
          className="
          flex flex-col md:flex-row
          justify-between items-center
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          rounded-3xl
          p-6
          "
        >

          <div>

            <h1 className="
            text-4xl
            font-bold
            text-white">

              Hallo, Champion 🇩🇪

            </h1>


            <p className="
            text-gray-300
            mt-2">

              Keep learning every day 🚀

            </p>

          </div>


          <div className="text-6xl">
            🧑‍🎓
          </div>


        </motion.div>



        {/* Stats */}

        <div className="
        grid
        md:grid-cols-3
        gap-6
        mt-8">


          <Stat
          icon="⭐"
          title="XP Points"
          value="1250"
          />


          <Stat
          icon="🔥"
          title="Daily Streak"
          value="7 Days"
          />


          <Stat
          icon="🇩🇪"
          title="German Level"
          value="A1 Beginner"
          />


        </div>




        {/* Lessons */}

        <section className="mt-12">


          <h2 className="
          text-3xl
          font-bold
          text-white
          mb-6">

            German Lessons 📚

          </h2>



          <div className="
          grid
          md:grid-cols-3
          gap-6">


            <Lesson
            emoji="🔤"
            title="German Alphabet"
            progress="100%"
            />


            <Lesson
            emoji="💬"
            title="Basic Words"
            progress="60%"
            />


            <Lesson
            emoji="🎤"
            title="Speaking Practice"
            progress="25%"
            />


          </div>


        </section>




        {/* Start Button */}

        <div className="
        text-center
        mt-12">


          <Link

          href="/lesson"

          className="
          inline-block
          px-10
          py-4
          rounded-full
          bg-yellow-400
          text-black
          font-bold
          text-lg
          hover:scale-105
          transition
          shadow-xl
          "
          >

            Start Lesson 🚀

          </Link>


        </div>


      </div>


    </main>
  );
}





function Stat({
icon,
title,
value
}:{
icon:string;
title:string;
value:string;
}){


return(

<motion.div

whileHover={{
scale:1.05
}}

className="
p-6
rounded-3xl
bg-white/10
backdrop-blur-xl
border border-white/20
text-center
"

>


<div className="text-4xl">
{icon}
</div>


<h3 className="
text-white
text-xl
mt-3">

{title}

</h3>


<p className="
text-yellow-400
text-2xl
font-bold
mt-2">

{value}

</p>


</motion.div>

)

}






function Lesson({
emoji,
title,
progress
}:{
emoji:string;
title:string;
progress:string;
}){


return(

<motion.div

whileHover={{
y:-10
}}

className="
p-6
rounded-3xl
bg-white/10
backdrop-blur-xl
border border-white/20
"

>


<div className="text-5xl">
{emoji}
</div>


<h3 className="
text-white
text-2xl
font-bold
mt-4">

{title}

</h3>


<div className="
mt-5
h-3
bg-white/20
rounded-full">

<div

className="
h-full
bg-yellow-400
rounded-full
"

style={{
width:progress
}}

/>

</div>


<p className="
text-gray-300
mt-3">

Progress {progress}

</p>


</motion.div>

)

}