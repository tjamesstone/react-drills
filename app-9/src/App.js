import React, { Component } from "react";
import "./App.css";
import {Link} from 'react-router-dom'
import router from "./Component/router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <Link to='/'>Home</Link>
            <Link to='/details'>Details</Link>
            <Link to='/signup'>Signup</Link>
          </ul>
        </nav>

        <br/>

        {router}
      </div>
    );
  }
}

export default App;
