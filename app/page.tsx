"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  Mic,
  Trophy
} from "lucide-react";


const features=[

{
title:"Interactive Lessons",
text:"Learn German step by step",
icon:BookOpen
},

{
title:"AI Tutor",
text:"Practice conversations with AI",
icon:Brain
},

{
title:"Speaking Practice",
text:"Improve your pronunciation",
icon:Mic
},

{
title:"Earn XP",
text:"Complete lessons and level up",
icon:Trophy
}

];



export default function Home(){


return (

<main className="min-h-screen bg-[#050816] px-6 pt-32">


<div className="mx-auto max-w-7xl">



{/* Hero */}

<section className="grid items-center gap-12 md:grid-cols-2">



<motion.div

initial={{
opacity:0,
x:-50
}}

animate={{
opacity:1,
x:0
}}

>


<h1 className="text-6xl font-black leading-tight text-white">

Master German

<span className="text-green-400">
 with AI
</span>

</h1>



<p className="mt-6 text-xl text-slate-400">

Learn German vocabulary, grammar and speaking
skills with interactive lessons.

</p>




<div className="mt-8 flex gap-4">


<Link

href="/lesson"

className="rounded-full bg-green-500 px-8 py-4 font-bold text-white hover:bg-green-400"

>

Start Learning

</Link>



<Link

href="/ai-tutor"

className="rounded-full border border-white/10 px-8 py-4 text-white hover:bg-white/10"

>

Try AI Tutor

</Link>


</div>



</motion.div>





{/* Visual */}

<motion.div

initial={{
opacity:0,
scale:0.8
}}

animate={{
opacity:1,
scale:1
}}

className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"

>


<div className="text-center">


<p className="text-7xl">
🇩🇪
</p>


<h2 className="mt-6 text-3xl font-black text-white">

Deutsch Lernen

</h2>


<p className="mt-3 text-slate-400">

Your AI powered German journey

</p>


</div>


</motion.div>



</section>





{/* Features */}


<section className="mt-24 grid gap-6 md:grid-cols-4">


{
features.map((item,index)=>{

const Icon=item.icon;


return (

<motion.div

key={item.title}

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.1
}}

className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"

>


<Icon
className="text-green-400"
size={35}
/>



<h3 className="mt-5 text-xl font-bold text-white">

{item.title}

</h3>


<p className="mt-2 text-slate-400">

{item.text}

</p>


</motion.div>

)

})

}


</section>



</div>


</main>

);

}