import React, {Component} from 'react'

export default class Login extends Component{
    constructor(){
        super ()
        this.state ={
            user: '',
            password: ''
        }
    }

    handleUsername (value){
        this.setState({user: value})
    }

    handlePassword (value){
        this.setState({password: value})
    }

    login(){
        alert(`Username: ${this.state.user} Password: ${this.state.password}`)
    }

    


    render(){
        return(
            <div className="app1">
                <input 
                onChange={e => this.handleUsername(e.target.value)}
                placeholder='Username'
                type="text"
                />
                <input 
                onChange={e => this.handlePassword(e.target.value)}
                placeholder='Password'
                type="text"
                />
                <button
                onClick={() => this.login()}
                >Login</button>
            </div>
        )
    }
}