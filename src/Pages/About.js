import React from 'react'
import {Row, Col } from 'react-grid-system';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import StoryBoardBox1 from '../Images/aboutme/firstbox.png';
// import StoryBoardBox2 from '../Images/aboutme/secondbox.png';
// import StoryBoardBox3 from '../Images/aboutme/thirdbox.png';
// import StoryBoardBox4 from '../Images/aboutme/fourthbox.png';
import MyDesignProcess from '../Images/aboutme/designprocess.png';
//import MyTimeline from '../Images/aboutme/mytimeline.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPassport, faPersonHiking, faGamepad, faPaintbrush, faKitchenSet  } from '@fortawesome/free-solid-svg-icons' ;


const Everything = {
  display: 'grid',
  width: '100%',
}

  
const boxStylesA = {
 backgroundColor: '#00022E', 
 paddingBottom: '75px',
 

}

const boxStylesAFirst = {
  backgroundColor: '#ffffff', 
  padding: '400px 0px',
}


// const headerStylesA = {
//   margin: '50px auto', 
//   color: '#00003D',
//   fontSize: '36px', 
//   fontFamily: 'Raleway, sans-serif', 
// //  fontWeight: '400', 
  
  
  
//   }

  const headerStylesAFirst = {
  textAlign: 'left',
  fontWeight: '300',
  fontSize: '36px',
  fontFamily: 'Raleway, sans-serif', 
  color: '#00022E',

  }

const boxStylesB = {
  backgroundColor: '#FFFFFF', 
  paddingTop: '5px',
  paddingBottom: '50px',
  width: '100%'

}

const headerStylesB = {
  justifyContent: 'start',
  margin: '50px auto',
  color: '#ffffff',
  fontSize: '36px', 
  fontFamily: 'Raleway, sans-serif', 
//  fontWeight: '400', 
  
  
  
  }

  // const paragraphB = {
  //   fontFamily: 'Raleway, sans-serif',
  //   margin: '20px 0px'
  // }
  
  



// const allcardStyles = {
//  fontFamily: 'Raleway, sans-serif',
  
  
  
//   }



const cardStyles = {
margin: '20px auto', 
textDecoration: 'none',
fontFamily: 'Raleway, sans-serif', 
boxShadow: 'none',
borderRadius: '15px',

}

const cardStylesImage = {
}

const testimonialTitle = {
  fontFamily: 'Raleway, sans-serif',
  fontSize: '28px', 
  color: '#ffffff',
  margin: '25px 0px'
}

const testimonialParagraph = {
  fontFamily: 'Raleway, sans-serif',
  margin: '25px 0px',
  color: '#ffffff'
}

const questionStyles = {
  fontFamily: 'Raleway, sans-serif',
  fontSize: '28px', 
  color: '#00022E',
  margin: '50px 0px'
}

const answerStyles = {
  fontFamily: 'Raleway, sans-serif',
  margin: '25px 0px'
}




const allIcons = {
paddingBottom: '50px'
}


const oneIcon = {
  color: '#ffffff',
  margin: '10px'
}

const aboutIcon = {
  fontFamily: 'Raleway, sans-serif',
  textAlign: 'center', 
  fontSize: '20px', 

}


const boxStylesBLast = {
  backgroundColor: '#00022E', 
  paddingTop: '5px',
  paddingBottom: '50px',
  width: '100%'

}

