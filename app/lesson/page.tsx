"use client";

import { useState } from "react";
import { germanMCQ } from "@/data/germanMCQ";
import { motion } from "framer-motion";
import { Trophy, CheckCircle } from "lucide-react";


export default function LessonPage(){


const [current,setCurrent] = useState(0);

const [selected,setSelected] = useState("");

const [score,setScore] = useState(0);

const [finished,setFinished] = useState(false);



const question = germanMCQ[current];



function checkAnswer(option:string){

setSelected(option);


if(option === question.answer){

setScore(score + 1);

}

}



function nextQuestion(){


if(current + 1 < germanMCQ.length){

setCurrent(current + 1);

setSelected("");

}

else{

setFinished(true);

}


}




if(finished){


return (

<main className="min-h-screen bg-[#050816] px-6 py-32">

<div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">


<Trophy
size={70}
className="mx-auto text-green-400"
/>


<h1 className="mt-6 text-4xl font-black text-white">

Lesson Complete 🎉

</h1>


<p className="mt-5 text-xl text-slate-300">

Your Score:

<span className="font-bold text-green-400">

{" "}
{score}/{germanMCQ.length}

</span>

</p>



<p className="mt-4 text-green-400">

+{score * 10} XP Earned

</p>


</div>

</main>

)

}





return (

<main className="min-h-screen bg-[#050816] px-6 py-32">


<div className="mx-auto max-w-3xl">


<div className="mb-8">

<p className="text-slate-400">

Question {current + 1} / {germanMCQ.length}

</p>


<div className="mt-3 h-3 rounded-full bg-white/10">

<div

className="h-3 rounded-full bg-green-500"

style={{

width:`${((current+1)/germanMCQ.length)*100}%`

}}

></div>

</div>

</div>




<motion.div

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"

>


<h1 className="text-3xl font-black text-white">

{question.question}

</h1>



<div className="mt-8 space-y-4">


{
question.options.map((option)=>(


<button

key={option}

onClick={()=>checkAnswer(option)}

className={`w-full rounded-xl border p-4 text-left text-white transition

${selected===option

?

"border-green-400 bg-green-500/20"

:

"border-white/10 bg-white/5 hover:bg-white/10"

}

`}

>


{option}



{
selected===option &&

<CheckCircle
className="ml-2 inline text-green-400"
/>

}



</button>


))

}


</div>




<button

disabled={!selected}

onClick={nextQuestion}

className="mt-8 w-full rounded-xl bg-green-500 py-4 font-bold text-white disabled:opacity-50"

>


{
current + 1 === germanMCQ.length

?

"Finish Lesson"

:

"Next Question"

}


</button>



</motion.div>


</div>


</main>

)

}