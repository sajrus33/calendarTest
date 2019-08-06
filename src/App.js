import React, { Component } from 'react';
import Calendar from "./components/Calendar";

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Calendar></Calendar>
      </React.Fragment>
    );
  }
}

export default App;
