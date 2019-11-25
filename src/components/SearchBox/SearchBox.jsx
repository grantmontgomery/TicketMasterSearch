import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      date: new Date(),
      formatted: ``
    };
  }

  inputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // 2019-11-22T18:00:00Z
  handleChange = date => {
    let minutes = date.getMinutes() !== 30 ? date.getMinutes() + "0" : 30;
    this.setState({
      date: date,
      formatted: `${date.getFullYear()}-${date.getMonth() +
        1}-${date.getDate()}T${date.getHours()}:${minutes}:${date.getSeconds()}0Z`
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
    console.log(this.state.formatted);
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
          showTimeSelect
          dateFormat="Pp"
        ></DatePicker>
        <button onClick={e => this.submitQuery(e)}>Submit</button>
      </form>
    );
  }
}

export default SearchBox;
