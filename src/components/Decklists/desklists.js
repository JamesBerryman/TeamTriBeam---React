import React, { Component } from "react";
import DataTable from "react-data-table-component";
import "../Home/home.css";
import Articletopper from "../articletopper/articletopper";

const data = [
  {
    id: 1,
    deckName: "Bulma Blocker",
    createdBy: "James",
    date: "08/11/2019",
    set: 8,
    link: (
      <a
        href="https://www.dbs-decks.com/#!/deck/237631"
        target="_blank"
        rel="noopener noreferrer"
      >
        DBS Decks
      </a>
    )
  },
  {
    id: 2,
    deckName: "Shenron Ramp",
    createdBy: "James",
    date: "24/10/2019",
    set: 7,
    link: (
      <a
        href="https://www.dbs-decks.com/#!/deck/237631"
        target="_blank"
        rel="noopener noreferrer"
      >
        DBS Decks
      </a>
    )
  },
  {
    id: 3,
    deckName: "AOD Dende",
    createdBy: "Jack",
    date: "26/08/2019",
    set: 6,
    link: (
      <a
        href="https://www.dbs-decks.com/?fbclid=IwAR0A9TsyCtXdSq6YDcrHUbqXZLtAJwvJ9T5YufuY-8NbQ3DKZ11_OGWvX-0#!/deck/219148"
        target="_blank"
        rel="noopener noreferrer"
      >
        DBS Decks
      </a>
    )
  },
  {
    id: 4,
    deckName: "Mono Red Burn",
    createdBy: "Kai",
    date: "19/11/2019",
    set: 7,
    link: (
      <a
        href="https://www.dbs-decks.com/?fbclid=IwAR3qx8fIwjIYYlAPi57_HHlvjkOeZ_eE2LYAQepyCfjg_AdkhCCJgDiQtfE#!/deck/244614"
        target="_blank"
        rel="noopener noreferrer"
      >
        DBS Decks
      </a>
    )
  }
];
const columns = [
  {
    name: "Deck Name",
    selector: "deckName",
    sortable: true
  },
  {
    name: "Created By",
    selector: "createdBy",
    sortable: true
  },
  {
    name: "Date Created",
    selector: "date",
    sortable: false
  },
  {
    name: "Set",
    selector: "set",
    sortable: true
  },
  {
    name: "Link",
    selector: "link",
    sortable: false
  }
];

class Decklists extends Component {
  render() {
    return (
      <div className="decklists">
        <Articletopper title="Decklists" />
        <div className="introduction">
          <p>
            Welcome to our Decklist page! Here is a collection of decklists we
            have made. Some of which are used in our store tournaments, not
            everyone does these online, a lot of people tend to write them out
            on the day, personally, I find it easier. In the table below, you
            can sort by person, date, and even the set they were made for. Click
            the name of of the deck you wish to see to view it.
          </p>
        </div>

        <div className="toparticle">
          <DataTable
            theme="dark"
            pagination="true"
            columns={columns}
            data={data}
          />
        </div>
      </div>
    );
  }
}

export default Decklists;
