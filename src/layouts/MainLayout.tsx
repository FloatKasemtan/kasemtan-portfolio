import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout: React.FC<any> = ({ children }) => {
  const [childrenMinHight, setchildrenMinHight] = useState(0);

  const triggerResize = React.useCallback(() => {
    let totalMenu = 0;
    if (document.getElementById("menu")) {
      totalMenu = document.getElementById("menu")?.clientHeight! ?? 0;
    }
    let totalFooter = 0;
    if (document.getElementById("footer")) {
      totalFooter = document.getElementById("footer")?.clientHeight! ?? 0;
    }
    setchildrenMinHight(window.innerHeight - totalMenu - totalFooter);
  }, []);

  useEffect(() => {
    // Run on first render
    triggerResize();
    // Run when window resize
    window.addEventListener("resize", triggerResize);
  });

  return (
    <>
      <Navbar />
      <div
        id="children"
        style={{ minHeight: childrenMinHight }}
        className="flex items-center justify-center"
      >
        {children}
      </div>
      <Footer id="footer" />
    </>
  );
};

export default MainLayout;
