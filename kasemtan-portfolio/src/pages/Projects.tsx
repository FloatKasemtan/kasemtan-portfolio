import React from "react";
import "../styles/projects.scss";

const Projects: React.FC = () => {
  const projects = [];
  return (
    <>
      <div className="flex-center font-header topic">My Project</div>
      <div className="grid-container h-screen">
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      </div>
    </>
  );
};

export default Projects;
