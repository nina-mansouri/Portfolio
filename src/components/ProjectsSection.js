import projectsData from "@/constants/ProjectsData";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-24 mb-8 md:mb-12">
        My Projects
      </h2>

      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <li key={project.id}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              techs={project.techs}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectsSection;
