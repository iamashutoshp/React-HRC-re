import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Hrclog from "./hrc-logo.svg";
import Abc from "./abc-logo.png";

const useStyles = makeStyles({
  root: {
    color: "orange",
    width: "100%",
    height: "100%",
    flexGrow: 1
  },
  rowLayout: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center" // To be vertically aligned
  }
});

export default function GridHRCLogo() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="row" spacing={4}>
      <Grid
        item
        xs={3}
        sm={3}
        //  alignItems="flex-start"
      >
        <img
          src={Hrclog}
          alt="highradius"
          style={{
            flex: 1,
            aspectRatio: 1,
            resizeMode: "contain",
            width: "100%",
            height: "100%"
          }}
        />
      </Grid>
      <Grid item xs={6} sm={6}>
        <img
          src={Abc}
          alt="ABC"
          style={{
            flex: 1,
            aspectRatio: 1,
            resizeMode: "contain",
            width: "100%",
            height: "100%"
          }}
        />
      </Grid>
    </Grid>
  );
}
