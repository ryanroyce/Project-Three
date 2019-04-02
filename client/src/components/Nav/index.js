import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
   } from 'reactstrap';

export default class Menubar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav  className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/search"> Search Movies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/saved">Saved Movies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/settings">Settings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Logout</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

