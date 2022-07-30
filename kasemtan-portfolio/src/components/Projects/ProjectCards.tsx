import { Repository } from "../../types/repository";

export const ProjectCards = (projectsData: Repository[]) => {
  return (
    <div className="grid gap-4 my-5 sm:grid-cols-2 md:grid-cols-3">
      {projectsData.map((project) => (
        <div className="grid-item project">{project.name}</div>
      ))}
    </div>
  );
};
