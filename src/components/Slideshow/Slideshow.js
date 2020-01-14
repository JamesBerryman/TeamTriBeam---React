import React from "react";
import "./Slideshow.css";
import { Fade } from "react-slideshow-image";
import { Link } from "react-router-dom";

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
            <Link to="/decklists">
              <img alt="" src={fadeImages[0]} />
            </Link>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <Link to="/decklists">
              <img alt="" src={fadeImages[1]} />
            </Link>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <Link to="/decklists">
              <img alt="" src={fadeImages[2]} />
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Slideshow;
