import React, { Component } from 'react'
import './style.css'

class Posts extends Component {
    constructor (props) {
        super(props)
        this.state = {
            title: this.props.title,
            description: this.props.description
        }
    }

    render() {
        return (
            <div className="postContainer">
                <div className="postContent">
                    <div className="postTitleContainer">
                        <h1>{this.props.title}</h1>
                    </div>
                    <div className="postDescriptionContainer">
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Posts