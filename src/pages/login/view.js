import React, { Component } from 'react'
import Button from '../../components/shared/button'
import Form from '../../components/shared/form'
import Input from '../../components/shared/input'
import LoginWrapper from '../../components/login'
import LogoutWrapper from '../../components/logout'
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
                <LoginWrapper>
                    <Form>
                        <Input placeholder="Username" onChange={ this.handleUsername } type="text"></Input>
                        <Input placeholder="Password" onChange={ this.handlePassword } type="password"></Input>
                        <Button className="button-accept" name="Login" onClick={ this.handleLogin }></Button>
                    </Form>
                </LoginWrapper>
            )
        }
        else {
            return (
                <LogoutWrapper>
                    <Form>
                        You-re already logged in
                        <Button className="button-accept" name="Logout" onClick={ this.handleLogout }></Button>
                    </Form>
                </LogoutWrapper>
            )
        }
    }
}

export default Login