import React from 'react'
import { useState,useEffect } from 'react'
import {styles} from '../styles.js'

import { navLinks } from '../constants/constants.js'
import {menu,close } from "../assets"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [page, setPage] = useState('');
    const [toggle, setToggle] = useState(true);

  return (
    
    <div  className={`${styles.paddingX} pl-1  py-[0.5vh] flex fixed top-0 left-0 flex-row z-20 justify-between items-center pt-[0.5vh] h-[10vh] w-full `}>
      <div className={` flex flex-row justify-start items-center  gap-2`}>
            <a href='#' className='cursor-pointer' onClick={()=>{
                      setPage('')

                    }} ><img
              src="./a-logo.png"

              width="90"
              className='shadow-drop'
              
              /> </a>
          
            <p className="text-lg">Adi&nbsp;| Dev </p>
      </div>

      <ul className='hidden sm:flex flex-row gap-10'>
          {navLinks.map((link)=>(
            <li key={link.id} className={`${link.title===page? "text-white":"text-slate-300"}`} >
              <a href={`/${link.id} `  } 
                    className='cursor-pointer hover:underline underline-offset-2'
                    onClick={()=>{
                      setPage(link.title)

                    }}>{link.title}</a>
            </li>
          )
          )
        }
      </ul>
        <div className="sm:hidden " >

          <img src={`${toggle?menu:close}`} 
              className='cursor-pointer p-4'  
              onClick={()=>setToggle(!toggle)}/>

        <ul className={`${!toggle?"flex":"hidden"} flex-col justify-center items-start pl-4 gap-4 absolute top-16 right-0 rounded-lg mx-10 px-12 py-6 z-10 my-2 black-gradient`}>

          {navLinks.map((link)=>(
            <li key={link.id} className={`${link.title===page? "text-white":"text-slate-300"}`} >
              <Link to={`/${link.id} `  } 
                    className='cursor-pointer hover:underline underline-offset-2'
                    onClick={()=>{
                      setToggle(!toggle);
                      setPage(link.title)

                    }}>{link.title}</Link>
            </li>
          )
          )
        }
      </ul>


      </div>

 



    </div>
  )
}

export default Navbar