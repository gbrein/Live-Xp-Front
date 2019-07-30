import React from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
} from 'mdbreact';

function Card(props) {
    const {data} = props;
    console.log(data)
    return ( <> <MDBCard className="each-card d-flex mr-auto justify-content-around" style={{
        width: "20rem"    }}>
        <MDBCardImage 
            className="img-fluid"
            src={data.imgLink}
            waves/>
        <MDBCardBody>
            <MDBCardTitle>{data.nome}</MDBCardTitle>
            <MDBCardText>
                {data.descricao}
            </MDBCardText>
            <MDBBtn href="#">Ver Mais</MDBBtn>
        </MDBCardBody>
    </MDBCard> < />
 )
}

export default Card;