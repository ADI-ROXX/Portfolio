import React from 'react'
import {BallCanvas} from "./canvas"
import { WrapSection } from '../hoc'
import { technologies } from '../constants/constants'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'

const Tech = () => {
  return (
    <div className="pt-[9vh]">
      <motion.div  variants={textVariant()}>
      <p className={styles.sectionSubText}>Technologies I have worked with</p>
      <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center items-center gap-10 pr-10 '>
      {technologies.map((tech)=>(
        <BallCanvas key={tech.name} icon={tech.icon}/> 
      ))}
      </div>
    </div>
  )
}

export default WrapSection(Tech,"tech")