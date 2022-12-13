import * as React from 'react'; 
import { Row, Col } from 'react-grid-system';
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
import PollIcon from '@mui/icons-material/Poll';
import IdentifyBeforeMockup from '../Images/algebra1images/identify-before-mockup.PNG';
import IdentifyAfterMockup from '../Images/algebra1images/identify-after-mockup.PNG';
import Homework1BeforeMockup from '../Images/algebra1images/homework1-before-mockup.PNG'; 
import Practice1AfterMockup from '../Images/algebra1images/practice-1-after-mockup.png'; 
import BrandDashboardHomepage from '../Images/codafi/BrandDashboardHomepageHi-FiCompositionsSlide1.png';
import BeforeandAfterHero from '../Images/codafi/beforeandafterheroimage.png';
import CleanPreCheck from '../Images/codafi/cleanprecheck.png'; 
import AJArts from '../Images/homemadegifts/ajarts.PNG'; 
import LockwoodMagic1 from '../Images/homemadegifts/lockwoodmagic1.PNG';
import Texas from '../Images/homemadegifts/texas.PNG'; 
import IReject from '../Images/homemadegifts/ireject.PNG'; 
import FrostEatSleepRepeat from '../Images/homemadegifts/frosteatsleeprepeat.PNG';
import JustDoughIt from '../Images/homemadegifts/justdoughit.PNG';
import LargeCandleLabel from '../Images/homemadegifts/soywaxcandle30packof3.jpg'
import SmallCandleLabel from '../Images/homemadegifts/soywaxcandle8oz04.jpg'
import FinalProjectProposal from '../Images/algebra1pdf/ProposalFinalSigned.pdf'; 
import FinalProjectPresentation from '../Images/algebra1pdf/FLCAlgebraPresentation.pdf';
import SchoolIcon from '@mui/icons-material/School';
import CategoryIcon from '@mui/icons-material/Category';
import UpdateIcon from '@mui/icons-material/Update';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import PaletteSharpIcon from '@mui/icons-material/PaletteSharp';

const design = {
height: '300px'

}



