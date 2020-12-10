import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Divider from "@material-ui/core/Divider";
import { FormGroup, Grid, Paper, TextField } from '@material-ui/core'
import { InputLabel, Input, FormHelperText, FormControl } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import CancelIcon from '@material-ui/icons/Cancel';



import {
  withStyles,
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";

import { green, purple, deepOrange } from "@material-ui/core/colors";

import ColorButton from "../../utils/OrgBuuton";
import { Render } from "react-dom";
import GridHRCLogo from "../../utils/GridHRCLogo"

export default class ADD extends React.Component {

    constructor(props) {
        console.log("Add constructor")
        super(props);
        this.state = {
            open: false
        };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClickOpen = (event) => {

        this.setState({
            open: true
        });

        console.log("inside open : ", this.state.open);
    };


    handleClose = () => {
        console.log("inside close");
        this.setState({
            open: false
        });
        console.log("inside close : ", this.state.open);
    };

    render() {
        return (
            <div>
                <ColorButton
                    variant="contained"
                    color="primary"
                    onClick={this.handleClickOpen}
                >
                    ADD
                </ColorButton>

                <Dialog
                    open={this.state.open}
                    keepMounted
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >

                    <Grid container direction="row">

                        <DialogTitle id="alert-dialog-slide-title">

                            {/* <Grid item > */}
                            {/* <h2>{"ADD Order                                    "}</h2>
          <Button 
          ><CloseIcon></CloseIcon></Button> 
          </Grid> */}


                            <Box display="flex" alignItems="center">
                                <Box flexGrow={3} >
                                    <h4
                                        style={{
                                            textDecorationColor: "white",
                                            color: "rgb(255, 102, 0)",
                                            padding: "2px",
                                            textShadow: "1px solid white"

                                        }}
                                    > {"ADD Order"}</h4>
                                </Box>
                                <Box flexGrow={3} ><pre>{"         "}</pre></Box>
                                <Box flexGrow={3} ><pre>{"         "}</pre></Box>
                                <Box flexGrow={3} ><pre>{"         "}</pre></Box>
                                <Box flexGrow={3} ><pre>{"         "}</pre></Box>
                                <Box flexGrow={3} ><pre>{"         "}</pre></Box>
                                <Box flexGrow={3}>
                                    <CancelIcon onClick={this.handleClose}>
                                        {/* <CloseIcon /> */}
                                    </CancelIcon>
                                </Box>
                            </Box>

                        </DialogTitle>

                    </Grid>

                    <Divider variant="middle" style={{ backgroundColor: "grey" }} />
                    <DialogContent>

                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>            <option value="grapefruit">Grapefruit</option>
                                    <option value="lime">Lime</option>
                                    <option value="coconut">Coconut</option>
                                    <option value="mango">Mango</option>
                                </select>
                            </label>
                            <input type="submit" value="Submit" />
                        </form>

                    </DialogContent>


                    <Button onClick={this.handleClose}>Submit</Button>
                </Dialog>
            </div>

        );
    }
}