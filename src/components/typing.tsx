import { TypeAnimation } from "react-type-animation";
import { useLottie } from "lottie-react";
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
import AnimationData from "../assets/animation/phoneAnimation.json";

export function Typing() {
  const opcoes = {
    animationData: AnimationData,
    loop: true,
  };

  const cardVariants = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const { View } = useLottie(opcoes);
  return (
      <motion.section
          variants={cardVariants}
          initial="initial"
          animate={"animate"}
          transition={{ duration: 0.3, delay:  0.25 }}
          viewport={{
            margin: "-200px",
            once: false,
          }}
        className="relative py-16 h-full w-full  lg:px-10">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_0.5px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_0.5px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="flex flex-col justify-around md:flex-row">
          <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
            <h3 className={"font-bold text-2xl"}>
              Olá 👋!
            </h3>
            <h1 className="text-white mb-4 text2xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
              <span className="text-black">Sou </span>
              <TypeAnimation className={"text-[#008080]"} sequence={["Pedro Siqueira", 1000, "Dev Backend", 1000]}
                             wrapper="span" speed={50} repeat={Infinity}/>
            </h1>
            <p className="text-black text-xs sm:text-lg mb-6">Mas possuo experiência com desenvolvimento Fullstack e
              Mobile</p>
            <div className={"flex justify-center gap-5 md:justify-normal"}>
              <Button className={"cursor-pointer bg-[#5D3FD3] text-white font-semibold p-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-40"} variant="outline">Contato</Button>
              <Button className={"cursor-pointer bg-gray-200 text-black font-semibold p-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-40"} variant="outline">Baixar Curriculo</Button>
            </div>
          </div>
          <div className=" flex items-center justify-center col-span-4 place-self-center mt-4 lg:mt-0">
            <div className="w-4/6">{View}</div>
          </div>
        </div>
      </motion.section>
  );
}
