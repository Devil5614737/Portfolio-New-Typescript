import Image from "next/image";
import React from "react";
import {motion} from 'framer-motion'

type Props={
    imgSrc:string,
    title:string
}

export const Skill = ({imgSrc,title}:Props) => {
  return (
    <motion.div
    whileInView={{
      // x: [-100, 0],
      scale:[.5,1],
      opacity: [0, 1],
    }}
    className="text-center grid place-items-center  w-fit rounded-xl">
      
      <Image
        src={imgSrc}
        alt="html icon"
        width={100}
        height={100}
        className="w-[72px] h-[72px] object-contain"
      />
      <p className="text-2xl mt-3">{title}</p>
    </motion.div>
  );
};
