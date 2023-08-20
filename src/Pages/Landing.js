import * as React from 'react'; 
import HeroImage from '../Images/landing/heroimage.png';
import {Row, Col } from 'react-grid-system';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import DVNImage from '../Images/disneyvsnetflix.png';
import WebsiteUIDesignandRedesign from '../Images/codafi/websiteuidesign.png';
import CCFinalMockups from '../Images/catwalkcompany/images/hi-fidelitywireframes/FinalMockups.png'; 
import FLCINCMockup from '../Images/algebra1images/flcredesign.png'; 
import tshirtDesigns from '../Images/homemadegifts/tshirtdesigns.png';
import StoryBook from '../Images/logos/storybookinc.png'; 
import '../../src/Portfolio.css';



const introStyles = {
  height: '600px',
  maxHeight: '600px',
 // paddingTop: '100px', 
 // paddingBottom: '150px', 
  backgroundColor: '#fff', 
  width: '100%', 
  display: 'block'
   
}

const introContainer = {
  margin: '200px 100px 100px 50px', 
  clear: 'both'
}

const introText = {
  textAlign: 'left',
  
  fontWeight: '300',
  padding: '10px',
  fontSize: '36px',
  fontFamily: 'Raleway, sans-serif', 
  color: '#30638E',

}





 


const casestudyBox = {
  backgroundColor: 'ffffff', 
  borderTop: '.5px solid #30638E',
  paddingBottom: '100px'

}

const headerStylesA = {
    margin: '50px 100px 20px 50px', 
    color: '#30638E',
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
width: '450px', 
textDecoration: 'none',
fontFamily: 'Raleway, sans-serif', 

}

const cardStylesImage = {
width: '100%', 
justifyContent: 'center', 
height: '300px'
}


const cardText = {
  fontFamily: 'Raleway, sans-serif',
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













const Landing = () => {



return (
<>

<Box style={{ backgroundImage: `url(${HeroImage})`, width: '100%'}} sx={introStyles}>

<Container sx={introContainer} className="introContainer">
<Typography sx={introText}>Hello, I'm Aubrey.</Typography>

<Typography sx={introText}>I create user experiences through empathy, research, and design.</Typography>

</Container>

</Box>

<Box sx={casestudyBox}>

<Typography sx={headerStylesA} id="projects">Projects</Typography>
{/* 


<Typography sx={headerStylesA} id="uxuidesign">UX/UI Design Case Studies</Typography> */}



<Box sx={allcardStyles}>

<Row>


<Col sm={12} md={6} xl={4}>
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
        Family Literacy Center Internship
        </Typography>
        </CardContent>
      </Link>
    </Card>
  

    </Col>

    <Col sm={12} md={6} xl={4}>

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
        </CardContent>
      </Link>
    </Card>
   

    </Col>

<Col sm={12} md={6} xl={4}>
  
    <Card sx={cardStyles} className="cardStyles">
    <Link href="/appareldesignscasestudy" sx={linkStyles} target="_blank" style={{textDecoration: "none", color: "#30638E"}}>
      <CardMedia
        component="img"
        alt="UI Designs"
        image={tshirtDesigns}
        sx={cardStylesImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={cardText}>
        Apparel Designs
        </Typography>
        </CardContent>
      </Link>
    </Card>
    


    </Col>

    </Row>



    </Box>


    <Box sx={allcardStyles}>

<Row>


<Col sm={12} md={6} xl={4}>
    <Card sx={cardStyles} className="cardStyles">
    <Link href="/disneyvsnetflix" sx={linkStyles} target="_blank" style={{textDecoration: "none", color: "#30638E"}}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix Research"
        sx={cardStylesImage}
        image={DVNImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={cardText}>
        Disney Vs. Netflix
        </Typography>
        </CardContent>

      </Link>
    </Card>
  

    </Col>

    <Col sm={12} md={6} xl={4}>

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
        </CardContent>
      </Link>
    </Card>
   

    </Col>

<Col sm={12} md={6} xl={4}>
  
    <Card sx={cardStyles} className="cardStyles">
    <Link href="/logodesigns" sx={linkStyles} target="_blank" style={{textDecoration: "none", color: "#30638E"}}>
      <CardMedia
        component="img"
        alt="Storybook Logo"
        image={StoryBook}
        sx={cardStylesImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={cardText}>
        Design Systems
        </Typography>
        </CardContent>
      </Link>
    </Card>
    


    </Col>

    </Row>



    </Box>


    </Box>



<div>



</div>



</>




)



}

export default Landing;