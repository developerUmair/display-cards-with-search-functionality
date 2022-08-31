import React, { Component } from "react";

import "./App.css";

class Codeversion extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
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

  render() {
    // console.log("render");
    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="search monsters"
          onChange={(e) => {
            console.log({ staringArray: this.state.monsters });
            console.log(e.target.value);
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLowerCase().includes(e.target.value);
            });
            this.setState(
              () => {
                return { monsters: filteredMonsters };
              },
              () => {
                console.log({ staringArray: this.state.monsters });
              }
            );
          }}
        />
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

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
