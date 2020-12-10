import React, { Component } from 'react'
import axios from 'axios'

import { CircularLoading } from '../utils/CircularLoading'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";


import GridHRCLogo from "../utils/GridHRCLogo";


import LvL1 from './LvL1Function/LvL1'



export class Handler extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lvl: props.lvl,
            rows: [],
            columns: [],
            seen: false,
            selectedRowID: -1,
            search: ''
        }
    }

    handleEdit(props) {
        console.log("editing...................", props.val)
        console.log(this.state.rows)
    }

    handleSearch = (event) => {
        this.setState(
            {
                search: event.target.value
            });
        
        console.log("searching...................", this.state.search)
    }

    renderSwitch(param) {

        switch (param) {
            case 'Level 2':
                return (
                    <div>lvl2</div>
                );
            case 'Level 3':
                return (
                    <div>lvl3</div>
                );
            default:
                return (
                    <LvL1 main={this} />
                );
        }
    }


    render() {


        const { classes } = this.props
        if (!this.state.seen) {
            return (
                <CircularLoading />
            )
        }
        else {
            return (
                <div>
                    <GridHRCLogo />

                    <div
                        style={{
                            border: "2px solid",
                            padding: "15px",
                            boxShadow: "20px 20px 50px 15px grey",
                            height: "100%"
                        }}
                    >
                        {this.renderSwitch(this.state.lvl)}
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
                                    height: "100%",
                                    width: "100%"
                                }}
                            >
                                <TableContainer component={Paper}>
                                    <Table
                                        aria-label="simple table">
                                        <TableHead style={{
                                            backgroundColor: "#d4b0f5"}}>
                                            <TableRow>
                                                <TableCell><b>Order Date</b></TableCell>
                                                <TableCell align="center"><b>Approved By</b></TableCell>
                                                <TableCell align="center"><b>Order ID</b></TableCell>
                                                <TableCell align="center"><b>Compant Name</b></TableCell>
                                                <TableCell align="center"><b>Company ID</b></TableCell>
                                                <TableCell align="center"><b>Order Amount</b></TableCell>
                                                <TableCell align="center"><b>Approval Status</b></TableCell>
                                                <TableCell align="center"><b>Notes </b></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {this.state.rows.map((row) => (
                                                <TableRow key={row.id}
                                                style ={ row.id % 2? { background : "#e6f3ff" }:{ background : "white" }}
                                                >
                                                    <TableCell component="th" scope="row">{row.Order_Date}</TableCell>
                                                    <TableCell align="center">{row.Approved_By}</TableCell>
                                                    <TableCell align="center">{row.Order_Id}</TableCell>
                                                    <TableCell align="center">{row.Company_Name}</TableCell>
                                                    <TableCell align="center">{row.company_Id}</TableCell>
                                                    <TableCell align="center">{row.Order_amount}</TableCell>
                                                    <TableCell align="center">{row.Approval_status}</TableCell>
                                                    <TableCell align="center">{row.Notes}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>

                                    </Table>
                                </TableContainer>
                            </div>
                        </Grid>
                    </div>
                </div>
            )
        }
    }

    componentDidMount() {
        if (!this.state.seen) {
            axios.get('http://localhost:8080/1729197/paging?pNo=' + 1, {
            })
                .then((response) => {
                    console.log("----------------------------------", response);
                    this.setState({
                        seen: true,
                        rows: response.data.data
                    })
                }
                )
        }
    }
}

export default Handler
