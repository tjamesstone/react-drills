import React, {Component} from 'react'

export default class Image extends Component{
    constructor(){
        super()
        this.state = {
            imageurl: ''
        }
    }

    showTheImage (){
        this.setState({imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcboIBEDusdnj8Y_pDAhpvKAOBxUyGWA3ChdhQr8KPU_josRA'})
    }

    render (){
        return (
            <div>
                <img src={this.state.imageurl} alt="Todo List"/>
                <br/>
                <button onClick={()=> this.showTheImage()}>Show Me the Image</button>
            </div>
        )
    }


}

