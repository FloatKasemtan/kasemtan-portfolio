import { useMemo } from "react";
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
  const deg = Math.floor(Math.random() * 360);

  const gradient =
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

const Card: React.FC<{ project: Repository }> = ({ project }) => {
  const color = useMemo(() => generate(), []);
  return (
    <a
      href={project.html_url}
      target="_blank"
      key={project.id}
      style={{
        breakInside: "avoid",
        background: color,
      }}
      className="flex flex-col justify-between project grid-item"
    >
      <div className="text-2xl ">{project.name}</div>
      <div className="p-2 text-base">{project.description}</div>
      {project.language && (
        <div className="self-end px-3 py-1 text-xs bg-white rounded-md">
          {project.language}
        </div>
      )}
    </a>
  );
};

export default Card;
