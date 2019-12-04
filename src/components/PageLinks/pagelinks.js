import React from "react";

class Pagelinks extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <a href="##">
            <img src={require("../images/logo.png")} alt="logo" />
          </a>
        </div>
        <div className="pageLinks">
          <a href="##" style={{ padding: "30px" }}>
            <img
              className="dragonball"
              alt=""
              src={require("../images/dragonball.png")}
            />
            Home
          </a>
          <a href="##" style={{ padding: "30px" }}>
            <img
              className="dragonball"
              alt=""
              src={require("../images/dragonball.png")}
            />
            Team
          </a>
          <a href="##" style={{ padding: "30px" }}>
            <img
              className="dragonball"
              alt=""
              src={require("../images/dragonball.png")}
            />
            Find Us
          </a>
        </div>
      </div>
    );
  }
}

export default Pagelinks;
