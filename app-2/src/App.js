import React, { Component } from "react";
import "./App.css";



class App extends Component {
  constructor(){
    super()
    this.state = {
     cities: ['New York', 'Chicago', 'London', 'Berlin', 'Tokyo', 'San Francisco']
    }
  }


  render() {
    const list = this.state.cities.map((val) => {
      return <h2>{val}</h2>
    }
    )
    return (
      <div className="App">
        
      {list}
        
      </div>
    );
  }
}

export default App;
