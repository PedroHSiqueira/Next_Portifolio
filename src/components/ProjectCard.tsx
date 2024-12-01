import React from "react";

interface ProjectCardProps {
  imgUrl: string;
  titulo: string;
  descricao: string;
  gitUrl: string;
  previewUrl: string;
}
const ProjectCard = ({ data }: { data: ProjectCardProps }) => {
  const { imgUrl, titulo, descricao, gitUrl, previewUrl } = data;
  return (
    <div>
      <div className="relative rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <img src={imgUrl} alt={titulo} className="rounded-t-xl" />
        <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4  lg:min-h-[272px]">
          <h5 className="text-xl font-semibold mb-2">{titulo}</h5>
          <p className="text-[#ADB7BE] mb-5 lg:min-h-[144px]">{descricao}</p>
          <div className="flex items-center justify-around">
            <a href={gitUrl} target="_blank" className="py-2 px-3 rounded-xl border-[1.5px] border-[#008080] hover:bg-[#008080] hover:text-white">
              Github
            </a>
            <a href={previewUrl} target="_blank" className="py-2 px-3 rounded-xl border-[1.5px] border-[#008080] hover:bg-[#008080] hover:text-white">
              Deploy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
