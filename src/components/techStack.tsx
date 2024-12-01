import { motion, useInView } from "framer-motion";

const cardVariants = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export function Tecnologies() {
  return (
    <motion.div
        variants={cardVariants}
        initial="initial"
        animate={"animate"}
        transition={{ duration: 0.3, delay:  0.4 }}
        viewport={{
          margin: "-200px",
          once: false,
        }}
        className="mb-20" id="tech">
      <h1 className="text-center text-2xl mb-10 text-[#1b1e23] font-bold">Tech Stack |</h1>
      <div className="grid bg-gray-600 mx-20 p-10 justify-around grid-cols-2 rounded-3xl gap-10 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] sm:grid-cols-3 md:grid-cols-8 lg:mx-0 lg:rounded-none" id="tecnologia">
        <div className="flex items-center justify-center">
          <img className="w-16" src={"./tecnologies/java.svg"} />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-16" src={"./tecnologies/next.svg"} />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-16" src={"./tecnologies/typescript.svg"} />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-16" src={"./tecnologies/javascript.svg"} />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-16" src={"./tecnologies/tailwind.svg"} />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-16" src={"./tecnologies/python.svg"} />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-16" src={"./tecnologies/kotlin.svg"} />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-16" src={"./tecnologies/mysql.svg"} />
        </div>
      </div>
    </motion.div>
  );
}
