import React, { useLayoutEffect } from "react";
import "../styles/aboutme.scss";
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import useWindowDimensions from "../hooks/useWindowDimensions";
const AboutMe: React.FC = () => {
  ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
  const { height } = useWindowDimensions();

  useLayoutEffect(() => {
    const controller = new ScrollMagic.Controller();
    var tween = TweenMax.to("#line", 2, {
      height: "100vh",
    });

    new ScrollMagic.Scene({
      duration: height,
      triggerElement: ".line-wrapper",
      triggerHook: "onCenter",
    })
      .setTween(tween)
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".image-wrapper",
      offset: 200,
    })
      .setClassToggle(".profile", "slide-in")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".introduction",
      offset: 300,
    })
      .setClassToggle(".focus-word", "word-visible")
      .addTo(controller);
  }, []);
  return (
    <div className="content-body">
      <div className="say-hello flex-center font-header">
        Hi my name is
        <br id="trigger" /> Kasemtan Tevasirichokchai (Float)
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

      <div className="line-wrapper flex-jus-center">
        <div id="line" className="line"></div>
      </div>
    </div>
  );
};

export default AboutMe;
