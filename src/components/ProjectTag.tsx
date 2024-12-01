import React from "react";

interface ProjectTagProps {
  nome: string;
  onClick: (nome: string) => void;
  selecionado: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ nome, onClick, selecionado }) => {
  const estilosBotao = selecionado ? "text-[#1b1e23] border-[#008080]" : "text-[#1b1e23] border-slate-600 hover:border-blue-500";
  return (
    <button className={`${estilosBotao} rounded-full border-[3px] text-lg cursor-pointer px-3 py-1 md:px-5 md:py-2 `} onClick={() => onClick(nome)}>
      {nome}
    </button>
  );
};

export default ProjectTag;
