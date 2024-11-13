"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const dadosProjetos = [
  {
    id: 1,
    titulo: "Verbalize 💬",
    descricao: "Este projeto trata-se de um site para intercambio linguístico, onde você pode encontrar pessoas que falam a língua que você deseja aprender e que desejam aprender a língua que você fala. O site foi desenvolvido com Next.js e PostgresSQL",
    imagem: "/projects/Verbalize.png",
    tag: ["Todos", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    titulo: "MileStone Motors 🚗",
    descricao: "Este projeto é uma página web simples e elegante para exibir carros disponíveis para venda, construída utilizando React com Vite como empacotador (bundler). A interface do usuário é aprimorada com Tailwind CSS, proporcionando um design limpo e responsivo",
    imagem: "/projects/CarSale.png",
    tag: ["Todos", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    titulo: "Aplicativo de Clima 🌧️",
    descricao: "o projeto tem como intuito mantê-lo informado sobre as condições meteorológicas atuais e futuras, onde quer que você esteja. Com uma interface elegante e intuitiva, este aplicativo desenvolvido em Flutter oferece acesso rápido e fácil a dados precisos de clima, alimentados pela robusta API da OpenWeather",
    imagem: "/projects/weather_app.png",
    tag: ["Todos", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    titulo: "Pokemon Terminal 🏃‍♂️",
    descricao: "Este projeto é uma implementação do clássico jogo Pokémon para ser jogado no terminal do Windows. O jogo é escrito em TypeScript e oferece uma experiência de jogo de console simples e divertida para os fãs de Pokémon.",
    imagem: "/projects/pokemon.png",
    tag: ["Todos", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  }
];

const SecaoProjetos = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (novaTag: React.SetStateAction<string>) => {
    setTag(novaTag);
  };

  const projetosFiltrados = dadosProjetos.filter((projeto) =>
    projeto.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="m-10 lg:m-16" id="projetos">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Meus Projetos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          nome="Todos"
          selecionado={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          nome="Web"
          selecionado={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          nome="Mobile"
          selecionado={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {projetosFiltrados.map((projeto, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={projeto.id}
              data={{
                titulo: projeto.titulo,
                descricao: projeto.descricao,
                imgUrl: projeto.imagem,
              }}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default SecaoProjetos;
