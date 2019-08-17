import React, { Component } from 'react';
import Calendar from "./components/Calendar";

class App extends Component {
  state = {
    dropSpots: {

    }
  }
  componentWillMount() {
    const spots = Array.from({ length: 4 * 16 }, (v, i) => {
      let hour = i / 4 + 8;
      let minute = hour % 1 * 60;
      minute = minute === 0 ? "0" + minute : minute;
      hour = hour < 10 ? "0" + Math.floor(hour) : Math.floor(hour);
      console.log(hour, ":", minute)

      return { hour: `${hour}:${minute}` }
    })
    console.log(spots)
  }
  render() {
    console.log("render app")

    return (
      <React.Fragment>
        <Calendar></Calendar>
      </React.Fragment>
    );
  }
}

export default App;
