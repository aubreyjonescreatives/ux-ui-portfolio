import * as React from 'react'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
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



const secondaryNav = {
marginLeft: '100px'


}




const headerStylesA = {
    margin: '100px 100px 20px 50px', 
    fontSize: '36px', 
    paddingTop: '50px', 
    color: '#30638E'
    
    
    
    }

const navlinkStyles = {
    padding: '10px'

}


const allCards = {
width: '50%', 
display: 'block'
}



const cardStyles = {

margin: '20px auto',  
width: '600px'


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
  



return (
<>

<div sx={secondaryNav} position="fixed">
<Typography sx={headerStylesA}>Disney VS. Netflix Research Case Study</Typography>

<Link href="#challenge" sx={navlinkStyles}>Challenge</Link>
<Link href="#characteristicandfunctionality" sx={navlinkStyles}>Characteristic and Functionality Audit</Link>
<Link href="#productcontrols" sx={navlinkStyles}>Product Controls Touch Gesture Audit</Link>
<Link href="#satisfactionanalysis" sx={navlinkStyles}>Satisfaction Analysis</Link>
<Link href="#protopersonas"sx={navlinkStyles}>Proto Personas</Link>
<Link href="#empathymap" sx={navlinkStyles}>Customer Empathy Map</Link>
<Link href="#journeymap" sx={navlinkStyles}>Customer Journey Map</Link>
<Link href="#moretodo" sx={navlinkStyles}>More to Do</Link>
</div>

<Box sx={allCards}>
<Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage1 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles" id="challenge">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage2 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles" id="characteristicandfunctionality">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage3 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage4 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage5 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles" id="productcontrols">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage6 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage7 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage8 }
      />
     
   
    </Card>


    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage9 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage10 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage11 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage12 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage13 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage14 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage15 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage16 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage17 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage18 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage19 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles" id="satisfactionanalysis">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage20 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage21 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage22 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage23 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage24 }
      />
     
   
    </Card>



    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage25 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage26 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles" id="protopersonas">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage27 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage28 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage29 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage30 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage31 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage32 }
      />
     
   
    </Card>


    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage33 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage34 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage35 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage36 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage37 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage38 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles" id="empathymap">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage39 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage40 }
      />
     
   
    </Card>


    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage41 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage42 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage43 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage44 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles" id="journeymap">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage45 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles">
      <CardMedia
        component="img"
        alt="Disney VS Netflix"
        image={DNImage46 }
      />
     
   
    </Card>

    <Card sx={cardStyles} className="cardStyles" id="moretodo">
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