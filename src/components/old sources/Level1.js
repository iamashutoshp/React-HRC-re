import * as React from "react";
// import { DataGrid, cellClassName } from "@material-ui/data-grid";
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

import {Lvl1F} from '../components/handleLvL1/Lvl1Function'
// --------------------------------------------------

import { rows, columns } from "./constants";
import TabContainer from "./TabContainer"
import GridHRCLogo from "../utils/GridHRCLogo";

import ADD from '../components/handleLvL1/ADD'

import { Button, FormGroup,  TextField, InputBase, IconButton  } from '@material-ui/core'
import ColorButton from '../utils/OrgBuuton'
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "flex-end",
    width: 300
  },
  input: {
    marginRight: theme.spacing(2),
    flex: 4,
    // width: "100%",
    textAlign: "center"
  },
  iconButton: {
    padding: 9
  },
  divider: {
    height: 8,
    margin: 4
  }
})


class Level1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
      search: '',
      choice: '',
    };

    this.check=this.check.bind(this);
    this.getData=this.getData.bind(this);
  }

  check(event){
    this.setState({
      search : event.target.value
    })
    console.log("searching : ",this.state.search)
    console.log("searching : ",this.props.lvl)
  }

  getData(){
    console.log("fetching........")
  }



  AddData(props){
    console.log("adding in db......",props)
  }
  render() {

    

    

    const { classes } = this.props;

    return (
      <div>
        {/* {this.getData()} */}
        <GridHRCLogo />

        {/* hrc & ABC logo done */}
        
        <div
          style={{
            border: "2px solid",
            padding: "15px",
            boxShadow: "20px 20px 50px 15px grey"
          }}
        >
          {/* <Lvl1F />   */}
          <Grid
          container
          direction="row"
          spacing={1}
          alignItems="flex-start"
          style={{
            color: "orange",
            width: "100%",
            height: "100%",
            flexGrow: 1
          }}
        >
          {/* goto ADD.js file in handle level1 */}
          <Grid item xs={1} sm={1}>
            <ADD />
          </Grid>
          <Grid item xs={1} sm={1}>
            <ColorButton xs={1} 
            >
              EDIT
            </ColorButton>
          </Grid>
          
          
          {/* search bar below */}
          <Grid item xs={8} sm={5}>
            <Paper xs={8}></Paper>
          </Grid>

          <Grid item xs={3}>
        <Paper xs={3} sm={2} component="form" 
        // className={classes.root}
        >
            <InputBase
              // className={classes.input}
              type="number"
              placeholder="Search"
              inputProps={{ "aria-label": "search google maps" }}
              onChange={this.state.getData}
              
              
            />
            <IconButton
              type="submit"
            //   className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid> 
          
          {/* <SearchBar onChange={console.log(":jhgjhkjhkhkhkh")}></SearchBar> */}
        </Grid>
      
           {/* search and edit above done add functionality */}

        {/* add edit search above  */}
        {console.log(this.state.data)}

        <Grid
          container
          style={{
            color: "orange",
            width: "100%",
            flexGrow: 1
          }}
          direction="row"
          spacing={1}
          alignItems="flex-start"
        >
          <Grid item xs={12} />
          <Grid item xs={12} />
          

          <div
            style={{
              color: "rgb(201, 184, 107)",
              flexGrow: 1,
              border: "2px solid",
              padding: "15px",
              height: "100vh",
              width: "100vw"
            }}
          > 
            <TabContainer rows={rows} columns={columns} search={this.state.search}></TabContainer>
            </div>
        </Grid>
      </div>
      </div >
    );
  }
}

export default withStyles(styles)(Level1);

