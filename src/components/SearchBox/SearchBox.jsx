import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      date: new Date()
    };
  }

  inputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleChange = date => {
    this.setState({
      date: date
    });
  };
  submitQuery = event => {
    event.preventDefault();
    const { location } = this.state;
    if (location === "") {
      alert("Must enter location.");
    } else {
      this.props.makeCall(location);
      this.setState({ location: "" });
    }
  };
  render() {
    console.log(this.state.date);
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
        <DatePicker
          name="date"
          selected={this.state.date}
          onChange={this.handleChange}
        ></DatePicker>
        <button onClick={e => this.submitQuery(e)}>Submit</button>
      </form>
    );
  }
}

export default SearchBox;
