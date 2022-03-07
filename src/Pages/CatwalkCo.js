import * as React from 'react'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
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
import ModeIcon from '@mui/icons-material/Mode';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import TextureIcon from '@mui/icons-material/Texture';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AnimationIcon from '@mui/icons-material/Animation';
import PollIcon from '@mui/icons-material/Poll';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import ProtoPersona from '../Images/catwalkcompany/images/protopersona.png'
import MovingIcon from '@mui/icons-material/Moving';
import JourneyMap from '../Images/catwalkcompany/images/journeymap.png'; 


const headerStylesA = {
    margin: '100px 50px 0px 50px', 
    fontSize: '36px', 
    padding: '80px 20px', 
    color: '#30638E',
    backgroundColor: 'white', 
    width: '100%'
    
    
    }

      
    const linkStyling = {
      fontSize: '18px', 
      color: 'white', 
      textDecoration: 'none',
      "&:hover": {
        color: 'white', 
       
       
      }
    
    }
      





const allCards = { 
display: 'inline-flex', 
flexWrap: 'wrap', 
}




const typeStyles = {
    padding: '50px', 
    width: '90%', 
    color: '#30638E'
}


const designA = {
  bgcolor: '#eee',

}

const headerA = {
padding: '50px 70px', 
fontSize: '30px', 
color: '#30638E'

}

const paragraphA = {
padding: '20px 70px 100px 70px',
fontSize: '20px'
}

const designB = {
  bgcolor: 'white',

}

const headerB = {
padding: '50px 70px', 
fontSize: '30px', 
color: '#30638E'

}

const paragraphB = {
padding: '20px 70px',
fontSize: '20px'
}


const cardStyles = {
  margin: '75px auto 75px auto', 
  display: 'block', 
  width: '700px'
}



const CatwalkCo = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
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
        <Link href="#top" sx={linkStyling}>CATWALK COMPANY UX/UI CASE STUDY</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <ReportProblemIcon/>
        </ListItemIcon>
        <Link href="#challenge" sx={linkStyling}>CHALLENGE</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
        <PersonOutlineIcon/>
        </ListItemIcon>
        <Link href="#protopersona" sx={linkStyling}>PROTO PERSONA</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <ModeIcon/>
        </ListItemIcon>
        <Link href="#storyboard" sx={linkStyling}>STORYBOARD</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <MovingIcon/>
        </ListItemIcon>
        <Link href="#userjourneymap" sx={linkStyling}>USER JOURNEY MAP</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <PollIcon/>
        </ListItemIcon>
        <Link href="#researchsurvey" sx={linkStyling}>RESEARCH SURVEY</Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <StickyNote2Icon/>
        </ListItemIcon>
        <Link href="#affinitydiagram" sx={linkStyling}>AFFINITY DIAGRAM</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <ViewComfyIcon/>
        </ListItemIcon>
        <Link href="#cardsorting" sx={linkStyling}>CARD SORTING</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <AccountTreeIcon/>
        </ListItemIcon>
        <Link href="#sitemap" sx={linkStyling}>SITEMAP</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <ModeIcon/>
        </ListItemIcon>
        <Link href="#sketches" sx={linkStyling}>SKETCHES</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <ViewModuleIcon/>
        </ListItemIcon>
        <Link href="#lowfidelitywireframes" sx={linkStyling}>LOW-FIDELITY WIREFRAMES</Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <TextureIcon/>
        </ListItemIcon>
        <Link href="#patternlibrary" sx={linkStyling}>PATTERN LIBRARY</Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <ViewCompactIcon/>
        </ListItemIcon>
        <Link href="#hifidelitywireframes" sx={linkStyling}>HI-FIDELITY WIREFRAMES</Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <PhoneIphoneIcon/>
        </ListItemIcon>
        <Link href="#mobileprototype" sx={linkStyling}>MOBILE PROTOTYPE</Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <AnimationIcon/>
        </ListItemIcon>
        <Link href="#motiongraphic" sx={linkStyling}>MOTION GRAPHIC</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <PhoneIphoneIcon/>
        </ListItemIcon>
        <Link href="#usabilitytesting" sx={linkStyling}>USABILITY TESTING</Link>
      </ListItem>
    

      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <ListIcon/>
        </ListItemIcon>
        <Link href="#moretodo" sx={linkStyling}>MORE TO DO</Link>
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


       <Typography sx={headerStylesA} id="top">Catwalk Company UX/UI Case Study</Typography>

<Box sx={designA} id="challenge">
<Typography sx={headerA}>Challenge</Typography>
<Typography sx={paragraphA}>While the world turned to remote work overnight, I wanted to build a communication bridge between designers, developers and 
clients with an e-commerce platform website so that we can continue to develop our virtual worlds together in a timely fashion.</Typography>
  
  
</Box> 

<Box sx={designB} id="protopersona">
<Typography sx={headerB}>Proto Persona</Typography>


<Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Proto Persona"
        image={ProtoPersona}
      />
     
     
    </Card>




  
</Box> 

<Box sx={designA} id="journeymap">
<Typography sx={headerB}>Journey Map</Typography>


<Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Journey Map"
        image={JourneyMap}
      />
     
     
    </Card>

</Box> 


</>




)



}

export default CatwalkCo;