import React, { Component } from "react";
import Card from "./Card";

import "./card-list.css";

export default class CardList extends Component {
  render() {
    // console.log("render from cardList");
    console.log(this.props.monsters);
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}
