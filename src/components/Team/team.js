import React from "react";
import Articletopper from "../articletopper/articletopper";
import Teamlist from "../teamlist/teamlist";

class Team extends React.Component {
  render() {
    return (
      <div className="team">
        <Articletopper title={"Meet the Team"} />
        <div className="introduction">
          <p>
            Our team is based in a small shop in Newport on the Isle of Wight,
            we have a group of players that play at the shop on the regular
            basis and as such we consider all of those people members of Team
            Tri-Beam! However for things such as Events we have a few key
            members of Team Tri-Beam. You can find out more about our team
            below.
          </p>
        </div>

        <hr style={{ borderColor: "#292929" }} />

        <Articletopper title={"Jack Rawlings-Cawtheray"} />

        <Teamlist
          image={require("../images/jack.jpg")}
          bio="Meet the Captain of the team and man responsible for our shop to
            start stocking DBSCG. Jack has been responible for recruiting most
            of the regular players in the shop and has consistently placed high
            in events with an assortment of decks. Jack normally arrives each
            week with some sort of new deck idea he's thought of, some are
            better than others. As a fan of control, Jack's current favourites
            are Janemba and Towa but the winner has to be his Zamasu."
          currentdeck="Tri-Color Janemba"
          favcardlink="https://shop.tcgplayer.com/dragon-ball-super-ccg/union-force/infinite-force-fused-zamasu-spr"
          favcard="Infinite Force Fused Zamasu"
          fundeck="Zamasu"
          randomdeck="Hercule"
          topcomp="Finalist at UK DBSCG Finals"
          decklist="AOD Dende"
          decklistlink="https://www.dbs-decks.com/?fbclid=IwAR0A9TsyCtXdSq6YDcrHUbqXZLtAJwvJ9T5YufuY-8NbQ3DKZ11_OGWvX-0#!/deck/219148"
          updated="14th November 2019"
        />

        <Articletopper title={"James Berryman"} />

        <Teamlist
          image={require("../images/james.jpg")}
          bio=" I started playing in April 2019 after going to see the Broly movie
          with Jack and Kai, My first deck was Shenron Gogeta, after that I
          built some basic Vegito decks on the side, won my first event with
          Gogeta: BR, and then made U6 Cabba when Set 7 came out, however I
          went to Nationals with Shenron Ramp as I felt most confident with
          that deck. I can't wait to see where the game goes and am currently
          looking forward to the launch of Set 8, as I plan to build a Bulma
          deck!'"
          favcardlink="https://shop.tcgplayer.com/dragon-ball-super-ccg/union-force/ultimate%20force%20ssb%20vegito"
          favcard="Ultimate Force SSB Vegito"
          fundeck="U6 Cabba"
          randomdeck="Set 3 Vegito"
          topcomp="Finalist at UK DBSCG Finals"
          decklist="Shenron Ramp"
          decklistlink="https://www.dbs-decks.com/#!/deck/237631"
          updated="14th November 2019"
        />

        <Articletopper title={"Kai Wade"} />
        <Teamlist
          image={require("../images/kai.jpg")}
          bio="Sadly no longer with us, Kai left our neck of the woods to pursue an
          education. Kai was one of the founding members of Team Tri Beam,
          he loved playing Cell before the ban and as his favourite deck, he
          hopes it will one day be unbanned. Kai has played a range of decks
          but had a lot of success playing Vegeta Baby and Lord Slug, but more
          recently found Mono Red Burn to be his top choice."
          currentdeck="Mono Red Burn"
          favcardlink="https://shop.tcgplayer.com/dragon-ball-super-ccg/union-force/perfect%20force%20cell%20spr"
          favcard="Perfect Force Cell"
          fundeck="Cell-droids"
          randomdeck="Dr Myuu"
          topcomp="Winner at local events"
          decklist="Mono Red Burn"
          decklistlink="https://www.dbs-decks.com/?fbclid=IwAR3qx8fIwjIYYlAPi57_HHlvjkOeZ_eE2LYAQepyCfjg_AdkhCCJgDiQtfE#!/deck/244614"
          updated="14th November 2019"
        />
      </div>
    );
  }
}

export default Team;
