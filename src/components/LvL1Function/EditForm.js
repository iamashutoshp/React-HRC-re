import React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import { Grid, TextField } from "@material-ui/core";

function EditForm(props) {
  return (
    <DialogContent>
      <form onSubmit={props.main.handleSubmit}>
        <Grid container spacing={2} alignItems="center" direction="row">
          <Grid item xs={12}></Grid>
          {/* ------------------------- order ID*/}
          <Grid
            container
            spacing={2}
            alignItems="center"
            direction="row"
            display="flex"
          >
            <Grid item xs={2}></Grid>
            <Grid
              item
              style={{
                color: "grey",
                fontSize: "1.2rem",
                height: "100%"
              }}
            >
              {"Order ID  "}
            </Grid>

            <Grid item style={{ flexGrow: "4" }}>
              <TextField
                fullWidth
                color="secondary"
                name="order_Id"
                type="number"
                onChange={(event) => props.main.handleChange(event, "order_Id")}
              />
            </Grid>
            <Grid item style={{ flexGrow: "2" }}></Grid>
          </Grid>
          {/* ------------------------- */}
          <Grid item xs={12}></Grid>
          {/* ------------------------- Order Amount*/}
          <Grid
            container
            spacing={2}
            alignItems="center"
            direction="row"
            display="flex"
          >
            <Grid item xs={2}></Grid>
            <Grid
              item
              style={{
                color: "grey",
                fontSize: "1.2rem",
                height: "100%"
              }}
            >
              {"Order Amount  "}
            </Grid>

            <Grid item style={{ flexGrow: "4" }}>
              <TextField
                fullWidth
                color="secondary"
                name="order_Amount"
                type="number"
                onChange={(event) =>
                  props.main.handleChange(event, "order_Amount")
                }
              />
            </Grid>
            <Grid item style={{ flexGrow: "2" }}></Grid>
          </Grid>
          {/* ------------------------- */}
          <Grid item xs={12}></Grid>
          {/* ------------------------- Notes*/}
          <Grid
            container
            spacing={2}
            alignItems="center"
            direction="row"
            display="flex"
          >
            <Grid item xs={2}></Grid>
            <Grid
              item
              style={{
                color: "grey",
                fontSize: "1.2rem",
                height: "100%"
              }}
            >
              {"Notes  "}
            </Grid>

            <Grid item style={{ flexGrow: "4" }}>
              <TextField
                fullWidth
                color="secondary"
                name="notes"
                type="text"
                onChange={(event) => props.main.handleChange(event, "notes")}
              />
            </Grid>
            <Grid item style={{ flexGrow: "2" }}></Grid>
          </Grid>
          {/* ------------------------- */}
          <Grid item xs={12}></Grid>
          {/* ------------------------- Approved by ko auto populate karna hai props le kar aao 
          ya $ k hisab se condition hardcode kar do*/}
          <Grid
            container
            spacing={2}
            alignItems="center"
            direction="row"
            display="flex"
          >
            <Grid item xs={2}></Grid>
            <Grid
              item
              style={{
                color: "grey",
                fontSize: "1.2rem",
                height: "100%"
              }}
            >
              {"Approved By  "}
            </Grid>

            <Grid item style={{ flexGrow: "4" }}>
              <TextField
                fullWidth
                color="secondary"
                name="approved_By"
                type="text"
                onChange={(event) => props.main.handleChange(event, "approved_By")}
              />
            </Grid>
            <Grid item style={{ flexGrow: "2" }}></Grid>
          </Grid>
          {/* ------------------------- */}

          <Grid item xs={12}></Grid>
        </Grid>
      </form>
    </DialogContent>
  );
}

export default EditForm;
