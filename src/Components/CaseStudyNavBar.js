import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';








const CaseStudyNavBar = () => {


  

  return (
  <> 
<Navbar bg="light" expand="lg" className="NavBarStyles">
      <Container>
      <Navbar.Brand href="/" className="websiteTitle">AUBREY JONES</Navbar.Brand>
        <Navbar.Brand href="/catwalkco" className="websiteTitle">CATWALK CO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#challenge">CHALLENGE</Nav.Link>
            <Nav.Link href="#empathy">EMPATHY</Nav.Link>
            <Nav.Link href="#define">DEFINE</Nav.Link>
            <Nav.Link href="#prototype">PROTOTYPE</Nav.Link>
            <Nav.Link href="#test">LOW-FIDELITY TEST</Nav.Link>
            <Nav.Link href="#ui">UI</Nav.Link>
            <Nav.Link href="#hi-fi-test">HI-FIDELITY TEST</Nav.Link>
            <Nav.Link href="#test">FINAL THOUGHTS / NEXT STEPS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
}

export default CaseStudyNavBar;