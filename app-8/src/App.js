import React, { Component } from "react";
import "./App.css";
import axios from 'axios'
import BirthYear from "./BirthYear";
import Height from "./Height";
import Eyecolor from "./Eyecolor";
import Name from "./Name"

class App extends Component {
  constructor(){
    super()
    this.state = {

    }    
  }





  render() {
    return (
      <div className="App">
        <Name />
        <BirthYear/>
        <Height/>
        <Eyecolor/>
      </div>
    );
  }
}

export default App;
