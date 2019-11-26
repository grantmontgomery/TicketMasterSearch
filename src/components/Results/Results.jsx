import React, { Component } from "react";
import { Result } from "../Result";

class Results extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        {this.props.Results.map(result => {
          return (
            <li key={result.id}>
              <Result Result={result}></Result>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Results;
