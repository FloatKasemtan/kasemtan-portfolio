import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
