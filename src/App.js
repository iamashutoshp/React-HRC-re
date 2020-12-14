import React, { Component } from 'react'
import LogIn from "./components/LogIn"

export class App extends Component {
  
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
          <LogIn/>
      </div>
    )
  }
}

export default App
