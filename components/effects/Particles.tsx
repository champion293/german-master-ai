"use client";

import Particles from "@tsparticles/react";


export default function ParticleBackground() {


  return (

    <Particles

      className="absolute inset-0 -z-10"

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
            color:"#22c55e",
            opacity:0.2
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
          },


          opacity:{
            value:0.5
          }

        }

      }}

    />

  );

}