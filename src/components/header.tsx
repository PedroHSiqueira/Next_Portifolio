"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {Button} from "@/components/ui/button";

export default function Cabecalho() {
  const [clicado, setClicado] = useState(false);

  const abrirNavbar = () => {
    setClicado(!clicado);
  };
  return (
    <div className="bg-[#F5F5F5] px-10 px-5 sticky top-[0.1px] z-10 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
      <header className="text-black  flex py-7 items-center justify-between ">
        <a href="#" className=" text-[#008080] text-2xl font-black">
          Pedro Siqueira<span className="text-black">.</span>
        </a>
        <nav className="hidden items-center text-xl gap-10 md:flex">
          <Link className="hover:text-[#e3b12b" href="#sobre">
            Sobre mim
          </Link>
          <Link className="hover:text-[#e3b12b" href="#tecnologia">
            Tecnologias
          </Link>
          <Link className="hover:text-[#e3b12b" href="#projetos">
            Projetos
          </Link>
          <div className="flex items-center justify-center gap-5">
            <a href="https://github.com/PedroHSiqueira" target="_blank">
              <FaGithub size={38} />
            </a>
            <a href="https://www.linkedin.com/in/phasiqueira/" target="_blank">
              <FaLinkedin size={38} />
            </a>
          </div>
        </nav>
        <div>
          <Button className={"hidden bg-gray-200 text-black font-semibold md:block shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"} variant="outline">Baixar Curriculo</Button>
        </div>
        <div className="lg:hidden flex items-end ">
          <button
              className="inline-flex items-center justify-center p-2 rounded-b-md text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={abrirNavbar}>
            {clicado ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </header>
      {clicado && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm-px-3">
            <Link href="#about"
                  className="flex justify-center flex-col font-bold py-2 px-3 text-black text-base rounded ">
              Sobre mim
            </Link>
            <Link href="#tech"
                  className="flex justify-center flex-col font-bold py-2 px-3 text-black text-base rounded ">
              Tecnologias
            </Link>
            <Link href="#projetos"
                  className="flex justify-center flex-col font-bold py-2 px-3 text-black text-base rounded ">
              Projetos
            </Link>
            <Link href="https://github.com/PedroHSiqueira"
                  className="flex justify-center flex-col font-bold py-2 px-3 text-black text-base rounded ">
              Github
            </Link>
            <Link href="https://www.linkedin.com/in/phasiqueira/"
                  className="flex justify-center flex-col font-bold py-2 px-3 text-black text-base rounded ">
              Linkedin
            </Link>
              <Button className={"bg-gray-200 text-black font-semibold p-5"} variant="outline">Baixar Curriculo</Button>
          </div>
        </div>
      )}
    </div>
  );
}
