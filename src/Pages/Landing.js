import * as React from 'react'; 
//import HeroImage from '../Images/landing/heroimage.png';
import {Row, Col } from 'react-grid-system';
import Nav from 'react-bootstrap/Nav';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Icon } from '@iconify/react';
//import WebsiteUIDesignandRedesign from '../Images/codafi/websiteuidesign.png';
import CCFinalMockups from '../Images/catwalkcompany/images/hi-fidelitywireframes/updated-signup-login.png'; 
import FLCINCMockup from '../Images/algebra1images/heuristicimages/ruleone-old.png'; 
import ApparelDesigns from '../Images/appareldesigns/define/journeymap.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium, faBehanceSquare, faLinkedin,faSquareYoutube  } from '@fortawesome/free-brands-svg-icons' ;
import '../../src/Portfolio.css';





const introStyles = { 
  padding: '400px 0px',
  backgroundColor: '#00022E'
}

const introContainer = {
  width: '100%',
  backgroundColor: '#00022E',
  display: 'block'
}

const introText = {
  textAlign: 'center',
  fontWeight: '300',
  fontSize: '36px',
  fontFamily: 'Raleway, sans-serif', 
  color: '#ffffff',

}




const learnMoreLink = {
  display: 'block',
margin: '100px auto',
backgroundColor: '#30638E',
width: '200px',
padding: '20px',
border: '1px solid #ffffff',
borderRadius: '40px',
color: '#ffffff',
textDecoration: 'none',
textAlign: 'center',
"&:hover": {
  color: '#30638E',
  backgroundColor: '#ffffff',
  border: '1px solid #30638E'

 
},



}


const learnMoreLinkIcon = {
  color: '#00003D',
  BackgroundColor: '#ffffff', 
  textDecoration: 'none',
  textAlign: 'center',
  display: 'block',
  margin: '0 auto'
  
  }


const casestudyBox = {
  backgroundColor: '#FFFFFF',
  paddingBottom: '100px'

}

const headerStylesA = {
  paddingTop: '50px', 
  paddingBottom: '50px',
  color: '#00003D',
  fontSize: '36px', 
  fontFamily: 'Raleway, sans-serif', 
//  fontWeight: '400', 
  
  
  
  }




const allcardStyles = {
    display: 'grid',  
  //  justifyContent: 'center', 
    fontFamily: 'Raleway, sans-serif',
    
    
    
    }



const cardStyles = {
width: '100%',
textDecoration: 'none',
fontFamily: 'Raleway, sans-serif', 
boxShadow: 'none',
backgroundColor: '#FFF', 
"&:hover": {
  borderRadius: '20px'
 
}, 
}

const cardStylesImage = {
width: '100%', 
justifyContent: 'center', 
height: '300px', 
border: '2px solid #F8F9FA',
borderRadius: '20px',
}


const cardText = {
  fontFamily: 'Raleway, sans-serif',
  fontSize: '20px',
}


const linkStyles = {
textDecoration: 'none',
color: '#30638E',

"&:hover": {
  textDecoration: 'none', 
  color: '#30638E',
 
}, 
"&:link": {
  textDecoration: 'none', 
  color: '#30638E',
}

}




// const endStyles = {
//   height: '150px',
//   maxHeight: '150px',
//   width: '100%', 
//   display: 'block'
   
// }


const headerStylesB = {
  paddingTop: '50px', 
  paddingBottom: '50px',
  color: '#ffffff',
  fontSize: '36px', 
  fontFamily: 'Raleway, sans-serif', 
  
  
  
  }



const allIcons = {
  paddingBottom: '50px'
  }
  
  
  const oneIcon = {

    padding: '10px 0px',
    margin: '0px'
  }
  
  const aboutIcon = {
    fontFamily: 'Raleway, sans-serif',
    textAlign: 'center', 
    fontSize: '20px', 
  
  }
  
  
  const boxStylesBLast = {
    backgroundColor: '#00022E', 
    paddingTop: '5px',
    paddingBottom: '50px',
    width: '100%'
  
  }
  






