import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const drawerWidth = 240;
const navItems = ['About', 'UX/UI Design Case Studies', 'Blogs', 'Contact'];

const linkStyling = {
  fontSize: '20px', 
  color: 'white', 
  fontFamily: 'Lato', 
  textDecoration: 'none',
  "&:hover": {
    color: 'white', 
   
   
  }

}

const navbarStyles = {
  backgroundColor: '#30638E',
  fontFamily: 'Lato', 
  display: 'flex'
}

const navbarList = {
  float: 'right'
}



const NavBar = (props) => {


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Aubrey Jones
      </Typography>
      <Divider />
      <List sx={navbarList}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

// const drawerItemList = () => (
//   <Box sx={{width: 250, backgroundColor: '#30638E', fontFamily: 'Lato'}} role="presentation" className="drawerMenu">
//     <List>
//     <ListItem button>
//         <ListItemIcon sx={{color: "white"}}>
//           <AutoAwesomeIcon/>
//         </ListItemIcon>
//         <Link href="/" sx={linkStyling}>AUBREY JONES</Link>
//       </ListItem>
//       <ListItem button>
//         <ListItemIcon sx={{color: "white"}}>
//           <AutoFixHighIcon/>
//         </ListItemIcon>
//         <Link href="#casestudies" sx={linkStyling}>CASE STUDIES</Link>
//       </ListItem>
//       <ListItem button>
//         <ListItemIcon sx={{color: "white"}}>
//           <ArticleIcon/>
//         </ListItemIcon>
//         <Link href="#articles" sx={linkStyling}>ARTICLES</Link>
//       </ListItem>

//       <ListItem button>
//         <ListItemIcon sx={{color: "white"}}>
//           <InfoIcon/>
//         </ListItemIcon>
//         <Link href="#samples" sx={linkStyling}>SAMPLES</Link>
//       </ListItem>

//       <ListItem button>
//         <ListItemIcon sx={{color: "white"}}>
//           <ConnectWithoutContactIcon/>
//         </ListItemIcon>
//         <Link href="#connect" sx={linkStyling}>CONNECT</Link>
//       </ListItem>


    
//     </List>
//   </Box>
// )

  return (
  <> 
   <Box >
      <CssBaseline />
      <AppBar component="nav" sx={navbarStyles}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/" sx={linkStyling}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Aubrey Jones
          </Typography>
          </Link>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
       
       
      </Box>
    </Box>
  </>
  );
}

export default NavBar;