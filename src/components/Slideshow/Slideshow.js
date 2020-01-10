import React from "react";
import "./Slideshow.css";
import { Fade } from "react-slideshow-image";

const fadeImages = [
  "/images/AODdende.png",
  "/images/Yamcha.png",
  "/images/ShenronRamp.png"
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img alt="" src={fadeImages[0]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img alt="" src={fadeImages[1]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img alt="" src={fadeImages[2]} />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Slideshow;
