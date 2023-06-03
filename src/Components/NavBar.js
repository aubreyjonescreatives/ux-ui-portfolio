import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';








const NavBar = () => {


  

  return (
  <> 
<Navbar bg="light" expand="lg" className="NavBarStyles">
      <Container>
        <Navbar.Brand href="/" className="websiteTitle">AUBREY JONES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#uxuidesign">UX/UI DESIGN CASE STUDIES</Nav.Link>
            <Nav.Link href="#samplework">SAMPLE WORK</Nav.Link>
            <Nav.Link href="#connect">CONNECT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
}

export default NavBar;