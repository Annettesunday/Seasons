import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: null };
  }
  // react says we have to define render
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );
    return <div>Latitude:</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
