import React from 'react'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium, faBehanceSquare, faLinkedin,faSquareYoutube  } from '@fortawesome/free-brands-svg-icons' ;



const connectLinksBox = {
    display: 'inline-block',
    fontFamily: 'Raleway, sans-serif', 
}


const connectLink = {
    textAlign: 'center',  
    backgroundColor: 'white', 
    margin: '0px 20px', 
    textDecoration: 'none', 
    color: '#02075D', 
    fontSize: '26px',
    //border: '1px solid #30638E',
    "&:hover": {
        borderBottom: '1px solid #02075D',
        cursor: 'pointer'
       
      }
    
    }


const SocialMedia = () => {
  return (
    <>

<Box sx={connectLinksBox}>

<Link sx={connectLink} href="https://www.behance.net/aubreyjonesdesign" target="_blank">
<FontAwesomeIcon icon={faBehanceSquare} />
</Link>


<Link sx={connectLink} href="https://www.youtube.com/channel/UCw4Fi6cUbn67D18LqTPQymA" target="_blank">
<FontAwesomeIcon icon={faMedium} />
</Link>



<Link sx={connectLink} href="https://www.youtube.com/channel/UCw4Fi6cUbn67D18LqTPQymA" target="_blank">
<FontAwesomeIcon icon={faSquareYoutube} />
</Link>


<Link sx={connectLink} href="https://www.linkedin.com/in/aubrey-jones" target="_blank">
<FontAwesomeIcon icon={faLinkedin} />
</Link>

</Box>
   
    
    </>
  )
}

export default SocialMedia