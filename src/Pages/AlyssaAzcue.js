import * as React from 'react'; 
import { Container, Row, Col } from 'react-grid-system';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import LessonPlanHeuristic from '../Images/algebra1images/heuristicimages/ruleone-old.png';
import LessonPlanHeuristicNew from '../Images/algebra1images/heuristicimages/ruleone-new.png';

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

















const AlyssaAzcue = () => {
  





return (
<>


<Box sx={Everything}>

<Box sx={boxStylesA}>

<Container>
<Typography sx={headerStylesA} id="top">Alyssa Azcué</Typography>


       <Typography sx={headerStylesA} id="top">Kajabi Case Study</Typography>

       </Container>
     
<Container sx={caseStudyInfo}>

<Row sx={roleInfo}>

<Col sx={12} sm={6} md={4} xl={2}>
<Typography sx={titleInfo}>
  My Roles:
</Typography >
<Typography sx={flcInfo}>
  UX/UI Engineer
</Typography>


</Col>

<Col sx={12} sm={6} md={4} xl={2}>
<Typography sx={titleInfo}>
  Stakeholders
</Typography>
<Typography sx={flcInfo}>
  Alyssa Azcué
</Typography>



</Col>

<Col sx={12} sm={6} md={4} xl={2}>
<Typography sx={titleInfo}>
  Timeframe:
</Typography>
<Typography sx={flcInfo}>
  1 Month
</Typography>


</Col>



</Row>



</Container>

</Box>

{/*challenge*/}


<Box sx={boxStylesB}>
  <Container>
<Typography sx={headerStylesB}>Challenge</Typography>
<Typography sx={paragraphA}>Alyssa needs her Canva website moved into Kajabi for a more robust platform and 
    higher customer success rate.
</Typography>
</Container>

<Container>
<Typography sx={headerStylesB}>Project Constraints</Typography>
<Typography sx={paragraphA}>A few of our project constraints included:</Typography>
<Typography sx={paragraphA}>
Kajabi's Templates
</Typography>
<Typography sx={paragraphA}>Just like any other content management system, Kajabi primarily works with templates. We wanted to match
    the current Canva design and layout that was in Canva, which meant we had to create Kajabi sections from scratch.  
</Typography>
<Typography sx={paragraphA}>
Kajabi's Responsive Web Design 
</Typography>
<Typography sx={paragraphA}>Kajabi sure loves the CSS Flexbox framework! To make the website responsive on multiple devices with its images, 
    I discovered I had to override Kajabi's natural CSS Flexbox system to replicate what 
    Alyssa wanted and to maintain predictable responsive design as Kajabi naturally plays with too much padding, margins, and whitespace. It also 
    uses outdated device sizes, which was something to watch out for when overriding them with different code.</Typography>



</Container>
</Box> 



<Box sx={boxStylesA}>

<Container>
<Typography sx={headerStylesA}>Discover</Typography>

<Row>
<Col>
<Typography sx={paragraphB}>
  Alyssa's assistant reached out and scheduled a meeting with us together to discover project needs. These needs requested:
</Typography>
<Typography sx={paragraphB}>
 1. Move Canva Website into Kajabi for an increase in customer success rate and traction
</Typography >
<Typography sx={paragraphB}>
  2. Kajabi website needed to match Canva design on multiple devices
</Typography>

</Col>

<Col>

<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Original Algebra 1 program"
        image={LessonPlanHeuristic}
       
      />
     
     
    </Card>

</Col>


</Row>
</Container>



</Box>





<Box sx={boxStylesB}>

<Container>

<Typography sx={headerStylesB}>Define</Typography>

<Typography sx={paragraphB}>The Algebra 1 program contained 15 modules and 4 - 12 lessons in each module. Discovering a user-friendly 
layout included quite a few different needs listed on the left. The Family Literacy Centers offered an internship 
opportunity to continue the redesign. While my teammates had other summer plans, I continued working on the redesign with UI design principles and 
their style guide needs in mind. We also brought on Erica, a content editor that helped with the grammar, spelling, and punctuation mistakes 
in the original lessons.</Typography>


<Typography sx={sectiontitleB}>Key Design Changes and Rationale:</Typography>

<Row>
<Col>
<Typography sx={paragraphB}>
 1. Choosing calmer colors pulled from their style guide aided better readability.
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
        image={LessonPlanHeuristicNew}
       
      />
     
     
    </Card>

</Col>


</Row>
</Container>

</Box> 



<Box sx={boxStylesA}>

<Container>
<Typography sx={headerStylesA}>Discover</Typography>


<Row>
<Col>
<Typography sx={paragraphB}>
  Key Issues:
</Typography>
<Typography sx={paragraphB}>
 1. Outdated Top Navigation Bar. Missing a way to return to main page. We needed better call-to-action features here.
</Typography >
<Typography sx={paragraphB}>
  2. The current call-to-action Buttons are too tight and draw too much attention.
</Typography>
<Typography sx={paragraphB}>
  3. Colors are very harsh for student readability.
</Typography>
<Typography sx={paragraphB}>
  4. A numbered progress gets overlooked. 
</Typography>
</Col>

<Col>

<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Original Algebra 1 program"
        image={LessonPlanHeuristic}
       
      />
     
     
    </Card>

</Col>


</Row>
</Container>



</Box>





<Box sx={boxStylesB}>

<Container>

<Typography sx={headerStylesB}>Define</Typography>

<Typography sx={paragraphB}>The Algebra 1 program contained 15 modules and 4 - 12 lessons in each module. Discovering a user-friendly 
layout included quite a few different needs listed on the left. The Family Literacy Centers offered an internship 
opportunity to continue the redesign. While my teammates had other summer plans, I continued working on the redesign with UI design principles and 
their style guide needs in mind. We also brought on Erica, a content editor that helped with the grammar, spelling, and punctuation mistakes 
in the original lessons.</Typography>


<Typography sx={sectiontitleB}>Key Design Changes and Rationale:</Typography>

<Row>
<Col>
<Typography sx={paragraphB}>
 1. Choosing calmer colors pulled from their style guide aided better readability.
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
        image={LessonPlanHeuristicNew}
       
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
 1. We could resolve the first quest to update Flash files into current best HTML5 practices.
</Typography>
<Typography sx={paragraphB}>
  2. The information architecture needed more clarity with mental model placements and modern color choices.
</Typography>
<Typography sx={paragraphB}>
  3. Some of the lessons had poor grammar and spelling mistakes. We worked together as a team to fix these mistakes.
</Typography >
<Typography sx={paragraphB}>
  4. Updating the lesson plan content layout provided more opportunity for students to engage in positive online learning experiences. 
</Typography>
</Col>




</Row>

</Container>



</Box>


</Box>









</>




)



}

export default AlyssaAzcue;