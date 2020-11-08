import React from "react"
import { render } from "@testing-library/react"

export default class ToggleButton{
    state = {
        on: false,
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }
        render() {
            return(
                <div>
                    <input type="text" placeholder="Zip Code"/>
                    <p> Just For You Hikes </p>
                    <label className="switch">
                    <input type="checkbox" 
                    onChange={this.toggle}/>
                    <span className="slider round"></span>
                    </label>
                </div>
            )
        }
    }


