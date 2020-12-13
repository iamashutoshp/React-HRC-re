import React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import { Grid, TextField } from "@material-ui/core";

import ColorButton from '../../utils/OrgBuuton'


function AddForm(props) {

  return (
    <div>
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
            {/* ------------------------- order Date*/}
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
                  // fontWeight: "700",
                  color: "grey",
                  fontSize: "1.2rem",
                  height: "100%"
                }}
              >
                {"Order Date  "}
              </Grid>

              <Grid item style={{ flexGrow: "4" }}>
                <TextField
                  fullWidth
                  color="secondary"
                  name="order_Date"
                  type="date"
                  onChange={(event) =>
                    props.main.handleChange(event, "order_Date")
                  }
                />
              </Grid>
              <Grid item style={{ flexGrow: "2" }}></Grid>
            </Grid>
            {/* ------------------------- */}
            <Grid item xs={12}></Grid>
            {/* ------------------------- Customer Name*/}
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
                {"Customer Name  "}
              </Grid>

              <Grid item style={{ flexGrow: "4" }}>
                <TextField
                  fullWidth
                  color="secondary"
                  name="customer_Name"
                  type="text"
                  onChange={(event) =>
                    props.main.handleChange(event, "customer_Name")
                  }
                />
              </Grid>
              <Grid item style={{ flexGrow: "2" }}></Grid>
            </Grid>
            {/* ------------------------- */}
            <Grid item xs={12}></Grid>
            {/* ------------------------- Customer Number*/}
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
                {"Customer Number  "}
              </Grid>

              <Grid item style={{ flexGrow: "4" }}>
                <TextField
                  fullWidth
                  color="secondary"
                  name="customer_Number"
                  type="number"
                  onChange={(event) =>
                    props.main.handleChange(event, "customer_Number")
                  }
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
          </Grid>
         
          <div style={{ display: "flex", justifyContent: "center" }} >
              <ColorButton 
              onClick={props.main.AddhandleSubmit}
              size="small">
                ADD
              </ColorButton>
            </div>
        </form>
      </DialogContent>
    </div>
  );
}

export default AddForm;
