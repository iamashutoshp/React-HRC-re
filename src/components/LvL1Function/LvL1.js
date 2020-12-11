import React, { createRef } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import { InputBase, IconButton } from '@material-ui/core'
import ColorButton from '../../utils/OrgBuuton'
import ADD from './ADD'
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
  root: {
    "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      display: "none",
    }
  },

  search: {
      position: 'relative',
      backgroundColor: "#e6f3ff",
      '&:hover': {
        backgroundColor: "#e6f3ff",
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
      padding: "3px",
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },

    }
  }));

export default function LvL1(props) {

  const classes = useStyles();

  const val = ["hii", "hello", "bye"]
  return (
    <div>
      <Grid
        container
        direction="row"
        spacing={1}
        alignItems="flex-start"
        style={{
          color: "#66b5ff",
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
            onClick={() => props.main.handleEdit(val)}
          >
            EDIT
            </ColorButton>
        </Grid>


        {/* search bar below */}

        <Grid item xs={8} sm={7}>
          <Paper sm={7}></Paper>
        </Grid>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            // placeholder="Search…"
            placeholder="Order ID…"
            type="number"
            onWheel={e => {
              e.target.blur()
            }}
            onKeyDown={e => {
              if (e.keyCode === 38 || e.keyCode === 40) {
                e.preventDefault();
            }
            }}
            onChange={props.main.handleSearch}
            classes={{
              input: classes.inputInput,
            }}
            className={classes.root}

          />
        </div>
        <Grid item xs={3}>

        </Grid>

        {/* <SearchBar onChange={console.log(":jhgjhkjhkhkhkh")}></SearchBar> */}
      </Grid>

    </div>
  )
}
