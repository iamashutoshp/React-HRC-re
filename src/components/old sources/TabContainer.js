import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import PaginationButtons from '../utils/Paging'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// console.log(rows);
 function BasicTable(props) {
   
    console.log(props.rows);
    // console.log(props.columns);
  const classes = useStyles();
if(props.search===''){
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order Date</TableCell>
            <TableCell align="center">Approved By</TableCell>
            <TableCell align="center">Order ID</TableCell>
            <TableCell align="center">Compant Name</TableCell>
            <TableCell align="center">Company ID</TableCell>
            <TableCell align="center">Order Amount</TableCell>
            <TableCell align="center">Approval Status</TableCell>
            <TableCell align="center">Notes </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (  
            <TableRow key={row.id}>
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
    );
}
else{
    return(
        <div>helllo</div>
    )
}
}

export default BasicTable;