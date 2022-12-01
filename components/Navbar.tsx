import { Bars3Icon } from "@heroicons/react/24/solid";
import React from "react";
import { Container } from "./container";

export const Navbar = () => {

const handleNav=()=>{
let links=document.querySelector('.links')
links?.classList.toggle('hidden')
}

  return (
    <nav>
      <Container>
        <div className="flex items-center flex-wrap justify-between py-6">
          <a className="font-semibold text-3xl md:text-4xl" href="#!">
            Kaushik
          </a>
          <Bars3Icon onClick={handleNav} className="w-11 h-11 cursor-pointer md:hidden" />
          <ul className="links hidden mt-5 md:mt-0 links md:flex md:items-center flex-col md:flex-row w-full md:w-fit md:gap-x-11">
            <li className="mb-5 hover:underline md:mb-0">
              <a className="text-2xl md:text-[1.6rem]" href="#!">
                Home
              </a>
            </li>
            <li className="mb-5 hover:underline md:mb-0">
              <a className="text-2xl md:text-[1.6rem]" href="#!">
                Projects
              </a>
            </li>
            <li className="mb-5 hover:underline md:mb-0">
              <a className="text-2xl md:text-[1.6rem]" href="#!">
                About
              </a>
            </li>
            <li className="mb-5 hover:underline md:mb-0">
              <a className="text-2xl md:text-[1.6rem]" href="#!">
                Skills
              </a>
            </li>
            <li className="mb-5  md:mb-0">
              <a className="text-2xl md:text-[1.6rem] border-2 border-black px-7 py-2 rounded-xl" href="#!">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};
