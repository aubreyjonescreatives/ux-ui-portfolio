import * as React from 'react'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



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
width: '350px', 
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

<Typography sx={headerStylesA} id="projects">InstaFresh</Typography>



</>




)



}

export default Landing;