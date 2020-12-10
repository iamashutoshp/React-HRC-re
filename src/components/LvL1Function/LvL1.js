import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import { InputBase, IconButton  } from '@material-ui/core'
import ColorButton from '../../utils/OrgBuuton'
import ADD from './ADD'
import Grid from "@material-ui/core/Grid";

export default function LvL1(props) {

    const val =["hii","hello","bye"]
    return (
        <div>
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
            onClick={()=>props.main.handleEdit(val)}
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
            //   onChange={this.state.getData}
              
              
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
      
        </div>
    )
}
