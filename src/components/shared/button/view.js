import React, { Component } from 'react'
import './style.css'

class Button extends Component {
    render () {
        return (
            <button className={this.props.className} onClick={this.props.onClick}>{this.props.name}</button>
        )
    }
}

export default Button