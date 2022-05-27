import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

const Actions: React.FC = () => {
  const navigate = useNavigate();

  const projectHandler = () => {
    navigate("/projects");
  };
  const contactHandler = () => {
    navigate("/contacts");
  };

  return (
    <div className="nav-action-wrapper">
      <div onClick={projectHandler}>Projects</div>
      <div onClick={contactHandler}>Contacts</div>
    </div>
  );
};

export default Actions;
