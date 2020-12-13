// file Handling Table page after Login
import React, { Component } from 'react'
import axios from 'axios'

import { CircularLoading } from '../utils/CircularLoading'
import Checkbox from '@material-ui/core/Checkbox';

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
import { Button } from '@material-ui/core';
import Paging from './Paging'
import MyTable from './MyTable'
import LvL2_3 from './LvL2_3Function/LvL2_3'

export class Handler extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lvl: props.lvl,
            rows: [],
            columns: [],
            seen: false,
            selectedRowID: -1,
            search: '',
            pageNo: 0,
            totalPage: 0,

            clickedRow: -1,
        }

        this.handleEdit = this.handleEdit.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.goOnNextPaging = this.goOnNextPaging.bind(this);
        this.goOneBackPaging = this.goOneBackPaging.bind(this);
        this.gotoHomePaging = this.gotoHomePaging.bind(this);
        this.gotoLastPage = this.gotoLastPage.bind(this);
        this.getCheckboxRow = this.getCheckboxRow.bind(this);
    }

    handleEdit(props) {
        // this function is just for sample checking of Level2_3 approve rejection
        // console.log("editing...................", props.val)
        // console.log(this.state.rows)
    }

    // searching functionality below
    handleSearch = async (event) => {

        console.log(event.target.value)

        if (event.target.value.length >= 1) {
            await axios.get('http://localhost:8080/1729197/search?s=' + event.target.value + "&pNo=" + 1, {
            })
                .then((response) => {
                    this.setState({
                        seen: true,
                        rows: response.data.data,
                        pageNo: response.data.pageNo,
                        totalPage: response.data.totalSize
                    })
                })
        }
        else {
            axios.get('http://localhost:8080/1729197/paging?pNo=' + 1, {
            })
                .then((response) => {
                    console.log("----------------------------------", response);
                    this.setState({
                        seen: true,
                        rows: response.data.data,
                        pageNo: response.data.pageNo,
                        totalPage: response.data.totalSize
                    })
                })
        }


    }
    // searching functionality done above




    // pagination handle functions start below
    gotoHomePaging = async () => {
        console.log("Ist page of table")
        if (this.state.pageNo > 1) {
            await axios.get('http://localhost:8080/1729197/paging?pNo=' + 1, {
            })
                .then((response) => {
                    this.setState({
                        seen: true,
                        rows: response.data.data,
                        pageNo: response.data.pageNo,
                        totalPage: response.data.totalSize
                    })
                })
        }
    }

    goOneBackPaging = async () => {
        console.log("one page back", this.state.pageNo)
        if (this.state.pageNo - 1 > 0) {
            await axios.get('http://localhost:8080/1729197/paging?pNo=' + (this.state.pageNo - 1), {
            })
                .then((response) => {
                    this.setState({
                        seen: true,
                        rows: response.data.data,
                        pageNo: response.data.pageNo,
                        totalPage: response.data.totalSize
                    })
                })
        }

    }

    goOnNextPaging = async () => {
        console.log("on next page", this.state.pageNo)
        if (this.state.pageNo + 1 <= this.state.totalPage) {
            await axios.get('http://localhost:8080/1729197/paging?pNo=' + (this.state.pageNo + 1), {
            })
                .then((response) => {
                    this.setState({
                        seen: true,
                        rows: response.data.data,
                        pageNo: response.data.pageNo,
                        totalPage: response.data.totalSize
                    })
                })
        }
    }

    gotoLastPage = async () => {
        console.log("last page of table")
        if (this.state.pageNo < this.state.totalPage && this.state.totalPage > 1) {
            await axios.get('http://localhost:8080/1729197/paging?pNo=' + this.state.totalPage, {
            })
                .then((response) => {
                    this.setState({
                        seen: true,
                        rows: response.data.data,
                        pageNo: response.data.pageNo,
                        totalPage: response.data.totalSize
                    })
                })
        }
    }
    // pagination handle functions end above


    // alloting renders case on base on level of the user
    renderSwitch(param) {

        switch (param) {
            case 'Level 1':
                return (
                    <LvL1 main={this} />
                );
            default:
                return (
                    <LvL2_3 main={this} />  
                );
        }
    }

    // done with the cases


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
                        }}>

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
                            alignItems="flex-start">
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
                                }}>
                                    <MyTable handler={this}/>
                                    <br />
                                    <Paging main={this} />
                                    {/* <Button>page</Button> */}
                            </div>
                        </Grid>
                    </div>
                    </div>
            )
        }
    }


    getCheckboxRow = (id) => {
        console.log("inside checkbox  ")
        console.log(id)
        // let val = this.state.clickedRow
        if(this.state.clickedRow==-1){
        this.setState({
            clickedRow: id
        })
        }   
        else{
            this.setState({
                clickedRow: -1
            })  
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
                                    rows: response.data.data,
                                    pageNo: response.data.pageNo,
                                    totalPage: response.data.totalSize
                                })
                            })
                    }
    }
}
export default Handler
