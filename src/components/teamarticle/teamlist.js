import React from "react";
import "../App/App.css";

class Teamlist extends React.Component {
  render() {
    return (
      <div className="team">
        <div className="teamarticle">
          <img className="teamprofilepic" alt="" src={this.props.image} />
          <p>
            Meet the Captain of the team and man responsible for our shop to
            start stocking DBSCG. Jack has been responible for recruiting most
            of the regular players in the shop and has consistently placed high
            in events with an assortment of decks. Jack normally arrives each
            week with some sort of new deck idea he's thought of, some are
            better than others. As a fan of control, Jack's current favourites
            are Janemba and Towa but the winner has to be his Zamasu."
            currentdeck="Tri-Color Janemba{" "}
          </p>
          <ul className="list">
            <li>
              <strong>Current Deck: </strong>
              {this.props.currentdeck}
            </li>
            <li>
              <strong>Favourite Card: </strong>
              <a
                href={this.props.favcardlink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.favcard}
              </a>
            </li>
            <li>
              <strong>Most fun deck: </strong>
              {this.props.fundeck}
            </li>
            <li>
              <strong>Most random deck built: </strong>
              {this.props.randomdeck}
            </li>
            <li>
              <strong>Top accomplistment: </strong>
              {this.props.topcomp}
            </li>
            <li>
              <strong>Deck List: </strong>
              <a
                href={this.props.decklistlink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.decklist}
              </a>
            </li>
          </ul>
          <p className="posted">Updated on {this.props.updated}.</p>
        </div>
      </div>
    );
  }
}

export default Teamlist;
