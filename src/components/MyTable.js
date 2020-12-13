import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";



const change = (props,id) =>{
    props.getCheckboxRow(id)
}
function MyTable(props) {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table
                    aria-label="simple table">
                    <TableHead style={{
                        backgroundColor: "#d4b0f5"
                    }}>
                        <TableRow>
                            <TableCell padding="checkbox">
                                {/* for check box header */}
                            </TableCell>
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
                        {props.handler.state.rows.map((row) => (

                            <TableRow key={row.id}
                                style={row.id % 2 ? { background: "#e6f3ff" } : { background: "white" }}
                            >

                                <TableCell padding="checkbox">
                                    <Checkbox
                                        // onClick={() => props.handler.getCheckboxRow(row)}
                                        // onChange={()=>this.getCheckboxRow(row)}
                                        onClick={()=> change(props.handler,row.id)}
                                        checked={props.handler.state.clickedRow == row.id ? true : false}

                                    // checked={isItemSelected}
                                    // inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </TableCell>
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
    )
}

export default MyTable
