import React, {Component} from 'react';
import Card from './Card';
import {MDBRow} from 'mdbreact';

class Place extends Component {
    render() {
        return ( <> 
        <MDBRow className="no-gutters row-cards">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </MDBRow> 
        </>
        )
    }
}

export default Place;