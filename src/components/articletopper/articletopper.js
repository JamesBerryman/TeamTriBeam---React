import React from "react";
import "./articletopper.css";

class Articletopper extends React.Component {
  render() {
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
            href={this.props.twitter || "https://twitter.com/TeamTriBeam"}
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
            href={
              this.props.facebook ||
              "https://www.facebook.com/groups/wightDBSCG/"
            }
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
            href={
              this.props.youtube ||
              "https://www.youtube.com/channel/UCyntw1IKw5A3omZqd-CkHXw"
            }
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
