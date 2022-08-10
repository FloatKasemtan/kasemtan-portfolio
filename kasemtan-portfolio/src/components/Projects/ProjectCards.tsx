import { Repository } from "../../types/repository";

export const ProjectCards = (projectsData: Repository[]) => {
  return (
    <div className="grid gap-4 my-5 sm:grid-cols-2 md:grid-cols-3">
      {projectsData.map((project, i) => (
        <div
          key={project.id}
          style={{ animationDelay: `${0.05 * i}s` }}
          className="project grid-item"
        >
          <div className="text-2xl">{project.name}</div>
          <div className="text-base">{project.description}</div>
        </div>
      ))}
    </div>
  );
};
