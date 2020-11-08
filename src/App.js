import React from "react";
import logo from "./LCO-logo-white.png";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <img src={logo} width="100" height="100" className="logo" />
        <h1 className="app-title">LCO ToDo App</h1>
        <div className="container">
          Add an Item...
          <br />
          <input
            type="text"
            className="input-text"
            placeholder="Write a todo"
          />
          <button className="add-btn">Add Todo</button>
          <div className="list">
            <ul>
              <li>
                <input type="checkbox" name="" id="" />
                Record Youtube videos
                <button className="btn">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
