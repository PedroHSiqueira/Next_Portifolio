"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const dadosProjetos = [
  {
    id: 1,
    titulo: "Chatbot Ollama 🤖",
    descricao:
      "Este projeto é um chatbot de IA que pode responder a perguntas simples, foi construido com Python e a LLM (Large Language Model) Llama3, que é uma versão mais leve e eficiente do GPT-3, onde você pode conversar com o chatbot e obter respostas para suas perguntas.",
    imagem: "/projects/chatbot.png",
    tag: ["Todos", "Backend"],
    gitUrl: "https://github.com/PedroHSiqueira/Ollama_Chatbot",
    previewUrl: "https://github.com/PedroHSiqueira/Ollama_Chatbot",
  },
  {
    id: 2,
    titulo: "Finance Dashboard 💰",
    descricao:
      "Este projeto é um painel financeiro que exibe a cotação do real (BRL) em relação a diversas moedas estrangeiras. O painel é construído com Next.js e consome a API de câmbio da awesome-API para fornecer dados de câmbio em tempo real.",
    imagem: "/projects/finance.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/PedroHSiqueira/Dashboard_Cambio_monetario",
    previewUrl: "https://dashboard-finance-one.vercel.app/",
  },
  {
    id: 3,
    titulo: "Verbalize 💬",
    descricao:
      "Este projeto trata-se de um site para intercambio linguístico, onde você pode encontrar pessoas que falam a língua que você deseja aprender e que desejam aprender a língua que você fala. O site foi desenvolvido com Next.js e PostgresSQL",
    imagem: "/projects/Verbalize.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/PedroHSiqueira/Next_Verbalise_Frontend",
    previewUrl: "https://verbalize-senac.vercel.app/",
  },
  {
    id: 4,
    titulo: "Aplicativo de Clima 🌧️",
    descricao:
      "o projeto tem como intuito mantê-lo informado sobre as condições meteorológicas atuais e futuras, onde quer que você esteja. Com uma interface elegante e intuitiva, este aplicativo desenvolvido em Flutter oferece acesso rápido e fácil a dados precisos de clima, alimentados pela robusta API da OpenWeather",
    imagem: "/projects/weather_app.png",
    tag: ["Todos", "Mobile"],
    gitUrl: "https://github.com/PedroHSiqueira/Flutter_Weather_App",
    previewUrl: "https://github.com/PedroHSiqueira/Flutter_Weather_App",
  },
  {
    id: 5,
    titulo: "Pokemon Terminal 🏃‍♂️",
    descricao:
      "Este projeto é uma implementação do clássico jogo Pokémon para ser jogado no terminal do Windows. O jogo é escrito em TypeScript e oferece uma experiência de jogo de console simples e divertida para os fãs de Pokémon.",
    imagem: "/projects/pokemon.png",
    tag: ["Todos", "Backend"],
    gitUrl: "https://github.com/PedroHSiqueira/Pokemon-Terminal",
    previewUrl: "https://github.com/PedroHSiqueira/Pokemon-Terminal",
  },
  {
    id: 6,
    titulo: "MileStone Motors 🚗",
    descricao:
      "Este projeto é uma página web simples e elegante para exibir carros disponíveis para venda, construída utilizando React com Vite como empacotador (bundler). A interface do usuário é aprimorada com Tailwind CSS, proporcionando um design limpo e responsivo",
    imagem: "/projects/CarSale.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/PedroHSiqueira/Car-Sale-React.js",
    previewUrl: "https://car-sale-react-js.vercel.app/",
  },
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
    <section
      id="projetos"
      className="p-10 pt-3 bg-[#242629] lg:pb-16 lg:px-16"
    >
      <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-[#fffffe] md:mb-12">
        Meus Projetos
      </h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
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
          nome="Backend"
          selecionado={tag === "Backend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          nome="Mobile"
          selecionado={tag === "Mobile"}
        />
      </div>
      <ul
        ref={ref}
        className="grid gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
      >
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
                gitUrl: projeto.gitUrl,
                previewUrl: projeto.previewUrl,
              }}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default SecaoProjetos;
