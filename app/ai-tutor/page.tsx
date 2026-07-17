"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User, Loader2 } from "lucide-react";


type Message = {
  role: "user" | "ai";
  text: string;
};


export default function AITutorPage() {

  const [input, setInput] = useState("");

  const [loading,setLoading] = useState(false);


  const [messages,setMessages] = useState<Message[]>([
    {
      role:"ai",
      text:"Hallo! Ich bin dein Deutsch Tutor. Wie kann ich dir helfen?"
    }
  ]);




  async function sendMessage(){

    if(!input.trim() || loading) return;


    const userText=input;


    setMessages((prev)=>[
      ...prev,
      {
        role:"user",
        text:userText
      }
    ]);


    setInput("");

    setLoading(true);



    try{


      const res = await fetch("/api/chat",{

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({
          message:userText
        })

      });



      const data=await res.json();



      setMessages((prev)=>[
        ...prev,
        {
          role:"ai",
          text:data.reply
        }
      ]);



    }catch{


      setMessages((prev)=>[
        ...prev,
        {
          role:"ai",
          text:"Connection error."
        }
      ]);


    }



    setLoading(false);

  }





  return (

    <main className="min-h-screen bg-[#050816] px-6 py-32">


      <div className="mx-auto max-w-3xl">


        <h1 className="text-center text-5xl font-black text-white">
          AI German Tutor 🤖
        </h1>



        <p className="mt-4 text-center text-slate-400">
          Practice German conversation with AI.
        </p>




        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">



          <div className="h-[450px] space-y-5 overflow-y-auto">



            {messages.map((msg,index)=>(

              <motion.div

                key={index}

                initial={{
                  opacity:0,
                  y:20
                }}

                animate={{
                  opacity:1,
                  y:0
                }}

                className={`flex gap-3 ${
                  msg.role==="user"
                  ?
                  "justify-end"
                  :
                  "justify-start"
                }`}

              >


                {
                  msg.role==="ai" &&
                  <Bot className="text-green-400"/>
                }



                <div className={`max-w-xs rounded-2xl p-4 ${
                  msg.role==="user"
                  ?
                  "bg-green-500 text-white"
                  :
                  "bg-white/10 text-white"
                }`}>

                  {msg.text}

                </div>



                {
                  msg.role==="user" &&
                  <User className="text-green-400"/>
                }


              </motion.div>

            ))}



            {
              loading &&

              <div className="flex items-center gap-3 text-slate-400">

                <Bot className="text-green-400"/>

                AI is thinking

                <Loader2
                  className="animate-spin"
                  size={18}
                />

              </div>

            }



          </div>





          <div className="mt-6 flex gap-3">


            <input

              value={input}

              onChange={(e)=>
                setInput(e.target.value)
              }

              onKeyDown={(e)=>{

                if(e.key==="Enter")
                  sendMessage();

              }}

              placeholder="Write German sentence..."

              className="flex-1 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none"

            />



            <button

              onClick={sendMessage}

              className="rounded-2xl bg-green-500 px-5 text-white hover:bg-green-400"

            >

              <Send/>

            </button>



          </div>



        </div>


      </div>


    </main>

  );

}