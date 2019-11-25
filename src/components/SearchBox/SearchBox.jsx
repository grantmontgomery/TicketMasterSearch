import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      date: new Date(),
      startFormatted: ``,
      endFormatted: ``
    };
  }

  inputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // 2019-11-22T18:00:00Z
  handleChange = date => {
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

    let endDate = { year: "", month: "", day: "" };
    if (date.getDate() === 31 && date.getMonth() === 12) {
      endDate.year = `${date.getFullYear() + 1}`
      endDate.month = `0${1}`
      endDate.day = `0${1}`
      ;
    }
    else{
      date.getHours() > 15 ? endDate 
    }



    this.setState({
      date: date,
      startFormatted: `${date.getFullYear()}-${months}-${days}T${hours}:${minutes}:${seconds}Z`
    });
  };
  submitQuery = event => {
    event.preventDefault();
    const { location, startFormatted } = this.state;
    if (location === "" && startFormatted === "") {
      alert("Must enter a location and select a date and time");
    } else if (location === "" && startFormatted !== "") {
      alert("Must enter a location");
    } else if (startFormatted === "" && location !== "") {
      alert("Must select a date and time");
    } else {
      this.props.makeCall(location, startFormatted);
      this.setState({ location: "", date: new Date(), startFormatted: "" });
    }
  };
  render() {
    console.log(this.state.startFormatted);
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
