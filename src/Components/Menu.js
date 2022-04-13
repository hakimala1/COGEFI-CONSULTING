import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Menu() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home">COGEFI CONSULTING</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Accueil</Nav.Link>
                        <Nav.Link href="#pricing">Notre cabinet</Nav.Link>
                        <Nav.Link href="#pricing">Nos Sevices</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Contact</Nav.Link>
                     
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu