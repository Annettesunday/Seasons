import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        //    We called setState - DO NOT MAKE DIRECT ASSIGNMENTS TO STATE WHEN UPDATING
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // react says we have to define render
  render() {
    return (
      <div>
        Latitude: {this.state.lat} 
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
