import React from 'react'
import { Row, Col } from 'react-grid-system';
import Box from '@mui/material/Box';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from '@mui/material/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium, faBehanceSquare, faLinkedin,faSquareYoutube  } from '@fortawesome/free-brands-svg-icons' ;



const connectLinksBox = {
    display: 'inline-block',
    fontFamily: 'Raleway, sans-serif', 
}


const connectLink = {
    textAlign: 'center',  
    //border: '1px solid #02075D',
    margin: '0px 20px', 
    padding: '0px',
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
 
        <Row>
        <Nav.Link href="https://www.behance.net/aubreyjonesdesign" className="navLinkSocial">
        <FontAwesomeIcon icon={faBehanceSquare} className="icon"/>
        </Nav.Link>
            <Nav.Link href="https://medium.com/@aubreyjonescreatives" className="navLinkSocial">
            <FontAwesomeIcon icon={faMedium} className="icon"/>
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/aubrey-jones" className="navLinkSocial">
            <FontAwesomeIcon icon={faLinkedin} className="icon"/>
            </Nav.Link>
            <Nav.Link href="https://www.youtube.com/channel/UCw4Fi6cUbn67D18LqTPQymA" className="navLinkSocial">
            <FontAwesomeIcon icon={faSquareYoutube} className="icon"/>
            </Nav.Link>
            </Row>
          




{/* <Box sx={connectLinksBox}>

<Link sx={connectLink} href="https://www.behance.net/aubreyjonesdesign" target="_blank">
<FontAwesomeIcon icon={faBehanceSquare} className="icon"/>
</Link>


<Link sx={connectLink} href="https://www.youtube.com/channel/UCw4Fi6cUbn67D18LqTPQymA" target="_blank">
<FontAwesomeIcon icon={faMedium} className="icon"/>
</Link>



<Link sx={connectLink} href="https://www.youtube.com/channel/UCw4Fi6cUbn67D18LqTPQymA" target="_blank">
<FontAwesomeIcon icon={faSquareYoutube} className="icon"/>
</Link>


<Link sx={connectLink} href="https://www.linkedin.com/in/aubrey-jones" target="_blank">
<FontAwesomeIcon icon={faLinkedin} className="icon"/>
</Link>

</Box> */}
   
    
    </>
  )
}

export default SocialMedia