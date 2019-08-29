import React, {Component} from 'react'
import axios from 'axios'

export default class Name extends Component{
    constructor(){
        super()
        this.state = {
            name: ''
        }
    }

    componentDidMount(){
        axios.get('https://swapi.co/api/people/1/').then ( results => {
            this.setState({name: results.data.name})
        })
    }



    render(){
        return(
            <h1>Name: {this.state.name}</h1>
        )
        
    }
}