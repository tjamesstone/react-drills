import React, {Component} from 'react'
import './App.css'

export default class Input extends Component{
    constructor (){
        super()
        this.state = {
            text: ''
        }
        this.setText = this.setText.bind(this)
    }

    setText (value){
        this.setState({text: value})
    }


    render (){
        return(
            <div>
                <input 
                onChange={e => this.setText(e.target.value)}
                type="text" 
                className="input"/>
                <p>{this.state.text}</p>
            </div>
        )
    }
}