const headerStylesA = {
  margin: '10px 0px', 
  marginBottom: '10px', 
  fontSize: '42px', 
  padding: '100px 20px', 
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


const paragraphI = {
  padding: '10px 70px',
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

  const paragraphShirts = {
    padding: '10px', 
    fontSize: '18px'
  }


const imageStylesMockups = { 
  width: '70%',
  display: 'block', 
  margin: '75px auto 75px auto', 
  border: 'none', 
  boxShadow: 'none'
  
  
  }


  const FLCLinkStyles = {
    textAlign: 'center',
   
  }

  const FLCLinks = {
    textAlign: 'center',
    textDecoration: 'none', 
    fontSize: '24px', 
    color: '#30638E'
  }



  const paragraphJars = {
    padding: '10px', 
    fontSize: '18px'
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
          <HomeSharpIcon/>
        </ListItemIcon>
        <Link href="#top" sx={linkStyling}>User Interface Design</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <PaletteSharpIcon/>
        </ListItemIcon>
        <Link href="#inspiration" sx={linkStyling}>Inspiration</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <SchoolIcon/>
        </ListItemIcon>
        <Link href="#thefamilyliteracycenter" sx={linkStyling}>The Family Literacy Center</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <PollIcon/>
        </ListItemIcon>
        <Link href="#codafitechnology" sx={linkStyling}>Codafi Technology</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <CategoryIcon/>
        </ListItemIcon>
        <Link href="#productdesignprojects" sx={linkStyling}>Product Design Projects</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <UpdateIcon/>
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

   

       <Typography sx={headerStylesA} id="top">User Interface Design</Typography>


       </Box>


{/*inspiration*/}


<Box sx={designA} id="inspiration">
<Typography sx={headerA}>In.spi.ra.tion</Typography>
<Typography sx={paragraphI}>/ˌinspəˈrāSH(ə)n/</Typography>
<Typography sx={paragraphI}>noun</Typography>
<Typography sx={paragraphI}>Google Oxford Dictionary Definition:</Typography>
<Typography sx={paragraphI}>1. the process of being mentally stimulated to do or feel something, especially to do something creative.</Typography>
<Typography sx={paragraphI}>2. a sudden brilliant, creative, or timely idea.</Typography>
<Typography sx={paragraphI}>I am always ready for a challenge that helps customers have a better user experience through the latest 
technologies in UX/UI design and frontend web development. Designing for someone else, with others, and or for myself is always a lot of fun as 
we inspire each other and bring our ideas to life. That is the pure definition of magic to me.</Typography>
<Typography sx={headerA}></Typography> 
  
</Box> 




{/*thefamilyliteracycenters*/}


<Box sx={designB} id="thefamilyliteracycenters">


<Typography sx={headerB}>The Family Literacy Centers Internship</Typography>

<Typography sx={paragraphB}>in 2018, I met the Family Literacy Center stakeholders through a class at Utah Valley University. They wanted us to 
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





{/*productdesignprojects*/}


<Box sx={designB} id="productdesignprojects">


<Typography sx={headerB}>Product Design Projects</Typography>

<Typography sx={paragraphB}>In my personal time, I love to create homemade gifts. These have ranged from t-shirts, candles, bars of soap, 
to Happy Birthday notes. I love that I get to explore my creative digital design passion at any time of the day and share it with 
others by personalized items that mean just a little bit more to them than some random gift. I have a huge interest in product and graphic 
design. You'll often find me watching a YouTube video or researching different ways on how to improve or avoid certain techniques as 
they require a lot of precise attention to detail.</Typography>


<Typography sx={paragraphB}>I often use the mental model UI design principle as I am learning to pull a lot of 
inspiration from what is already out there. I use a lot of Figma, Photoshop, other Adobe CC design tools, and websites that 
offer high quality customizable products out there. I am almost always creating something in my spare time for the pure fun of it. </Typography>


<Typography sx={paragraphB}>T-Shirt Designs:</Typography>


<Row>





<Col sm={12} md={6} xl={4}>


<Card sx={imageStylesB}>
  <CardMedia
    component="img"
    alt="AJ Arts"
    image={AJArts}
   
  />
  <Typography gutterBottom variant="h5" component="div" sx={paragraphShirts}>
   My Original Design for AJ Arts Co
        </Typography>
 
</Card>

</Col>

<Col sm={12} md={6} xl={4}>


<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Texas is Better"
        image={Texas}
       
      />
       <Typography gutterBottom variant="h5" component="div" sx={paragraphShirts}>
  "Texas is Better" based on other Texas t-shirts
        </Typography>
     
    </Card>

    </Col>




   


    <Col sm={12} md={6} xl={4}>


<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Lockwood Magic"
        image={LockwoodMagic1}
       
      />

<Typography gutterBottom variant="h5" component="div" sx={paragraphShirts}>
My Original Design for Lockwood Magic
        </Typography>
     
     
    </Card>

    </Col>






    </Row>





    <Row>



<Col sm={12} md={6} xl={4}>




<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Just Dough It"
        image={JustDoughIt}
       
      />
       <Typography gutterBottom variant="h5" component="div" sx={paragraphShirts}>
  "Just Dough It" play on words with cookies as O's
        </Typography>
     
    </Card>

    </Col>

<Col sm={12} md={6} xl={4}>


<Card sx={imageStylesB}>
  <CardMedia
    component="img"
    alt="I Reject"
    image={IReject}
   
  />
  <Typography gutterBottom variant="h5" component="div" sx={paragraphShirts}>
   Popular Quote Request for t-shirt: "I reject your reality and 
   substitute my own."
        </Typography>
 
</Card>

</Col>






   


    <Col sm={12} md={6} xl={4}>


<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Frost Eat Sleep Repeat"
        image={FrostEatSleepRepeat}
       
      />

<Typography gutterBottom variant="h5" component="div" sx={paragraphShirts}>
I avoided paying for a pastry bag icon and made one myself to match the other
ones from Iconify
        </Typography>
     
     
    </Card>

    </Col>






    </Row>






    <Typography sx={paragraphB}>Product Design Labels:</Typography>


<Row>

<Col sm={12} md={6} xl={4}>


<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="31 oz. Candle Label"
        image={LargeCandleLabel}
       
      />
       <Typography gutterBottom variant="h5" component="div" sx={paragraphJars}>
  31 Oz. Glass Candle Jar Labels
        </Typography>
     
    </Card>

    </Col>

<Col sm={12} md={6} xl={4}>


<Card sx={imageStylesB}>
  <CardMedia
    component="img"
    alt="8 oz. Candle Label"
    image={SmallCandleLabel}
   
  />
  <Typography gutterBottom variant="h5" component="div" sx={paragraphJars}>
  8 Oz. Glass Candle Jar Label
        </Typography>
 
</Card>

</Col>




    </Row>










    <Typography sx={paragraphB}></Typography>

</Box>





{/*currentandfuture*/}


<Box sx={designA} id="currentandfuture">


<Typography sx={headerA}>Current and Future Plans</Typography>

<Typography sx={paragraphA}>Since 2020, I have absolutely loved mentoring UX/UI designers and frontend web 
developers through an online learning program called Trilogy Educational Services, which is now called edX as of 2022. Being a very 
attentive TA, Senior Tutor, and Central Grader through the bootcamp is exteremly fun as I get to lead others and learn from them at 
the same time. I love that I get to work with people from all over the world and see their interest grow in digital design. It is an 
incredible part time remote opportunity.</Typography>




<Typography sx={paragraphA}>I am currently in a place where I can accept more work. If you would like to discuss future opportunities, 
feel free to reach out to me by my contact information as needed. I hope to hear from you soon before another 
creative opportunity pops up instead and thank you for your time.</Typography>



    <Typography sx={paragraphA}></Typography>

</Box>
















</>




)



}

export default UIDesigns;