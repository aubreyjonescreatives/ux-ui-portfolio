import * as React from 'react'; 
import { Container, Row, Col } from 'react-grid-system';
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
import CandleLabels from '../Images/appareldesigns/soywaxcandle30packof3.jpg';
import FebruaryIterations from '../Images/februaryiterations.png';
import LMBookCover from '../Images/bookcover.png';
import Nav from 'react-bootstrap/Nav'; 




const Everything = {
  display: 'grid',
  margin: '100px auto',
  justifyContent: 'center', 
  width: '100%',
}



const boxStylesA = {
  backgroundColor: '#ffffff', 
  marginBottom: '200px'
 
 }




const headerStylesA = {
  margin: '25px 0px', 
  color: '#00003D',
  fontSize: '36px', 
  fontFamily: 'Raleway, sans-serif', 
//  fontWeight: '400', 
  
  
  
  }
   
    const caseStudyInfo = {
      fontFamily: 'Raleway, sans-serif',
      margin: '150px 0px 50px 0px',
      marginTop: '200px',
      paddingTop: '100px'
    }  



    const titleInfo = {
      fontFamily: 'Raleway, sans-serif',
      marginTop: '125px',
      marginBottom: '35px',
      fontWeight: '900',
      fontSize: '20px'
    }

    const flcInfo = {
      fontFamily: 'Raleway, sans-serif',
      margin: '15px 0px'
    }

    const roleInfo = {
      margin: '10px 0px'
    }



const paragraphA = {
  fontFamily: 'Raleway, sans-serif',
  margin: '25px 0px'

}



const paragraphShirts = {
  padding: '10px', 
  fontSize: '18px'
}


  

  const boxStylesB = {
    backgroundColor: '#F8F9FA', 
    paddingTop: '5px',
    paddingBottom: '50px',
    width: '100%'
  
  }


const headerStylesB = {
  justifyContent: 'start',
  margin: '50px 0px', 
  color: '#00003D',
  fontSize: '36px', 
  fontFamily: 'Raleway, sans-serif', 
//  fontWeight: '400', 
  
  
  
  }


const sectiontitleB = {
  fontFamily: 'Raleway, sans-serif',
  fontSize: '28px', 
  color: '#00003D',
  margin: '50px 0px'
  }




const paragraphB = {
  fontFamily: 'Raleway, sans-serif',
  margin: '20px 0px'
}





const imageStylesB = { 
  //width: '70%',
  display: 'block', 
  //margin: '75px auto 75px auto'
  
  
  }

















