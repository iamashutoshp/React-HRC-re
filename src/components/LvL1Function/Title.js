import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
// import CancelIcon from "@material-ui/icons/Cancel";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  root: {
    color: "orange",
    width: "100%",
    height: "100%",
    flexGrow: 1
  },
  title: {
    fontWeight: "700",
    color: "grey",
    fontSize: "1.5rem",
    height: "100%"
  },
  dividerYellow: {
    backgroundColor: "#ff9429",
    padding: "0.8px"
  },
  dividerGrey: {
    backgroundColor: "light grey",
    padding: "0.6px"
  },
  icon: {
    fontWeight: "700",
    color: "grey",
    fontSize: "1.4rem",
    height: "100%"
  },
  paper: {
    backgroundColor: "transparent",
    boxShadow: "none",
    fontWeight: "700",
    fontSize: "1.4rem",
    height: "100%"
  }
});

function Title(props) {
  const classes = useStyles();
  return (
    <DialogTitle id="alert-dialog-slide-title">
      <Grid container display="flex">
        <Grid item>
          <div className={classes.title}>{props.main.state.name}</div>
          <Divider className={classes.dividerYellow} />
        </Grid>
        <Grid item style={{ flexGrow: "6" }}>
          <Paper size="medium" className={classes.paper} />
          <Divider className={classes.dividerGrey} />
        </Grid>
        <Grid item>
          <Button onClick={props.main.handleClose} className={classes.icon}>
            <CloseIcon />
          </Button>
          <Divider className={classes.dividerGrey} />
        </Grid>
      </Grid>
    </DialogTitle>
  );
}

export default Title;
