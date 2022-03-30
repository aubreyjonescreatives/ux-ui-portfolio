import * as React from 'react'; 
import { NavLink } from 'react-router-dom'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ImageIcon from '@mui/icons-material/Image';
import Modal from '@mui/material/Modal';
import Resume from '../Images/aubreyjonesresume.jpg'; 
import DVNImage from '../Images/disneyvsnetflixcasestudy.PNG'
import TeslaImage from '../Images/teslasolargroupproject.png'
import YouTubeIcon from '@mui/icons-material/YouTube';
import ProtoPersona1 from '../Images/protopersona1.png'
import MobileWireframes from '../Images/mobilewireframes2.png'
import JourneyMap from '../Images/videovoyagers/dn46.jpg'
import SketchImage from '../Images/grocerystoreapp/sketches/sketch1.jpg'
import CatwalkCo from '../Images/catwalkcompany/images/protopersona.png'

const headerStyles = {
margin: '0px 100px 20px 50px', 
fontSize: '36px', 
paddingTop: '50px', 
color: '#30638E'



}




const headerStylesA = {
    margin: '100px 100px 20px 50px', 
    fontSize: '36px', 
    paddingTop: '50px', 
    color: '#30638E'
    
    
    
    }

const headerStylesB = {
    margin: '0px 100px 20px 50px', 
    fontSize: '36px',
    color: '#30638E', 
    paddingTop: '50px'
    
    
    }



const allcardStyles = {
    padding: '50px', 
    display: 'flex', 
    justifyContent: 'center', 
    flexWrap: 'wrap', 
    
    
    
    
    }



const cardStyles = {

margin: '25px', 
maxWidth: '400px', 
textDecoration: 'none'


}

const sampleBox = {
  display: 'flex', 
  flexWrap: 'wrap',
  justifyContent: 'center'
}

const cardStylesSamples = {
  margin: '25px', 
  maxWidth: '500px'


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
    color: '#30638E'
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
border: '1px solid #30638E',
"&:hover": {
    color: '#30638E',
    backgroundColor: 'white',
    border: '1px solid #30638E', 
    cursor: 'pointer'
   
  }

}


const aboutStyles = {
  paddingBottom: '50px', 
  



}







const connectStyles = {
    paddingBottom: '50px', 
    backgroundColor: '#eee', 
   



}

const connectLinksBox ={
    display: 'flex',
    flexWrap: 'wrap', 
    justifyContent: 'center'

}


const connectLink = {
    textAlign: 'center', 
    backgroundColor: '#30638E', 
    margin: '5px', 
    padding: '10px', 
    textDecoration: 'none', 
    color: 'white', 
    fontSize: '26px', 
    border: '1px solid #30638E',
    "&:hover": {
        color: '#30638E',
        backgroundColor: 'white',
        border: '1px solid #30638E', 
        cursor: 'pointer'
       
      }
    
    }





    const resumemodalStyle = {
        position: 'absolute',
        top: '70%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        overflow:'scroll', 
        zIndex: '10'
      };


const Landing = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  



return (
<>

<Typography sx={headerStylesA} id="casestudies">CASE STUDIES</Typography>

<Box sx={allcardStyles}>



    <Card sx={cardStyles} className="cardStyles">
    <NavLink sx={linkStyles} to="/DisneyVSNetflix" target="_blank" style={{textDecoration: "none", color: "#30638E"}}>
      <CardMedia
        component="img"
        alt="Instafresh UX/UI Project"
        height="300"
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
      </NavLink>
    </Card>
  





    <Card sx={cardStyles} className="cardStyles">
<NavLink sx={linkStyles} to="/CatwalkCo" target="_blank" style={{textDecoration: "none", color: "#30638E"}}>
      <CardMedia
        component="img"
        alt="Freelance E-Commerce UX/UI Case Study"
        height="300"
        width="100%"
        image={CatwalkCo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Catwalk Co
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A Freelance E-Commerce Web App UX/UI Case Study
        </Typography>
      </CardContent>
      </NavLink>
    </Card>
   

  


  
    <Card sx={cardStyles} className="cardStyles">
    <NavLink sx={linkStyles} to="/" target="_blank" style={{textDecoration: "none", color: "#30638E"}}>
      <CardMedia
        component="img"
        alt="Tesla Solar Group Project"
        height="300"
        image={TeslaImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Tesla Solar
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Tesla Solar UX/UI Design Case Study 
        </Typography>
      </CardContent>
      </NavLink>
    </Card>
    


   





    </Box>


<Box sx={articlesStyles}>

<Typography sx={headerStylesB} id="articles">ARTICLES</Typography>



<Typography sx={typeStyles}>I love to learn and write about UX/UI design! Feel free to follow my articles and contact me for any questions, suggestions, and/or requests for a blog article.  
</Typography>

<Link sx={articleLink} href="https://medium.com/@aubreyjonescreatives" target="_blank">
       UX/UI Blog
       </Link>



</Box>

<Box sx={aboutStyles}>

<Typography sx={headerStyles} id="samples">SAMPLES</Typography>

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
     alt="Tesla Solar Group Project"
     image={JourneyMap}
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
     alt="Tesla Solar Group Project"
     image={SketchImage}
   />
   <CardContent>
     <Typography gutterBottom variant="h5" component="div">
      Sketches
     </Typography>
    
   </CardContent>
  
 </Card>



 <Card sx={cardStylesSamples}>
   
      <CardMedia
        component="img"
        alt="Tesla Solar Group Project"
        image={MobileWireframes}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Low-Fidelity Wireframes
        </Typography>
       
      </CardContent>
     
    </Card>

    


    </Box>

</Box>

<Box sx={connectStyles}>

<Typography sx={headerStylesB} id="connect">CONNECT</Typography>



<Box sx={connectLinksBox}>
<Link sx={connectLink} href="https://www.youtube.com/channel/UCw4Fi6cUbn67D18LqTPQymA" target="_blank">
<YouTubeIcon />
YouTube
</Link>


<Link sx={connectLink} href="https://www.linkedin.com/in/aubrey-jones" target="_blank">
<LinkedInIcon />
LinkedIn
</Link>

<Link sx={connectLink} onClick={handleOpen}>
<ImageIcon />Resume

</Link>


</Box>

</Box>

<div>

<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={resumemodalStyle}>
        <Card>
      <CardMedia
        component="img"
        alt="Resume"
       // height="850"
        image={Resume}
      />
    </Card>
        </Box>
      </Modal>



</div>



</>




)



}

export default Landing;