import React, { Component } from 'react'
import './style.css'

class Form extends Component {
    render () {
        return (
            <form>
                {this.props.children}
            </form>
        )
    }
}

export default Form