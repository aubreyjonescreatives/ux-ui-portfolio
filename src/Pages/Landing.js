import * as React from 'react'; 
//import HeroImage from '../Images/landing/heroimage.png';
import {Row, Col } from 'react-grid-system';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import WebsiteUIDesignandRedesign from '../Images/codafi/websiteuidesign.png';
import CCFinalMockups from '../Images/catwalkcompany/images/hi-fidelitywireframes/updated-signup-login.png'; 
import FLCINCMockup from '../Images/algebra1images/flcredesign.png'; 
import ApparelDesigns from '../Images/appareldesigns/develop/sitemap.png'
import '../../src/Portfolio.css';






const introStyles = {
 // paddingTop: '100px', 
  paddingBottom: '150px', 
  backgroundColor: '#fff', 
  width: '100%', 
  display: 'block',
  backgroundColor: '#F8F9FA'
   
}

const introContainer = {
  paddingTop: '300px', 
  paddingBottom: '300px',
  clear: 'both', 
  
}

const introText = {
  textAlign: 'left',
  fontWeight: '300',
  fontSize: '36px',
  fontFamily: 'Raleway, sans-serif', 
  color: '#00003D',

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
    justifyContent: 'center', 
    fontFamily: 'Raleway, sans-serif',
    
    
    
    }



const cardStyles = {
margin: '20px auto', 
textDecoration: 'none',
fontFamily: 'Raleway, sans-serif', 
boxShadow: 'none',
backgroundColor: '#FFF', 
padding: '10px',
"&:hover": {
  padding: '10px'
 
}, 
}

const cardStylesImage = {
width: '100%', 
justifyContent: 'center', 
height: '200px', 
border: '2px solid #F8F9FA',
borderRadius: '5px',
}


const cardText = {
  fontFamily: 'Raleway, sans-serif',
  fontSize: '20px',
  margin: '10px 0px',
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




const endStyles = {
  height: '150px',
  maxHeight: '150px',
  width: '100%', 
  display: 'block'
   
}








const Landing = () => {



return (
<>


<Box sx={introStyles} className="introStyles">

<Container sx={introContainer} className="introContainer">
<Typography sx={introText}>Hello, I'm Aubrey.</Typography>


<Typography sx={introText}>Dependable. Detail-Oriented. Dynamic Storyteller.</Typography>



{/* <Typography sx={introText}>I am always ready for a challenge that helps customers have a better human-centered experience through collaboration, research, and visual design.</Typography> */}

</Container>

</Box>

<Box sx={casestudyBox}>

<Container>

<Typography sx={headerStylesA} id="projects">Projects</Typography>
{/* 


<Typography sx={headerStylesA} id="uxuidesign">UX/UI Design Case Studies</Typography> */}



<Box sx={allcardStyles}>

<Row>




<Col sm={12} md={4} xl={3}>
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
        UI Redesign
        </Typography>
        </CardContent>
      </Link>
    </Card>
  

    </Col>

    <Col sm={12} md={4} xl={3}>

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
   

    </Col>

    <Col sm={12} md={4} xl={3}>

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
        UX/UI Design
        </Typography>
        </CardContent>
      </Link>
    </Card>
   

    </Col>


    <Col sm={12} md={4} xl={3}>

    <Card sx={cardStyles} className="cardStyles">
<Link href="/appareldesignscasestudy" sx={linkStyles} target="_blank" style={{textDecoration: "none", color: "#30638E"}}>
      <CardMedia
        component="img"
        alt="Apparel E-Commerce UX/UI Case Study"
        sx={cardStylesImage}
        image={ApparelDesigns}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={cardText}>
        Apparel Designs
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={cardText}>
        UX/UI Design
        </Typography>
        </CardContent>
      </Link>
    </Card>
   

    </Col>





    </Row>



    </Box>

    </Container>
    </Box>


    <Box sx={endStyles}>


</Box>


</>




)



}

export default Landing;