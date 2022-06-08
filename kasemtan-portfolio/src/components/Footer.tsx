import React from "react";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const date = new Date();
  const navigate = useNavigate();
  const homeHandler = () => {
    if (!window.location.pathname.endsWith("/")) {
      navigate("/");
      window.scrollTo(0, 0);
    }
  };
  const projectHandler = () => {
    if (!window.location.pathname.includes("projects")) {
      navigate("/projects");
      window.scrollTo(0, 0);
    }
  };
  const contractHandler = () => {
    if (!window.location.pathname.includes("contacts")) {
      navigate("/contacts");
      window.scrollTo(0, 0);
    }
  };
  return (
    <footer className="bg-slate p-10">
      <div className=" flex flex-col md:flex-row justify-between md:items-start items-center">
        <div className="text-white m-10 px-10 min-w-sm leading-7">
          <b>About</b>
          <div>
            This site created for the purpose to express my hobby, like, and
            experience. My journey in this career path have start since 2020,
            since then I just an ordinary student who don’t know what to do in
            the future. But things started to change since I enter computer
            science banchelor, it is like miracle that I met my friends who
            share same interest. Everythings I have met have driven me to
            challenge myself to conquer new things. Finally, I notice how much I
            obsessed with programming.
          </div>
        </div>
        <div className="text-white m-10 px-10 min-w-sm leading-7">
          <b>Navigation</b>
          <div className="flex flex-col">
            <a onClick={homeHandler}>Home</a>
            <a onClick={projectHandler}>Projects</a>
            <a onClick={contractHandler}>Contracts</a>
          </div>
        </div>
      </div>
      <div className="m-10 px-10 text-gray-400 mt-10 md:mt-0">
        <div className="mb-5">
          Copyright © {date.getFullYear()} by FloatyKT, all rights reserved.
        </div>
        <div>
          <a
            href="https://www.freepik.com/free-photo/green-leaves-white-background_4100627.htm#query=leave&position=22&from_view=search"
            style={{ pointerEvents: "visible" }}
          >
            Background Designed by @rawpixel.com / Freepik
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
