import React, { Component }from "react";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import "./App.css";

export class App extends Component {
  state = {
    showComponent3: false
  }
        

  render() {
    return (
      <div className="App">
        <Component1></Component1>
        <Component2></Component2>
      </div>
    );
  }
}

export default App;

