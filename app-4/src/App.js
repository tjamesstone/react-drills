import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.handleUpdateUsername = this.handleUpdateUsername.bind(this)
    this.handleUpdatePassword = this.handleUpdatePassword.bind(this)
    this.login = this.login.bind(this)
  }

  handleUpdateUsername(event){
    this.setState({
      username: event.target.value
    })
  }

  handleUpdatePassword(event){
    this.setState({
      password: event.target.value
    })
  }

  login(){
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }



  render() {
    return (
      <div className="App">
        <input onChange={this.handleUpdateUsername} placeholder="username" className="username"/>
        <input onChange={this.handleUpdatePassword} placeholder="password" className="password"/>
        <button onClick={this.login} className="login">Login</button>

      </div>
    );
  }
}

export default App;
