import React from 'react'
import {Row, Col } from 'react-grid-system';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StoryBoardBox1 from '../Images/aboutme/firstbox.png';
import StoryBoardBox2 from '../Images/aboutme/secondbox.png';
import StoryBoardBox3 from '../Images/aboutme/thirdbox.png';
import StoryBoardBox4 from '../Images/aboutme/fourthbox.png';
import StoryBoardBox5 from '../Images/aboutme/fifthbox.png';
import StoryBoardBox6 from '../Images/aboutme/sixthbox.png';
import StoryBoardBox7 from '../Images/aboutme/seventhbox.png';
import StoryBoardBox8 from '../Images/aboutme/eighthbox.png';
import StoryBoardBox9 from '../Images/aboutme/ninthbox.png';
import MyDesignProcess from '../Images/aboutme/designprocess.png';
import MyTimeline from '../Images/aboutme/mytimeline.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPassport, faPersonHiking, faGamepad, faPaintbrush, faKitchenSet  } from '@fortawesome/free-solid-svg-icons' ;


const Everything = {
  display: 'grid',
  margin: '100px auto 0px auto',
  justifyContent: 'center', 
  width: '100%',
}

  
const boxStylesA = {
 backgroundColor: '#ffffff', 
 paddingBottom: '75px'

}

const boxStylesAFirst = {
  backgroundColor: '#ffffff', 
  paddingBottom: '250px'
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
  margin: '100px auto', 
  fontSize: '36px',
  fontFamily: 'Raleway, sans-serif', 
  color: '#00003D',

  }

const boxStylesB = {
  backgroundColor: '#F8F9FA', 
  paddingTop: '5px',
  paddingBottom: '50px',
  width: '100%'

}

const headerStylesB = {
  justifyContent: 'start',
  margin: '50px auto',
  color: '#00003D',
  fontSize: '36px', 
  fontFamily: 'Raleway, sans-serif', 
//  fontWeight: '400', 
  
  
  
  }

  // const paragraphB = {
  //   fontFamily: 'Raleway, sans-serif',
  //   margin: '20px 0px'
  // }
  
  



const allcardStyles = {
 fontFamily: 'Raleway, sans-serif',
  
  
  
  }



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
  color: '#00022E',
  margin: '25px 0px'
}

const testimonialParagraph = {
  fontFamily: 'Raleway, sans-serif',
  margin: '25px 0px'
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
  color: '#00022E',
  margin: '10px'
}

const aboutIcon = {
  fontFamily: 'Raleway, sans-serif',
  textAlign: 'center', 
  fontSize: '20px', 

}


const boxStylesBLast = {
  backgroundColor: '#FFF', 
  paddingTop: '5px',
  marginBottom: '50px',
  width: '100%'

}

