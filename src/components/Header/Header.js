import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return (
        <Container>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand as={NavLink} to="/">MealDB!!</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                            <NavDropdown title="Meals" id="navbarScrollingDropdown">
                                <NavDropdown.Item
                                    as={NavLink}
                                    to="/allmeals">All Meals
                                </NavDropdown.Item>

                                <NavDropdown.Item
                                    as={NavLink}
                                    to="/contact">Contact
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={props.handelInputText}
                            />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;