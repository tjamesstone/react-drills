import React, { Component } from "react";
import './App.css'
import Login from './Login'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }

    
  }

 



  render() {
    return (
      <div className="App">
        <header className="Header">Welcome to Application #4</header>
        <Login/>
        <footer className="footer">© Tate Stone, 2019</footer>
      </div>
    );
  }
}

export default App;
