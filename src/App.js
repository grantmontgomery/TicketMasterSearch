import React, { Component } from "react";
import { SearchBox } from "./components";

class App extends Component {
  state = {};

  makeCall = (location, startDateTime, endDateTime) => {
    fetch("http://localhost:5000/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ location, startDateTime, endDateTime })
    })
      .then(res => console.log(res))
      // .then(res => res.json())
      // .then(data => console.log(data))
      .catch(err => console.log(err.message));
  };
  render() {
    return <SearchBox makeCall={this.makeCall}></SearchBox>;
  }
}

export default App;
