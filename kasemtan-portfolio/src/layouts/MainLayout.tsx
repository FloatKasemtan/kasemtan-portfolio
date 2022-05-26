import React from "react";
import Navbar from "../components/Navbar";

const MainLayout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
