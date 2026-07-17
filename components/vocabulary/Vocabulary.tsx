"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";
import FlashCard from "./FlashCard";
import { vocabulary } from "@/data/vocabulary";


export default function Vocabulary(){

  const [search,setSearch] = useState("");
  const [category,setCategory] = useState("All");


  const categories = [
    "All",
    ...new Set(
      vocabulary.map(
        (item)=>item.category
      )
    )
  ];


  const filtered = vocabulary.filter((word)=>{

    const matchSearch =
      word.german
        .toLowerCase()
        .includes(search.toLowerCase())
      ||
      word.english
        .toLowerCase()
        .includes(search.toLowerCase());


    const matchCategory =
      category==="All"
      ||
      word.category===category;


    return matchSearch && matchCategory;

  });



  return (

    <section className="min-h-screen bg-[#050816] px-6 py-32">

      <div className="mx-auto max-w-7xl">


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

          <h1 className="text-5xl font-black text-white">
            German Vocabulary 📚
          </h1>

          <p className="mt-5 text-slate-400">
            Learn German words with interactive flashcards.
          </p>

        </motion.div>



        {/* Search */}

        <div className="mx-auto mt-10 flex max-w-xl items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">

          <Search className="text-green-400"/>

          <input
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search word..."
            className="w-full bg-transparent text-white outline-none"
          />

        </div>



        {/* Categories */}

        <div className="mt-8 flex flex-wrap justify-center gap-3">

          {categories.map((item)=>(

            <button
              key={item}
              onClick={()=>setCategory(item)}
              className={`rounded-full px-5 py-2 transition ${
                category===item
                ?
                "bg-green-500 text-white"
                :
                "bg-white/10 text-slate-300"
              }`}
            >

              {item}

            </button>

          ))}

        </div>



        {/* Cards */}

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">


          {filtered.map((word)=>(

            <FlashCard
              key={word.german}
              german={word.german}
              english={word.english}
            />

          ))}


        </div>


      </div>

    </section>

  );

}