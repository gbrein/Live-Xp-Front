import React, {Component} from 'react';
import Card from './Card';
import {MDBRow} from 'mdbreact';

class Place extends Component {
    render() {
        const {schools} = this.props;
        return ( <> 
        <MDBRow className="no-gutters row-cards">
            { (schools)?
                schools.map(element => <Card data={element} /> )
                :false}
        </MDBRow> 
        </>
        )
    }
}

export default Place;