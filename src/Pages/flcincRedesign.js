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

















const flcincRedesign = () => {
  





return (
<>


<Box sx={Everything}>

<Box sx={boxStylesA}>

<Container>
<Typography sx={headerStylesA} id="top">The Family Literacy Centers</Typography>


       <Typography sx={headerStylesA} id="top">Content Redesign Case Study</Typography>

       </Container>
     
<Container sx={caseStudyInfo}>

<Row sx={roleInfo}>

<Col sx={12} sm={6} md={4} xl={2}>
<Typography sx={titleInfo}>
  My Roles:
</Typography >
<Typography sx={flcInfo}>
  Project Manager
</Typography>
<Typography sx={flcInfo}>
  Content Designer
</Typography>
<Typography sx={flcInfo}>
  Product Manager
</Typography>

</Col>

<Col sx={12} sm={6} md={4} xl={2}>
<Typography sx={titleInfo}>
  Stakeholders
</Typography>
<Typography sx={flcInfo}>
  Ed Green
</Typography>
<Typography sx={flcInfo}>
  Deanna Weireholt
</Typography>


</Col>

<Col sx={12} sm={6} md={4} xl={2}>
<Typography sx={titleInfo}>
  Timeframe:
</Typography>
<Typography sx={flcInfo}>
  26 Months
</Typography>


</Col>


<Col sx={12} sm={6} md={4} xl={2}>
<Typography sx={titleInfo}>
  Team One:
</Typography>
<Typography sx={flcInfo}>
  Aaron, UX/UI Designer
</Typography>
<Typography sx={flcInfo}>
  Jordan, UX/UI Designer
</Typography>
</Col>
<Col sx={12} sm={6} md={4} xl={2}>
<Typography sx={titleInfo}>
  Team Two:
</Typography>
<Typography sx={flcInfo}>
  Erica, Lesson Plan Content Editor 
</Typography>
</Col>
  {/* <Col>
<Typography sx={flcInfo}>
  Team Three:
</Typography>
<Typography sx={flcInfo}>
  Ryan, UX/UI Designer 
</Typography>
<Typography sx={flcInfo}>
  Candace, Web Developer 
</Typography>
<Typography sx={flcInfo}>
  Krystal, Web Developer 
</Typography>
<Typography sx={flcInfo}>
  Maurina, Web Developer 
</Typography>


</Col> */}


</Row>



</Container>

</Box>

{/*challenge*/}


<Box sx={boxStylesB}>
  <Container>
<Typography sx={headerStylesB}>1st and 2nd Team Challenge</Typography>
<Typography sx={paragraphA}>The Family Literacy Centers needed updated digital designs to their Algebra 1 online program. Their current software only 
supported outdated Flash technology, which made it to where many young learners could not access their content. I worked with the Family Literacy Centers 
stakeholders as their primary content designer for a page layout redesign that also fit current coding practices so that 
young learners can access trustworthy and engaging educational software.</Typography>
</Container>
<Container>
<Typography sx={headerStylesB}>My Roles: Project Manager and Content Designer</Typography>

</Container>
<Container>
<Typography sx={headerStylesB}>Project Constraints</Typography>
<Typography sx={paragraphA}>A few of our project constraints included:</Typography>
<Typography sx={paragraphA}>
  Time & Communication
</Typography>
<Typography sx={paragraphA}>Our client's expectations were for us to work on this project part time with about 10 hours a week 
  to the project. Because our schedules and responsibilities varied, our time and communication wasn't always available. We did our 
  best to resolve these issues by meeting once a week and using online tools like Slack to communicate any project pain points.</Typography>
<Typography sx={paragraphA}>
  Technology
</Typography>
<Typography sx={paragraphA}>We also had no idea how to convert Flash files into HTML5. Aaron, Jordan, and I 
spent most of the initial project phase researching software possibilities. We asked questions and discussed possible 
software converters from third party contractors. We followed up about our findings with our stakeholders.</Typography>
<Typography sx={paragraphA}>Toward the end of the initial phase, I noticed our Tumult Hype3 was very much like Adobe Animate, 
which could open the Flash files. Since the Algebra 1 lessons contained quite a few artifacts, we could essentially copy, paste, and 
update them into the Tumult Hype3 design software. Tumult Hype3 also contained wireframing features, which allowed us to redesign and 
export the redesign into HTML5. This solution provided us a way to make this update possible.</Typography>


</Container>
</Box> 



<Box sx={boxStylesA}>

<Container>
<Typography sx={headerStylesA}>Original Layout Evaluation</Typography>

<Typography sx={sectiontitleB}>Algebra 1 Lesson Plan Heuristics</Typography>

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

<Typography sx={headerStylesB}>Algebra 1 Lesson Plan Redesign</Typography>

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

export default flcincRedesign;