import React from "react";
import Articletopper from "../articletopper/articletopper";
import "../Home/home.css";

class Events extends React.Component {
  render() {
    return (
      <div className="events">
        <Articletopper title="Events" />
        <div className="introduction">
          <p>
            Welcome to the Events page! Here I will be posting about Events that
            Team Tri Beam have attended, this will mainly include Locals, but we
            also take part in Championships, special charity events such as
            Gaming Vs Cancer, and more.
          </p>
        </div>
        <div className="toparticle">
          <h1>COMING SOON!</h1>
        </div>
      </div>
    );
  }
}

export default Events;
