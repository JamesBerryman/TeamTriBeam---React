import React, { Component } from "react";
import "../Home/home.css";
import Articletopper from "../articletopper/articletopper";
import "./decklists.css";


class Decklists extends Component {
  render() {
    return (
      <div className="decklists">
        <Articletopper title="Decklists" />
        <div className="introduction">
          <p>
            Welcome to our Decklist page! Unfortunately due to updates on the decklist sites our links stopped working as all the decklists got wiped. As soon as we start working on decklists again for events, they will be posted here. 
          </p>
        </div>

      <div className="toparticle">
      <table className="table">
        <tr>
    <th>Deckname</th>
    <th>Created by:</th>
    <th>Date:</th>
    <th>Link:</th>
         </tr>
      <tr>
    <td>Bulma Blocker</td>
    <td>James</td>
    <td>08/11/2019</td>
    <td>UNAVAILABLE</td>
      </tr>

        <tr>
    <td>AOD Dende</td>
    <td>Jack</td>
    <td>26/08/2019</td>
    <td>UNAVAILABLE</td>
  </tr>
  <tr>
    <td>Shenron Ramp</td>
    <td>James</td>
    <td>24/10/2019</td>
    <td>UNAVAILABLE</td>
  </tr>
  <tr>
    <td>Mono Red Burn</td>
    <td>Kai</td>
    <td>19/11/2019</td>
    <td>UNAVAILABLE</td>
  </tr>
  <tr>
    <td>R/B Cooler</td>
    <td>Neil</td>
    <td>20/02/2020</td>
    <td>UNAVAILABLE</td>
  </tr>
        </table>
      </div>
       
      </div>
    );
  }
}

export default Decklists;
