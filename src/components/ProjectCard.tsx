import React from "react";

interface ProjectCardProps {
  imgUrl: string;
  titulo: string;
  descricao: string;
}
const ProjectCard = ({ data }: { data: ProjectCardProps }) => {
  const { imgUrl, titulo, descricao } = data;
  return (
    <div>
      <div className="relative">
        <img src={imgUrl} alt={titulo} className="rounded-t-xl" />
        <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4  lg:min-h-[230px]">
          <h5 className="text-xl font-semibold mb-2">{titulo}</h5>
          <p className="text-[#ADB7BE]">{descricao}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
