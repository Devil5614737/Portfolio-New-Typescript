import React from 'react'
import { Container } from '../components/container'
import { SectionHeader } from '../components/SectionHeader'
import {motion} from 'framer-motion'

export const Contact = () => {
  return (
    <motion.section
    
    whileInView={{
      x: [0, 0],
      y: [100, 0],
      opacity: [0, 1],
      
    }}
    
    className='mt-[5rem] bg-white py-8'>
        <SectionHeader title='Contact Me!'/>
        <Container>
            <motion.form className='mt-8 md:max-w-[60%]'
            
            whileInView={{
              x: [100, 0],
              opacity: [0, 1],
            }}
            
            >
              
                <label htmlFor="name" className='mb-5 inline-block text-2xl'>Name</label>
                <input required id='name' type="text" className='w-full border-2 border-gray-300 h-[50px] rounded-xl mb-10 text-xl px-2'/>
                <label htmlFor="email" className='mb-5 inline-block text-2xl'>Email</label>
                <input required id='email' type="email" className='w-full border-2 border-gray-300 h-[50px] rounded-xl mb-10 text-xl px-2'/>
                <label htmlFor="email" className='mb-5 inline-block text-2xl'>Message</label>
                <textarea required id='email' className='w-full border-2 border-gray-300 h-[150px] rounded-xl mb-10 resize-none text-xl p-2 '/>
                <button className='text-3xl bg-[#2563EB] text-white w-full text-center py-6 rounded-xl'>Send</button>
            </motion.form>
        </Container>
    </motion.section>
  )
}
