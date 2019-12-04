import React from "react";

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
            href="https://twitter.com/TeamTriBeam"
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
            href="https://www.facebook.com/groups/wightDBSCG/"
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
            href="https://www.youtube.com/channel/UCyntw1IKw5A3omZqd-CkHXw"
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
