import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBIcon,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
} from "mdbreact";


class Navi extends Component {
    state = {
        isOpen: false,
    };

    toggleCollapse = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <MDBNavbar color="stylish-color-dark" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">LiveXP</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse}/>
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink to="/">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink><Link to="Client">Acesso Parceiro</Link></MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem className="menu-right">
                                    <MDBDropdownItem a href = "logout">Logout</MDBDropdownItem>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default Navi;