const ContentDesignFreelancing = () => {
  





return (
<>


<Box sx={Everything}>

<Box sx={boxStylesA}>

<Container>
<Typography sx={headerStylesA} id="top">Content Design Freelancing Projects</Typography>


       </Container>
     
<Container sx={caseStudyInfo}>

<Row sx={roleInfo}>

<Col sx={12} sm={6} md={4} xl={2}>
<Typography sx={titleInfo}>
  My Roles:
</Typography >
<Typography sx={flcInfo}>
  Content Designer and Writer
</Typography>


</Col>

<Col sx={12} sm={6} md={4} xl={2}>
<Typography sx={titleInfo}>
  Stakeholders
</Typography>
<Typography sx={flcInfo}>
  Various Throughout the Years
</Typography>

</Col>

<Col sx={12} sm={6} md={4} xl={2}>
<Typography sx={titleInfo}>
  Timeframe:
</Typography>
<Typography sx={flcInfo}>
  48+ Months
</Typography>


</Col>




</Row>



</Container>

</Box>

{/*challenge*/}


<Box sx={boxStylesB}>
  <Container>
<Typography sx={headerStylesB}>Challenge</Typography>
<Typography sx={paragraphA}>In my personal time, I love to create digital and print content. These have ranged from t-shirts, candle and soap labels, newsletters, 
  book covers, and more! </Typography>
</Container>

<Container>
<Typography sx={headerStylesB}>Project Constraints</Typography>
<Typography sx={paragraphA}>A few of our project constraints included:</Typography>
<Typography sx={paragraphA}>
  Client Needs
</Typography>
<Typography sx={paragraphA}>I absolultely love meeting with my clients to make sure that I design content based on their needs, even if those interests
  change overtime. 
</Typography>
<Typography sx={paragraphA}>
  Deadlines
</Typography>
<Typography sx={paragraphA}>While we have so many good ideas and iterations, I want to make sure I meet the deadline needs so that the 
  designs and content are not too late. Sometimes some information takes longer. 
</Typography>


</Container>
</Box> 



<Box sx={boxStylesA}>

<Container>
<Typography sx={headerStylesA}>T-shirt Designs</Typography>


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
        alt="I Reject T-Shirt"
        image={IReject}
       
      />
       <Typography gutterBottom variant="h5" component="div" sx={paragraphShirts}>
  A quote requested by a client
        </Typography>
     
    </Card>

    </Col>
   







</Row>



<Row>


<Col sm={12} md={6} xl={4}>


<Card sx={imageStylesB}>
  <CardMedia
    component="img"
    alt="Cookie Design"
    image={FrostEatSleepRepeat}
   
  />
  <Typography gutterBottom variant="h5" component="div" sx={paragraphShirts}>
   Cookie Designer T-Shirt
        </Typography>
 
</Card>

</Col>

<Col sm={12} md={6} xl={4}>


<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Texas is Better"
        image={JustDoughIt}
       
      />
       <Typography gutterBottom variant="h5" component="div" sx={paragraphShirts}>
      Just Dough It design
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
  T-Shirt Book Advertisement
        </Typography>
     
    </Card>

    </Col>
   







</Row>



</Container>



</Box>





<Box sx={boxStylesB}>

<Container>

<Typography sx={headerStylesB}>Candle Labels</Typography>


<Typography sx={sectiontitleB}>Key Design Changes and Rationale:</Typography>

<Row>
<Col>
<Typography sx={paragraphB}>
 1. Specific content required such as the type of candle wax and amount
</Typography>
<Typography sx={paragraphB}>
  2. Clearly showcasing client craft and brand style through logo and label. 
</Typography>
<Typography sx={paragraphB}>
  3. Using design principles such as mental models and simplicity. 
</Typography >

</Col>

<Col>

<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Candle Labels"
        image={CandleLabels}
       
      />
     
     
    </Card>

</Col>


</Row>
</Container>

</Box> 





<Box sx={boxStylesA}>

<Container>
<Typography sx={headerStylesA}>Book Cover Digital Design</Typography>


<Row>


<Col sm={12} md={6} xl={4}>


<Card sx={imageStylesB}>
  <CardMedia
    component="img"
    alt="Lockwood Magic"
    image={LMBookCover}
   
  />

</Card>

</Col>


<Col>
<Typography sx={paragraphB}>
 1. Required lots of attention to detail and editing specifics for clear writing.
</Typography>
<Typography sx={paragraphB}>
  2. Color psychology and theme designed based on book content.  
</Typography>
<Typography sx={paragraphB}>
  3. Here is a link to this book on Amazon:
  <Nav className="me-auto">
            <Nav.Link href="https://www.amazon.com/Lockwood-Magic-Immortal-Compass-Jones-ebook/dp/B0DHV2L99H/ref=sr_1_9?crid=1FZCWSEJLDB8G&dib=eyJ2IjoiMSJ9.Y2jxzKysPWzkIbzYDq1cUT3ZZ0Aqzrrg1TRolbgLPvzIUX78Nhclfj_3pJLffmEz3ubTU02Ct80CBF0scN2UVxQF36OqIRA-1zHemk_DdBZnZNyqrCNVm3x4uEvwki5RR2vK1HDlX8Z9jbOqs4lir67HcXM9HL_xvxMKzkG8NBZEHXR9-k_VyYSgoMBnolKxqkNmTSjPVxlD7BbtJ24yfnY1QvAJrbUuqzM379HrcUs.lBwPu136IBudyj0q_tVkW8jxdSYtmjJ1scjoimw_3XA&dib_tag=se&keywords=lockwood+magic&qid=1738298034&sprefix=lockwood+magic%2Caps%2C157&sr=8-9" className="navLink">Lockwood Magic</Nav.Link>
          </Nav>  
</Typography >




</Col>


   







</Row>







</Container>



</Box>





<Box sx={boxStylesB}>

<Container>

<Typography sx={headerStylesB}>News Letters</Typography>


<Typography sx={sectiontitleB}>Key Design Changes and Rationale:</Typography>

<Row>
<Col>
<Typography sx={paragraphB}>
 1. Required deadlines for specific content such as birthdays and events.
</Typography>
<Typography sx={paragraphB}>
  2. Communicated different styles and iterations with client.  
</Typography>
<Typography sx={paragraphB}>
  3. Maintained audience specific needs per month. 
</Typography >

</Col>

<Col>

<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Candle Labels"
        image={FebruaryIterations}
       
      />
     
     
    </Card>

</Col>


</Row>
</Container>

</Box> 


<Box sx={boxStylesA}>

<Container>
<Typography sx={headerStylesA}>Project Key Findings</Typography>

<Row>
<Col>
<Typography sx={paragraphB}>
 1. I love working with clientele to discover content design and writing needs.
</Typography>
<Typography sx={paragraphB}>
  2. Maintaining style and brand consistency are keys to content inspiration. 
</Typography>
<Typography sx={paragraphB}>
  3. Staying on budget and keeping strict deadlines are possible. 
</Typography >

</Col>




</Row>

</Container>



</Box>


</Box>









</>




)



}

export default ContentDesignFreelancing;