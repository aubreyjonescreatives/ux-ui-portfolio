import * as React from 'react'; 
//import { NavLink } from 'react-router-dom'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ImageIcon from '@mui/icons-material/Image';
import DVNImage from '../Images/disneyvsnetflixcasestudy.PNG'
import TeslaImage from '../Images/teslasolargroupproject.png'
import YouTubeIcon from '@mui/icons-material/YouTube';
import ProtoPersona1 from '../Images/protopersona1.png'
import MobileWireframes from '../Images/mobilewireframes2.png'
import JourneyMap from '../Images/videovoyagers/dn46.jpg'
import SketchImage from '../Images/grocerystoreapp/sketches/sketch1.jpg'
import CatwalkCo from '../Images/catwalkcompany/images/protopersona.png'
import Resume from '../Images/resume/aubreyjonesresume.pdf'


const headerStyles = {
margin: '0px 100px 20px 50px', 
paddingTop: '50px', 
color: '#30638E',
fontSize: '36px', 
fontFamily: 'Lato',
fontWeight: '400'

}




const headerStylesA = {
    margin: '100px 100px 20px 50px', 
    paddingTop: '50px', 
    color: '#30638E',
    fontSize: '36px', 
    fontFamily: 'Lato', 
    fontWeight: '400', 
    
    
    
    }

const headerStylesB = {
    margin: '0px 100px 20px 50px', 
    fontSize: '36px',
    color: '#30638E', 
    paddingTop: '50px',
    fontFamily: 'Lato', 
    fontWeight: '400', 
    
    
    }



const allcardStyles = {
    padding: '50px', 
    display: 'flex', 
    justifyContent: 'center', 
    flexWrap: 'wrap', 
    fontFamily: 'Lato', 
    
    
    
    }



const cardStyles = {

margin: '25px', 
maxWidth: '400px', 
textDecoration: 'none',
fontFamily: 'Lato', 

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


const aboutStyles = {
  paddingBottom: '50px', 
  



}







const connectStyles = {
    paddingBottom: '50px', 
    backgroundColor: '#eee', 
    fontSize: '32px', 
    fontFamily: 'Lato', 
    fontWeight: '400', 
    



}

const connectLinksBox ={
    display: 'flex',
    flexWrap: 'wrap', 
    justifyContent: 'center',
    fontFamily: 'Lato', 
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





const Landing = () => {



return (
<>

<Typography sx={headerStylesA} id="casestudies">CASE STUDIES</Typography>

<Box sx={allcardStyles}>



    <Card sx={cardStyles} className="cardStyles">
    <Link href="/disneyvsnetflix" sx={linkStyles} target="_blank" style={{textDecoration: "none", color: "#30638E"}}>
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
      </Link>
    </Card>
  





    <Card sx={cardStyles} className="cardStyles">
<Link href="/catwalkco" sx={linkStyles} target="_blank" style={{textDecoration: "none", color: "#30638E"}}>
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
      </Link>
    </Card>
   

  


  
    <Card sx={cardStyles} className="cardStyles">
    <Link href="https://medium.com/@aubreyjonescreatives/ux-design-school-group-project-tesla-solar-4e33f5da4f40" sx={linkStyles} target="_blank" style={{textDecoration: "none", color: "#30638E"}}>
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
      </Link>
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

<Link sx={connectLink} href={Resume} target="_blank">
<ImageIcon />Resume

</Link>


</Box>

</Box>

<div>



</div>



</>




)



}

export default Landing;