"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { motion } from "framer-motion";
import Link from "next/link";
import { UserPlus } from "lucide-react";


export default function RegisterPage(){

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [message,setMessage] = useState("");

  const [loading,setLoading] = useState(false);



  async function registerUser(){

    setLoading(true);
    setMessage("");


    const { data, error } = await supabase.auth.signUp({

      email,

      password,

      options:{

        data:{
          name:name
        }

      }

    });



    if(error){

      setMessage(error.message);

    }
    else{

      setMessage(
        "Account created! Check your email for verification."
      );

    }


    setLoading(false);

  }




  return (

    <main className="min-h-screen bg-[#050816] px-6 py-32">


      <div className="mx-auto max-w-md">


        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          animate={{
            opacity:1,
            y:0
          }}

          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"

        >


          <UserPlus
            className="mx-auto text-green-400"
            size={50}
          />


          <h1 className="mt-5 text-center text-4xl font-black text-white">
            Create Account
          </h1>



          <div className="mt-8 space-y-4">


            <input

              placeholder="Name"

              value={name}

              onChange={(e)=>setName(e.target.value)}

              className="w-full rounded-xl bg-black/20 p-4 text-white outline-none"

            />



            <input

              placeholder="Email"

              type="email"

              value={email}

              onChange={(e)=>setEmail(e.target.value)}

              className="w-full rounded-xl bg-black/20 p-4 text-white outline-none"

            />



            <input

              placeholder="Password"

              type="password"

              value={password}

              onChange={(e)=>setPassword(e.target.value)}

              className="w-full rounded-xl bg-black/20 p-4 text-white outline-none"

            />



            <button

              onClick={registerUser}

              disabled={loading}

              className="w-full rounded-xl bg-green-500 py-4 font-bold text-white"

            >

              {
                loading
                ?
                "Creating..."
                :
                "Register"
              }

            </button>


          </div>




          {
            message &&

            <p className="mt-5 text-center text-green-400">
              {message}
            </p>

          }



          <p className="mt-6 text-center text-slate-400">

            Already have account?

            <Link
              href="/login"
              className="ml-2 text-green-400"
            >
              Login
            </Link>

          </p>



        </motion.div>


      </div>


    </main>

  );

}