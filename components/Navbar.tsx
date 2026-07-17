"use client";

import { motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import Link from "next/link";


const navLinks = [

  {
    name:"Home",
    path:"/"
  },

  {
    name:"Lessons",
    path:"/lesson"
  },

  {
    name:"Vocabulary",
    path:"/vocabulary"
  },

  {
    name:"AI Tutor",
    path:"/ai-tutor"
  },

  {
    name:"Dashboard",
    path:"/dashboard"
  },

];



export default function Navbar(){

const [open,setOpen]=useState(false);



return (

<motion.nav

initial={{
y:-50,
opacity:0
}}

animate={{
y:0,
opacity:1
}}

className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl"

>


<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">


<Link
href="/"
className="flex items-center gap-3"
>


<div className="rounded-2xl bg-green-500/20 p-2">

<Sparkles className="text-green-400"/>

</div>


<h1 className="text-2xl font-black text-white">

GermanMaster

<span className="text-green-400">
AI
</span>

</h1>


</Link>





<div className="hidden items-center gap-6 md:flex">


{
navLinks.map((link)=>(

<Link

key={link.path}

href={link.path}

className="text-slate-300 hover:text-green-400"

>

{link.name}

</Link>

))
}



<Link

href="/profile"

className="rounded-full bg-green-500 px-5 py-2 font-bold text-white"

>

Profile

</Link>


</div>





<button

onClick={()=>setOpen(!open)}

className="rounded-xl border border-white/10 p-3 text-white md:hidden"

>

{
open
?
<X/>
:
<Menu/>
}

</button>



</div>





{
open &&

<div className="border-t border-white/10 bg-[#050816] p-6 md:hidden">


<div className="space-y-5">


{
navLinks.map((link)=>(

<Link

key={link.path}

href={link.path}

onClick={()=>setOpen(false)}

className="block text-white"

>

{link.name}

</Link>

))
}



<Link

href="/profile"

onClick={()=>setOpen(false)}

className="block rounded-xl bg-green-500 py-3 text-center font-bold text-white"

>

Profile

</Link>


</div>


</div>

}



</motion.nav>

);

}