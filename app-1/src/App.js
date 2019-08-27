import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      input: ""
    }
    this.setInput = this.setInput.bind(this)
  }

    setInput (value){
      this.setState({ input: value })
    }


  render() {
    return (
      <div className="App">
        <input 
        
        onChange={e => this.setInput(e.target.value)}
        placeholder="Type Here"/>

        <h3>{this.state.input}</h3>
      </div>
    );
  }
}

export default App;
