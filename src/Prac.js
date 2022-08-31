import React, { Component } from "react";

export default class Prac extends Component {
  constructor(props) {
    super(props);
    this.state = { united: false };
  }

  unite() {
    this.setState({ united: true });
  }
  render() {
    const { united } = this.state;
    return (
      <div>
        <span>{united ? "Code for everyone" : "Code for america"}</span>
      </div>
    );
  }
}
