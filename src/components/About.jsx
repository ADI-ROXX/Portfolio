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
        viewport={{once: true,amount:0.25}}
        className='border-green-200 card_grad border-[2px] min-w-[250px] rounded-lg min-h-[320px] flex flex-col items-center justify-center '>
          <div
            options={{
              max:45,
              scale:1,
              speed:450,
              reverse:true,

            }
          }
            className="flex flex-col  justify-center  items-center gap-4 px-2 "
          >
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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, temporibus accusamus at earum nostrum vitae similique suscipit tempore aut, error in ratione aperiam? Maiores saepe quod ullam sed illo. Nemo! Lorem ipsum dolor sit am rem, consectetur adipiscing elit sed diam non pro id elit. Lorem ips   nostrum, consectetur adipiscing elit, sed diam non pro id elit. Lorem ips nost    nostrum, consectetur adipiscing elit, sed diam non    pro id elit. Lorem ips nostrum, consectetur   adipiscing elit, sed diam non pro id elit. Lorem    convallis   justo. Lorem ips nostrum, consectetur adipis    grouping, sed diam non pro id elit. Lorem ips nostrum        
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