import * as React from 'react'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col } from 'react-grid-system';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AJArts from '../Images/homemadegifts/ajarts.PNG'; 
import LockwoodMagic1 from '../Images/homemadegifts/lockwoodmagic1.PNG';
import Texas from '../Images/homemadegifts/texas.PNG'; 
import IReject from '../Images/homemadegifts/ireject.PNG'; 
import FrostEatSleepRepeat from '../Images/homemadegifts/frosteatsleeprepeat.PNG';
import JustDoughIt from '../Images/homemadegifts/justdoughit.PNG';
import LargeCandleLabel from '../Images/homemadegifts/soywaxcandle30packof3.jpg';
import SmallCandleLabel from '../Images/homemadegifts/soywaxcandle8oz04.jpg';
import CinnamonMarshmallow from '../Images/homemadegifts/cinnamonmarshmallow.png';
import GingerBread from '../Images/homemadegifts/gingerbread.png';
import Mistletoe from '../Images/homemadegifts/mistletoe.png';
import SaltedCaramel from '../Images/homemadegifts/saltedcaramel.png';


const designB = {
    bgcolor: 'white',
  
  }
  
  const headerB = {
  padding: '100px 70px 50px 70px',  
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
  
  
  

    

  const paragraphJars = {
    padding: '10px', 
    fontSize: '18px'
  }








const UIProduct = () => {
  return (
    <>

<Navbar bg="light" expand="lg" className="NavBarStyles">
      <Container>
        <Navbar.Brand href="/" className="websiteTitle">AUBREY JONES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#productdesignprojects">UI PRODUCT DESIGNS</Nav.Link>
            <Nav.Link href="#connect">CONNECT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    {/*productdesignprojects*/}


<Box sx={designB} id="productdesignprojects">


<Typography sx={headerB}>UI Product Designs</Typography>

<Typography sx={paragraphB}>Welcome to my ever-evolving product design freelance experience! These designs have ranged from 
t-shirts, candles, to bars of soap labels, etc. I love that I get to explore my creative digital design passion at any time of the 
day and share it with others. I care to see projects through from inception to production and communicate with others as needed.</Typography>



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






    <Typography sx={paragraphB}>Candle Labels:</Typography>


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



    <Typography sx={paragraphB}>Liquid Foaming Soap Labels:</Typography>


<Row>

<Col sm={12} md={6} xl={4}>


<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Foaming Soap Label"
        image={CinnamonMarshmallow}
       
      />
      
    </Card>

    </Col>

<Col sm={12} md={6} xl={4}>


<Card sx={imageStylesB}>
  <CardMedia
    component="img"
    alt="Foaming Soap Label"
    image={GingerBread}
   
  />

</Card>

</Col>

<Col sm={12} md={6} xl={4}>


<Card sx={imageStylesB}>
  <CardMedia
    component="img"
    alt="Foaming Soap Label"
    image={Mistletoe}
   
  />

</Card>

</Col>


    </Row>








    <Typography sx={paragraphB}></Typography>

</Box>


    
    </>
  )
}

export default UIProduct