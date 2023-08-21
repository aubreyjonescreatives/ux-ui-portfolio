import React from 'react'
import {Row, Col } from 'react-grid-system';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
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
  )
}

export default About