import React from 'react';
import Typography from '@mui/material/Typography';
import '../../src/Portfolio.css';


const footerStyles = {
  clear: 'both',
  textAlign: 'center', 
  padding: '10px',
  fontFamily: 'Raleway, sans-serif',
  fontWeight: '300', 
  color: '#00003D', 
  backgroundColor: 'white', 
  boxShadow: '0px 0px 2px #ccc',
  //marginTop: '100px'
}









const Footer = () => {
  return (
   <>
 
<Typography sx={footerStyles}>Copyright © 2023 Aubrey Jones</Typography>


   </>
  );
}

export default Footer;