import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
//import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ResumeImage from '../Images/resume/aubreyjonesuxuidesignresume.png'
import Link from '@mui/material/Link';
import ResumePDF from '../Images/resume/aubreyjonesuxuidesignresume.pdf';



const headerStylesA = {
  marginBottom: '50px', 
  color: '#02075D',
  fontSize: '36px', 
  fontFamily: 'Raleway, sans-serif', 
//  fontWeight: '400', 
  
  
  
  }

  const resumeStyles = {
    display: 'grid',
    maxWidth: '612px',
    margin: '100px auto', 
    
    }


const cardStyles = {
  margin: '0 auto',
  border: 'none',
  maxWidth: '612px', 
}

const headerStylesB = {
  marginTop: '50px', 
  marginBottom: '50px', 
  color: '#02075D',
  fontSize: '36px', 
  fontFamily: 'Raleway, sans-serif', 
//  fontWeight: '400', 
  
  
  
  }

const resumeType = {
 // margin: '50px 100px 50px 50px', 
  color: '#02075D',
  fontSize: '24px', 
  fontFamily: 'Raleway, sans-serif', 
}

const resumelink = {
  marginTop: '50px',
  marginBottom: '50px',
  fontFamily: 'Raleway, sans-serif',
  textDecoration: 'none',
  backgroundColor: '#02075D',
  padding: '10px',
  color: 'white',
  width: '100px',
  textAlign: 'center',
  "&:hover": {
    color: 'white',
    backgroundColor: '#02075D',
   // border: '1px solid #30638E', 
    cursor: 'pointer'
   
  }
}



const Resume = () => {
  return (
    <>
    <Box>
     <Container sx={resumeStyles}>
    
   
    <Typography sx={headerStylesA}>Resume</Typography>

    <Card sx={cardStyles}>
    <CardMedia
        component="img"
        alt="Aubrey Jones Resume"
        image={ResumeImage}
      />


    </Card>

  
    <Typography sx={headerStylesB}>Downloadable Resume</Typography>
    
    <Typography sx={resumeType}>If you would like a downloadable PDF version, click this link:</Typography>

    <Link sx={resumelink} href={ResumePDF} target="_blank">RESUME</Link>
    
    

    </Container>
    </Box>
    </>
  )
}

export default Resume;