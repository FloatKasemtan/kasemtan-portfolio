import React from "react";
import "../styles/projects.scss";

const Projects: React.FC = () => {
  const projects = [];
  return (
    <div className="min-h-screen">
      <div className="flex-center font-header topic">My Projects & Hobbies</div>
      <div className="grid gap-4 my-5 sm:grid-cols-2 md:grid-cols-3">
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      </div>
    </div>
  );
};

export default Projects;
