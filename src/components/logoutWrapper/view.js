import React, { Component } from 'react'
import './style.css'

class LogoutWrapper extends Component {
    render() {
        return (
            <div className="logoutContainer">
                { this.props.children }
            </div>
        )
    }
}

export default LogoutWrapper