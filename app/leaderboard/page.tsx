"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";


const users = [

  {
    rank:1,
    name:"German Master",
    xp:2450
  },

  {
    rank:2,
    name:"Language Hero",
    xp:1900
  },

  {
    rank:3,
    name:"Deutsch Learner",
    xp:1500
  },

  {
    rank:4,
    name:"Champion",
    xp:850
  },

  {
    rank:5,
    name:"Beginner",
    xp:500
  }

];



export default function LeaderboardPage(){


return (

<main className="min-h-screen bg-[#050816] px-6 py-32">


<div className="mx-auto max-w-4xl">


<motion.div

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

className="text-center"

>

<Trophy
size={70}
className="mx-auto text-yellow-400"
/>


<h1 className="mt-6 text-5xl font-black text-white">
Leaderboard 🏆
</h1>


<p className="mt-4 text-slate-400">
Top German learners ranking
</p>


</motion.div>




<div className="mt-12 space-y-5">


{users.map((user)=>(


<motion.div

key={user.rank}

whileHover={{
scale:1.03
}}

className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"

>


<div className="flex items-center gap-5">


<div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 text-xl font-black text-green-400">

{user.rank}

</div>


<div>

<h2 className="text-xl font-bold text-white">
{user.name}
</h2>

<p className="text-slate-400">
German Learner
</p>

</div>


</div>



<div className="text-right">

<p className="text-2xl font-black text-green-400">
{user.xp} XP
</p>


</div>



</motion.div>


))}


</div>



</div>


</main>

);

}