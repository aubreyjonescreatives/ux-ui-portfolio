import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
//import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'; 
import ResumeImage from '../Images/resume/aubreyjonesresume2025-contentdesign.png';
import Link from '@mui/material/Link';
import ResumePDF from '../Images/resume/aubreyjonesresume2025-contentdesign.pdf';

const Everything = {
  display: 'grid',
  margin: '100px auto 0px auto',
 // justifyContent: 'center', 
  width: '100%',
}

const boxStylesAFirst = {
  backgroundColor: '#ffffff', 
 // paddingBottom: '250px'
}

const boxStylesALast = {
  backgroundColor: '#00022E', 
  paddingBottom: '250px'
}


const boxStylesA = {
  backgroundColor: '#ffffff', 
  paddingBottom: '75px'
 
 }

    const headerStylesAFirst = {
    textAlign: 'left',
    fontWeight: '300',
    margin: '50px auto', 
    fontSize: '36px',
    fontFamily: 'Raleway, sans-serif', 
    color: '#ffffff',
    
    }


const cardStyles = {
  display: 'block',
  border: 'none',
  maxWidth: '612px', 
  margin: '0 auto'
}



  const paragraphB = {
    fontFamily: 'Raleway, sans-serif',
    margin: '20px 0px 75px 0px',
    color: '#ffffff'
  }
  



const resumelink = {
  display: 'block',
  fontFamily: 'Raleway, sans-serif',
  textDecoration: 'none',
  backgroundColor: '#30638E',
  border: '1px solid #ffffff',
  borderRadius: '50px',
  padding: '20px',
  color: 'white',
  width: '200px',
  textAlign: 'center',
  "&:hover": {
    color: '#30638E',
  backgroundColor: '#ffffff',
    border: '1px solid #30638E', 
    cursor: 'pointer'
   
  }
}



const Resume = () => {
  return (
    <>
    <Box sx={Everything}>

    <Box sx={boxStylesAFirst}>
     <Container>
     <Typography sx={headerStylesAFirst}>Resume</Typography>
  
 </Container>
</Box>


 <Box sx={boxStylesA}>
    <Card sx={cardStyles}>
    <CardMedia
        component="img"
        alt="Aubrey Jones Resume"
        image={ResumeImage}
        //correct resume
      />


    </Card>
</Box>



<Box sx={boxStylesALast}>
  <Container>
    <Typography sx={headerStylesAFirst}>Downloadable Resume</Typography>
    
    <Typography sx={paragraphB}>If you would like a downloadable PDF version, click this link:</Typography>

    <Link sx={resumelink} href={ResumePDF} target="_blank">RESUME</Link>
    </Container>
    </Box>

  
  
  
    </Box>
    </>
  )
}

export default Resume;