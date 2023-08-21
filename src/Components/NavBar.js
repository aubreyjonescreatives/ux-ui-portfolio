import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SocialMedia from '../Components/SocialMedia';
import '../../src/Portfolio.css';



const NavBar = () => {


  

  return (
  <> 
<Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/" className="navLogo">AUBREY JONES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#projects" className="navLink">PROJECTS</Nav.Link>
            <Nav.Link href="/about" className="navLink">ABOUT</Nav.Link>
            <Nav.Link href="/resume" className="navLink">RESUME</Nav.Link>
          </Nav>
          <Container className="navSocial">
        <SocialMedia />
      </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
}

export default NavBar;