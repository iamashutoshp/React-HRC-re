import React, { Component } from 'react'
import axios from 'axios'

import {CircularLoading} from '../utils/CircularLoading'

export class Handler extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lvl: props.lvl,
            row : [],
            columns : [],
            seen: false,
            selectedRowID: -1,
        }
    }

    renderSwitch(param) {

        switch (param) {
            case 'Level 2':
                return(
                <div>lvl2</div>
                    );
            case 'Level 3':
                return(
                    <div>lvl3</div>
                        );
            default:
                return(
                    <div>lvl1</div>
                        );
        }
    }


    render() {
        if(!this.state.seen){
        return (
            <CircularLoading/>
        )}
        else{
            return (
            <div>
                {this.renderSwitch(this.state.lvl)}
                hello    
            </div>
        )
        }
    }

    componentDidMount(){
        if(!this.state.seen){
            axios.get('http://localhost:8080/1729197/paging?pNo=' + 1, {
             })
                .then((response) => {
                    console.log("----------------------------------",response);
                    this.setState({
                        seen: true
                    })
            }
            )
        }
    }
}

export default Handler
