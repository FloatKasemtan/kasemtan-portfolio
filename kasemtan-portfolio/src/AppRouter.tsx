import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <AboutMe />
            </MainLayout>
          }
        />
        <Route path="projects" element={<Projects />}>
          {/* <Route path="*" element={<Projects />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
