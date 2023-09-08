import React, { useState } from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn,textVariant } from '../utils/motion'



import {WrapSection} from "../hoc"
import emailValidator from "email-validator";
import emailjs from "@emailjs/browser"

const initialMail={
  name:'',
  email:'',
  text:''
}


const Contact = () => {
  const [mail, setMail] = useState(initialMail);

  const serviceId="service_udmlsry";
  const templateId="template_411lsxe";
  const publicKey="8lkb_EgjuWjZdKA0C";

  const submitHandler=async ()=>{




    try {
      const resp=emailValidator.validate(mail.email);

      if(resp){
        const res=await emailjs.send(serviceId,templateId,{
        from_name:mail.name,
        message:mail.text,
        "from_email":mail.email
      },publicKey)
        .then((res)=>{
          setMail(initialMail);
          
          alert("Thank you. I have received your message. I will get back to you as soon as possible");

        })
        .catch(error=>{
          alert("Some error occured. Please try again"); 
        })
      
    
    }
      else{
        alert("Invalid email address. Please provide a valid email address.")
      }
    } catch (error) {
      alert("Some error occured, please try again.");
    }
    

  }
  return (
    <div className='pt-[9vh] pb-[14vh] '>
      <motion.div  variants={textVariant()} className=''>
      <p className={styles.sectionSubText}>Connect with me</p>
      <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>
    <div className='flex items-start  justify-start sm:pl-[10%] pl-[2%] '>
    <div className="">



        <motion.div 
          variants={fadeIn("right","tween",0.4,0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{once:true,amount:0.25}}
          className=' bg-[#05057B] mt-5 rounded-xl sm:w-[60vw] w-[85vw] '>

          <div className="flex flex-col sm:gap-6 gap-4 sm:p-10 sm:pb-4 p-4 items-center">
            <p className="w-[94%] text-start sm:text-[20px] text-[14px] font-semibold ">Name</p>
            <input 

              placeholder='Please enter your name'
              className="w-[90%]  px-3 sm:py-5 py-2  bg-[#7380B5] sm:text-[20px] text-[14px] text-white rounded-xl"
              name='name'
              value={mail.name}
              onChange={(e)=>setMail({...mail,[e.target.name]:e.target.value})}
              
              />  
            <p className="w-[94%] text-start sm:text-[20px] text-[14px] font-semibold ">Email</p>

            <input 
              placeholder='Please enter your email address'
              className="w-[90%]  px-3 sm:py-5 py-2 bg-[#7380B5] sm:text-[20px] text-[14px] text-white rounded-xl"
              name='email'
              value={mail.email}
              onChange={(e)=>setMail({...mail,[e.target.name]:e.target.value})}
              
              />  
            <p className="w-[94%] text-start sm:text-[20px] text-[14px] font-semibold ">Message</p>

            <textarea 
              placeholder='Tell me what you want to say...'
              className="w-[90%]  p-3 bg-[#7380B5] sm:text-[20px] text-[14px] text-white rounded-xl"
              rows={7}
              name='text'
              value={mail.text}
              onChange={(e)=>setMail({...mail,[e.target.name]:e.target.value})}
              
              />  
          </div>
              <div className='flex flex-row items-end justify-end  pr-[10%] pb-8  pt-4  shadow-xl'>
              <button onClick={(e)=>submitHandler(e)} className="bg-blue-200 text-black opacity-95 hover:opacity-100 shadow-slate-500 sm:p-4 sm:w-[20%] w-[40%] py-2 sm:py-3 rounded-full shadow-lg"> Send </button>
              </div>
        </motion.div>

    </div>
    </div>
    </div>
  )
}

export default WrapSection(Contact,"contact") 