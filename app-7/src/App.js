import React, { Component } from "react";

import "./App.css";
import Todo from './Todo'
import List from './List'
import NewTask from './NewTask'

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: [],
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  

  handleAddTask(event){
    this.setState({
      list: [...this.state.list, this.state.input],
      
    })
  }




  render() {
    
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list}/>

        
      </div>
    );
  }
}

export default App;