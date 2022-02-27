import * as React from 'react'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ImageIcon from '@mui/icons-material/Image';
import Modal from '@mui/material/Modal';
import Resume from '../Images/aubreyjonesresume.jpg'; 
import InstaFreshImage from '../Images/grocerystoreapp/hifidelitywireframes/shopscreenmacbook.png'
import DVNImage from '../Images/disneyvsnetflixcasestudy.PNG'
import TeslaImage from '../Images/teslasolargroupproject.png'
import YouTubeIcon from '@mui/icons-material/YouTube';

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
maxWidth: '400px'



}

const linkStyles = {
textDecoration: 'none',
"&:hover": {
  textDecoration: 'none'
 
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



const typeStyles2 = {
    padding: '40px 50px 10px 50px', 
    width: '50%', 
    color: '#30638E',
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

<Typography sx={headerStylesA} id="projects">PROJECTS</Typography>

<Box sx={allcardStyles}>



    <Card sx={cardStyles} className="cardStyles">
    <Link sx={linkStyles} href="/disneyvsnetflix" target="_blank">
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
          A Research Case Study
        </Typography>
      </CardContent>
      </Link>
    </Card>
  






<Card sx={cardStyles} className="cardStyles">
<Link sx={linkStyles} href="/instafresh" target="_blank">
      <CardMedia
        component="img"
        alt="React Login"
        height="300"
        width="100%"
        image={InstaFreshImage }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          InstaFresh 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          An Online Grocery Store App UX/UI Case Study
        </Typography>
      </CardContent>
      </Link>
    </Card>
   

  


  
    <Card sx={cardStyles} className="cardStyles">
    <Link sx={linkStyles} href="https://chaoticroyale.netlify.app/" target="_blank">
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

<Typography sx={headerStyles} id="about">ABOUT</Typography>


<Typography sx={typeStyles2}>I was always a writer and discovered I liked to code back in 2015, thanks to a collegue. I took a couple of coding classes at Salt Lake Community College 
back in 2016 as part of my Associate's Degree in General Education. I can tell you they were not easy but definitely worth it and interesting.
I attended a DevMountain bootcamp at the end of 2016 for UX/UI, and fell in love with both disciplines. I transferred to Utah Valley University in 2017 as a designer but noticed I wanted 
the full scope and coding skills. I switched to the web and app emphasis and have yet to regret it. Designing and coding websites is challenging and rewarding. I get to 
constantly learn something knew and there is never a boring day when it includes frontend web development. Now, nearly 7 years later (since I began coding), I am a UVU undergrad graduate as of December 
2021 in Web Design and Development with an emphasis in Web and App Development.    
</Typography>

<Typography sx={typeStyles2}>While I have completed my degree, I will always continue to learn and grow as a designer and developer. I get to mentor in all of this at Trilogy Education 
Services currently, and assist others to gain a passion for the fields as well. My mentors and students push me to stay caught up with current practices with all of the design 
and development tools. This may not always be an easy task but it is definitely worth it. And I will always continue to learn and grow.This may be why you see me pop into other fields 
and disciplines as well, as UX/UI and full stack web development definitely help me become a better frontend web developer.  
</Typography>

<Typography sx={typeStyles2}>In my spare time, I love to travel, explore other cultures, spend time with my family, video game, and learn additional creative hobbies. I am currently in Salt Lake City, Utah 
with my family. I am a pet lover and occasional pet sitter. I absolutely love art and will stop to smell the roses whenever possible.  
</Typography>





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