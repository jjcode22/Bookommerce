import React from 'react'
import { Row, Col} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar className='nav'  variant='light' expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand><img src="../logo.png" alt="" /> BooKommerce</Navbar.Brand>
        </LinkContainer> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to='/cart'>
            <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
            <Nav.Link href="/login"><i className='fas fa-user'></i>Sign In</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
