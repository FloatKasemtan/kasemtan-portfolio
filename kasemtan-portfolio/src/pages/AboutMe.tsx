import React, { useLayoutEffect } from "react";
import "../styles/aboutme.scss";
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
const AboutMe: React.FC = () => {
  ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
  useLayoutEffect(() => {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({ triggerElement: "#trigger2", duration: 300 })
      // animate color and top border in relation to scroll position
      .setTween("#animate2", {
        borderTop: "30px solid white",
        backgroundColor: "blue",
        scale: 0.7,
      }) // the tween durtion can be omitted and defaults to 1
      .addIndicators({ name: "2 (duration: 300)" }) // add indicators (requires plugin)
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".image-wrapper",
    })
      .setClassToggle(".profile", "slide-in")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".introduction",
    })
      .setClassToggle(".focus-word", "word-visible")
      .addTo(controller);
  }, []);
  return (
    <div className="content-body">
      <div className="say-hello font-header">
        Hi my name is
        <br /> Kasemtan Tevasirichokchai (Float)
      </div>
      <div className="image-wrapper">
        <div className="introduction font-body">
          <p className="me">And... This is me</p>
          <p className="content1">
            A developer who passionate about
            <span className="focus-word"> web</span> and{" "}
            <span className="focus-word">mobile </span> application development
          </p>
        </div>
        <img
          className="profile"
          width="50%"
          height="100%"
          src="src/assets/profile.jpg"
          alt=""
        />
      </div>
      <div id="trigger2" className="spacer s1"></div>
      <div className="spacer s0"></div>
      <div id="animate2" className="box1 black">
        <p>Smurf me!</p>
        <a href="#" className="viewsource">
          view source
        </a>
      </div>
      <div style={{ height: "100vh" }}></div>
    </div>
  );
};

export default AboutMe;
