import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarComponent.scss';

function NavbarComponent() {
    var baseURL = '/vermont-green-magic/#/';
    return (
        <>
            <Navbar
                bg="dark"
                variant="dark"
                expand="lg"
                className="navbar_wrapper"
            >
                <Container>
                    <Navbar.Brand href={baseURL}>
                        Vermont Green Magic
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href={baseURL + 'productlist'}>
                                Products
                            </Nav.Link>
                            <Nav.Link href={baseURL + 'testimonials'}>
                                Testimonials
                            </Nav.Link>
                            <NavDropdown
                                title="Information"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href={baseURL + 'cbd'}>
                                    What is CBD?
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    href={baseURL + 'nutrient-brewing'}
                                >
                                    Nutrient Brewing
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href={baseURL + 'gallery'}>
                                Gallery
                            </Nav.Link>
                            <Nav.Link href={baseURL + 'contact'}>
                                Contact us
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;
