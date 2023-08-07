import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { experiences } from '../constants/constants'
import { WrapSection } from '../hoc'
import { textVariant } from '../utils/motion'

const ExperienceCard=({title,company_name,icon,iconBg, date,points,index})=>{
  return(
    
    <VerticalTimelineElement
    contentStyle={ { background: "radial-gradient(circle at 50.4% 50.5%, rgb(251, 32, 86) 10%, rgb(182, 2, 35) 90%)",  color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(182, 2, 35)' }}
    iconStyle={{background:iconBg}}
    date={date}
    icon={
      <div className='flex flex-row items-center justify-center w-full h-full'>
        <img src={icon} alt={company_name} className="w-[60%] h-[60%] object-contain"/>
      </div>
    }
    >
      <h3 className='text-white text-bold text-[24px] space-y-0 mb-0'>{title}</h3>
      <p className="text-secondary " style={{margin:0}}> {company_name}</p>
      <ul className="list-disc pl-3 pt-2">
        {points.map((p,ind)=>(
          <li key={ind}>{p}</li>
        ))}
      </ul>

    </VerticalTimelineElement>

  )
}



const Experience = () => {
  return (
    <div className="pt-[9vh] pb-[9vh]">
      <motion.div  variants={textVariant()}>
      <p className={styles.sectionSubText}>My works till now</p>
      <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>

      <VerticalTimeline className="mt-20 flex flex-col pr-5" animate={true}>
        {experiences.map((exp,index)=>(
      <ExperienceCard key={index} {...exp} index={index}/>
        ))}
      </VerticalTimeline>
    </div>
  )
}

export default WrapSection(Experience,"contributions")