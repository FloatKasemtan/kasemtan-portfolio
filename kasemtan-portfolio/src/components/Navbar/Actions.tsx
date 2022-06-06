import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Actions: React.FC<any> = ({ navbarToggle, setNavbarToggle }) => {
  const navigate = useNavigate();
  console.log(window.location.pathname);

  const projectHandler = () => {
    !window.location.pathname.includes("projects") && navigate("/projects");
  };
  const contractHandler = () => {
    !window.location.pathname.includes("contacts") && navigate("/contacts");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setNavbarToggle(!navbarToggle);
        }}
        data-collapse-toggle="mobile-menu"
        aria-controls="mobile-menu"
        aria-expanded="false"
        style={
          navbarToggle
            ? { backgroundColor: "#657fde", color: "#fff" }
            : { backgroundColor: "#fff", color: "#657fde" }
        }
        className="md:hidden text-current border border-current hover:bg-current hover:text-white font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2  transition-all"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div
        className={
          navbarToggle
            ? "block w-full md:block md:w-auto"
            : "hidden md:block md:w-auto"
        }
        id="mobile-menu"
      >
        <div className="nav-action-wrapper flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <div
            onClick={projectHandler}
            className={
              window.location.pathname.includes("projects")
                ? "current-path action-item mb-4 md:mb-0"
                : "action-item mb-2 md:mb-0"
            }
          >
            Projects
            <div
              className={
                window.location.pathname.includes("projects")
                  ? "line-visible"
                  : ""
              }
            />
          </div>
          <div
            onClick={contractHandler}
            className={
              window.location.pathname.includes("contacts")
                ? "current-path action-item md:mx-auto"
                : "action-item"
            }
          >
            Contacts
            <div
              className={
                window.location.pathname.includes("contacts")
                  ? "line-visible"
                  : ""
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Actions;
