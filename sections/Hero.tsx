import React from "react";
import { Container } from "../components/container";

export const Hero = () => {
  return (
    <section className="mt-[112px]">
      <Container>
        <div className=" text-center md:text-left ">
          <h1 className="text-[3rem] md:text-[6.7rem] font-bold m-0">
            Front-End <span>Developer</span>
          </h1>
          <p className="text-[1.8rem] md:text-[2.2rem] leading-[41px]  font-[400px] md:max-w-[55%] pt-[5px] text-[#7D7D7D]">
            Hello, I'm a Frontend Web Developer I strives to build immersiveand
            beautiful web applications through carefully crafted code
            anduser-centric design.
          </p>
          <a 
          className="text-[2rem] md:text-[2.5rem] font-medium bg-black text-white px-[54px] p-[14px] rounded-[9px] inline-block mt-[25px]"
          href="#!">Projects</a>
        </div>
      </Container>
    </section>
  );
};
