import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      date: new Date(),
      startFormatted: "",
      endFormatted: ""
    };
  }

  inputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // 2019-11-22T18:00:00Z
  handleChange = date => {
    date = new Date(date);
    let months =
      date.getMonth() === 0
        ? `0${1}`
        : date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1;
    let days =
      date.getDate() === 0
        ? date.getDate() + "0"
        : date.getDate() < 10
        ? "0" + date.getDate()
        : date.getDate();
    let hours =
      date.getHours() === 0
        ? date.getHours() + "0"
        : date.getHours() < 10
        ? "0" + date.getHours()
        : date.getHours();
    let minutes =
      date.getMinutes() === 0
        ? date.getMinutes() + "0"
        : date.getMinutes() < 10
        ? "0" + date.getMinutes()
        : date.getMinutes();
    let seconds =
      date.getSeconds() === 0
        ? date.getSeconds() + "0"
        : date.getSeconds() < 10
        ? "0" + date.getSeconds()
        : date.getSeconds();
    this.setState({
      date: date,
      startFormatted: `${date.getFullYear()}-${months}-${days}T${hours}:${minutes}:${seconds}Z`
    });
    //Endformat of next day
    let nextDay = new Date(date.setDate(date.getDate() + 1));
    let endMonths =
      nextDay.getMonth() === 0
        ? `0${1}`
        : nextDay.getMonth() + 1 < 10
        ? "0" + (nextDay.getMonth() + 1)
        : nextDay.getMonth() + 1;
    let endDays =
      nextDay.getDate() === 0
        ? nextDay.getDate() + "0"
        : nextDay.getDate() < 10
        ? "0" + nextDay.getDate()
        : nextDay.getDate();
    let endHours =
      nextDay.getHours() === 0
        ? nextDay.getHours() + "0"
        : nextDay.getHours() < 10
        ? "0" + nextDay.getHours()
        : nextDay.getHours();
    let endMinutes =
      nextDay.getMinutes() === 0
        ? nextDay.getMinutes() + "0"
        : nextDay.getMinutes() < 10
        ? "0" + nextDay.getMinutes()
        : nextDay.getMinutes();
    let endSeconds =
      nextDay.getSeconds() === 0
        ? nextDay.getSeconds() + "0"
        : nextDay.getSeconds() < 10
        ? "0" + nextDay.getSeconds()
        : nextDay.getSeconds();

    date.getHours() > 15
      ? this.setState({
          endFormatted: `${nextDay.getFullYear()}-${endMonths}-${endDays}T${endHours}:${endMinutes}:${endSeconds}Z`
        })
      : this.setState({
          endFormatted: `${date.getFullYear()}-${months}-${days}T${hours +
            8}:${minutes}:${seconds}Z`
        });
  };
  submitQuery = event => {
    event.preventDefault();
    const { location, endFormatted, startFormatted } = this.state;
    if (location === "" && startFormatted === "") {
      alert("Must enter a location and select a date and time");
    } else if (location === "" && startFormatted !== "") {
      alert("Must enter a location");
    } else if (startFormatted === "" && location !== "") {
      alert("Must select a date and time");
    } else {
      this.props.makeCall(location, startFormatted, endFormatted);
      this.setState({ location: "", date: new Date(), startFormatted: "" });
    }
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
        <label htmlFor="">Date/Time</label>
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
