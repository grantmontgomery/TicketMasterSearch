import React, { Component } from "react";
import { SearchBox } from "./components";
import { Results } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Results: []
    };
  }

  makeCall = (location, startDateTime, endDateTime) => {
    fetch("http://localhost:5000/TicketMasterSearch", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ location, startDateTime, endDateTime })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data._embedded.events);
        this.setState({ Results: [...data._embedded.events] });
      })
      .catch(err => console.log(err.message));
  };
  render() {
    return (
      <div>
        <SearchBox makeCall={this.makeCall}></SearchBox>
        <Results Results={this.state.Results}></Results>
      </div>
    );
  }
}

export default App;
