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
        <Articletopper title="Rise of the Unison Warrior" />
        <div className="toparticle" id="Set10">

          <p>So there hasn't been much TTB activity lately due to the COVID-19 situation. Our store events haven't been happening and probably won't for a while. In the meantime the team is still in contact and have even been playing games on Untap testing out decks. Set 10, Rise of the Unison Warrior came out recently, and although we won't be able to play using the cards for a while, it was nice to open some packs, I decided to record my unboxing, which you can see below.</p>
          <div class="video-responsive">
            <iframe width="560" title="set10" height="315" src="https://www.youtube.com/embed/RymRbWOiHOg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <p className="posted">Posted on 19th July 2020.</p>
        </div>
        {/* END OF TOP POST - COPY/PASTE UPWARDS TO ADD NEW POST*/}


        <Articletopper title="Salford 2020" />
        <div className="toparticle" id="Salford2020">
          <p>
            Recently Team Tri Beam went to Salford 2020, the UK Regionals! In
            the line up was our Team Captain Jack playing U7 Invoker, Myself
            playing G/Y Cell, and both Liam's playing SurgeKu and Broly Surge.
            We all did pretty well for a small time store. We all had ups and
            downs, unfortunately none of made it to even top 64, Jack was
            closest at 77. We were all pretty close points wise, in fact Jack
            and I even ended up going against each other in the final round!
          </p>
          <p>
            <strong>Day 1:</strong> For this article I'm just going to talk
            about my matches. My first 2 rounds I lost, against Jiren and
            Piccolo. Then the next 2 I won, against Baby Vegeta and SurgeKu,
            then I drew in a mirror match against another Cell, then won my next
            match against U7, at this point they put up the totals so far and I
            was ranked highest in our group at 90. Unfortunately my next game
            was against another Piccolo, which I lost, and then as mentioned
            before my final round against Jack, U7, I tested a lot against Jack,
            he had a lot of answers to my stuff, and knew exactly how I played,
            I couldn't have asked for a better final round though, and had a
            great match!
          </p>

          <p>
            <strong>Day 2:</strong> We decided to do Team Wars on Sunday, as
            there was 4 of us, the Liam playing Broly decided not to play. I
            decided to play Buu on this day and that was probably a big mistake,
            pretty much all my games were against Aggro decks that wrecked me.
            Fortunately Jack and Liam had a lot better luck winning matches, in
            the end we placed 11th out of 18 teams, however we had to same
            amount of points as 6th-10th place, just our win record was lower
            (Partially because of me!). Despite this we all had a really good
            time, was great to play alongside my team mates and Team Tri Beam
            made a good first debut at Team Wars!
          </p>
          <div className="pics">
            <img src={require("./articlepics/round8.jpg")} alt="" />
            <img src={require("./articlepics/teamwars.jpg")} alt="" />
          </div>
          <p className="posted">Posted on 9th March 2020.</p>
        </div>

        <Articletopper title="Local Event" />
        <div className="toparticle" id="LocalEvent">
          <p>
            Tonight we had our Series 8 Store event, it's a bit late considering
            Set 9 just came out, but it was a good opportunity for us to test
            our Series 9 brand new decks, especially as we are preparing for the
            UK Regionals. Below are the results and some pictures showing Leader
            and top 3 cards used in that deck.
          </p>
          <li>1st Place: Jack with his U7 R/B Invoker deck</li>
          <li>2nd Place: Neil with his R/B Cooler deck</li>
          <li>3rd Place: Liam with his R/B Cooler deck </li>
          <li>4th Place: James with his Successor Cell G/Y deck.</li>
          <br></br>
          <div className="pics">
            <img src={require("./articlepics/1802Jack.jpg")} alt="" />
            <img src={require("./articlepics/1802Neil.jpg")} alt="" />
            <img src={require("./articlepics/1802Liam.jpg")} alt="" />
            <img src={require("./articlepics/1802James.jpg")} alt="" />
          </div>
          <p className="posted">Posted on 18th Febuary 2020.</p>
        </div>
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
