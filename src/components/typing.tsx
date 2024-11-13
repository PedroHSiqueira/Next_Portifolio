import { TypeAnimation } from "react-type-animation";
import { useLottie } from "lottie-react";
import { motion } from "framer-motion";
import AnimationData from "../assets/animation/phoneAnimation.json";

export function Typing() {
  const opcoes = {
    animationData: AnimationData,
    loop: true,
  };

  const { View } = useLottie(opcoes);
  return (
    <section className="mt-10 lg:py-16 lg:px-10">
      <div className="flex flex-col justify-around md:flex-row">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-2xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Olá, eu sou</span>
            <br></br>
            <TypeAnimation sequence={["Pedro Siqueira", 1000, "Desenvolvedor Web", 1000, "Desenvolvedor Mobile", 1000]} wrapper="span" speed={50} repeat={Infinity} />
          </h1>
          <p className="text-[#ADB7BE] text-xs sm:text-lg mb-6 lg:text-xl">Desenvolvedor Full Stack e Designer de Interface do Brasil. Eu transformo ideias em produtos digitais.</p>
        </div>
        <div className=" flex items-center justify-center col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="w-4/6">{View}</div>
        </div>
      </div>
    </section>
  );
}
