import React, { Component } from 'react'
import './style.css'

class LoginWrapper extends Component {
    render() {
        return (
            <div className="loginContainer">
                { this.props.children }
            </div>
        )
    }
}

export default LoginWrapper