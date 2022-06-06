import React, { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import "../styles/navbar.scss";
import Actions from "./Navbar/Actions";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [colorChange, setColorchange] = useState(false);
  const { height } = useWindowDimensions();

  const [navbarToggle, setNavbarToggle] = useState(false);
  const navigate = useNavigate();

  const changeNavbarColor = () => {
    if (window.scrollY >= height) {
      console.log("change");

      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  const homeHandler = () => {
    !window.location.pathname.endsWith("/") && navigate("/");
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);

    return () => window.removeEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <div
      className={
        colorChange || navbarToggle
          ? "nav-body bg-white"
          : "nav-body bg-transparent"
      }
    >
      <div className="logo" onClick={homeHandler}>
        Floaty KT{" "}
        <div
          className={
            window.location.pathname.endsWith("/") ? "line-visible" : ""
          }
        />
      </div>
      <Actions navbarToggle={navbarToggle} setNavbarToggle={setNavbarToggle} />
    </div>
  );
};

export default Navbar;
