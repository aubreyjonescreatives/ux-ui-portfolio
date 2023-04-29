import * as React from 'react'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col } from 'react-grid-system';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BrandDashboardHomepage from '../Images/codafi/BrandDashboardHomepageHi-FiCompositionsSlide1.png';
import BeforeandAfterHero from '../Images/codafi/beforeandafterheroimage.png';
import CleanPreCheck from '../Images/codafi/cleanprecheck.png'; 






const designB = {
    bgcolor: 'white',
  
  }
  
  const headerB = {
  padding: '50px 70px', 
  color: '#30638E', 
  fontSize: '40px', 
  fontFamily: 'Lato', 
  fontWeight: '400', 
  }
  
  
  
  
  
  
  const paragraphB = {
  padding: '20px 70px',
  fontSize: '20px', 
  fontFamily: 'Roboto serif',
  fontWeight: '300'
  }
  
  const imageStylesB = { 
    width: '70%',
    display: 'block', 
    margin: '75px auto 75px auto', 
    textAlign: 'center', 
    
    }
  





const CT = () => {
  return (
    <>

<Navbar bg="light" expand="lg" className="NavBarStyles">
      <Container>
        <Navbar.Brand href="/" className="websiteTitle">AUBREY JONES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#codafitechnology">CODAFI TECHNOLOGY</Nav.Link>
            <Nav.Link href="#connect">CONNECT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
{/*codafitechnology*/}


<Box sx={designB} id="codafitechnology">


<Typography sx={headerB}>Codafi Technology</Typography>

<Typography sx={paragraphB}>In 2020, I had the pleasure of working at a startup called Codafi Technology, LLC as a UX/UI designer. I worked closely 
with a small team of designers, business management, and clientele. I definitely learned a lot about collaborating with people 
of different cultures in a remote setting and Figma as the design tool of choice at the time. It was a lot of fun working through 
different design iterations, learning more about minimalistic design, and discovering the right fit with others. 
I discovered a lot about myself and how I wish to improve as a UX/UI designer.</Typography>


<Typography sx={paragraphB}>Here are some Figma design iterations. Our clientele often gave us very specific feature and 
design layout requests. While I was not part of their official launch date and final design mockups, I was 
lucky to learn a little bit about their design thinking process with UI redesigns.  
 </Typography>



<Row>



<Col sm={12} md={6} xl={4}>

<Typography sx={paragraphB}>Hero Image Updates</Typography>


<Card sx={imageStylesB}>
  <CardMedia
    component="img"
    alt="Hero Image Updates"
    image={BeforeandAfterHero}
   
  />
 
 
</Card>

</Col>



<Col sm={12} md={6} xl={4}>

<Typography sx={paragraphB}>Brand Dashboard Homepage</Typography>


<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Brand Dashboard Homepage"
        image={BrandDashboardHomepage}
       
      />
     
     
    </Card>

    </Col>


   


    <Col sm={12} md={6} xl={4}>

    <Typography sx={paragraphB}>Clean PreCheck</Typography>


<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Clean PreCheck"
        image={CleanPreCheck}
       
      />
     
     
    </Card>

    </Col>






    </Row>
    <Typography sx={paragraphB}></Typography>

</Box>

</>
  )
}

export default CT