import React, {Component} from "react";
import {MDBCol, MDBFormInline, MDBBtn} from "mdbreact";

class Header extends Component {
    render() {
        return (
            <div className="c-header d-flex">
                <MDBCol md="12 justify-content-around ">
                    <MDBFormInline className="mx-auto justify-content-around md-form mr-auto mb-4">
                        <div className="d-flex justify-content-around">
                            <input
                                className="form-control mr-sm-2"
                                type="text"
                                placeholder="Aulas"
                                aria-label="Search"/>
                            <MDBBtn color="unique" rounded size="sm" type="submit" className="mr-auto">
                                Buscar
                            </MDBBtn>
                        </div>
                    </MDBFormInline>
                </MDBCol>
            </div>
        )
    }
}

export default Header