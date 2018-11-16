import React, { Component } from 'react'
import "./NavHeader.css";
import { 
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
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
        const { collapsed, currentPage } = this.state;

        return (
            <Navbar className="p-0" color="dark" dark expand="sm">
            <NavbarBrand href="/" className="mr-auto">Blogden</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav className="ml-2" navbar>
                <NavItem className={currentPage === "dashboard" ? "px-2 active" : "px-2"}>
                    <NavLink>
                        Dashboard
                    </NavLink>
                </NavItem>
                <NavItem className={currentPage === "posts" ? "px-2 active" : "px-2"}>
                    <NavLink>
                        Posts
                    </NavLink>
                </NavItem>
                <NavItem className={currentPage === "categories" ? "px-2 active" : "px-2"}>
                    <NavLink>
                        Categories
                    </NavLink>
                </NavItem>
                <NavItem className={currentPage === "users" ? "px-2 active" : "px-2"}>
                    <NavLink>
                        Users
                    </NavLink>
                </NavItem>
              </Nav>

              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                    <i className="fas fa-user"></i> Welcome!
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            <a href="/profile">
                                <i className="fas fa-user-circle"></i> Profile
                            </a>
                        </DropdownItem>
                        <DropdownItem>
                            <a href="/settings">
                                <i className="fas fa-cog"></i> Settings
                            </a>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <NavLink href="/login">
                    <i className="fas fa-user-times"></i> Logout
                </NavLink>
              </Nav>
            </Collapse>
          </Navbar>
   
        )
    }
}
