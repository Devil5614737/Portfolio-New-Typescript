import Image from "next/image";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";


type Props = {
  title: string;
  tag: string;
  desc: string;
  link: string;
  src: string;
};

export const Card = ({ title, tag, desc, link, src }: Props) => {
  return (
    <motion.div
      className="group"
      whileInView={{
        x: [0, 0],
        y: [100, 0],
        opacity: [0, 1],
      }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="w-full mb-[28px] rounded-[20px] overflow-hidden">
        <Image
          src={src}
          alt="project thumbnail"
          width={700}
          height={432}
          className="hover:scale-110 w-full h-[231px] object-cover rounded-20px transition-all cursor-pointer"
          loading="lazy"
        />
      </div>
      <div className="card-body">
        <p className="text-[1.2rem] tracking-[3px] mb-2 text-[#949494] uppercase">
          {tag}
        </p>
        <h3 className="text-[2rem] md:text-[2.4rem]   font-bold mb-[10px]">
          {title}
        </h3>
        <p className="text-[1.3rem] md:text-[1.5rem] leading-[1.8]">
       {desc}
        </p>
        <a
        target={'_blank'}
        rel="noreferrer" 
          href={link}
          className="text-xl tracking-[2px] font-semibold mt-6 flex items-center gap-3 group-hover:gap-5 transition-all border-b-2 w-fit py-2 border-b-black"
        >
          LIVE DEMO{" "}
          <span>
            <ArrowRightIcon className="w-6 h-6" />
          </span>
        </a>
      </div>
    </motion.div>
  );
};
