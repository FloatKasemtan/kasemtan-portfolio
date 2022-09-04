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

const Card: React.FC<{ project: Repository }> = ({ project }) => {
  var color = useMemo(() => generate(), []);
  return (
    <a
      href={project.html_url}
      target="_blank"
      key={project.id}
      style={{
        breakInside: "avoid",
        background: color,
      }}
      className="project grid-item flex flex-col justify-between"
    >
      <div className="text-2xl ">{project.name}</div>
      <div className="text-base p-2">{project.description}</div>
      {project.language && (
        <div className="self-end text-xs rounded-md py-1 px-3 bg-white">
          {project.language}
        </div>
      )}
    </a>
  );
};

export default Card;