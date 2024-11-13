import React from "react";

interface ProjectTagProps {
  nome: string;
  onClick: (nome: string) => void;
  selecionado: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ nome, onClick, selecionado }) => {
  const estilosBotao = selecionado ? "text-white border-primary-500" : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button className={`${estilosBotao} rounded-full border-2 text-lg cursor-pointer px-3 py-1 md:px-5 md:py-2 `} onClick={() => onClick(nome)}>
      {nome}
    </button>
  );
};

export default ProjectTag;