const About = () => {
  return (
    <>
    <Box sx={Everything}>
   
   <Box sx={boxStylesAFirst}>
    <Container>
   <Typography sx={headerStylesAFirst}>About Me</Typography>
   <Typography sx={headerStylesAFirst}>I am a creative UX/UI Designer based in Salt Lake City, Utah, since 2016.</Typography> 

   </Container>
   <Container>
   <Card sx={cardStyles}>
  <CardMedia
        component="img"
        alt="My Story"
        sx={cardStylesImage}
        image={MyTimeline}
      />
    </Card>
  

   </Container>
   </Box>
   
   
   
    <Box sx={boxStylesB}>

    
    <Container>
    <Typography sx={headerStylesB}>My UX/UI Design Story</Typography>
    </Container>
   

    <Container sx={allcardStyles}>

<Row>

{/* first card */}
<Col sx={12} sm={6} md={4} xl={4}>
    <Card sx={cardStyles}>
  <CardMedia
        component="img"
        alt="My Story"
        sx={cardStylesImage}
        image={StoryBoardBox1}
      />
    </Card>
  

    </Col>

    {/* second card */}

    <Col sx={12} sm={6} md={4} xl={4}>

    <Card sx={cardStyles}>
 <CardMedia
        component="img"
        alt="My Story"
        sx={cardStylesImage}
        image={StoryBoardBox2}
      />
    
    </Card>
   

    </Col>

    {/* third card */}

<Col sx={12} sm={6} md={4} xl={4}>
  
    <Card sx={cardStyles}>
    <CardMedia
        component="img"
        alt="My Story"
        image={StoryBoardBox3}
        sx={cardStylesImage}
      />
    
    </Card>
    


    </Col>


{/* fourth card */}


<Col sx={12} sm={6} md={4} xl={4}>
    <Card sx={cardStyles}>
  <CardMedia
        component="img"
        alt="My Story"
        sx={cardStylesImage}
        image={StoryBoardBox4}
      />
    </Card>
  

    </Col>

    {/* fifth card */}

    <Col Col sx={12} sm={6} md={4} xl={4}>

    <Card sx={cardStyles}>
 <CardMedia
        component="img"
        alt="My Story"
        sx={cardStylesImage}
        image={StoryBoardBox5}
      />
    
    </Card>
   

    </Col>


    {/* sixth card */}

<Col Col sx={12} sm={6} md={4} xl={4}>
  
    <Card sx={cardStyles}>
    <CardMedia
        component="img"
        alt="My Story"
        image={StoryBoardBox6}
        sx={cardStylesImage}
      />
    
    </Card>
    


    </Col>



{/* seventh card */}

<Col sx={12} sm={6} md={4} xl={4}>
    <Card sx={cardStyles}>
  <CardMedia
        component="img"
        alt="My Story"
        sx={cardStylesImage}
        image={StoryBoardBox7}
      />
    </Card>
  

    </Col>

{/* eighth card */}

    <Col sx={12} sm={6} md={4} xl={4}>

    <Card sx={cardStyles}>
 <CardMedia
        component="img"
        alt="My Story"
        sx={cardStylesImage}
        image={StoryBoardBox8}
      />
    
    </Card>
   

    </Col>


    {/* ninth card */}

<Col sx={12} sm={6} md={4} xl={4}>
  
    <Card sx={cardStyles}>
    <CardMedia
        component="img"
        alt="My Story"
        image={StoryBoardBox9}
        sx={cardStylesImage}
      />
    
    </Card>
    


    </Col>

    </Row>





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

    <Typography sx={answerStyles}>3. The develop phase usually involves the actual designs for each features. Each feature, whether as an icon in the 
      navigation bar or on a card takes precious wireframe real estate. I can then test out these designs to discover any usability 
      disconnects.   
    </Typography>
    <Typography sx={answerStyles}>4. When I can confirm a happy ending for both clients and their audience, I can deliver our final product to development.   
    </Typography>



    </Container>

    <Container>
    <Typography sx={questionStyles}>2.Describe a recent project you were particularly challenged by and how you approached the problem.</Typography>
    <Typography sx={answerStyles}>When I worked for a start-up as a UX/UI designer in 2020, I was very new to Figma. I approached this problem by asking a lot of 
      questions. Unfortunately this in turn reflected as inexperience, and they let me go from the current project. I continued my 
      schooling at UVU and learned Figma ropes when working for the edX online bootcamp. I now teach current Figma practices to others 
      through smooth step-by-step demos. I also have a different attitude about life. I recognize failures and mistakes happen to everyone, especially 
      when working with humans and tech. I take a challenge, ask questions to Google and trusted mentors, and look through all possible 
      solutions. I find the best answer with the best results and proceed with that information.   
    </Typography>

    </Container>


    <Container>
    <Typography sx={questionStyles}>3. What are some of the biggest challenges you face as a UX designer?</Typography>
   <Typography sx={answerStyles}>Back in the day, I hated receiving pixel-to-pixel feedback on my digital wireframes. I felt like it was 
      a waste of time when I only needed a few pointers. I was not a visual designer at the startup. Since then, I 
      recognize I learn most and become a stronger UX/UI designer from feedback. I now have a thicker skin for it 
      and value its need in my process.    
    </Typography>
   
    </Container>

    
    <Container>
    <Typography sx={questionStyles}>4. What does the term 'design-thinking' mean to you?</Typography>
    <Typography sx={answerStyles}> 'Design-thinking' is a process that focuses on the human experience with technology. It backs up every digital 
      design idea with empathy and statistics. We can't plaster shapes and lines on a website without thought. Design-thinking 
      gives reason to design.    
    </Typography>

    </Container>


    <Container>
    <Typography sx={questionStyles}>5. When a client says: “I don't like this design.” What do you do?</Typography>
    <Typography sx={answerStyles}> I ask questions! Throughout my experience as a UX/UI designer, I have worked with difficult clients and 
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