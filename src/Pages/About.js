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


const headerStylesA = {
  margin: '125px 100px 20px 50px', 
  color: '#30638E',
  fontSize: '36px', 
  fontFamily: 'Raleway, sans-serif', 
//  fontWeight: '400', 
  
  
  
  }


  
const casestudyBox = {
  backgroundColor: 'ffffff', 
  borderTop: '.5px solid #30638E',
  paddingBottom: '100px'

}



const allcardStyles = {
  display: 'grid',  
  justifyContent: 'center', 
  fontFamily: 'Raleway, sans-serif',
  
  
  
  }



const cardStyles = {
margin: '20px auto', 
textDecoration: 'none',
fontFamily: 'Raleway, sans-serif', 

}

const cardStylesImage = {
justifyContent: 'center', 
maxHeight: '400px'
}




const About = () => {
  return (
    <>
    <Box sx={casestudyBox}>

    <Typography sx={headerStylesA} id="aboutme">About Me</Typography>


    <Box sx={allcardStyles}>

<Row>

{/* first card */}
<Col sm={12} md={6} xl={4}>
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

    <Col sm={12} md={6} xl={4}>

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

<Col sm={12} md={6} xl={4}>
  
    <Card sx={cardStyles}>
    <CardMedia
        component="img"
        alt="My Story"
        image={StoryBoardBox3}
        sx={cardStylesImage}
      />
    
    </Card>
    


    </Col>

    </Row>



    <Row>

{/* fourth card */}


<Col sm={12} md={6} xl={4}>
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

    <Col sm={12} md={6} xl={4}>

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

<Col sm={12} md={6} xl={4}>
  
    <Card sx={cardStyles}>
    <CardMedia
        component="img"
        alt="My Story"
        image={StoryBoardBox6}
        sx={cardStylesImage}
      />
    
    </Card>
    


    </Col>

    </Row>




    <Row>


{/* seventh card */}

<Col sm={12} md={6} xl={4}>
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

    <Col sm={12} md={6} xl={4}>

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

<Col sm={12} md={6} xl={4}>
  
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





    </Box>


    
    </Box>


    <Box>


    <Typography sx={headerStylesA} id="aboutme">Interview Q&A</Typography>

    <Container>
    <Typography>1. Describe your design process and what methods you follow.</Typography>
    <Card sx={cardStyles}>
    <CardMedia
        component="img"
        alt="My Story"
        image={MyDesignProcess}
        sx={cardStylesImage}
      />
    
    </Card>
    <Typography>Answer: </Typography>
    <Typography>1. My design process is a visual story. It begins with discovering a capitvating idea. Once I have an 
      idea, I start my research. I start asking questions as I organize a plan for that idea. Some questions involve 
      who is my main audience advocate, whom are my current competitors, what is the minimum viable product for this idea,
      is my idea a worthy investment? etc. I gather answers through surveys and interviews. I want to understand my audience 
      and audience needs in this phase.
    </Typography>

    <Typography>2. After I collect my research, I start the define phase by gathering ideas based on audience needs and 
      wants. Lots of possibilities happen in this phase. The sky is literally the limit. However, due 
      to project constraints such as time and money, we cannot encourage scope creep and spend countless hours creating 
      every possibility. My define phase also targets most important features that still give value to the overall project. 
      I've been on a team where we've had all of the same email ideas as Gmail, and our client scrapped most of them for the first 
      version! Not every idea will fall into production and I usually like to keep notes of ideas for future versions just in 
      case. 
    </Typography>

    <Typography>3. The develop phase usually involves the actual designs for each features. Each feature, whether as an icon in the 
      navigation bar or on a card takes precious wireframe real estate. I can then test out these designs to discover any usability 
      disconnects.   
    </Typography>
    <Typography>4. When I confirm a happy ending for both our clients and audience, I can deliver our final product to the client.   
    </Typography>



    </Container>



    </Box>
</>
  )
}

export default About