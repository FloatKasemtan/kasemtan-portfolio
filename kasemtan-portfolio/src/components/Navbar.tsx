import React from "react";
import "../styles/navbar.scss";
import Actions from "./Navbar/Actions";

const Navbar: React.FC = () => {
  return (
    <div className="body">
      <div className="logo">
        Floaty KT <div />
      </div>
      <Actions />
    </div>
  );
};

export default Navbar;
