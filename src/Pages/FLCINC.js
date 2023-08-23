import * as React from 'react'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col } from 'react-grid-system';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IdentifyBeforeMockup from '../Images/algebra1images/identify-before-mockup.PNG';
import IdentifyAfterMockup from '../Images/algebra1images/identify-after-mockup.PNG';
import Homework1BeforeMockup from '../Images/algebra1images/homework1-before-mockup.PNG'; 
import Practice1AfterMockup from '../Images/algebra1images/practice-1-after-mockup.png'; 
import FinalProjectProposal from '../Images/algebra1pdf/ProposalFinalSigned.pdf'; 
import FinalProjectPresentation from '../Images/algebra1pdf/FLCAlgebraPresentation.pdf';




const FLCLinkStyles = {
    textAlign: 'center',
   
  }

  const FLCLinks = {
    textAlign: 'center',
    textDecoration: 'none', 
    fontSize: '24px', 
    color: '#30638E'
  }


  
const imageStylesMockups = { 
    width: '70%',
    display: 'block', 
    margin: '75px auto 75px auto', 
    border: 'none', 
    boxShadow: 'none'
    
    
    }

    


const designB = {
    bgcolor: 'white',
  
  }


    
const headerB = {
    padding: '100px 70px 50px 70px', 
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





const FLCINC = () => {
  return (
    <>

<Navbar bg="light" expand="lg" className="NavBarStyles">
      <Container>
        <Navbar.Brand href="/" className="websiteTitle">AUBREY JONES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#thefamilyliteracycenters">THE FAMILY LIERACY CENTERS INTERNSHIP</Nav.Link>
            <Nav.Link href="#connect">CONNECT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    {/*thefamilyliteracycenters*/}


<Box sx={designB} id="thefamilyliteracycenters">


<Typography sx={headerB}>The Family Literacy Centers Internship</Typography>

<Typography sx={paragraphB}>In 2018, I met the Family Literacy Center stakeholders through a class at Utah Valley University. They wanted us to 
update their digital Algebra 1 program to HTML5 from its current Flash supported software. As a small team, we discovered how 
to import the Flash files into Adobe Animate and update their design elements into the then Tumult Hype 3 so 
that Tumult could export their designs into HTML5. I was very lucky to continue this process as an internship and senior project at UVU. </Typography>



<Row>

<Col sm={12} md={6} xl={5}>

<Typography sx={paragraphB}>Lesson Plan Flash Design</Typography>


<Card sx={imageStylesMockups}>
      <CardMedia
        component="img"
        alt="Lesson Plan"
        image={IdentifyBeforeMockup}
       
      />
     
     
    </Card>

    </Col>


    <Col sm={12} md={6} xl={5}>

    <Typography sx={paragraphB}>Lesson Plan Final Design</Typography>


<Card sx={imageStylesMockups}>
      <CardMedia
        component="img"
        alt="Lesson Plan"
        image={IdentifyAfterMockup}
       
      />
     
     
    </Card>

    </Col>


    </Row>



    <Row>

<Col sm={12} md={6} xl={5}>

<Typography sx={paragraphB}>Homework Question Flash Design</Typography>


<Card sx={imageStylesMockups}>
      <CardMedia
        component="img"
        alt="Homework 1 Flash Design"
        image={Homework1BeforeMockup}
       
      />
     
     
    </Card>

    </Col>


    <Col sm={12} md={6} xl={5}>

    <Typography sx={paragraphB}>Homework Question Final Design</Typography>


<Card sx={imageStylesMockups}>
      <CardMedia
        component="img"
        alt="Practice 1 After"
        image={Practice1AfterMockup}
       
      />
     
     
    </Card>

    </Col>


    </Row>


    <Typography sx={paragraphB}>If you would like to learn more about this process, here are some PDF booklets about our project:</Typography>


<Row sx={FLCLinkStyles}>

  <Col>
   
    <Link sx={FLCLinks} href={FinalProjectProposal} target="_blank">
    <Typography sx={FLCLinks}>Final Project Proposal</Typography>

</Link>
</Col>

<Col>
<Link sx={FLCLinks} href={FinalProjectPresentation} target="_blank">
<Typography sx={FLCLinks}>Final Project Presentation 1st Semester</Typography>

</Link>
</Col>

</Row>





    <Typography sx={paragraphB}>




    </Typography>

</Box>

</>
  )
}

export default FLCINC