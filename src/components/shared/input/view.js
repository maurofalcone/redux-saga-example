import React, { Component } from 'react'
import './style.css'

class Input extends Component {
    render () {
        return (
            <input className="input" placeholder={this.props.placeholder} onChange={this.props.onChange} type={this.props.type}></input>
        )
    }
}

export default Input