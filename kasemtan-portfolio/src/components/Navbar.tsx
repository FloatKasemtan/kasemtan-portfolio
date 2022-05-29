import React, { useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import "../styles/navbar.scss";
import Actions from "./Navbar/Actions";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [colorChange, setColorchange] = useState(false);
  const { height } = useWindowDimensions();
  const navigate = useNavigate();

  const changeNavbarColor = () => {
    if (window.scrollY >= height) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  const homeHandler = () => {
    !window.location.pathname.endsWith("/") && navigate("/");
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div className={colorChange ? "nav-body visible" : "nav-body"}>
      <div className="logo" onClick={homeHandler}>
        Floaty KT{" "}
        <div
          className={
            window.location.pathname.endsWith("/") ? "line-visible" : ""
          }
        />
      </div>
      <Actions />
    </div>
  );
};

export default Navbar;
