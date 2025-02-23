import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
import HelloMomentsFull from '../Images/logos/hellomomentslogo.png'; 
import CatWalkCo from '../Images/logos/fulllogo-xl.png';
import InstaFresh from '../Images/logos/instafresh.png';



const LogoDesigns = () => {
  return (
    <>
    <Navbar bg="light" expand="lg" className="NavBarStyles">
      <Container>
        <Navbar.Brand href="/" className="websiteTitle">AUBREY JONES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#logosamples">LOGO SAMPLES</Nav.Link>
            <Nav.Link href="#connect">CONNECT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<Carousel className="carouselStyles">
      <Carousel.Item className="carouselItem">
        <img
          className="d-block carouselImage"
          src={HelloMomentsFull}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carouselImage"
          src={CatWalkCo}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carouselImage"
          src={InstaFresh}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>


</>


  )
}

export default LogoDesigns