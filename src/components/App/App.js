import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Team from "../Team/team";
import Find from "../Find/find";
import Slideshow from "../Slideshow/Slideshow";
import Home from "../Home/home";
import styled from "styled-components";
import "./App.css";

class App extends Component {
  render() {
    const HoverLink = ({ className, children }) => (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a className={className}>{children}</a>
    );
    const HoverText = styled(HoverLink)`
      color: white;
      :hover {
        color: black;
        cursor: pointer;
      }
    `;
    return (
      <div className="maincontainer">
        <div className="centercontainer">
          <div className="header">
            <a href="/">
              <img src={require("../images/logo.png")} alt="logo" />
            </a>
          </div>
          <div>
            <div className="first">{this.props.first}</div>
            <div className="second">{this.props.second}</div>
            <div className="third">{this.props.third}</div>
          </div>
          <Router>
            <div className="centercontainer">
              <nav>
                <ul className="pagelinks">
                  <li>
                    <img
                      className="dragonball"
                      alt=""
                      src={require("../images/dragonball.png")}
                    />
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/"
                      exact="true"
                    >
                      <HoverText>Home</HoverText>
                    </Link>
                  </li>
                  <li>
                    <img
                      className="dragonball"
                      alt=""
                      src={require("../images/dragonball.png")}
                    />
                    <Link style={{ textDecoration: "none" }} to="/team">
                      <HoverText>Team</HoverText>
                    </Link>
                  </li>
                  <li>
                    <img
                      className="dragonball"
                      alt=""
                      src={require("../images/dragonball.png")}
                    />
                    <Link style={{ textDecoration: "none" }} to="/find">
                      <HoverText>Find Us</HoverText>
                    </Link>
                  </li>
                </ul>
              </nav>

              <Switch>
                <Route path="/find" component={Find}>
                  <Find />
                </Route>
                <Route path="/team" component={Team}>
                  <Team />
                </Route>
                <Route path="/" components={{ first: Slideshow, second: Home }}>
                  <Slideshow />
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>

          <div className="footer">
            <hr style={{ borderColor: "#292929" }} />
            <p>
              This site is still in devlopment, please be aware not all features
              may work as expected. Thanks for visiting! Website designed and
              created by James Berryman. See the{" "}
              <a href="https://github.com/JamesBerryman/teamtribeamreact/blob/master/Changelog.txt">
                Changelog
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
