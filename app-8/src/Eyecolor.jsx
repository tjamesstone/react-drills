import React, {Component} from 'react'
import axios from 'axios'

export default class Eyecolor extends Component{
    constructor(){
        super()
        this.state = {
            eyecolor: ''
        }
    }

    componentDidMount(){
        axios.get('https://swapi.co/api/people/1/').then ( results => {
            this.setState({eyecolor: results.data.eye_color})
        })
    }


    render(){
        return (
            <h1>Eye Color: {this.state.eyecolor}</h1>
        )
    }
}