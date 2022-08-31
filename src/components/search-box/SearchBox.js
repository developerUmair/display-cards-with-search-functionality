import React, { Component } from "react";
import "./search-box.css";

export default class SearchBox extends Component {
  render() {
    // const { onChangeHandler } = this.props;
    return (
      <div>
        <input
          type="search"
          className={`search-box ${this.props.className}`}
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}
