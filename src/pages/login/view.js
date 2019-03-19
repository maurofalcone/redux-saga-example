import React, { Component } from 'react'
import Form from '../../components/shared/form'
import Input from '../../components/shared/input'
import Button from '../../components/shared/button'
import './style.css'

class Login extends Component {

    constructor () {
        super()
        this.state = {
            username:'',
            password:''
        }
    }
    
    handleClick = (e) => {
        e.preventDefault()
        let user = {
            username:this.state.username,
            password:this.state.password
        }
        this.props.login(user)
    }
    
    handlePassword = (e) => {
        this.setState({password:e.target.value})
    }

    handleUsername = (e) => {
        this.setState({username:e.target.value})
    }

    render() {
        if(!this.props.user.user) {
            return (
                <div className="loginContainer">
                    <Form>
                        <Input placeholder="Username" onChange={this.handleUsername} type="text"></Input>
                        <Input placeholder="Password" onChange={this.handlePassword} type="password"></Input>
                        <Button className="button-accept" name="Accept" onClick={this.handleClick}></Button>
                    </Form>
                </div>
            )
        }
        else {
            return (
                <div>You-re already logged in</div>
            )
        }
    }
}

export default Login