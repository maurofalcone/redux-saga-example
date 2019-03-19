import React, { Component } from 'react'
import Routes from '../Routes'
class App extends Component {
  render() {
    return (
      <Routes>
        {this.props.children}
      </Routes>
    )
  }
}

export default App
