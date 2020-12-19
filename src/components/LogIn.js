import React, { Component } from 'react'
import { Button, FormGroup, TextField } from '@material-ui/core'
import axios from 'axios'

import './login.css'

import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
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

        // alert(this.state.userName + "   =>    " + this.state.passWord);
        if (!(this.state.userName === "" || this.state.passWord === "")) {
            await axios.post('http://localhost:8080/1729197/logus?user=' + this.state.userName + '&' + 'password=' + this.state.passWord, {
            })
                .then((response) => {
                    console.log("in response :", response);

                    
                    console.log(response.data);
                    console.log("user status : ", response.data);
                    if (response.data != '') {
                        alert("Welcome : "+this.state.userName+"\nYour level is : "+response.data)
                        this.setState({
                            userName: '',
                            passWord: '',
                            level: '',
                            check: true,
                            data: response.data
                        })
                        
                    }


                })
                .catch(function (error) {
                    console.log(error);
                });
        }


        if (this.state.data === '') {
            alert("Invalid Credentials");
        }


        // event.preventDefault();
    }



    render() {

        const { userName, passWord, level, data } = this.state

        const paperStyle = {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            padding: "2px"
        }
        if (!this.state.check) {
            console.log("in render :", this.state.data)

            return (
                <div
                >

                    <Grid container
                        direction="column"
                        spacing={1}
                        alignItems="flex-start" >
                        <div
                            className="asd"
                        >
                            <Grid container >
                                {/* ------------------------------------------------------------ */}
                                <Grid item xs={12} >
                                    <Paper xs={12} style={{ backgroundColor: "transparent", boxShadow: "none" }}>
                                        <p>     </p>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} >
                                    <Paper xs={12} style={{ backgroundColor: "transparent", boxShadow: "none" }}>
                                        <p>     </p>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} >
                                    <Paper xs={12} style={{ backgroundColor: "transparent", boxShadow: "none" }}>
                                        <p>     </p>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} >
                                    <Paper xs={12} style={{ backgroundColor: "transparent", boxShadow: "none" }}>
                                        <p>     </p>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} >
                                    <Paper xs={12} style={{ backgroundColor: "transparent", boxShadow: "none" }}>
                                        <p>     </p>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} >
                                    <Paper xs={12} style={{ backgroundColor: "transparent", boxShadow: "none" }}>
                                        <p>     </p>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} >
                                    <Paper xs={12} style={{ backgroundColor: "transparent", boxShadow: "none" }}>
                                        <p>     </p>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} >
                                    <Paper xs={12} style={{ backgroundColor: "transparent", boxShadow: "none" }}>
                                        <p>     </p>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} >
                                    <Paper xs={12} style={{ backgroundColor: "transparent", boxShadow: "none" }}>
                                        <p>     </p>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} >
                                    <Paper xs={12} style={{ backgroundColor: "transparent", boxShadow: "none" }}>
                                        <p>     </p>
                                    </Paper>
                                </Grid>

                                {/* ------------------------------------------------------------------------------ */}
                                <Grid item xs={12} >
                                    <Grid container justify>
                                        <Grid item xs={6}></Grid>
                                        <Grid item xs={2}><h2 id="signIn">Sign In</h2></Grid>
                                        <Grid item xs={4}></Grid>

                                        {/* --------------------- */}
                                        <Grid item xs={6}></Grid>
                                        <Grid item xs={4}>
                                            <TextField id="input-with-icon-grid" label="Username"
                                                style={{ width: "65%" }}
                                                onChange={this.handleUserNameChange}
                                            />
                                        </Grid>
                                        <Grid item xs={2}></Grid>
                                        {/* ---------------- */}
                                        <Grid item xs={12} >
                                            <Paper xs={12} style={{ backgroundColor: "transparent", boxShadow: "none" }}>
                                                <p>     </p>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={12} >
                                            <Paper xs={12} style={{ backgroundColor: "transparent", boxShadow: "none" }}>
                                                <p>     </p>
                                            </Paper>
                                        </Grid>
                                        

                                        {/* ------------- */}
                                        <Grid item xs={6}></Grid>
                                        <Grid item xs={4}>
                                            <TextField id="input-with-icon-grid" label="Password"
                                                type="password"
                                                style={{ width: "65%" }}
                                                onChange={this.handlePasswordChange}
                                            />
                                        </Grid>
                                        <Grid item xs={2}></Grid>
                                        {/* ---------------- */}
                                        <Grid item xs={12} >
                                            <Paper xs={12} style={{ backgroundColor: "transparent", boxShadow: "none" }}>
                                                <p>     </p>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={12} >
                                            <Paper xs={12} style={{ backgroundColor: "transparent", boxShadow: "none" }}>
                                                <p>     </p>
                                            </Paper>
                                        </Grid>
                                        {/* --------------- */}

                                        <Grid item xs={6}></Grid>
                                        <Grid item xs={2}>
                                            <Button variant="contained" color="primary"
                                                style={{ width: 100,
                                                    backgroundColor: "#abaaa6",
                                                }}
                                                onClick={this.handleSubmit}
                                            >Log In</Button>
                                        </Grid>
                                        <Grid item xs={4}></Grid>
                                        {/* ----------------- */}

                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </div >
            )
        }
        else if ((this.state.data === "Level 1") || (this.state.data === "Level 2") || (this.state.data === "Level 3")) {
            return (
                <div>
                    <Handle lvl={this.state.data} />
                </div>
            )
        }
        else {
            return (
                <div>
                    Invalid Credentials
                </div>
            )
        }

    }
}

export default logIn
