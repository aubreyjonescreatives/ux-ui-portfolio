import * as React from 'react'; 
import { Container, Row, Col } from 'react-grid-system';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InspectImage from '../Images/alyssa_azcue/inspect_tool.png'; 
import MyCode from '../Images/alyssa_azcue/own_code.png';
import DefineImage from '../Images/alyssa_azcue/section_example.png';
import DiscoverImage from '../Images/alyssa_azcue/kajabi_start.png';
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
  2. Kajabi website needed to match Canva design on multiple devices for responsive web design
</Typography>
<Typography sx={paragraphB}>
 3. Confirm email marketing connection between Flodesk and Stripe
</Typography >

</Col>

<Col>

<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Kajabi Example"
        image={DiscoverImage}
       
      />
     
     
    </Card>

</Col>


</Row>
</Container>



</Box>





<Box sx={boxStylesB}>

<Container>

<Typography sx={headerStylesB}>Define</Typography>

<Typography sx={paragraphB}>With experience using other content management systems like Kajabi, 
    we needed to define the website and email marketing deliverables and set clear expectations:  </Typography>


<Row>
<Col>
<Typography sx={paragraphB}>
 1. I met with Alyssa and we organized a list of needs for success on a Trello board for project management.
</Typography>
<Typography sx={paragraphB}>
  2. I needed access to the Canva copy in specific formats as well as the software for Kajabi, Flodesk, and Stripe. 
</Typography>
<Typography sx={paragraphB}>
  3. We defined deadline requests and I created a contract. 
</Typography >


</Col>

<Col>

<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="New Algebra 1 Program"
        image={DefineImage}
       
      />
     
     
    </Card>

</Col>


</Row>
</Container>

</Box> 



<Box sx={boxStylesA}>

<Container>
<Typography sx={headerStylesA}>Develope</Typography>


<Typography sx={paragraphB}>Once I gained access to the required tools for this project, I developed the most important aspect 
    of this work, which was to make the Kajabi site responsive on mulitple devices. Kajabi has very specific CSS Flexbox patterns 
    that would not fit with Alyssa's orginal images and designs, no matter how often I tried to implement its default numbers. 
    Since I love to code and usually use the inspect tool on other sites, I opened this up to figure out how to overrride its
    traditional section designs. 
</Typography>

<Typography sx={paragraphB}>I developed a specific page pattern with this code that will not interfere with other pages overtime. Kajabi 
    likes to keep track of its sections with ID attributes. I used them to style this site for more modern device sizes.  
</Typography>

<Typography sx={paragraphB}>The previous Canva site also did not follow best practices for SEO marketing with its current social media 
    links. I requested the needed information for these changes and made the links accessible in the new Kajabi site. 
</Typography>

<Row>

<Col>
<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Coding in Kajabi"
        image={MyCode}
       
      />
     
     
    </Card>
</Col>

<Col>
<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Using Inspect"
        image={InspectImage}
       
      />
     
     
    </Card>
    </Col>

</Row>




</Container>



</Box>





<Box sx={boxStylesB}>

<Container>

<Typography sx={headerStylesB}>Deliver</Typography>

<Typography sx={paragraphB}>Once I completed the final </Typography>


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