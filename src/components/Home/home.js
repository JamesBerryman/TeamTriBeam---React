import React from "react";
import Articletopper from "../articletopper/articletopper";
import "./home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Articletopper title="Introduction" />
        <div className="introduction">
          <h1>Welcome to Team Tri-Beam!</h1>
          <p>
            Team Tri-Beam is a Dragonball Super Card Game team based on the Isle
            of Wight. This website was made as a hub for team information such
            as deck profiles, information about where you can find us, and more.
            You can find our Twitter, Facebook Page and Youtube channel in the
            links above, and you can also check out some of our latest Youtube
            video's below! Please check out the Team page on this website to
            learn more about us, and thanks for visiting!
          </p>
        </div>
        <hr style={{ borderColor: "#292929" }} />
        {/* Start of Articles - TOP POST */}
        <Articletopper title="Local Event" />
        <div className="toparticle">
          <p>
            Tonight we had our Series 8 Store event, it's a bit late considering
            Set 9 just came out, but it was a good opportunity for us to test
            our Series 9 brand new decks, especially as we are preparing for the
            UK Regionals. Below are the results and some pictures showing Leader
            and top 3 cards used in that deck.
          </p>
          <div className="pics">
            <li>1st Place: Jack with his U7 R/B Invoker deck</li>
            <img src={require("./articlepics/1802Jack.jpg")} alt="" />
            <li>2nd Place: Neil with his R/B Cooler deck</li>
            <img src={require("./articlepics/1802Neil.jpg")} alt="" />
            <li>3rd Place: Liam with his R/B Cooler deck </li>
            <img src={require("./articlepics/1802Liam.jpg")} alt="" />
            <li>4th Place: James with his Successor Cell G/Y deck.</li>
            <img src={require("./articlepics/1802James.jpg")} alt="" />
          </div>
          <p className="posted">Posted on 18th Febuary 2020.</p>
        </div>
        {/* END OF TOP POST - COPY/PASTE UPWARDS TO ADD NEW POST*/}
        <Articletopper title="Set 8 Unboxing!" />
        <div className="toparticle">
          <p>
            Set 8 recently came out in the UK, in our store on pre-release night
            we bought about 6 boxes in total and unboxed them all together. I
            was lucky and got a God Pack, but the real luck went to one of the
            kids who comes to our store, who not only got the Baby Janemba SCR
            in his pre-release pack, but got the Dragonballs SCR in his box.
          </p>
          <div class="video-responsive">
            <iframe
              className="youTubeClip"
              title="set8"
              style={{ width: "420", height: "315" }}
              src="https://www.youtube.com/embed/FZLPPdSEeIU"
              frameBorder={0}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="posted">
            Posted on 25th November 2019. Uploaded to Youtube on 25th November
            2019.
          </p>
        </div>
        {/* END OF TOP POST - COPY/PASTE UPWARDS TO ADD NEW POST*/}
        <Articletopper title="Set 6 Unboxing!" />
        <div className="toparticle">
          <p>
            In this video we cracked open a few boxes of Series 6 Destroyer
            Kings, Jack was lucky enough to get one of the SCR's.
          </p>
          <div class="video-responsive">
            <iframe
              className="youTubeClip"
              title="set6"
              style={{ width: "420", height: "315" }}
              src="https://www.youtube.com/embed/01L60KJPSF4"
              frameBorder={0}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="posted">
            Posted on 10th November 2019. Uploaded to Youtube on 10th April
            2019.
          </p>
        </div>
        <Articletopper title="Hayden Vs Jack" id="#jack" />
        <div className="toparticle" id="#jack">
          <p>In this video it's Namekians(Hayden) Vs Frieza Shenron(Jack)</p>
          <div class="video-responsive">
            <iframe
              className="youTubeClip"
              title="namekiansvsfrieza"
              style={{ width: "420", height: "315" }}
              src="https://www.youtube.com/embed/ZlxfOAXoG0A"
              frameBorder={0}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="posted">
            Posted on 10th November 2019. Uploaded to Youtube on 16th January
            2019.
          </p>
        </div>
      </div>
    );
  }
}
export default Home;
