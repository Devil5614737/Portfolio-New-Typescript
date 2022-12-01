import Image from 'next/image'
import React from 'react'
import { Container } from '../components/container'
import { SectionHeader } from '../components/SectionHeader'
import {ArrowDownTrayIcon} from '@heroicons/react/24/solid'
import {motion} from 'framer-motion'

export const About = () => {
  return (
    <motion.section
    whileInView={{
      x: [0, 0],
      y: [100, 0],
      opacity: [0, 1],
    }}
    transition={{ duration: 0.5, type: "spring" }}
    className='mt-4 py-14'>
   <SectionHeader title='About'/>
   <Container>
    <div className="md:flex mt-11">
        <Image 
        src='/assets/myImg.png'
        width={264}
        height={288}
        loading='lazy'
        alt='This is me'
        className='object-contain m-auto md:m-0'
        />
        <div className="mt-8 md:mt-0 text-center md:text-left md:max-w-[55%] self-center ml-[36px]">
            <p className='text-[18px] md:text-[23px]  text-[#545454]    leading-[1.8]'>Hello!! my name is `Kaushik Sheel` passionate FrontEnd Web Developer, love to build amazing products and solving problems. If you have any project or job feel free to contact me..
</p>
<a target={'_blank'} rel='norefferer' href="https://drive.google.com/file/d/1L3w63jNWT7xCcE2hRBRNCyB3zDvP5njP/view" className='flex w-fit  text-3xl border-2 border-[#D6D6D6] px-8 py-5 rounded-xl items-center gap-x-6 m-auto md:m-0 md:mt-7 mt-7'>
    <span><ArrowDownTrayIcon className='w-8 h-8 mt-[-5px]'/></span>
    RESUME</a>
        </div>
    </div>
   </Container>
    </motion.section>
    
  )
}
