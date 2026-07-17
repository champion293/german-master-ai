"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";


export default function ParticleBackground(){

  const [init,setInit] = useState(false);


  useEffect(()=>{

    initParticlesEngine(async (engine)=>{

      await loadSlim(engine);

    }).then(()=>{

      setInit(true);

    });


  },[]);



  if(!init){
    return null;
  }



  return (

    <Particles

      options={{

        fullScreen:{
          enable:false
        },


        particles:{

          number:{
            value:40
          },


          color:{
            value:"#22c55e"
          },


          links:{
            enable:true,
            color:"#22c55e"
          },


          move:{
            enable:true,
            speed:1
          },


          size:{
            value:{
              min:1,
              max:3
            }
          }

        }

      }}

      className="absolute inset-0"

    />

  );

}