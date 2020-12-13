import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Divider from "@material-ui/core/Divider";
import { FormGroup, Grid, Paper, TextField } from "@material-ui/core";

import ColorButton from "../../utils/OrgBuuton";

import Title from "./Title";
import EditForm from "./EditForm";

export default class EDIT extends React.Component {
  constructor(props) {
    console.log("Add constructor");
    super(props);
    this.state = {
      open: false,
      name: "EDIT ORDER",
      order_Id: 0,
      order_Amount: 0,
      notes: "",
      approved_By: ''
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }



  handleClickOpen = (event) => {
    if(this.props.row[0]!=-1){
    this.setState({
      open: true
    });
    }

    console.log("inside open : ", this.state.open);
  };

  handleClose = () => {
    console.log("inside close");
    this.setState({
      open: false
    });
    console.log("inside close : ", this.state.open);
  };

  handleChange = (event, field) => {
    this.setState({ [field]: event.target.value });
    console.log("in Set state :", this.state);
  };

  render() {

    console.log("inside Edit.js",this.props.row)
    return (
      <div>
        <ColorButton
          variant="contained"
          color="primary"
          onClick={this.handleClickOpen}
        >
          EDIT
        </ColorButton>

        <Dialog open={this.state.open} keepMounted>
          <Paper style={{ padding: "2.5px" }}>
            <Title main={this} />

            <EditForm main={this} />

            <div style={{ display: "flex", justifyContent: "center" }}>
              <ColorButton onClick={this.handleClose}
              // yha par onClick wale function m data backend p verify karo
              size="small">
                Submit
              </ColorButton>
            </div>
          </Paper>
        </Dialog>
      </div>
    );
  }
}
