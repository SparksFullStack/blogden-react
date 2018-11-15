import React, { Component } from 'react'
import "./NavHeader.css";
import { 
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink
 } from 'reactstrap';

export default class NavHeader extends Component {
    state = {
        collapsed: true,
        currentPage: "dashboard"
    }
    
    toggleNavbar = () => {
        this.setState({ collapsed: !this.state.collapsed })
    }


    render() {
        return (
            <Navbar className="p-0" color="dark" dark expand="sm">
            <NavbarBrand href="/" className="mr-auto">Blogden</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem className={this.state.currentPage === "dashboard" ? "px-2 active" : "px-2"}>
                    <NavLink>
                        Dashboard
                    </NavLink>
                </NavItem>
                <NavItem className="px-2">
                    <NavLink>
                        Posts
                    </NavLink>
                </NavItem>
                <NavItem className="px-2">
                    <NavLink>
                        Categories
                    </NavLink>
                </NavItem>
                <NavItem className="px-2">
                    <NavLink>
                        Users
                    </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
   
        )
    }
}
