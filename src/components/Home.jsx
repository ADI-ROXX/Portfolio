import React, { useRef } from 'react'
import {motion} from "framer-motion"

import {styles} from "../styles.js"
import {ComputersCanvas} from "./canvas/index.js"
import { Link } from 'react-router-dom'
import { useFrame } from '@react-three/fiber'
const Home = () => {
  const setup=useRef();

 

  return (
    <div id="">
      
      <section className={`Intro relative w-full  h-screen flex flex-row  items-start justify-start ${styles.paddingX} pl-0  `}>
    <div className="relative top-32 sm:left-28 left-6 flex flex-row gap-8 ">
        <div className="flex flex-col  items-center">
          <div className="absolute top-0 left-0 z-10 rounded-full bg-violet-500 w-4 h-4"/>

            <div className="w-1 sm:h-80 h-40 violet-gradient absolute top-2 left-[6px]"/>
 
        </div>
        <div className="flex flex-col gap-0">
        <p className={`${styles.heroHeadText} steelfish `}>Hi, I'm <span className="back-img">Aditya</span></p>
        <p className={`${styles.heroSubText} w-[60%]`}>I create attractive websites and have worked on both frontend and backend</p>
        </div>
        </div>
        <div className="z-0 absolute  w-full h-screen ">
          <ComputersCanvas/>

        <a href='#about'>
          <div className='absolute bottom-[2.5%] z-10 border-4 left-[50%] h-[48px] w-[30px] pl-[5px]  border-md rounded-[32px] border-secondary'> 
              <motion.div ref={setup}
                animate={{
                  y:[0,20,0],

                }}
                transition={
                  {
                    duration:0.9,
                    repeat:Infinity,
                    repeatType:'loop',

                  }
                }
                className="w-3 h-3  mt-1 mb-0.5 rounded-full bg-secondary ">

                  </motion.div>
          </div> 
          </a>
        </div>
        

      </section>
    </div>
  )
}


export default Home



