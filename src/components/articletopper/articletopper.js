import React from "react";
import "./articletopper.css";

class Articletopper extends React.Component {
  render() {
    var ArticleTopper = [];
    ArticleTopper.defaultProps = {
      twitter: "https://twitter.com/TeamTriBeam",
      facebook: "https://www.facebook.com/groups/wightDBSCG/",
      youtube: "https://www.youtube.com/channel/UCyntw1IKw5A3omZqd-CkHXw"
    };

    return (
      <div className="articletopper">
        <div className="left-cell">
          <p>
            <img
              className="dragonball"
              alt=""
              src={require("../images/dragonball.png")}
            />
            {this.props.title}
          </p>
        </div>
        <div className="right-cell">
          <a
            href={ArticleTopper.defaultProps.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="buttons"
              alt=""
              src={require("../images/twitterimg.png")}
            />
          </a>
          <a
            href={ArticleTopper.defaultProps.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="buttons"
              alt=""
              src={require("../images/facebook.png")}
            />
          </a>
          <a
            href={ArticleTopper.defaultProps.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="buttons"
              alt=""
              src={require("../images/youtube.png")}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Articletopper;
