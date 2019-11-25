import React, { Component } from "react";
import { SearchBox } from "./components";

class App extends Component {
  state = {};

  makeCall = (location, date) => {
    console.log(location, date);
  };
  render() {
    return <SearchBox makeCall={this.makeCall}></SearchBox>;
  }
}

export default App;
