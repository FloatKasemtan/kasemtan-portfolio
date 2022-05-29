import React from "react";
import { useNavigate } from "react-router-dom";

const Actions: React.FC = () => {
  const navigate = useNavigate();
  console.log(window.location.pathname);

  const projectHandler = () => {
    !window.location.pathname.includes("projects") && navigate("/projects");
  };
  const contactHandler = () => {
    !window.location.pathname.includes("contacts") && navigate("/contacts");
  };

  return (
    <div className="nav-action-wrapper">
      <div
        onClick={projectHandler}
        className={
          window.location.pathname.includes("projects")
            ? "current-path item-margin"
            : "item-margin"
        }
      >
        Projects
        <div
          className={
            window.location.pathname.includes("projects") ? "line-visible" : ""
          }
        />
      </div>
      <div
        onClick={contactHandler}
        className={
          window.location.pathname.includes("contacts")
            ? "current-path item-margin"
            : "item-margin"
        }
      >
        Contacts
        <div
          className={
            window.location.pathname.includes("contacts") ? "line-visible" : ""
          }
        />
      </div>
    </div>
  );
};

export default Actions;
