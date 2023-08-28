import * as React from 'react'; 
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-grid-system';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BrandDashboardHomepage from '../Images/codafi/BrandDashboardHomepageHi-FiCompositionsSlide1.png';
import BeforeandAfterHero from '../Images/codafi/beforeandafterheroimage.png';
//import CleanPreCheck from '../Images/codafi/cleanprecheck.png'; 




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
  color: '#02075D',
  fontSize: '36px', 
  fontFamily: 'Raleway, sans-serif', 
//  fontWeight: '400', 
  
  
  
  }
   
    const caseStudyInfo = {
      fontFamily: 'Raleway, sans-serif',
      margin: '150px 0px'
    }  

    const flcInfo = {
      fontFamily: 'Raleway, sans-serif',
      margin: '10px 0px'
    }

    const roleInfo = {
      margin: '10px 0px'
    }



const paragraphA = {
  fontFamily: 'Raleway, sans-serif',
  margin: '25px 0px'

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
  color: '#02075D',
  fontSize: '36px', 
  fontFamily: 'Raleway, sans-serif', 
//  fontWeight: '400', 
  
  
  
  }


const sectiontitleB = {
  fontFamily: 'Raleway, sans-serif',
  fontSize: '28px', 
  color: '#02075D',
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






  
  
  





const CT = () => {
  return (
    <>


<Box sx={Everything}>

<Box sx={boxStylesA}>

<Container>
<Typography sx={headerStylesA} id="top">Codafi Technology</Typography>


<Typography sx={headerStylesA} id="top">UX/UI Case Study</Typography>

</Container>
     
<Container sx={caseStudyInfo}>

<Row sx={roleInfo}>

<Col sx={12} sm={6} md={4} xl={3}>
<Typography sx={flcInfo}>
  My Role
</Typography >
<Typography sx={flcInfo}>
  UX/UI Designer
</Typography>


</Col>

<Col sx={12} sm={6} md={4} xl={3}>
<Typography sx={flcInfo}>
  Stakeholder
</Typography>
<Typography sx={flcInfo}>
  Landing International
</Typography>



</Col>

<Col sx={12} sm={6} md={4} xl={3}>
<Typography sx={flcInfo}>
  Timeframe:
</Typography>
<Typography sx={flcInfo}>
  September 2020 - December 2020
</Typography>


</Col>

</Row>


</Container>

</Box>

{/*challenge*/}


<Box sx={boxStylesB}>
  <Container>
<Typography sx={headerStylesB}>Project Challenge</Typography>
<Typography sx={paragraphA}>Landing International needed UX/UI designers to update their website for beauty brands. This new update included 
communication and navigation features between multiple points of view so that beauty brands and potential companies can communicate with each other.</Typography>
</Container>
<Container>
<Typography sx={headerStylesB}>Project Constraints</Typography>
<Typography sx={paragraphA}>A few of our project constraints included:</Typography>
<Typography sx={paragraphA}>
  Client Expectations
</Typography>
<Typography sx={paragraphA}>Each new feature started out by a list of written requirements and sometimes included a visual representation. 
We spent time with Landing International stakeholders to clearly identify their vision and goals well before we spent time designing their wireframes.</Typography>
<Typography sx={paragraphA}>
  Work Availability
</Typography>
<Typography sx={paragraphA}>The work load carried a lot of inconsistency. Sometimes features did not take as long as others and sometimes 
we were out of work altogether. To resolve this issue, we excercised patience and direct communication to see if our client needed any additional 
work throughout the project.</Typography>



</Container>
</Box> 



<Box sx={boxStylesA}>

<Container>
<Typography sx={headerStylesA}>My Design Thinking Process</Typography>

<Typography sx={sectiontitleB}>Brand Homepage Redesign</Typography>

<Row>
<Col>
<Typography sx={paragraphB}>
  Key Needs:
</Typography>
<Typography sx={paragraphB}>
  1. Follow website layout design envisioned by stakeholders. 
</Typography>
<Typography sx={paragraphB}>
 2. Update top banner content.
</Typography >
<Typography sx={paragraphB}>
  3. align cards for additional navigation.
</Typography>
<Typography sx={paragraphB}>
  4. maintain consistency with top and bottom brand navigation.
</Typography>
</Col>

<Col>

<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Original Algebra 1 program"
        image={BrandDashboardHomepage}
       
      />
     
     
    </Card>

</Col>


</Row>
</Container>


<Container>

<Typography sx={sectiontitleB}>Top Banner Redesign Example</Typography>

<Row>

<Col>

<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Top Banner Redesign"
        image={BeforeandAfterHero}
       
      />
     
     
    </Card>

</Col>
<Col>
<Typography sx={paragraphB}>
  Key Needs:
</Typography>
<Typography sx={paragraphB}>
  1. Landing International wanted their banner background images updated. 
</Typography>
<Typography sx={paragraphB}>
 2. I fixed alignment issues for better readability.
</Typography >
<Typography sx={paragraphB}>
  3. Landing International requested a call-to-action button for navigation accessibility.
</Typography>
</Col>




</Row>





</Container>


</Box>






<Box sx={boxStylesB}>

<Container>
<Typography sx={headerStylesB}>Project Key Findings</Typography>

<Row>
<Col>
<Typography sx={paragraphB}>
 1. Each wireframe required pixel-to-pixel perfection with UI design principles such as alignment, whitespace, chunking, etc.
</Typography>
<Typography sx={paragraphB}>
 2. Exact wants and needs happened through verbal and written communication. 
</Typography>
<Typography sx={paragraphB}>
 3. I gained more Figma practice throughout this redesign.
</Typography>

</Col>




</Row>

</Container>



</Box>


</Box>



</>
  )
}

export default CT