import React, { useState, useLayoutEffect, useEffect } from "react";
import "../styles/aboutme.scss";
import * as ScrollMagic from "scrollmagic";
import useWindowDimensions from "../hooks/useWindowDimensions";
const AboutMe: React.FC = () => {
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

    new ScrollMagic.Scene({
      triggerElement: ".education1",
      triggerHook: "onCenter",
    })
      .setClassToggle(".education1", "education1-show")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".education1",
      triggerHook: "onCenter",
    })
      .setClassToggle(".education1-text", "education1-text-show")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".education1",
      triggerHook: "onCenter",
    })
      .setClassToggle(".education2", "education2-show")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".education1",
      triggerHook: "onCenter",
    })
      .setClassToggle(".education2-text", "education2-text-show")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".set-trigger",
      triggerHook: "onCenter",
      offset: 200,
    })
      .setClassToggle(".ready", "ready-out")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".set-trigger",
      triggerHook: "onCenter",
      offset: 200,
    })
      .setClassToggle(".go", "go-visible")
      .addTo(controller);
  }, []);
  return (
    <div className="content-body">
      <div className="say-hello flex-center text-2xl md:text-5xl">
        <div
          className="background"
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        />
        <div className="say-hello-text flex flex-col items-center">
          <img
            className="w-48 md:w-60 mb-10"
            src="https://cucans.in.th/wp-content/themes/cera/assets/images/avatars/user-avatar.png"
            style={{ borderRadius: "50%" }}
          />
          Hi my name is
          <br /> Kasemtan Tevasirichokchai (Float)
        </div>
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
      <div className="set-trigger flex justify-center m-10 text-2xl">
        My Education
      </div>

      <div className="hidden sm:flex justify-center m-10 text-2xl">
        <div className="ready mt-10">Ready set......</div>
        <div className="go mt-10 absolute">Go!</div>
      </div>
      <div className="line-wrapper text-left sm:h-screen flex flex-col items-center text-xl">
        <div id="line" className="line hidden sm:block" />
        <div className="sm:h-1/4" />
        <div className="relative">
          <div
            id="education"
            className="education1 hidden sm:block absolute top-7 h-2 bg-current rounded-2xl"
          ></div>
        </div>
        <div className="sm:ml-96 education1-text">
          Graduated at <p>Sarasas Witaed Suksa School</p>
          <p>2014-2019</p>
        </div>
        <div className="sm:h-1/4" />
        <div className="relative">
          <div
            id="education"
            className="education2 hidden sm:block absolute right-px top-20 h-2 bg-current rounded-2xl"
          ></div>
        </div>
        <div className="sm:mr-80 my-10 education2-text">
          Currently studying at <p>KMUTT College</p>
          <p>2020-Present</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
