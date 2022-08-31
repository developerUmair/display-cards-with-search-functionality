import React from "react";

import "./Form.css";

const FormSwitch = () => {
  const login = document.querySelector(".login");
  const signup = document.querySelector(".signup");
  const form = document.querySelector("#form");
  const switchs = document.querySelector(".switch");

  function handleTab1() {
    form.style.marginLeft = "-100%";
    login.style.background = "none";
    signup.style.background = "pink";
  }

  function handleTab2() {
    form.style.marginLeft = "0";
    signup.style.background = "none";
    login.style.background = "pink";
  }

  return (
    <body>
      <div className="container">
        <div className="switch">
          <div className="login" onClick={handleTab2}>
            Login
          </div>
          <div className="signup" onClick={handleTab1}>
            Sign Up
          </div>
        </div>
        <div className="outer">
          <form id="form">
            <div id="page">
              <label>Login Form</label>
              <div className="element">
                <input type="text" placeholder="username" />
              </div>
              <div className="element">
                <input type="password" placeholder="Password" />
              </div>
              <button id="btn">Login</button>
            </div>

            <div id="page">
              <label>Sign Up Form</label>
              <div className="element">
                <input type="email" placeholder="example@gmail.com" />
              </div>
              <div className="element">
                <input type="text" placeholder="username" />
              </div>
              <div className="element">
                <input type="password" placeholder="Password" />
              </div>
              <button id="btn">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};

export default FormSwitch;
