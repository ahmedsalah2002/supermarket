import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { toTop } from '../App';

function AppNavbar(){
    return(
        <Navbar className=' navbar fixed-top mb-5' bg="light" expand="lg">
        <Container>
          <Link to="/" className=' navbar-brand nav d-flex align-items-center' href="#home"><FontAwesomeIcon icon={faShoppingBasket} className="me-3" />Supermarket</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" Nav ms-auto">
              <Link to="/" onClick={toTop} className='nav-link' >Home</Link>
              <Link to="/shop" onClick={toTop} className='nav-link' >Shop</Link>
              <Link to="/about" onClick={toTop} className='nav-link' >About</Link>
              <Link to="/review" onClick={toTop} className='nav-link'>Review</Link>
              <Link to="/blog"  onClick={toTop} className='nav-link'>Blog</Link>
              <Link  to="/contact" onClick={toTop} className='nav-link'>Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default AppNavbar;