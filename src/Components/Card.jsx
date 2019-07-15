import React from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
} from 'mdbreact';

function Card() {
    return ( <> <MDBCard className="each-card d-flex mr-auto justify-content-around" style={{
        width: "20rem"    }}>
        <MDBCardImage
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
            waves/>
        <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the
                card&apos;s content.
            </MDBCardText>
            <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
    </MDBCard> < />
 )
}

export default Card;