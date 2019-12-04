import React from "react";
import Articletopper from "../articletopper/articletopper";

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
        <Articletopper title="Set 8 Multi-Box Unboxing with SCR pull!" />
        <div className="toparticle">
          <p>
            Set 8 recently came out in the UK, in our store on pre-release night
            we bought about 6 boxes in total and unboxed them all together. I
            was lucky and got a God Pack, but the real luck went to one of the
            kids who comes to our store, who not only got the Baby Jenemba SCR
            in his pre-release pack, but got the Dragonballs SCR in his box.{" "}
          </p>
          <iframe
            className="youTubeClip"
            title="set8"
            style={{ width: "100%px", height: "315px" }}
            src="https://www.youtube.com/embed/FZLPPdSEeIU"
            frameBorder={0}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p className="posted">
            Posted on 25th November 2019. Uploaded to Youtube on 25th November
            2019.
          </p>
        </div>
        {/* END OF TOP POST - COPY/PASTE UPWARDS TO ADD NEW POST*/}
        <Articletopper title="Series 6 Destroyer Kings Unboxing with SCR pull!" />
        <div className="toparticle">
          <p>
            In this video we cracked open a few boxes of Series 6 Destroyer
            Kings, Jack was lucky enough to get one of the SCR's.
          </p>
          <iframe
            className="youTubeClip"
            title="set6"
            style={{ width: "100%px", height: "315px" }}
            src="https://www.youtube.com/embed/01L60KJPSF4"
            frameBorder={0}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p className="posted">
            Posted on 10th November 2019. Uploaded to Youtube on 10th April
            2019.
          </p>
        </div>
        <Articletopper title="Namekians Vs Frieza Shenron" />
        <div className="toparticle">
          <p>In this video it's Namekians(Hayden) Vs Frieza Shenron(Jack)</p>
          <iframe
            className="youTubeClip"
            title="namekiansvsfrieza"
            style={{ width: "100%px", height: "315px" }}
            src="https://www.youtube.com/embed/ZlxfOAXoG0A"
            frameBorder={0}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
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
