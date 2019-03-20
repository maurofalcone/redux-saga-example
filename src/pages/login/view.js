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

    handleLogout = (e) => {
        const { history, logout } = this.props
        e.preventDefault()
        logout()
        history.push('/login')
    }
    
    handleLogin = (e) => {
        const { login } = this.props
        e.preventDefault()
        let user = {
            username:this.state.username,
            password:this.state.password
        }
        login(user)
    }
    
    handlePassword = (e) => {
        this.setState({ password:e.target.value })
    }

    handleUsername = (e) => {
        this.setState({ username:e.target.value })
    }

    render() {
        if(!this.props.user.user) {
            return (
                <div className="loginContainer">
                    <Form>
                        <Input placeholder="Username" onChange={ this.handleUsername } type="text"></Input>
                        <Input placeholder="Password" onChange={ this.handlePassword } type="password"></Input>
                        <Button className="button-accept" name="Login" onClick={ this.handleLogin }></Button>
                    </Form>
                </div>
            )
        }
        else {
            return (
                <div>
                    You-re already logged in
                    <div>
                        <Button className="button-accept" name="Logout" onClick={ this.handleLogout }></Button>
                    </div>
                </div>
            )
        }
    }
}

export default Login