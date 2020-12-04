import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";


function NavExtra() {
  return (
      
<Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className="navbar-custom">
        <Navbar.Brand href="/"><img src="images/logo_new.png"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav id="navClass" className="ml-auto nav-item">
                <Nav.Item>
                    <Nav.Link id="navLink" eventKey="1" as={Link} to="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link id="navLink" eventKey="2" as={Link} to="/services">Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link id="navLink" eventKey="3" as={Link} to="/seeker">Seeker</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link id="navLink" eventKey="4" as={Link} to="/speaker">Speaker</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link id="navLink" eventKey="5" as={Link} to="/events">Events</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link id="navLink" eventKey="6" as={Link} to="/team">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link id="navLink" eventKey="7" as={Link} to="/contact">Contact</Nav.Link>
                </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default NavExtra;


 
 
