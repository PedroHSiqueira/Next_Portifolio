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
      <div className="relative shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-3xl">
        <img src={imgUrl} alt={titulo} className="rounded-t-xl" />
        <div className="mt-3 bg-[#181818] text-white py-6 px-4 rounded-b-xl lg:min-h-[272px]">
          <h5 className="mb-2 text-xl font-semibold">{titulo}</h5>
          <p className="mb-5 text-[#ADB7BE] lg:min-h-[144px]">{descricao}</p>
          <div className="flex justify-around items-center">
            <a
              href={gitUrl}
              target="_blank"
              className="py-2 px-3 border-[1.5px] border-[#7f5af0] rounded-xl hover:bg-[#7f5af0] hover:text-white"
            >
              Github
            </a>
            <a
              href={previewUrl}
              target="_blank"
              className="py-2 px-3 border-[1.5px] border-[#7f5af0] rounded-xl hover:bg-[#7f5af0] hover:text-white"
            >
              Deploy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
