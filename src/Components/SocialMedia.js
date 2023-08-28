import React from 'react'
import { Row } from 'react-grid-system';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium, faBehanceSquare, faLinkedin,faSquareYoutube  } from '@fortawesome/free-brands-svg-icons' ;
import '../../src/Portfolio.css';




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
          

    
    </>
  )
}

export default SocialMedia