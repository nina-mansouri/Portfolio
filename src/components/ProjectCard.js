
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({
  title,
  description,
  imgUrl,
  gitUrl,
  previewUrl,
  techs,
  
}) {
  return (
    <>
    
      <div className="relative group h-52 md:h-72 rounded-xl overflow-hidden ">
      <div
        className="absolute rounded-md inset-0 bg-cover bg-center" 
        style={{backgroundImage: `url(${imgUrl})`, backgroundSize: "contain", backgroundRepeat: "no-repeat"}}
        ></div>
        
        <div className="absolute inset-0  flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-[#5a6a75] group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-[#5a6a75]" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-[#5a6a75] group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-[#5a6a75]" />
          </Link>
          </div>
        </div>
        
      
      
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
      <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
           {techs.map((tech) => {
            return (
              <li key={tech}>
                <div className="text-white m-1 rounded-lg text-sm bg-[#192742] py-1 px-2 hover:opacity-75">
                  {tech}
                </div>
              </li>
            );
          })}
        </ul>

    
    </>
  );
};

export default ProjectCard;
