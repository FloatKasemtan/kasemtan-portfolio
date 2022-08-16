import { Repository } from "../../types/repository";

const colorList = [
  "eae4e9",
  "fff1e6",
  "fde2e4",
  "fad2e1",
  "e2ece9",
  "bee1e6",
  "f0efeb",
  "dfe7fd",
  "cddafd",
];

function randomColor() {
  return colorList[Math.floor(Math.random() * colorList.length)];
}

function generate() {
  var deg = Math.floor(Math.random() * 360);

  var gradient =
    "linear-gradient(" +
    deg +
    "deg, " +
    "#" +
    randomColor() +
    ", " +
    "#" +
    randomColor() +
    ")";

  return gradient;
}

export const ProjectCards = (projectsData: Repository[]) => {
  return (
    <div
      className="break-inside-avoid-column"
      style={{
        columnCount: "3",
        rowGap: "1rem",
        padding: "2rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {projectsData.map((project, i) => (
        <a
          href={project.html_url}
          target="_blank"
          key={project.id}
          style={{
            animationDelay: `${0.05 * i}s`,
            breakInside: "avoid",
            background: generate(),
          }}
          className="project grid-item flex flex-col justify-between"
        >
          <div className="text-2xl bg-sky-500/[.06]">{project.name}</div>
          <div className="text-base bg-sky-500/[.06]">
            {project.description}
          </div>
          <div className="self-end text-xs bg-sky-500/[.06]">
            {project.language}
          </div>
        </a>
      ))}
    </div>
  );
};
