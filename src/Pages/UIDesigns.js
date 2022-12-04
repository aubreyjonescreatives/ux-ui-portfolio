import * as React from 'react'; 
import { Container, Row, Col } from 'react-grid-system';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'; 
import ListItemIcon from '@mui/material/ListItemIcon'; 
import ScienceIcon from '@mui/icons-material/Science';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ListIcon from '@mui/icons-material/List';
import PollIcon from '@mui/icons-material/Poll';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ProtoPersonaDave from '../Images/catwalkcompany/images/protopersonadave.png';
import IdentifyBefore from '../Images/algebra1images/identify-before.png';
import IdentifyAfter from '../Images/algebra1images/identify-after.png';
import Homework1Before from '../Images/algebra1images/homework1-before.png'; 




import { grid } from '@mui/system';

const design = {
height: '600px'

}


const cardStyles = {

  margin: '200px auto 10px auto', 
  marginBottom: '50px', 
  display: 'block', 
  width: '35%' 



}


const headerStylesA = {
  margin: '10px 0px', 
  marginBottom: '50px', 
  fontSize: '42px', 
  padding: '80px 20px', 
  color: '#30638E',
  backgroundColor: 'white', 
  width: '100%', 
  textAlign: 'center',
fontFamily: 'Lato', 
fontWeight: '300',
  
  
  }

      
    const linkStyling = {
      fontSize: '18px', 
      color: 'white', 
      textDecoration: 'none',
      "&:hover": {
        color: 'white', 
       
       
      }
    
    }
      




const designA = {
  bgcolor: '#f2f8fb',

}

const headerA = {
padding: '50px 70px', 
fontSize: '40px', 
fontFamily: 'Lato', 
fontWeight: '400', 
color: '#30638E'

}

const paragraphA = {
padding: '40px 70px',
fontSize: '20px', 
fontFamily: 'Roboto serif', 
fontWeight: '300'
}












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


const headerStylesB = {
  margin: '0px 100px 20px 50px', 
  fontSize: '36px',
  color: '#30638E', 
  paddingTop: '50px',
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
  margin: '75px auto 75px auto'
  
  
  }





const UIDesigns = () => {
  


  const [isOpen, setIsOpen] = React.useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }


const drawerItemList = () => (
  <Box sx={{width: 350, backgroundColor: '#30638E'}} role="presentation" className="drawerMenu">
    <List>
    <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <ScienceIcon/>
        </ListItemIcon>
        <Link href="#top" sx={linkStyling}>UI Design Samples</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <ReportProblemIcon/>
        </ListItemIcon>
        <Link href="#inspiration" sx={linkStyling}>Inspiration</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <PollIcon/>
        </ListItemIcon>
        <Link href="#thefamilyliteracycenter" sx={linkStyling}>The Family Literacy Center</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <PollIcon/>
        </ListItemIcon>
        <Link href="#codafitechnologies" sx={linkStyling}>Codafi Technologies</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <PollIcon/>
        </ListItemIcon>
        <Link href="#personaldesignprojects" sx={linkStyling}>Personal Design Projects</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <PollIcon/>
        </ListItemIcon>
        <Link href="#currentandfuture" sx={linkStyling}>Current and Future Goals</Link>
      </ListItem>
  

    
    </List>
  </Box>
)










