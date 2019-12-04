import React, { Component } from "react";
import Pagelinks from "../PageLinks/pagelinks";
import Slideshow from "../Slideshow/Slideshow";
import Home from "../Home/home";
import Team from "../Team/team";
import Find from "../Find/find";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="maincontainer">
        <div className="centercontainer">
          <Pagelinks />
          <Slideshow />
          <Home />
          <Team />
          <Find />

          <div className="footer">
            <hr style={{ borderColor: "#292929" }} />
            <p>
              This site is still in devlopment, please be aware not all features
              may work as expected. Thanks for visiting! Website designed and
              created by James Berryman.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
