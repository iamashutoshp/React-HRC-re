import React from 'react'

import ADD from './ADD'

import { Button, FormGroup, Grid, TextField, InputBase, IconButton  } from '@material-ui/core'
import ColorButton from '../../utils/OrgBuuton'
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';


export const Lvl1F = (props) =>{
    return (
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
            // onClick={props.edit}
            >
              EDIT
            </ColorButton>
          </Grid>
          
          
          <Grid item xs={8} sm={5}>
            <Paper xs={8}></Paper>
          </Grid>

          <Grid item xs={3}>
        <Paper xs={3} sm={2} component="form" 
        // className={classes.root}
        >
            <InputBase
            //   className={classes.input}
              type="number"
              placeholder="Search"
              inputProps={{ "aria-label": "search google maps" }}
              onChange={console.log("checking...........")}
              
              // {this.check}
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
       
    )
  }