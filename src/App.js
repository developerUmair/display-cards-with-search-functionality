import React, { Component } from "react";

import "./App.css";
import CardList from "./components/card-list/CardList";

// import FormSwitch from "./components/FormSwitch";
import SearchBox from "./components/search-box/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    // console.log("constructor");
  }

  componentDidMount() {
    // console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            // console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (e) => {
    console.log({ startingArray: this.state.monsters });
    console.log(e.target.value);
    const searchField = e.target.value.toLocaleLowerCase();

    this.setState(
      () => {
        return { searchField };
      },
      () => {
        console.log({ endingArray: this.state.monsters });
      }
    );
  };

  render() {
    console.log("render from App JS");
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    // console.log("render");
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">
          Monster Rolodex with search functionality.
        </h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search monsters"
          className="monster-search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

/* its initial state
  this.state = {
      name: { firstName: "Syed Umair", lastName: "Bacha" },
      company: "SpeedForceDigital",
    };


<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi, {this.state.name.firstName} {this.state.name.lastName}. I work
            at {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return {
                    name: { firstName: "Ali Shah", lastName: "Syed" },
                  };
                },
                () => {
                  console.log(this.state);
                }
              );
            }}
          >
            Change Name
          </button>
        </header> */
