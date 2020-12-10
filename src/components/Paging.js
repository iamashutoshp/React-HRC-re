
import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import { Button } from '@material-ui/core';

import PropTypes from "prop-types";
import {
    withStyles,
    makeStyles,
    createMuiTheme,
    ThemeProvider
} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        color: "orange",
        width: "100%",
        height: "100%",
        flexGrow: 1
    },

    styleButton: {
        backgroundColor: "#e6f2ff",
        maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'
    },

    pagingGrid: {
        color: "black",
        width: "100%",
        height: "100%",
        flexGrow: 1
    }

});

function Paging(props) {

    const classes = useStyles();
    return (
        <div>
            <Grid
                container
                direction="row"
                spacing={1}
                alignItems="flex-start"
                className={classes.pagingGrid}
            >

                {/* below home page table paging */}
                <Grid item >
                    <Button onClick={props.main.gotoHomePaging}
                    className={classes.styleButton}
                    ><b style={{ color: "#66b3ff" }}>{"<<"}</b></Button>
                </Grid>


                {/* below prev page table paging button */}
                <Grid item>
                    <Button onClick={props.main.goOneBackPaging}
                    className={classes.styleButton}><b style={{ color: "#66b3ff" }}>{"<"}</b></Button>
                </Grid>


                <Grid item >Page </Grid>

                {/* below current page number */}
                <Grid item>
                    <Button
                     className={classes.styleButton}><b style={{ color: "#66b3ff" }}>{props.main.state.pageNo}</b></Button>
                </Grid>


                <Grid item > of </Grid>


                <Grid item >
                    {" " + props.main.state.totalPage + " "}
                </Grid>

                {/* below next page table Paging button */}
                <Grid item >
                    <Button onClick={props.main.goOnNextPaging}
                    className={classes.styleButton}
                    ><b style={{ color: "#66b3ff" }}>{">"}</b></Button>
                </Grid>


                {/* below goto last page paging button */}
                <Grid item >
                    <Button onClick={props.main.gotoLastPage}
                    className={classes.styleButton}
                    ><b style={{ color: "#66b3ff" }}>{">>"}</b></Button>
                </Grid>


            {/* below optional right side footer */}
                
                {/* <Grid item sm={7}>
                    <Paper sm={7}></Paper>
                </Grid>
                <Grid item >
                    <Paper >Customers</Paper>
                </Grid> */}
            </Grid>
        </div>
    );
}

export default Paging;