import React from 'react'
import { Container } from './container';
import {motion} from 'framer-motion'

type Props={
    title:string;
    subtitle?:string
}

export const SectionHeader = ({title,subtitle}:Props) => {
  return (
<motion.header
   whileInView={{
    x: [-100, 0],
    opacity: [0, 1],
  }}
>
  
  <Container>
  <h2 className='text-[3rem] font-semibold'>{title}</h2>
    <p className='text-[1.8rem] text-[#616161] mt-2'>{subtitle}</p>
  </Container>
</motion.header>
  )
}
