import React, { Component } from 'react'
import { Button, FormGroup, Grid, TextField } from '@material-ui/core'
import axios from 'axios'

import './login.css'

import Handle from './Handler'

class logIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passWord: '',
            level: '',
            check: false,
            data: ''
        };

        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserNameChange = (event) => {
        this.setState(
            {
                userName: event.target.value
            });
    }

    handlePasswordChange = (event) => {
        this.setState({
            passWord: event.target.value
        });
    }



    handleSubmit = async (event) => {
        alert(this.state.userName + "   =>    " + this.state.passWord);
        if (!(this.state.userName === "" || this.state.passWord === "")) {
            await axios.post('http://localhost:8080/1729197/logus?user=' + this.state.userName + '&' + 'password=' + this.state.passWord, {
             })
                .then((response) => {
                    console.log("in response :");
                    console.log(response.data);
                    console.log("user status : ", response.data);
                    if (response.data != '') {
                        this.setState({
                            userName: '',
                            passWord: '',
                            level: '',
                            check: true,
                            data: response.data
                        })
                        console.log("user data -->:", this.state.data)
                        alert("Welcome" )
                    }


                })
                .catch(function (error) {
                    console.log(error);
                });
        }


        if (this.state.data==='') {
            alert("Invalid Credentials");
        }


        event.preventDefault();
    }



    render() {

        const { userName, passWord, level, data } = this.state

        if (!this.state.check) {
            console.log("in render :", this.state.data)

        return (
            <div className ="asd" >

                        <FormGroup id="sda">
                            <h2> Sign In</h2>
                            <TextField id="input-with-icon-grid" label="Username" 
                            style={{width:200}}
                            onChange={this.handleUserNameChange}
                            />
                            
                            <br/><br/>
                            
                            <TextField  id="input-with-icon-grid" label="Password" 
                            type="password"
                            style={{width:200}}
                            onChange={this.handlePasswordChange}
                            />

                        <br/><br/>
                        <Button variant="contained" color="primary"
                        style={{width:100}}
                        onClick={this.handleSubmit}
                        >Log In</Button>
                        </FormGroup>
                    
                    
                </div>
        )
        }
        else if((this.state.data === "Level 1") || (this.state.data === "Level 2") || (this.state.data === "Level 3") ) {
            return (
                <div>
                    <Handle lvl={this.state.data}/>
                </div>
            )
        }
        else  {
            return (
                <div>
                    Invalid Credentials
                </div>
            )
        }

    }
}

export default logIn
