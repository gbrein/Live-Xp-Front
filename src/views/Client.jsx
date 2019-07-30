import React, {Component} from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBBtn,
    MDBModalFooter
} from 'mdbreact';

class Client extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {action} = this.props;
        const value = event.target.value;
        const id = event.target.id;
        action(value, id)
    }
    
    render(){
    const {loginData, buttonClick2} = this.props;
    
    return (
        <div className="c-login">
        <MDBContainer className="mx-auto justify-content-center">
            <MDBRow className="mx-auto justify-content-center">
                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody className="mx-4">
                            <div className="text-center">
                                <h3 className="dark-grey-text mb-5">
                                    <strong>Log in parceiro</strong>
                                </h3>
                            </div>
                            <MDBInput
                                label="Username"
                                type="email"
                                id = "username"
                                name = "username"
                                value = {loginData.username}
                                validate
                                onChange={this.handleChange}
                                error="wrong"
                                success="right"/>
                            <MDBInput
                                label="Password"
                                type="password"
                                name = "password"
                                value = {loginData.password}
                                id = "password"
                                onChange={this.handleChange}
                                validate
                                containerClass="mb-0"/>
                            <div className="text-center mb-3">
                                <MDBBtn type="button" color="blue-grey" onClick = {()=> buttonClick2()} rounded className="btn-block z-depth-1a">
                                    Sign in
                                </MDBBtn>
                            </div>
                        </MDBCardBody>
                        <MDBModalFooter className="mx-5 pt-3 mb-1">
                            <p className="font-small grey-text d-flex justify-content-end">
                                Not a member?
                                <a href="#!" className="blue-text ml-1">

                                    Sign Up
                                </a>
                            </p>
                        </MDBModalFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </div>
        )
    }
}

export default Client;