const Landing = () => {



return (
<>


<Box sx={introStyles} className="introStyles">

<Container sx={introContainer} className="introContainer">

<Typography sx={introText}>Hello, I'm Aubrey. </Typography>


<Typography sx={introText}>A strategic and creative storyteller. <Icon icon="game-icons:fairy-wand" className="heroIcon"/></Typography>

</Container>
<Container>
<Row>
<Link sx={learnMoreLink} href={`#projects`}>LEARN MORE <Icon icon="bi:chevron-down" sx={learnMoreLinkIcon} /></Link>
</Row>


</Container>




{/* <Typography sx={introText}>I am always ready for a challenge that helps customers have a better human-centered experience through collaboration, research, and visual design.</Typography> */}


</Box>

<Box sx={casestudyBox}>

<Container>

<Typography sx={headerStylesA} id="projects">Projects</Typography>
{/* 


<Typography sx={headerStylesA} id="uxuidesign">UX/UI Design Case Studies</Typography> */}



<Box sx={allcardStyles}>

<Row>




<Col sm={12} md={4} xl={4}>
    <Card sx={cardStyles} className="cardStyles">
    <Link href="/flcinc" sx={linkStyles} target="_blank" style={{textDecoration: "none", color: "#30638E"}}>
      <CardMedia
        component="img"
        alt="Family Literacy Centers Internship Case Study"
        sx={cardStylesImage}
        image={FLCINCMockup}
      />
       <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={cardText}>
        FLC INC
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={cardText}>
        Content Redesign
        </Typography>
        </CardContent>
      </Link>
    </Card>
  

    </Col>

    {/* <Col sm={12} md={6} xl={6}>

    <Card sx={cardStyles} className="cardStyles">
<Link href="/codafitechnology" sx={linkStyles} target="_blank" style={{textDecoration: "none", color: "#30638E"}}>
      <CardMedia
        component="img"
        alt="Freelance E-Commerce UX/UI Case Study"
        sx={cardStylesImage}
        image={WebsiteUIDesignandRedesign}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={cardText}>
        Codafi Technology
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={cardText}>
        UI Design
        </Typography>
        </CardContent>
      </Link>
    </Card>
   

    </Col> */}

    <Col sm={12} md={4} xl={4}>

    <Card sx={cardStyles} className="cardStyles">
<Link href="/catwalkco" sx={linkStyles} target="_blank" style={{textDecoration: "none", color: "#30638E"}}>
      <CardMedia
        component="img"
        alt="Freelance E-Commerce UX/UI Case Study"
        sx={cardStylesImage}
        image={CCFinalMockups}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={cardText}>
        Catwalk Co
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={cardText}>
        Product Design
        </Typography>
        </CardContent>
      </Link>
    </Card>
   

    </Col>


    <Col sm={12} md={4} xl={4}>

    <Card sx={cardStyles} className="cardStyles">
<Link href="/taicasestudy" sx={linkStyles} target="_blank" style={{textDecoration: "none", color: "#30638E"}}>
      <CardMedia
        component="img"
        alt="Apparel E-Commerce UX/UI Case Study"
        sx={cardStylesImage}
        image={ApparelDesigns}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={cardText}>
        TAi
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={cardText}>
        UX Design
        </Typography>
        </CardContent>
      </Link>
    </Card>
   

    </Col>





    </Row>



    </Box>

    </Container>
    </Box>


    <Box sx={boxStylesBLast}>
    <Container>
    <Typography sx={headerStylesB}>Connect</Typography>
    </Container>
<Container sx={allIcons}>
<Row>
      <Col sx={12} sm={4} md={3}>
    <Container sx={oneIcon} className="footerSocialIcon">
    <Nav.Link href="https://www.behance.net/aubreyjonesdesign" target="_blank" className="footerSocial">
      <FontAwesomeIcon icon={faBehanceSquare} className="footerIcon"/>
      <Typography sx={aboutIcon}>Behance</Typography>
      </Nav.Link>
    </Container>
    </Col>
    <Col sx={12} sm={4} md={3}>
    <Container sx={oneIcon} className="footerSocialIcon">
    <Nav.Link href="https://medium.com/@aubreyjonescreatives" target="_blank" className="footerSocial">
      <FontAwesomeIcon icon={faMedium} className="footerIcon"/>
      <Typography sx={aboutIcon}>Medium</Typography>
      </Nav.Link>
    </Container>
    </Col>
    <Col sx={12} sm={4} md={3}>
    <Container sx={oneIcon} className="footerSocialIcon">
    <Nav.Link href="https://www.linkedin.com/in/aubrey-jones" target="_blank" className="footerSocial">
      <FontAwesomeIcon icon={faLinkedin} className="footerIcon"/>
      <Typography sx={aboutIcon}>LinkedIn</Typography>
      </Nav.Link>
    </Container>
    </Col>
    <Col sx={12} sm={4} md={3}>
    <Container sx={oneIcon} className="footerSocialIcon">
    <Nav.Link href="https://www.youtube.com/channel/UCw4Fi6cUbn67D18LqTPQymA" target="_blank" className="footerSocial">
      <FontAwesomeIcon icon={faSquareYoutube} className="footerIcon"/>
      <Typography sx={aboutIcon} >YouTube</Typography>
      </Nav.Link>
    </Container>
    </Col>
    </Row>
    </Container>
    </Box>


</>




)



}

export default Landing;