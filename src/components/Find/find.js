import React from "react";
import Articletopper from "../articletopper/articletopper";

class Find extends React.Component {
  render() {
    return (
      <div className="find">
        <Articletopper title="Heroes - Newport, Isle of Wight" />

        <div className="teamarticle">
          <div className="heroeswrapper">
            <img src={require("../images/heroes2.jpg")} alt="" />
          </div>
          <p>
            "Heroes is a Comics, Collectibles & Gaming shop, based in Newport on
            the Isle of Wight. We sell Books, Comics, Magazines, T-Shirts,
            Toys/Models/Novelties, and more. Lots of goods are imported from
            Japan & America and are not available on the high street.
            <br />
            <br />
            We are a specialist comic shop, and have weekly deliveries of all
            the latest titles from America, and offer a subscription service for
            people who want regular titles.
            <br />
            <br />
            We have a comprehensive stock of Games Workshop gaming products such
            as Warhammer 40k & Fantasy, and Magic the Gathering and other
            gaming/roleplaying products, including Dungeons and Dragons and
            Heroclix.
            <br />
            <br />
            We have recently opened our own dedicated game room behind the shop,
            with sessions scheduled almost every night, and at weekends. Please
            join our facebook group "Wight Gaming Geeks" for up to the minute
            information in the meantime."
          </p>

          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                title="maps"
                width="500"
                height="200"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=heroes%20newport%20isle%20of%20wight&t=k&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              <a
                href="https://www.embedgooglemap.net/blog/nordvpn-coupon-code/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
              </a>
            </div>
          </div>
          <p>Opening Times:</p>
          <ul>
            <li>
              <strong>Monday</strong> - 10:30 - 17:00
            </li>
            <li>
              <strong>Tuesday</strong> - 10:30 - 22:00
            </li>
            <li>
              <strong>Wednesday</strong> - 10:30 - 22:00
            </li>
            <li>
              <strong>Thursday</strong> - 10:30 - 22:00
            </li>
            <li>
              <strong>Friday</strong> - 10:30 - 22:00
            </li>
            <li>
              <strong>Saturday</strong> - 10:30 - 17:00
            </li>
            <li>
              <strong>Sunday</strong> - 11:00 - 16:00
            </li>
          </ul>
          <p>For more information, please visit their Facebook Page:</p>
          <a
            href="https://www.facebook.com/iwheroes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.facebook.com/iwheroes/
          </a>
        </div>
      </div>
    );
  }
}

export default Find;
