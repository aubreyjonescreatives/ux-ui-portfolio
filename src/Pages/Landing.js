import * as React from 'react'; 
import NavBar from '../Components/NavBar.js'; 
import { Row, Col } from 'react-grid-system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import DVNImage from '../Images/disneyvsnetflix.png';
import ProtoPersona1 from '../Images/protopersona1.png';
import WebsiteUIDesignandRedesign from '../Images/codafi/websiteuidesign.png';
import MyEventsinBalsamiq from '../Images/myeventswireframes.png';
import CCJourneyMap from '../Images/catwalkcompany/images/journeymap.png';
import CCPrototyping from '../Images/catwalkcompany/images/prototyping/prototyping.png'; 
import CCFinalMockups from '../Images/catwalkcompany/images/hi-fidelitywireframes/FinalMockups.png'; 
import FLCINCMockup from '../Images/algebra1images/flcredesign.png'; 
import tshirtDesigns from '../Images/homemadegifts/tshirtdesigns.png';


const aboutStyles = {
  paddingTop: '100px', 
  paddingBottom: '150px', 
  backgroundColor: '#fff', 
   
}



const headerStyles = {
margin: '0px 100px 20px 50px', 
paddingTop: '50px', 
color: '#71B48D',
fontSize: '36px', 
fontFamily: 'Lato',
fontWeight: '400'

}


const headerStylesName = {
  margin: '0px 100px 20px 50px', 
  paddingTop: '100px', 
  color: '#30638E',
  fontSize: '36px', 
  fontFamily: 'Lato',
  fontWeight: '400', 
  textAlign: 'center', 
  
  }


  const headerStylesTitle = {
    margin: '0px 100px 20px 50px', 
    paddingTop: '10px', 
    color: '#71B48D',
    fontSize: '32px', 
    fontFamily: 'Sacramento',
    textAlign: 'center'
    
    }

    const typeStylesIntro = {
      padding: '50px', 
      width: '90%', 
      color: '#30638E',
      fontSize: '20px', 
      fontFamily: 'Merriweather',
      fontWeight: '300', 
      textAlign: 'center', 
    }



const casestudyBox = {
  backgroundColor: '#eee', 
  paddingTop: '20px', 
  paddingBottom: '100px'

}

const headerStylesA = {
    margin: '100px 100px 20px 50px', 
    color: '#71B48D',
    fontSize: '36px', 
    fontFamily: 'Lato', 
    fontWeight: '400', 
    
    
    
    }

const headerStylesB = {
    margin: '0px 100px 20px 50px', 
    fontSize: '36px',
    color: '#71B48D', 
    paddingTop: '50px',
    fontFamily: 'Lato', 
    fontWeight: '400', 
    
    
    }



const allcardStyles = {
    display: 'grid',  
    justifyContent: 'center', 
    fontFamily: 'Lato', 
    
    
    
    }



const cardStyles = {
  margin: '20px auto', 
maxWidth: '400px', 
maxHeight: '400px',
textDecoration: 'none',
fontFamily: 'Lato', 

}

const cardStylesImage = {
width: '100%', 
justifyContent: 'center', 
height: '300px'
}

const sampleBox = {
  display: 'flex', 
  flexWrap: 'wrap',
  justifyContent: 'center',
  fontFamily: 'Lato', 
}

