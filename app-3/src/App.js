import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      names: ['Amy', 'Amelia', 'Briana', 'Caroline', 'Delila', 'Elanor', 'Fiona'],
      filterString: '',
      
    }
  }

  handleChange(filter) {
    this.setState({ filterString: filter });
  }

 
  render() {
    let namesToDisplay = this.state.names
      .filter((element, index) => {
        return element.includes(this.state.filterString);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {namesToDisplay}
      </div>
    );
  }
}

export default App;
