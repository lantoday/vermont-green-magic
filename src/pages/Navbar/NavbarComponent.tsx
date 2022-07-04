import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './NavbarComponent.scss'

function NavbarComponent() {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg' className='navbar_wrapper'>
        <Container>
          <Navbar.Brand href='/vermont-green-magic/#/'>Vermont Green Magic</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href='/vermont-green-magic/#/'>Home</Nav.Link>
              <Nav.Link href='/vermont-green-magic/#/about'>About</Nav.Link>          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>    
    </>
  );
}

export default NavbarComponent;
