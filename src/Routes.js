import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import News from './pages/news'
import Login from './pages/login'
import Profile from './pages/profile'
import Register from './pages/register'

class Routes extends Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route exact path="/news" component={News}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/profile/:id" component={Profile}/>
                    <Route exact path="/register" component={Register}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes