import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import axios from 'axios'
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Divider from "@material-ui/core/Divider";
import { FormGroup, Grid, Paper, TextField } from "@material-ui/core";

import ColorButton from "../../utils/OrgBuuton";

import Title from "./Title";
import AddForm from "./AddForm";
export default class ADD extends React.Component {
  
  constructor(props) {
    console.log("Add constructor");
    super(props);
    this.state = {
      open: false,
      name: "ADD ORDER",
      order_Id: 0,
      order_Date: "",
      customer_Name: "",
      customer_Number: 0,
      order_Amount: 0,
      notes: ""
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.AddhandleSubmit = this.AddhandleSubmit.bind(this);
    
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

  handleChange = (event, field) => {
    this.setState({ [field]: event.target.value });
    console.log("in Set state :", this.state);
  };

  // submit Add form data
  AddhandleSubmit = async () =>{
    const send = {
        orderID: this.state.order_Id,
        orderDate: this.state.order_Date,
        customerName: this.state.customer_Name,
        customerID: this.state.customer_Number,
        orderAmt: this.state.order_Amount,
        notes: this.state.notes
      }

      // making post request for Addform verification
      const qs = require('querystring')
      
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      let res=""
      let status = false
      await axios.post('http://localhost:8080/1729197/add',
      qs.stringify(send), config)
      .then((response) => {
        console.log(response);
        
        if(response.data===true){
          res = " Order Data added..."
          alert(res)
          this.props.handlerFunction.handlerSetState()
        }
        else{
          res = "Order ID already exists or \nInComplete Form fields"
          alert(res)
        }

        
        //jb dialog close karke fir on karo ge tb agar commnet out hataya setstate ka to fir data field bhara rhega par values 0 pass hongi 
        // this.setState({
        //   order_Id: 0,
        //   order_Date: "",
        //   customer_Name: "",
        //   customer_Number: 0,
        //   order_Amount: 0,
        //   notes: ""
        // })
      }, (error) => {
        console.log(error);
      });

      
      this.handleClose();
      console.log("add data :" , send)

      

  };
  // add from submission done abve


  

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

        <Dialog open={this.state.open} keepMounted>
          <Paper style={{ padding: "2.5px" }}>
            <Title main={this} />

            <AddForm main={this} />
          </Paper>
        </Dialog>
      </div>
    );
  }
}
