import React, { Component } from "react";
import { SearchBox } from "./components";

class App extends Component {
  state = {};

  makeCall = location => {
    console.log(location);
  };
  render() {
    return <SearchBox makeCall={this.makeCall}></SearchBox>;
  }
}

export default App;
