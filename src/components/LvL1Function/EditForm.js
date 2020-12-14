import React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import { Grid, TextField } from "@material-ui/core";
import ColorButton from '../../utils/OrgBuuton'

function EditForm(props) {

  console.log("inside EditForm ", props.main.state)

  let approvedName = ''
  let amt = props.main.state.order_Amount

  if (amt <= 10000)
    approvedName = 'David Lee'
  else if (amt > 10000 && amt <= 50000)
    approvedName = 'Laura Smith'
  else
    approvedName = 'Matthew Vance'

  // console.log("inside EditForm oId: ",props.main.state.order_Id)
  // console.log("inside EditForm amt: ",props.main.state.order_Amount)
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
              {"Order ID       "}
            </Grid>

            <Grid item style={{ flexGrow: "4" }}>
              <TextField
                inputProps={{
                  readOnly: true,
                  disabled: true,
                }}
                // value={props.main.state.order_Id}
                placeholder={props.main.state.order_Id}
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
                // value={props.row.Order_amount}
                value={props.main.state.order_Amount}
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
                value={props.main.state.notes}
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
          {/* ------------------------- Approved by auto populated */}
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
                inputProps={{
                  readOnly: true,
                  disabled: true,
                }}
                // value={props.main.state.approved_By}
                // placeholder={props.main.state.approved_By}
                placeholder={approvedName}
                
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
          <br/>
          <div style={{ display: "flex", justifyContent: "center" }}>
              <ColorButton onClick={()=>props.main.handleEditSubmit(approvedName)}
              size="small">
                Submit
              </ColorButton>
            </div>
        
      </form>
    </DialogContent>
  );
}

export default EditForm;
