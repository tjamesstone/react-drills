import React, {Component} from 'react'
import axios from 'axios'

export default class Height extends Component{
    constructor(){
        super()
        this.state = {
            height: null
        }
    }

    componentDidMount(){
        axios.get('https://swapi.co/api/people/1/').then ( results => {
            this.setState({height: results.data.height})
        })
    }

    render(){
        return(
            <h1>Height: {this.state.height}</h1>
        )
    }
}