import React, { Component } from "react";

class SearchBox extends Component {
  state = {
    location: ""
  };

  inputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <form action="">
        <label htmlFor="">Location</label>
        <input
          type="text"
          value={this.state.location}
          name="location"
          onChange={e => this.inputChange(e)}
        />
      </form>
    );
  }
}

export default SearchBox;
