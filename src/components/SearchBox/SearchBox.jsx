import React, { Component } from "react";
import DatePicker from "react-datepicker";
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
          placeholder="Enter in a city or zipcode"
          onChange={e => this.inputChange(e)}
        />
        <br />
        <DatePicker></DatePicker>
        <button>Submit</button>
      </form>
    );
  }
}

export default SearchBox;
