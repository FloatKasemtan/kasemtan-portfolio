import { Repository } from "../../types/repository";

export const ProjectCards = (projectsData: Repository[]) => {
  console.log(projectsData[0]);

  return (
    <div
      style={{
        padding: "2rem",
        columnWidth: "320px",
        maxWidth: "1100px",
        margin: "0 auto",
        columnFill: "unset",
      }}
    >
      {projectsData.map((project, i) => (
        <div
          key={project.id}
          style={{ animationDelay: `${0.05 * i}s` }}
          className="project grid-item flex flex-col justify-between"
        >
          <div className="text-2xl">{project.name}</div>
          <div className="text-base ">{project.description}</div>
          <div className="self-end text-xs">{project.language}</div>
        </div>
      ))}
    </div>
  );
};