const About = () => {
  return (
    <>
    <Box sx={Everything}>
   
   <Box sx={boxStylesAFirst}>
    <Container>
   <Typography sx={headerStylesAFirst}>About Me</Typography>
   <Typography sx={headerStylesAFirst}>A strategic and creative storyteller based in Riverton, Utah.</Typography> 

   </Container>

   </Box>
   
   
   
 
    <Box sx={boxStylesA}>

    <Container>
    <Typography sx={headerStylesB}>What Do My Managers, Co-Workers, and Students Say About Me?</Typography>
    </Container>
    <Container>
    <Typography sx={testimonialTitle}>Managers</Typography>
    <Typography sx={testimonialParagraph}>"I highly recommend Aubrey without any reservation." -Deanna Weierholt, The Family Literacies Director</Typography>
    <Typography sx={testimonialParagraph}>"You are incredibly talented and very much a leader. Thank you for sharing your skills in our program." -Corrine Padilla, Senior Student Sucess Manager, -edX Bootcamps</Typography>
    </Container>

    <Container>
    <Typography sx={testimonialTitle}>Co-Workers</Typography>
    <Typography sx={testimonialParagraph}>"Aubrey Jones is an amazing talent. She is a talented UX/UI Designer with a deep understanding of 
      Design Thinking and User-Centered Design and a very talented front-end developer. 
      Aubrey is a problem-solver and team player who always does more than her share. Because of her background in education, 
      she brings those skills to the table, and it is needless to say, Aubrey is an excellent c.ommunicator and someone you always 
      count on." -Bob Marberry, Lead Instructor -edX Bootcamps</Typography>
    <Typography sx={testimonialParagraph}>"It's rare that you you come across a person like Aubrey. She always came to teach class prepared with a positive attitude and a vast array of skills. 
      I'm so happy that I was able to have Aubrey on our education team because I knew I could trust her to get the job done efficiently. " 
      -Sarah Mendez, TA -edX Bootcamps</Typography>
    </Container>


    <Container>
    <Typography sx={testimonialTitle}>Students</Typography>
    <Typography sx={testimonialParagraph}>"I highly recommend Aubrey as an exceptional UX tutor who possesses a wealth of knowledge and resourcefulness in the field. Her 
      support, deep knowledge of the field, and ability to solve complex problems made the learning journey not only insightful, 
      but also enjoyable. Her guidance was instrumental in honing my UX skills and I am truly grateful for her expertise. " 
      -Sophie Koumoudouros, Student -edX Bootcamps</Typography>
    </Container>


    </Box>


    <Box sx={boxStylesB}>

   {/*  //questions sourced from this website: https://www.toptal.com/designers/ux/interview-questions

    //my answers are from me* */}

    <Container>
    <Typography sx={headerStylesB} id="aboutme">Interview Q&A</Typography>
    </Container>
    <Container>
    <Typography sx={questionStyles}>1. Describe your design process and what methods you follow.</Typography>
    <Card sx={cardStyles}>
    <CardMedia
        component="img"
        alt="My Story"
        image={MyDesignProcess}
        sx={cardStylesImage}
      />
    
    </Card>
    <Typography sx={answerStyles}>1. My design process is a visual story. It begins with discovering a capitvating idea. Once I have an 
      idea, I start my research. I start asking questions as I organize a plan for that idea. Some questions involve 
      who is my main audience advocate, whom are my current competitors, what is the minimum viable product for this idea,
      is my idea a worthy investment? etc. I gather answers through surveys and interviews. I want to understand my audience 
      and audience needs in this phase.
    </Typography>

    <Typography sx={answerStyles}>2. After I collect my research, I start the define phase by gathering ideas based on audience needs and 
      wants. Lots of possibilities happen in this phase. The sky is literally the limit. However, due 
      to project constraints such as time and money, we cannot encourage scope creep and spend countless hours creating 
      every possibility. My define phase also targets most important features that still give value to the overall project. 
      I've been on a team where we've had all of the same email ideas as Gmail, and our client scrapped most of them for the first 
      version! Not every idea will fall into production and I usually like to keep notes of ideas for future versions just in 
      case. 
    </Typography>

    <Typography sx={answerStyles}>3. The develop phase usually involves the actual content, writing, and designs for each features. Each feature, whether as an icon in the 
      navigation bar or on a card takes precious wireframe real estate. I can then test out these designs to discover any usability 
      disconnects.   
    </Typography>
    <Typography sx={answerStyles}>4. When I can confirm a happy ending for both my stakeholders and their audience, I can deliver our final product to development.   
    </Typography>



    </Container>

    <Container>
    <Typography sx={questionStyles}>2.Describe a recent project you were particularly challenged by and how you approached the problem.</Typography>
    <Typography sx={answerStyles}>I love to ask questions and ideate! Whether its to bring stakeholders into an interview, recall style guides, process 
      a competitor analysis for common call-to-action buttons, the sky is the limit. I love to research and synthesize strategic information for better 
      content patterns.   
    </Typography>

    </Container>


    <Container>
    <Typography sx={questionStyles}>3. What is one of the biggest challenges you face as a content designer?</Typography>
    My challenges are also my strengths! I love to learn and grow. I have a wide range of industry experience, sometimes 
    working multiple jobs at a time. This wide range of interests sometimes hurts my designer presence as it looks like I am too spread 
    thin. It also helps me empathize and connect with a vast range of clientele. I am constantly learning how to keep it simple.   
   <Typography sx={answerStyles}>   
    </Typography>
   
    </Container>

    
    <Container>
    <Typography sx={questionStyles}>4. What does the term 'design-thinking' mean to you?</Typography>
    <Typography sx={answerStyles}> 'Design-thinking' is a process that focuses on the human experience through technology. It backs up every digital 
      design idea with empathy and strategy. We can't plaster shapes and lines on a website without thought. Design-thinking 
      gives reason to design.    
    </Typography>

    </Container>


    <Container>
    <Typography sx={questionStyles}>5. When a client says: “I don't like this design.” What do you do?</Typography>
    <Typography sx={answerStyles}> I ask questions! Throughout my experience as a product designer, I have worked with difficult clients and 
      easygoing ones. I want to make good use of the 5-whys method where I can dive deeper into the client's vision and 
      goals. I love to brainstorm with my clients and we have a lot of beautiful resources at our fingertips to help 
      communicate design decisions before production.     
    </Typography>

    </Container>



    </Box>

    <Box sx={boxStylesBLast}>
    <Container>
    <Typography sx={headerStylesB}>Hobbies</Typography>
    </Container>
<Container sx={allIcons}>
<Row>
      <Col sx={12} sm={4} md={2}>
    <Container sx={oneIcon}>
      <Typography sx={aboutIcon}>
      <FontAwesomeIcon icon={faCamera} />
      </Typography>
      <Typography sx={aboutIcon}>Photography</Typography>
    </Container>
    </Col>
    <Col sx={12} sm={4} md={2}>
    <Container sx={oneIcon}>
      <Typography sx={aboutIcon}>
      <FontAwesomeIcon icon={faPassport} />
      </Typography>
      <Typography sx={aboutIcon}>Travel</Typography>
    </Container>
    </Col>
    <Col sx={12} sm={4} md={2}>
    <Container sx={oneIcon}>
      <Typography sx={aboutIcon}>
      <FontAwesomeIcon icon={faPersonHiking} />
      </Typography>
      <Typography sx={aboutIcon}>Hiking</Typography>
    </Container>
    </Col>
    <Col sx={12} sm={4} md={2}>
    <Container sx={oneIcon}>
      <Typography sx={aboutIcon}>
      <FontAwesomeIcon icon={faGamepad} />
      </Typography>
      <Typography sx={aboutIcon}>Gaming</Typography>
    </Container>
    </Col>
    <Col sx={12} sm={4} md={2}>
    <Container sx={oneIcon}>
      <Typography sx={aboutIcon}>
      <FontAwesomeIcon icon={faPaintbrush} />
      </Typography>
      <Typography sx={aboutIcon}>Painting</Typography>
    </Container>
    </Col>
    <Col sx={12} sm={4} md={2}>
    <Container sx={oneIcon}>
      <Typography sx={aboutIcon}>
      <FontAwesomeIcon icon={faKitchenSet} />
      </Typography>
      <Typography sx={aboutIcon}>Cooking</Typography>
    </Container>
    </Col>
    </Row>
    </Container>
    </Box>
    </Box>
</>
  )
}

export default About;