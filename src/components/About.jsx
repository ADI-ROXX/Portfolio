import React from 'react'
import {Tilt} from 'react-tilt'
import { motion } from 'framer-motion'
import {styles} from "../styles"
import {services} from "../constants/constants"
import "./contact.css"

import {fadeIn,textVariant} from '../utils/motion'
import { WrapSection } from '../hoc'
const ServiceCard=({title,icon,index})=>{

  return(
    <Tilt className="w-full pl-1 xs:pl-0 xs:w-[250px]" 
      >
      <motion.div 
        variants={fadeIn("right","tween",0.5*index,1)}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        className='border-green-200 card_grad border-[2px] min-w-[250px] rounded-lg min-h-[320px] flex flex-col items-center justify-center '>
          <div className="flex flex-col  justify-center  items-center gap-4 px-2 ">
              <img src={icon} alt="icon" className="w-16 h-16 object-contain"/>
              <div className='flex items-center justify-center'>
                <div className="text-[20px] font-bold mx-auto text-center">{title}</div>
              </div>
          </div>
        </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <div className="pt-[9vh] mail_back_img pb-[9vh]">
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>About me.</h2>
    </motion.div> 
    <motion.p 
      variants={fadeIn("left","spring",0.4,1)} className='mt-[1vh] max-w-3xl pr-[4vh] leading-[4vh]'>
        <img src='/check-mark.png' width="3"/>I am Aditya Ruhela. I am a web developer and a coder, equipped with the skills of HTML,CSS,JS for web development
        and C++ for solving DSA problems.<br/> My skills are not limited to basic web development only. I have worked with modern Web Development technologies like Tailwind CSS and MUI and JavaScript frameworks like ReactJS.
        <br/>
        I have worked with 3D website rendering technology of ReactThreeFiber and have a pretty good understanding of how the things work in it.
        <br/>
        
    </motion.p>
    
    <div className="flex flex-wrap justify-evenly gap-10 mt-20 pr-[5vw]">
      
          {services.map((service,index)=>{

            return(
            <ServiceCard key={service.title} {...service} index={index}/>
            )
          })}
    </div>
    </div>
  )
}

export default WrapSection(About,"about");