import React from "react";
import "../styles/aboutme.scss";
import ScrollMagic from "scrollmagic";

const AboutMe: React.FC = () => {
  const controller = new ScrollMagic.Controller();
  const scence = new ScrollMagic.Scene({
    triggerElement: ".image-wrapper",
  })
    .setClassToggle(".profile", "slide-in")
    .addTo(controller);
  return (
    <div className="content-body">
      <div className="say-hello font-header">
        Hi my name is
        <br /> Kasemtan Tevasirichokchai (Float)
      </div>
      <div className="image-wrapper">
        <div className="introduction font-header">And... This is me</div>
        <img
          className="profile"
          width="50%"
          height="100%"
          src="src/assets/profile.jpg"
          alt=""
        />
      </div>
      About Me'
      <div style={{ height: "100vh" }}></div>
    </div>
  );
};

export default AboutMe;
