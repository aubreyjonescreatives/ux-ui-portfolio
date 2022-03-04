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
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import MoodIcon from '@mui/icons-material/Mood';
import MapIcon from '@mui/icons-material/Map';
import ListIcon from '@mui/icons-material/List';
import CompareIcon from '@mui/icons-material/Compare';
import DNImage1 from '../Images/videovoyagers/dn01.jpg'
import DNImage2 from '../Images/videovoyagers/dn02.jpg'
import DNImage3 from '../Images/videovoyagers/dn03.jpg'
import DNImage4 from '../Images/videovoyagers/dn04.jpg'
import DNImage5 from '../Images/videovoyagers/dn05.jpg'
import DNImage6 from '../Images/videovoyagers/dn06.jpg'
import DNImage7 from '../Images/videovoyagers/dn07.jpg'
import DNImage8 from '../Images/videovoyagers/dn08.jpg'
import DNImage9 from '../Images/videovoyagers/dn09.jpg'
import DNImage10 from '../Images/videovoyagers/dn10.jpg'
import DNImage11 from '../Images/videovoyagers/dn11.jpg'
import DNImage12 from '../Images/videovoyagers/dn12.jpg'
import DNImage13 from '../Images/videovoyagers/dn13.jpg'
import DNImage14 from '../Images/videovoyagers/dn14.jpg'
import DNImage15 from '../Images/videovoyagers/dn15.jpg'
import DNImage16 from '../Images/videovoyagers/dn16.jpg'
import DNImage17 from '../Images/videovoyagers/dn17.jpg'
import DNImage18 from '../Images/videovoyagers/dn18.jpg'
import DNImage19 from '../Images/videovoyagers/dn19.jpg'
import DNImage20 from '../Images/videovoyagers/dn20.jpg'
import DNImage21 from '../Images/videovoyagers/dn21.jpg'
import DNImage22 from '../Images/videovoyagers/dn22.jpg'
import DNImage23 from '../Images/videovoyagers/dn23.jpg'
import DNImage24 from '../Images/videovoyagers/dn24.jpg'
import DNImage25 from '../Images/videovoyagers/dn25.jpg'
import DNImage26 from '../Images/videovoyagers/dn26.jpg'
import DNImage27 from '../Images/videovoyagers/dn27.jpg'
import DNImage28 from '../Images/videovoyagers/dn28.jpg'
import DNImage29 from '../Images/videovoyagers/dn29.jpg'
import DNImage30 from '../Images/videovoyagers/dn30.jpg'
import DNImage31 from '../Images/videovoyagers/dn31.jpg'
import DNImage32 from '../Images/videovoyagers/dn32.jpg'
import DNImage33 from '../Images/videovoyagers/dn33.jpg'
import DNImage34 from '../Images/videovoyagers/dn34.jpg'
import DNImage35 from '../Images/videovoyagers/dn35.jpg'
import DNImage36 from '../Images/videovoyagers/dn36.jpg'
import DNImage37 from '../Images/videovoyagers/dn37.jpg'
import DNImage38 from '../Images/videovoyagers/dn38.jpg'
import DNImage39 from '../Images/videovoyagers/dn39.jpg'
import DNImage40 from '../Images/videovoyagers/dn40.jpg'
import DNImage41 from '../Images/videovoyagers/dn41.jpg'
import DNImage42 from '../Images/videovoyagers/dn42.jpg'
import DNImage43 from '../Images/videovoyagers/dn43.jpg'
import DNImage44 from '../Images/videovoyagers/dn44.jpg'
import DNImage45 from '../Images/videovoyagers/dn45.jpg'
import DNImage46 from '../Images/videovoyagers/dn46.jpg'
import DNImage47 from '../Images/videovoyagers/dn47.jpg'



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





const DisneyVSNetflix = () => {
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
        <Link href="#top" sx={linkStyling}>NETFLIX VS DISNEY UX RESEARCH CASE STUDY</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <ReportProblemIcon/>
        </ListItemIcon>
        <Link href="#challenge" sx={linkStyling}>CHALLENGE</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <CompareIcon/>
        </ListItemIcon>
        <Link href="#characteristicandfunctionality" sx={linkStyling}>CHARACTERISTIC AND FUNCTIONALITY AUDIT</Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <ControlCameraIcon/>
        </ListItemIcon>
        <Link href="#productcontrols" sx={linkStyling}>PRODUCT CONTROLS TOUCH GESTURE AUDIT</Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <AssessmentIcon/>
        </ListItemIcon>
        <Link href="#satisfactionanalysis" sx={linkStyling}>SATISFACTION ANALYSIS REPORT</Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <PersonOutlineIcon/>
        </ListItemIcon>
        <Link href="#protopersonas" sx={linkStyling}>PROTO PERSONAS</Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <MoodIcon/>
        </ListItemIcon>
        <Link href="#empathymap" sx={linkStyling}>CUSTOMER EMPATHY MAP</Link>
      </ListItem>

      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <MapIcon/>
        </ListItemIcon>
        <Link href="#journeymap" sx={linkStyling}>CUSTOMER JOURNEY MAP</Link>
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


       <Typography sx={headerStylesA} id="top">Disney VS. Netflix UX Research Case Study</Typography>




<Box sx={allCards}>
<Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage1 }
      />
     
   
    </Card>

    <Card sx={cardStyles} id="challenge">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage2 }
      />
     
   
    </Card>

    <Card sx={cardStyles} id="characteristicandfunctionality">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage3 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage4 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage5 }
      />
     
   
    </Card>

    <Card sx={cardStyles} id="productcontrols">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage6 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage7 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage8 }
      />
     
   
    </Card>


    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage9 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage10 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage11 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage12 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage13 }
      />
     
   
    </Card>

    <Card sx={cardStyles} >
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage14 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage15 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage16 }
      />
     
   
    </Card>

    <Card sx={cardStyles} >
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage17 }
      />
     
   
    </Card>

    <Card sx={cardStyles} >
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage18 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage19 }
      />
     
   
    </Card>

    <Card sx={cardStyles} id="satisfactionanalysis">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage20 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage21 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage22 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage23 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage24 }
      />
     
   
    </Card>



    <Card sx={cardStyles} >
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage25 }
      />
     
   
    </Card>

    <Card sx={cardStyles} >
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage26 }
      />
     
   
    </Card>

    <Card sx={cardStyles} id="protopersonas">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage27 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage28 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage29 }
      />
     
   
    </Card>

    <Card sx={cardStyles} >
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage30 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage31 }
      />
     
   
    </Card>

    <Card sx={cardStyles} >
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage32 }
      />
     
   
    </Card>


    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage33 }
      />
     
   
    </Card>

    <Card sx={cardStyles} >
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage34 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage35 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage36 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage37 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage38 }
      />
     
   
    </Card>

    <Card sx={cardStyles} id="empathymap">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage39 }
      />
     
   
    </Card>

    <Card sx={cardStyles} >
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage40 }
      />
     
   
    </Card>


    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage41 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage42 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage43 }
      />
     
   
    </Card>

    <Card sx={cardStyles} >
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage44 }
      />
     
   
    </Card>

    <Card sx={cardStyles} id="journeymap">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage45 }
      />
     
   
    </Card>

    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage46 }
      />
     
   
    </Card>

    <Card sx={cardStyles} id="moretodo">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage47 }
      />
     
   
    </Card>




</Box>
  


</>




)



}

export default DisneyVSNetflix;