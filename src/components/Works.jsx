import React from 'react'
import { projects } from '../constants/constants'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'
import { WrapSection } from '../hoc'
import { github } from '../assets'

const WorkCard=({index,name,description,tags,notdisabled,image,source_code_link,website_url})=>{

  return(


    <motion.div 
    variants={fadeIn("right","tween",0.5*index,1)}
    initial="hidden"
    whileInView="show"
    viewport={{once: true,amount:0.25}}
    className=' proj_card p-7 relative min-w-[250px] rounded-[20px] min-h-[320px] flex flex-col items-center justify-center '>
    <Tilt className="w-full pl-1 xs:pl-0 xs:w-[250px]" >
          <div
            options={{
              max:45,
              scale:1,
              speed:450,
              reverse:true,
              
            }
          }
          className="flex flex-col relative  justify-center  items-center gap-4 px-2 "
          >
          {notdisabled ? <div className=' rounded-[12px]  overflow-hidden ' >
            <img src={image} className="object-fill w-[300px] h-[180px]"/>
          </div> : <div className=' rounded-[12px]  overflow-hidden cursor-pointer' onClick={()=>window.open(website_url,"_blank")}>
            <img src={image} className="object-fill w-[300px] h-[180px]"/>
          </div>}


          <div className="absolute w-10 h-10 p-1 black-gradient right-5 top-4 justify-end rounded-full shadow-2xl	 ">
              <div className="flex w-full h-full items-center justify-center cursor-pointer "
                    onClick={()=>window.open(source_code_link,"_blank")}>
                <img className="w-full h-full object-contain" src={github}/>
              </div>
          </div>

          <div>
            <p className='font-semibold py-1'>{name}</p>
            <p>{description}</p>
          </div>
          </div>
    </Tilt>
        </motion.div>

  )
}

const Works = () => {
  return (
    <div className="pt-[9vh] pb-[9vh]">
    <motion.div variants={textVariant()} >
      <p className={styles.sectionSubText}>Projects that I have worked on</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div> 

    <motion.div 
        variants={fadeIn("","",0.4,1)}
        initial="hidden"
        whileInView="show"
        viewport={{once:true,amount:0.25}}
        className="max-w-2xl text-[18px] pt-8 pb-3">
          Following are the projects that I have made that have helped me in learning more and more about the technologies that are currently in use. 
          I have added the link to the websites and GitHub repositories of my projects. In the Readme.md file,you can find the demo of the project. Hope you like them

        </motion.div>
    <div className="flex flex-wrap gap-10 pt-10 items-start justify-center ">
    {projects.map((proj,index)=>(
      <WorkCard {...proj} key={index} index={index}/>
    ))}
    </div>
    
    </div>
  )
}

export default WrapSection(Works,"projects");