return (
<>


<nav id="navWrapper" >
   
   <Box sx={{ flexGrow: 1}}>
       <AppBar position="fixed" sx={{ backgroundColor:"#30638E", width: "100%", boxShadow: 0  }} >
         <Toolbar >
           <IconButton
             size="large"
             edge="start"
             color="inherit"
             aria-label="menu"
             sx={{ mr: 2 }}
             onClick={toggleDrawer}
           >
             <MenuIcon />
           </IconButton>
           <Typography sx={{ flexGrow: 3, width: '300px'}}>
           <Link href='/' sx={linkStyling}>AUBREY JONES | UX/UI Designer</Link>
           </Typography>
           
         </Toolbar>
         
       </AppBar>
     </Box>
     
       </nav>
       <Drawer anchor="left" open={isOpen} onClose={toggleDrawer} sx={{backgroundColor: '57FAD56'}}>
       {drawerItemList()}
       </Drawer> 




<Box sx={design}>

   

       <Typography sx={headerStylesA} id="top">UI Designs</Typography>


       </Box>


{/*inspiration*/}


<Box sx={designA} id="inspiration">
<Typography sx={headerA}>Inspiration</Typography>
<Typography sx={paragraphA}>I love to collaborate and create a better customer experience with others. While I see myself as a 
junior designer, I look forward to more growth in the field where possible.</Typography>
<Typography sx={headerA}></Typography> 
  
</Box> 




{/*thefamilyliteracycenters*/}


<Box sx={designB} id="thefamilyliteracycenters">


<Typography sx={headerB}>The Family Literacy Centers Internship</Typography>

<Typography sx={paragraphB}>in 2018, I met the Family Literacy Center stakeholders through a class at Utah Valley University. They wanted us to 
update their digital Algebra 1 program to HTML5 instead of its current Flash supported software. As a small team, we discovered how 
to import the Flash files into Adobe Animate and update their design elements into the then Tumult Hype 3 so 
that Tumult could export their designs into HTML5. I was very lucky to continue this process as an internship and senior project at UVU. </Typography>



<Row>

<Col sm={12} md={6} xl={5}>

<Typography sx={paragraphB}>Before</Typography>


<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Proto Persona"
        image={IdentifyBefore}
       
      />
     
     
    </Card>

    </Col>


    <Col sm={12} md={6} xl={5}>

    <Typography sx={paragraphB}>After</Typography>


<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Proto Persona"
        image={IdentifyAfter}
       
      />
     
     
    </Card>

    </Col>


    </Row>



    <Typography sx={paragraphB}></Typography>

</Box>




{/*codafitechnologies*/}


<Box sx={designB} id="codafitechnologies">


<Typography sx={headerB}>Codafi Technologies</Typography>

<Typography sx={paragraphB}>In 2020, I had the pleasure of working at a startup called Codafi Technologies as a UX/UI designer. I worked closely 
in a small team of designers, business management, and clientele. I definitely learned a lot about collaborating with people 
of different cultures in a remote setting and Figma as the design tool of choice at the time. It was a lot of fun working through 
different design iterations, learning more about minimalistic design, and discovering the right fit with others. 
I discovered a lot about myself and how I wish to improve as a digital designer.</Typography>


<Typography sx={paragraphB}>Here are some Figma design iterations. Our clientele often gave us very specific feature requests and sometimes
very specific design layout requests as well. 
 </Typography>



<Row>



<Col sm={12} md={6} xl={5}>

<Typography sx={paragraphB}>Before</Typography>


<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Proto Persona"
        image={IdentifyBefore}
       
      />
     
     
    </Card>

    </Col>


    <Col sm={12} md={6} xl={5}>

    <Typography sx={paragraphB}>After</Typography>


<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Proto Persona"
        image={IdentifyAfter}
       
      />
     
     
    </Card>

    </Col>


    </Row>
    <Typography sx={paragraphB}></Typography>

</Box>





{/*personaldesignprojects*/}


<Box sx={designB} id="personaldesignprojects">


<Typography sx={headerB}>Personal Design Projects</Typography>

<Typography sx={paragraphB}>In my personal time, I love to create homemade gifts. These have ranged from t-shirts, candles, bars of soap, 
to Happy Birthday notes. I love that I get to explore my creative digital design passion at any time of the day and share it with 
others by personalized items that mean just a little bit more to them than some random gift. I have a huge interest in product and graphic 
design. You'll often find me watching a YouTube video or researching different ways on how to improve or avoid certain techniques as 
they require a lot of precise attention to detail.</Typography>


<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Proto Persona"
        image={ProtoPersonaDave}
       
      />
     
     
    </Card>

    <Typography sx={paragraphB}></Typography>

</Box>





{/*personaldesignprojects*/}


<Box sx={designB} id="currentandfuture">


<Typography sx={headerB}>Current and Future Plans</Typography>

<Typography sx={paragraphB}>Since 2020, I have absolutely loved mentoring UX/UI designers and frontend web 
developers through an online learning program called Trilogy Educational Services, which is now called edX as of 2022. Being a very 
attentive TA, Senior Tutor, and Central Grader through the bootcamp is exteremly fun as I get to lead others and learn from them at 
the same time. I love that I get to work with people from all over the world and see their interest grow in digital design. It is an 
incredible part time remote opportunity.</Typography>




<Typography sx={paragraphB}>I am currently in a place where I can accept more work. If you would like to discuss future opportunities, 
feel free to reach out to me by my contact information as needed. I hope to hear from you soon before another 
creative opportunity pops up instead and thank you for your time.</Typography>



    <Typography sx={paragraphB}></Typography>

</Box>
















</>




)



}

export default UIDesigns;