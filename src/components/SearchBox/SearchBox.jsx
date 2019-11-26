import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      startFormatted: "",
      endFormatted: ""
    };
  }

  inputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  shouldComponentUpdate() {
    console.log(this.state.startFormatted);
    console.log(this.state.endFormatted);
    return true;
  }
  // 2019-11-22T18:00:00Z
  handleChange = date => {
    const selectedDate = new Date(date);
    this.setState({ date: selectedDate });
    let months =
      selectedDate.getMonth() === 0
        ? `0${1}`
        : selectedDate.getMonth() + 1 < 10
        ? "0" + (selectedDate.getMonth() + 1)
        : selectedDate.getMonth() + 1;
    let days =
      selectedDate.getDate() === 0
        ? selectedDate.getDate() + "0"
        : selectedDate.getDate() < 10
        ? "0" + selectedDate.getDate()
        : selectedDate.getDate();
    let hours =
      selectedDate.getHours() === 0
        ? selectedDate.getHours() + "0"
        : selectedDate.getHours() < 10
        ? "0" + selectedDate.getHours()
        : selectedDate.getHours();
    let minutes =
      selectedDate.getMinutes() === 0
        ? selectedDate.getMinutes() + "0"
        : selectedDate.getMinutes() < 10
        ? "0" + selectedDate.getMinutes()
        : selectedDate.getMinutes();
    let seconds =
      selectedDate.getSeconds() === 0
        ? selectedDate.getSeconds() + "0"
        : selectedDate.getSeconds() < 10
        ? "0" + selectedDate.getSeconds()
        : selectedDate.getSeconds();
    this.setState({
      startFormatted: `${selectedDate.getFullYear()}-${months}-${days}T${hours}:${minutes}:${seconds}Z`
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
      alert("Must enter a zipcode and select a date and time");
    } else if (location === "" && startFormatted !== "") {
      alert("Must enter a zipcode");
    } else if (startFormatted === "" && location !== "") {
      alert("Must select a date and time");
    } else {
      this.props.makeCall(location, startFormatted, endFormatted);
      this.setState({ location: "", date: "", startFormatted: "" });
    }
  };
  render() {
    console.log(this.state.startFormatted);
    console.log(this.state.endFormatted);
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