const cardStylesSamples = {
  margin: '25px', 
  maxWidth: '500px',
  fontFamily: 'Lato', 


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

const articlesStyles = {
    paddingBottom: '50px', 
    backgroundColor: '#eee', 
   
}


const typeStyles = {
    padding: '50px', 
    width: '90%', 
    color: '#30638E',
    fontSize: '20px', 
    fontFamily: 'Roboto serif',
    fontWeight: '300'

}

const articleLink = {
display: 'flex', 
flexWrap: 'wrap', 
justifyContent: 'center', 
backgroundColor: '#30638E', 
width: '125px', 
margin: '20px auto', 
padding: '20px', 
textDecoration: 'none', 
color: 'white', 
fontSize: '18px', 
fontFamily: 'Lato', 
border: '1px solid #30638E',
"&:hover": {
    color: '#30638E',
    backgroundColor: 'white',
    border: '1px solid #30638E', 
    cursor: 'pointer'
   
  }

}


const sampleStyles = {
  paddingBottom: '50px', 
  



}











const Landing = () => {



return (
<>

<NavBar />

<Box sx={aboutStyles} id="about">

<Typography sx={headerStylesName} id="aboutme">Hello, I'm Aubrey.</Typography>

<Typography sx={headerStylesTitle} id="aboutme">A UX/UI Designer here.</Typography>



<Typography sx={typeStylesIntro}> Thanks for taking the time to check out my work. I am always ready for a challenge that helps customers have a better user 
experience through those latest processes. Feel free to connect. 
</Typography>



</Box>

<Box sx={casestudyBox}>

<Typography sx={headerStylesA} id="uxuidesign">UX/UI Case Studies</Typography>

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
        <Typography gutterBottom variant="h5" component="div">
         Disney VS. Netflix
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A UX Research Case Study
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
        <Typography gutterBottom variant="h5" component="div">
         Catwalk Co
        </Typography>
        <Typography variant="body2" color="text.secondary">
          UX/UI Case Study for Project Management
        </Typography>
      </CardContent>
      </Link>
    </Card>
   

    </Col>

<Col sm={12} md={6} xl={4}>
  
    <Card sx={cardStyles} className="cardStyles">
    <Link href="/uidesigns" sx={linkStyles} target="_blank" style={{textDecoration: "none", color: "#30638E"}}>
      <CardMedia
        component="img"
        alt="UI Designs"
        image={WebsiteUIDesignandRedesign}
        sx={cardStylesImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         User Interface Design
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Digital design projects with real clients  
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
    <Link href="/flcinc" sx={linkStyles} target="_blank" style={{textDecoration: "none", color: "#30638E"}}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix Research"
        sx={cardStylesImage}
        image={FLCINCMockup}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Family Literacy Center Internship
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Updated UI Designs for Online Algebra 1 Program
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
        <Typography gutterBottom variant="h5" component="div">
         Codafi Technology 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          UX/UI Designer
        </Typography>
      </CardContent>
      </Link>
    </Card>
   

    </Col>

<Col sm={12} md={6} xl={4}>
  
    <Card sx={cardStyles} className="cardStyles">
    <Link href="/uiproductdesign" sx={linkStyles} target="_blank" style={{textDecoration: "none", color: "#30638E"}}>
      <CardMedia
        component="img"
        alt="UI Designs"
        image={tshirtDesigns}
        sx={cardStylesImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         UI Product Design
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Fun design projects for clientele  
        </Typography>
      </CardContent>
      </Link>
    </Card>
    


    </Col>

    </Row>



    </Box>


    </Box>

<Box sx={sampleStyles}>

<Typography sx={headerStyles} id="samplework">SAMPLE WORK</Typography>

<Box sx={sampleBox}>

<Card sx={cardStylesSamples}>
   
      <CardMedia
        component="img"
        alt="Tesla Solar Group Project"
        image={ProtoPersona1}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Proto Persona
        </Typography>
       
      </CardContent>
     
    </Card>


    <Card sx={cardStylesSamples}>
   
   <CardMedia
     component="img"
     alt="Journey Map"
     image={CCJourneyMap}
   />
   <CardContent>
     <Typography gutterBottom variant="h5" component="div">
     Journey Map
     </Typography>
    
   </CardContent>
  
 </Card>



    <Card sx={cardStylesSamples}>
   
   <CardMedia
     component="img"
     alt="Balsamiq Wireframing"
     image={MyEventsinBalsamiq}
   />
   <CardContent>
     <Typography gutterBottom variant="h5" component="div">
      Balsamiq Wireframing
     </Typography>
    
   </CardContent>
  
 </Card>



 <Card sx={cardStylesSamples}>
   
      <CardMedia
        component="img"
        alt="Figma Prototyping"
        image={CCPrototyping}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Figma Prototyping
        </Typography>
       
      </CardContent>
     
    </Card>

    


    </Box>

</Box>



<div>



</div>



</>




)



}

export default Landing;