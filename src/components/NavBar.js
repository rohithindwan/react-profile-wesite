import {  NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
    return (
        <>
            
            <Navbar bg="dark" variant="dark" className='navBar'>
                <Container>
                    <Navbar.Brand to="/">Navbar</Navbar.Brand>
                    <Nav className="me-left">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/About">About</NavLink>
                        <NavLink to="/ContactForm">Contact</NavLink>
                        <NavLink to="/about">Portfolio</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;

