import React, {Component} from 'react'
import axios from 'axios'

export default class BirthYear extends Component{
    constructor(){
        super()
        this.state = {
            birthyear: ''
        }
    }

    componentDidMount(){
        axios.get('https://swapi.co/api/people/1/').then ( results => {
            this.setState({birthyear: results.data.birth_year})
        })
    }

    render(){
        return(
            <h1>Birth Year: {this.state.birthyear}</h1>
        )
    }
}