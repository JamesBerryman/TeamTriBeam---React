import React from "react";
import "../App/App.css";

class Teamlist extends React.Component {
  render() {
    return (
      <div className="teamarticle">
        <img className="teamprofilepic" alt="" src={this.props.image} />
        <p>{this.props.bio}</p>
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
        </ul>
        <p className="posted">Updated on {this.props.updated}.</p>
      </div>
    );
  }
}

export default Teamlist;
