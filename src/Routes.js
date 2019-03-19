import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class Routes extends Component {
    render () {
        return (
            <App>
                <Router>
                    <Switch>
                        <Route exact path="/login" component={null}/>
                    </Switch>
                </Router>
            </App>
        )
    }
}

export default Routes