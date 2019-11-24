import React, { Component } from "react";
import { SearchBox } from "./components";

class App extends Component {
  state = {};

  makeCall = (date, location) => {};
  render() {
    return <SearchBox makeCall={this.makeCall}></SearchBox>;
  }
}

export default App;
