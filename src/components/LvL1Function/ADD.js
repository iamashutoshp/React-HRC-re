import React from "react";

import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Divider from "@material-ui/core/Divider";
import { FormGroup, Grid, Paper, TextField } from "@material-ui/core";
import {
  InputLabel,
  Input,
  FormHelperText,
  FormControl
} from "@material-ui/core";

import ColorButton from "../../utils/OrgBuuton";

import Title from "./Title";

export default class ADD extends React.Component {
  constructor(props) {
    console.log("Add constructor");
    super(props);
    this.state = {
      open: false,
      name: "ADD ORDER"
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
        //   variant="contained"
        //   color="primary"
          onClick={this.handleClickOpen}
        >
          ADD
        </ColorButton>

        <Dialog
          open={this.state.open}
          keepMounted
        //   aria-labelledby="alert-dialog-slide-title"
        //   aria-describedby="alert-dialog-slide-description"
        >
          <Title main={this} />

          <DialogContent>
            <form onSubmit={this.handleSubmit}>
              <label>
                Pick your favorite flavor:
                <select value={this.state.value} onChange={this.handleChange}>
                  {" "}
                  <option value="grapefruit">Grapefruit</option>
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
