import React from 'react';
import Typography from '@mui/material/Typography';
import '../../src/Portfolio.css';


const footerStyles = {
  textAlign: 'center', 
  padding: '10px',
  fontFamily: 'Raleway, sans-serif',
  fontWeight: '300', 
  color: '#02075D', 
  backgroundColor: '#F8F9FA'
}









const Footer = () => {
  return (
   <>
 
<Typography sx={footerStyles}>Copyright © 2023 Aubrey Jones</Typography>


   </>
  );
}

export default Footer;