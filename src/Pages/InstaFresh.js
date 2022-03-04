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
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import MoodIcon from '@mui/icons-material/Mood';
import MapIcon from '@mui/icons-material/Map';
import ListIcon from '@mui/icons-material/List';
import CompareIcon from '@mui/icons-material/Compare';
import ModeIcon from '@mui/icons-material/Mode';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import TextureIcon from '@mui/icons-material/Texture';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AnimationIcon from '@mui/icons-material/Animation';
import PollIcon from '@mui/icons-material/Poll';


const headerStylesA = {
    margin: '100px 50px 0px 50px', 
    fontSize: '36px', 
    padding: '80px 20px', 
    color: '#30638E',
    backgroundColor: 'white', 
    width: '100%'
    
    
    }

      
    const linkStyling = {
      fontSize: '20px', 
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



const cardStyles = {

margin: '20px auto',  
width: '600px', 
"&:hover": {
  shadow: 'none'
 
}


}



const typeStyles = {
    padding: '50px', 
    width: '90%', 
    color: '#30638E'
}





const InstaFresh = () => {
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
        <Link href="#top" sx={linkStyling}>INSTAFRESH UX/UI CASE STUDY</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <ReportProblemIcon/>
        </ListItemIcon>
        <Link href="#challenge" sx={linkStyling}>CHALLENGE</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
        <AccessibilityIcon/>
        </ListItemIcon>
        <Link href="#protopersona" sx={linkStyling}>PROTO PERSONA</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <PollIcon/>
        </ListItemIcon>
        <Link href="#researchsurvey" sx={linkStyling}>RESEARCH SURVEY</Link>
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
           <Link href='/' sx={linkStyling}>INSTAFRESH UX/UI CASE STUDY</Link>
           </Typography>
           
         </Toolbar>
         
       </AppBar>
     </Box>
     
       </nav>
       <Drawer anchor="left" open={isOpen} onClose={toggleDrawer} sx={{backgroundColor: '57FAD56'}}>
       {drawerItemList()}
       </Drawer>


       <Typography sx={headerStylesA} id="top">InstaFresh UX/UI Case Study</Typography>






</>




)



}

export default InstaFresh;