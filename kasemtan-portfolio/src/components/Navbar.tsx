import React, { useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import "../styles/navbar.scss";
import Actions from "./Navbar/Actions";

const Navbar: React.FC = () => {
  const [colorChange, setColorchange] = useState(false);
  const { height } = useWindowDimensions();

  const changeNavbarColor = () => {
    if (window.scrollY >= height) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div className={colorChange ? "nav-body visible" : "nav-body"}>
      <div className="logo">
        Floaty KT <div />
      </div>
      <Actions />
    </div>
  );
};

export default Navbar;
