import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const NavigationBar = () => {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            {/* Add more Nav.Link elements for additional navigation items */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
  
  export default NavigationBar;
  