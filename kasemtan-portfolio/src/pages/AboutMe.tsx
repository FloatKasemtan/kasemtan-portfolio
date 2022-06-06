import React, { useState, useLayoutEffect, useEffect } from "react";
import "../styles/aboutme.scss";
import * as ScrollMagic from "scrollmagic";
import useWindowDimensions from "../hooks/useWindowDimensions";
const AboutMe: React.FC = () => {
  const { height } = useWindowDimensions();
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useLayoutEffect(() => {
    const controller = new ScrollMagic.Controller();

    // Profile Image Slide in
    // new ScrollMagic.Scene({
    //   triggerElement: ".image-wrapper",
    //   offset: 200,
    // })
    //   .setClassToggle(".profile", "slide-in")
    //   .addTo(controller);

    // Word visible
    new ScrollMagic.Scene({
      triggerElement: ".introduction",
      offset: 150,
    })
      .setClassToggle(".focus-word", "word-visible")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".me",
      offset: 150,
    })
      .setClassToggle(".content1", "pop-in")
      .addTo(controller);

    // Draw line
    new ScrollMagic.Scene({
      triggerElement: ".line-wrapper",
      triggerHook: "onCenter",
    })
      .setClassToggle(".line", "full-grow")
      .addTo(controller);
  }, []);
  return (
    <div className="content-body">
      <div className="say-hello flex-center text-2xl md:text-5xl">
        <div
          className="background"
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        />
        Hi my name is
        <br /> Kasemtan Tevasirichokchai (Float)
      </div>
      <div className="image-wrapper flex-col-reverse md:flex-row text-2xl md:text-3xl">
        <div className="introduction  md:w-3/6">
          <p className="me">Who am I?</p>
          <p className="content1">
            A fullstack-developer who passionate about application development
          </p>
        </div>
        <img
          className="profile  md:w-3/6"
          height="100%"
          src="src/assets/profile.jpg"
          alt="profile"
        />
      </div>

      <div className="line-wrapper flex justify-center">
        <div id="line" className="line" />
      </div>
    </div>
  );
};

export default AboutMe;
