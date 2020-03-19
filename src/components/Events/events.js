import React from "react";
import Articletopper from "../articletopper/articletopper";
import "./events.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import data from "./data";

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
        <hr style={{ borderColor: "#292929" }} />
        <Articletopper title="2020 Events " anchorName="2020Events" />
        <div className="eventarticle">
          <h1>2020 Local Events!</h1>
          <p>
            Here we have our 2020 Events, along with each participant in our
            store, and the points they scored from each event.
          </p>
          <div className="points">
            <ol>
              <li>11th Febuary 2020 - Series 9 Pre-Release</li>
              <li>18th Febuary 2020 - Series 8 Tournament</li>
              <li>17th March - Store Championships</li>
              <li>COMING SOON</li>
              <li>COMING SOON</li>
              <li>COMING SOON</li>
              <li>COMING SOON</li>
              <li>COMING SOON</li>
              <li>COMING SOON</li>
              <li>COMING SOON</li>
            </ol>
          </div>
          <div className="barchart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={600}
                height={300}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis />
                <XAxis dataKey="name" />
                <Tooltip active={false} />
                <Legend />
                <Bar dataKey="1" stackId="a" fill="#53bafe" />
                <Bar dataKey="2" stackId="a" fill="#eb6a9b" />
                <Bar dataKey="3" stackId="a" fill="#ffd500" />
                <Bar dataKey="4" stackId="a" fill="#1dd63f" />
                <Bar dataKey="5" stackId="a" fill="#f9843f" />
                <Bar dataKey="6" stackId="a" fill="#c21c47" />
                <Bar dataKey="7" stackId="a" fill="#910cfa" />
                <Bar dataKey="8" stackId="a" fill="#1e0ca2" />
                <Bar dataKey="9" stackId="a" fill="#1ef5eb" />
                <Bar dataKey="10" stackId="a" fill="#fac1eb" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <Articletopper title="Gaming Vs Cancer" />
        <div className="eventarticle">
          <h1>CANCELLED - Sunday 22nd March 2020</h1>
          <h1>@ Garden Court, University of Southampton</h1>
          <p>
            This is a Standard Constructed tournament 4 Rounds of Swiss followed
            by cut to Top 4 or Top 8 depending on the number of players (to be
            confirmed on the day). Swiss rounds will be played Best of Three
            with a 60 minute time limit. We intend to run as close to this time
            time as possible: - Click{" "}
            <a
              href="https://www.eventbrite.co.uk/e/gaming-vs-cancer-2020-spring-tickets-85114524835?fbclid=IwAR1-40XYPy7yG0cza4KkagmQsMKASVwNGBUVqS7eYRe219SBFwPcTbAfmZQ"
              alt=""
            >
              HERE
            </a>{" "}
            to buy tickets!!
          </p>
          <img alt="" src={require("../images/gvc.png")}></img>
          <div className="points">
            <ul>
              <li>09:00-10:00 Registration</li>
              <li>10:00 Round 1</li>
              <li>11:15 Round 2</li>
              <li>12:30 Lunch</li>
              <li>13:30 Round 3</li>
              <li>14:45 Round 4</li>
              <li>16:00 Results, top cut announcement, break-</li>
              <li>16:30 Top Cut commences</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
