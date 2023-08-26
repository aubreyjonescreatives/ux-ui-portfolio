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
<Typography sx={paragraphA}>Landing International was working on a new website that built a bridge between beauty brands and products. 
They became Codafi Technology's client after already completing the research phase to the UX/UI design process.
They needed UX/UI designers to design and redesign specific features on their website.</Typography>
</Container>
<Container>
<Typography sx={headerStylesB}>Project Constraints</Typography>
<Typography sx={paragraphA}>A few of our project constraints included:</Typography>
<Typography sx={paragraphA}>
  Client Expectations
</Typography>
<Typography sx={paragraphA}>Each new feature started out by a list of written requirements. Some of these concepts were difficult to 
understand without more detail. We spent time with Landing International stakeholders to clearly identify their vision and goals well 
before we spent time designing.
to clearly </Typography>
<Typography sx={paragraphA}>
  Work Availability
</Typography>
<Typography sx={paragraphA}>The work load carried a lot of inconsistency. Sometimes features did not take as long as others and sometimes 
we were out of work altogether.</Typography>



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

<Typography sx={sectiontitleB}>Top Banner Redesign</Typography>

<Row>

<Col>

<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Original Algebra 1 program"
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
  3. Added a call-to-action button for navigation accessibility.
</Typography>
</Col>




</Row>





</Container>


</Box>





<Box sx={boxStylesB}>

<Container>

<Typography sx={headerStylesB}>Algebra 1 Lesson Plan Redesign</Typography>

<Typography sx={paragraphB}>The Algebra 1 program contained 15 modules and 4 - 12 lessons in each module. Discovering a user-friendly 
layout included quite a few different needs listed on the left. The Family Literacy Centers offered an internship 
opportunity to continue the redesign. While my teammates had other summer plans, I continued working on the redesign with UI design principles 
in mind. We also brought on Erica, a content editor, as she noticed some grammar, spelling, and punctuation mistakes made througout the 
original lessons.</Typography>


<Typography sx={sectiontitleB}>Key Design Changes and Rationale:</Typography>

<Row>
<Col>
<Typography sx={paragraphB}>
 1. Calmer colors out of their style guide for better readability.
</Typography>
<Typography sx={paragraphB}>
  2. Clearer top navigation for lesson location.
</Typography>
<Typography sx={paragraphB}>
  3. Left and right buttons originally drew too much attention. We wanted our students to focus on 
  page content instead. These buttons only appear as accessible on hover, when the student is ready 
  to click on them.
</Typography >
<Typography sx={paragraphB}>
  4. Visual progress for clarity to avoid the "Are we there yet?" question. 
</Typography>
</Col>

<Col>

<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="New Algebra 1 Program"
        image={BeforeandAfterHero}
       
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
 1. We could resolve the first quest to update Flash files into current HTML5 practices.
</Typography>
<Typography sx={paragraphB}>
  2. The information architecture needed more clarity with mental model placements and modern color choices.
</Typography>
<Typography sx={paragraphB}>
  3. Some of the lessons had poor grammar and spelling mistakes. We brought on an editor to help fix these issues.
</Typography >
<Typography sx={paragraphB}>
  4. Updating the lesson plans provided more opportunity for students to engage in modern content. 
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