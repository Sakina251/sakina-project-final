

import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = ({ items }) => {





    return (
        <Navbar expand="lg" fixed='top' className='d-flex justify-conter-center align-items-center  navbar-container' variant='light'>
            <Container className='py-2 appbar text-light'>
            <img src="https://bootstrapious.com/i/snippets/sn-nav-logo/logo.png" width="40" alt="" class="d-inline-block align-middle mr-2"></img>
           <NavLink to='/home' className='link'><h2> Stree</h2></NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-4 my-lg-0"
                        style={{ maxHeight: '1000px' }}
                        navbarScroll
                    >
                        <Nav.Link ><NavLink to='./home' className='link'>HOME</NavLink></Nav.Link>
                        <Nav.Link ><NavLink to='/job' className='link'>JOBS</NavLink></Nav.Link>
                        <Nav.Link><NavLink to='/allcourses' className='link'>COURSES</NavLink></Nav.Link>
                        
                        <Nav.Link><NavLink to='/cart' className='link'><i className="fas fa-shopping-cart text-light "></i><span className='primary-color ms-1'>{items}</span></NavLink></Nav.Link>
                        <Nav.Link ><NavLink to='/about' className='link'>ABOUT</NavLink></Nav.Link>
                        <Nav.Link ><NavLink to='/signup' className='link'>SIGN UP</NavLink></Nav.Link>
                        
                        
                        
                        

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
