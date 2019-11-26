import React, { Component } from "react";
import "./Result.css";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props);
  }
  render() {
    return (
      <div className="result">
        <img src={this.props.Result.images[0].url} alt="" />
        <p>{this.props.Result.name}</p>
        <p>{this.props.Result.dates.start.localDate}</p>
        <p>{this.props.Result.dates.start.localTime}</p>
        <p>{this.props.Result._embedded.venues[0].name}</p>
      </div>
    );
  }
}

export default Result;
