import React, { Component } from 'react'

export default class ToggleButton extends Component {
         
    
        constructor(props){
            super(props);
            this.state = {click:1}
         }
         
        handleClick(){
            this.setState((prevState) => ({
                click: (prevState.click +1) %3
            }))
        } 

        render () {
            const {click} = this.state;
            const fillerText = click === 0 ? "Searching Hikes Just For you" :
                               click === 1 ? "Challenge Select Mode" :
                               "Search Hikes just for you";

            return (
                <div>
                    <button onClick={this.handleClick.bind(this)}>Just For Me Hikes</button>
                </div>
        )
    }
}

