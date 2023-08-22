import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ResumeImage from '../Images/resume/aubreyjonesuxuidesignresume.png'
import Link from '@mui/material/Link';
import ResumePDF from '../Images/resume/aubreyjonesuxuidesignresume.pdf';

const resumeStyles = {
display: 'grid',
justifyContent: 'center', 
maxWidth: '612px',
margin: '100px auto', 

}

const headerStylesA = {
  margin: '125px 100px 20px 50px', 
  color: '#02075D',
  fontSize: '36px', 
  fontFamily: 'Raleway, sans-serif', 
//  fontWeight: '400', 
  
  
  
  }


const cardStyles = {
  border: 'none',
  maxWidth: '612px', 
}

const resumeType = {
  margin: '50px 100px 20px 50px', 
  color: '#02075D',
  fontSize: '24px', 
  fontFamily: 'Raleway, sans-serif', 
}

const resumelink = {
  margin: '100px 50px',
  fontFamily: 'Raleway, sans-serif',
  textDecoration: 'none',
  backgroundColor: '#02075D',
  padding: '10px',
  color: 'white'
}



const Resume = () => {
  return (
    <>
    <Box>
    <Typography sx={headerStylesA}>Resume</Typography>

    <Container sx={resumeStyles}>
   

    <Card sx={cardStyles}>
    <CardMedia
        component="img"
        alt="Aubrey Jones Resume"
        image={ResumeImage}
      />


    </Card>

    </Container>
    
    </Box>
    <Box>
    <Typography sx={headerStylesA}>Downloadable Resume</Typography>
    
    <Typography sx={resumeType}>If you would like a downloadable PDF version, click this link:</Typography>

    <Link sx={resumelink} href={ResumePDF} target="_blank">RESUME</Link>

    </Box>
    </>
  )
}

export default Resume;