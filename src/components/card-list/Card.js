import React, { Component } from "react";
import "./card.css";

export default class Card extends Component {
  render() {
    const { name, email, id } = this.props.monster;

    return (
      <div>
        <div className="card-container" key={id}>
          <img
            alt={`name ${name}`}
            src={`https://robohash.org/${id}set=set2&size=180x180`}
          />
          <h1>{name}</h1>
          <p>{email}</p>
        </div>
      </div>
    );
  }
}
