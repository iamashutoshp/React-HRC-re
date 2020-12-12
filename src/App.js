import React, { Component } from 'react'
import logo from './logo.svg';


import LogIn from "./components/LogIn"

export class App extends Component {
  
  constructor(props){
    super(props)
    // this.check=this.check.bind(this);
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
