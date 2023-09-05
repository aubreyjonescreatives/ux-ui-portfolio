import * as React from 'react'; 
import { Container, Row, Col } from 'react-grid-system';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProtoPersonaDave from '../Images/catwalkcompany/images/personas/protopersonadave.png';
import UserPersona from '../Images/catwalkcompany/images/personas/userpersona.png'
import JourneyMap from '../Images/catwalkcompany/images/personas/journeymap.png'; 
import FreelancingGigs from '../Images/catwalkcompany/images/freelancinggigs.png'; 
import CompetitorAnalysis from '../Images/catwalkcompany/images/competitoranalysis.png'; 
import AffinityDiagram from '../Images/catwalkcompany/images/AffinityDiagram.jpg';
import FeaturePrioritization from '../Images/catwalkcompany/images/FeaturePrioritizationMatrix.jpg';
import Sitemap from '../Images/catwalkcompany/images/catwalkcositemap.jpg';
import ValuePropositionCanvas from '../Images/catwalkcompany/images/CatwalkCoValuePropositionCanvas.png'
import EmpathyMap from '../Images/catwalkcompany/images/empathymap.png'; 
import ILikeIWishWhatIf from '../Images/catwalkcompany/images/ilikeiwishwhatif.png'
import UserQuote from '../Images/catwalkcompany/images/quotes.png'; 
import UserScenario from '../Images/catwalkcompany/images/userscenario.png'; 
import UserFlow from '../Images/catwalkcompany/images/catwalkcouserflow.png'; 
import SiteMap from '../Images/catwalkcompany/images/catwalkcositemap.png'; 
import SplashPage from '../Images/catwalkcompany/images/sketches/splashpage.JPG'; 
import Dashboard from '../Images/catwalkcompany/images/sketches/dashboard.JPG'; 
import Availability from '../Images/catwalkcompany/images/sketches/availability.JPG';
import EmailServices from '../Images/catwalkcompany/images/sketches/emailservices.JPG'; 
import Earnings from '../Images/catwalkcompany/images/sketches/earnings.JPG';  
import StoryBoard from '../Images/catwalkcompany/images/storyboard.JPG'; 
import SplashPageDigital from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/splash-screen.png';
import SignUpLoginDigital from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/sign-up-login.png';
import SignUpDigital from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/sign-up.png';
import LoginDigital from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/login.png';
import SignUpandLogin from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/signinguploggingin.png'
import MidFiCatWalkCo from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/mid-fi-catwalkco.png';
import DashboardDigital from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/dashboard-1.png';
import AvailabilityDigital from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/availability.png';
import InboxDigital from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/inbox.png';
import EarningsDigital from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/earnings-1.png';
import EarningsAccordionDigital from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/earnings-accordion-1.png';
import Iframe from 'react-iframe'; 
import UserTests from '../Images/catwalkcompany/images/usertestfeedback.png';
import StyleGuide from '../Images/catwalkcompany/images/styleguide/styleguide.png'; 
import FinalLoginSignUp from '../Images/catwalkcompany/images/hi-fidelitywireframes/final-signup-login.png'; 
import FinalCatwalkCo from '../Images/catwalkcompany/images/hi-fidelitywireframes/final-catwalkco.png';
import FinalTimeclockRecording from '../Images/catwalkcompany/images/hi-fidelitywireframes/final-timeclock-recording.png';


const Everything = {
  display: 'grid',
  margin: '100px auto',
  justifyContent: 'center', 
  width: '100%',

}




const boxStylesA = {
  backgroundColor: '#ffffff', 
  marginBottom: '200px'
 
 }

 
const headerStyles = {
  justifyContent: 'start',
  margin: '50px 0px', 
  color: '#00003D',
  fontSize: '36px', 
  fontFamily: 'Raleway, sans-serif', 
  //  fontWeight: '400', 
  
  
  }


 const caseStudyInfo = {
  fontFamily: 'Raleway, sans-serif',
  margin: '150px 0px'
}  


 const catwalkInfo = {
  fontFamily: 'Raleway, sans-serif',
  margin: '10px 0px'
}



const roleInfo = {
  margin: '10px 0px'
}

      

const paragraph = {
  fontFamily: 'Raleway, sans-serif',
  margin: '25px 0px'

}






const imageStylesA = { 
width: '70%',
display: 'block', 
margin: '75px auto 75px auto', 
height: '300px'


}


const imageStylesAFinal = { 
  width: '95%',
  display: 'block', 
  margin: '75px auto 75px auto', 
  height: '300px'
  
  
  }

  const finalHiStyles = {
    position: 'relative',
    width: '100%',
    top: '0px'
  
  }

const finalMidStyles = {
  position: 'relative',
  width: '100%',
  top: '0px'

}

const userflowContainer = {
  display: 'grid', 
  justifyContent: 'space-evenly',
  margin: "0px auto", 
}


const imageStylesAUserFlow = {
width: '100%'


}

const imageStylesAStyleGuide = {
display: 'block',
margin: '0px auto',
width: '40%'

}


const sitemapContainer = {
  display: 'grid', 
  justifyContent: 'space-evenly',
  margin: "0px auto", 
}

const imageStylesASitemap = {
width: '100%'


}

const paragraphASitemap = {
padding: '30px 0px'
}


const sketchesContainer = {
  display: 'grid', 
  justifyContent: 'space-evenly',
  margin: "0px auto", 
}

const imageStylesASketches = {
margin: '20px', 

}


const digitalOnboarding = {
display: 'grid', 
justifyContent: 'center',

}


const digitalApp = {
  display: 'grid', 
  justifyContent: 'center',
 
  }


const imageStylesADigital = {
width: "60%", 
//gap: '10px',
margin: "20px auto"

}


const iframeContainer = {
  display: 'grid', 
  justifyContent: 'center',
  margin: "0px auto", 
  width: '100%', 
  height: '1000px', 
  marginBottom: '150px'


}

const boxStylesB = {
  backgroundColor: '#F8F9FA', 
  paddingTop: '5px',
  paddingBottom: '50px',
  width: '100%'

}


const sectiontitle = {
  fontFamily: 'Raleway, sans-serif',
  fontSize: '28px', 
  color: '#00003D',
  margin: '50px 0px'
  }





const cardquoteStylesB = {
  margin: '75px auto 75px auto', 
  display: 'block', 
  width: '75%',
  fontFamily: 'Merriweather',
fontWeight: '500'

}



const cardStylesB = {
  margin: '75px auto 75px auto', 
  display: 'block', 
  width: '50%',
  fontFamily: 'Merriweather',
fontWeight: '500'

}


const imageStylesB = { 
  width: '70%',
  display: 'block', 
  margin: '75px auto 75px auto'
  
  
  }

















const CatwalkCo = () => {
  





return (
<>

<Box sx={Everything}>


<Box sx={boxStylesA}>

<Container>
<Typography sx={headerStyles} id="top">Catwalk Co</Typography>


       <Typography sx={headerStyles} id="top">UX/UI Case Study</Typography>

       </Container>
     
<Container sx={caseStudyInfo}>

<Row sx={roleInfo}>

<Col sx={12} sm={6} md={4} xl={3}>
<Typography sx={catwalkInfo}>
  My Role:
</Typography >
<Typography sx={catwalkInfo}>
  Project Manager
</Typography>
<Typography sx={catwalkInfo}>
  UX/UI Designer
</Typography>

</Col>

<Col sx={12} sm={6} md={4} xl={3}>
<Typography sx={catwalkInfo}>
  Stakeholders
</Typography>
<Typography sx={catwalkInfo}>
  Me
</Typography>



</Col>

<Col sx={12} sm={6} md={4} xl={3}>
<Typography sx={catwalkInfo}>
  Timeframe:
</Typography>
<Typography sx={catwalkInfo}>
  January 2018 - December 2020
</Typography>


</Col>

</Row>




</Container>

</Box>




{/*challenge*/}


<Box sx={boxStylesB}>
  <Container>
<Typography sx={headerStyles}>Challenge</Typography>
<Typography sx={paragraph}>How can digital designers and clients better connect together in today's modern world? Catwalk Co embarks on an adventure to build a bridge 
between digital designers and clients for better communication, expectations, and creativity throughout their design processes.</Typography>

</Container>
</Box> 





{/*empathy*/}



{/*protopersona*/}


<Box sx={boxStylesA}>

<Container>

<Typography sx={headerStyles}>Empathy Phase</Typography>

<Typography sx={sectiontitle}>Proto Persona</Typography>

<Typography sx={paragraph}>Meet David Anderson, a representative of our supposed audience.</Typography>


<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Proto Persona"
        image={ProtoPersonaDave}
       
      />
     
     
    </Card>


    </Container>
</Box>





<Box sx={boxStylesA}>

<Container>

<Typography sx={sectiontitle}>Research Survey</Typography>

<Typography sx={paragraph}>While David represented my assumed audience, I needed to find a hot and trending need to 
confirm an interest in an e-commerce freelancing platform. I created a survey so that I could reach out to mulitple people online. I received 
an interesting mix of feedback from some of my results:</Typography>



<Card sx={cardStylesB}>
      <CardMedia
        component="img"
        alt="Freelancing Gigs Img"
        image={FreelancingGigs}
      />
     
     
    </Card>


    <Typography sx={paragraph}>Most freelancers found gigs by word of mouth by a landslide. None of them use 
    online marketing. Upwork is a freelancing website specifically for web developers and designers. </Typography>
    
    
   
    <Typography sx={paragraph}>The study also gave me some insight as far as how users struggled with freelancing, no matter their preferred communication 
    platform. Some direct quotes included:</Typography>
    

    <Card sx={cardquoteStylesB}>
      <CardMedia
        component="img"
        alt="User Quotes"
        image={UserQuote}
      />
     
     
    </Card>

    <Typography sx={paragraph}>As the majority of my responders prefer word of mouth, could I persuade them to join the online community for 
    freelancing if I focused on their frustrations and provided good solutions to them? Why do 33.3% of people use Upwork? How does it work for freelance? 
    Does it have any popular competitors?</Typography>


</Container>

  
</Box> 



{/*competitoranalysis*/}


<Box sx={boxStylesA}>
<Container>
<Typography sx={sectiontitle}>Competitor Analysis</Typography>
<Typography sx={paragraph}>I found a few direct competitors alongside Upwork for freelancers such as Fiverr Business and Behance. 
I also realized that freelancers can connect to clients through indirect competitors such as LinkedIn and Indeed. I gathered intel 
to know if these competitors provided solutions to freelancers in their problem areas. This is what I discovered:</Typography>
  

<Card sx={cardStylesB}>
      <CardMedia
        component="img"
        alt="Competitor Analysis"
        image={CompetitorAnalysis}
      />
     
     
    </Card>

    </Container>
</Box> 







{/*Affinity Map*/}



<Box sx={boxStylesA}>
<Container>
<Typography sx={sectiontitle}>Affinity Diagram</Typography>


<Typography sx={paragraph}>I used Miro to sort my user research data and organized its info into an affinity diagram. This lets me 
discover and organize popular trends from my audience in a logical manner and to see if others feel the same 
way as David does about freelancing overall: </Typography>



<Card sx={cardStylesB}>
      <CardMedia
        component="img"
        alt="Affinity Diagram"
        image={AffinityDiagram}
      />
     
     
    </Card>





    </Container>
</Box> 









<Box sx={boxStylesA}>
  <Container>
<Typography sx={sectiontitle}>Empathy Map</Typography>



<Typography sx={paragraph}>After collecting data from my research, I could really start to empathize with my audience and 
gather information on what they heard, said, thought, and did throughout their user experience. </Typography>
    


<Card sx={cardStylesB}>
      <CardMedia
        component="img"
        alt="Emapthy Map"
        image={EmpathyMap}
      />
     
     
    </Card>





    </Container>

</Box>


<Box sx={boxStylesA}>
  <Container>
<Typography sx={sectiontitle}>User Persona</Typography>


<Typography sx={paragraph}>Meet Laurey Lane, a representative of our audience based upon our researched trending facts. Does she fit the picture? Does she relate to our interviewed freelancers?</Typography>


<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="User Persona"
        image={UserPersona}
       
      />
     
     
    </Card>





    </Container>


</Box>






{/*define*/}

<Box sx={boxStylesB}>
  <Container>
<Typography sx={headerStyles}>Define Phase</Typography>

<Typography sx={sectiontitle}>User Insight Statement</Typography>

<Typography sx={paragraph}>Overworked freelancers and disheartened clients need a better collaborative project management platform because it will clarify expectations and organize work ethic boundaries between involved parties.</Typography>
    

</Container>
  
</Box> 




<Box sx={boxStylesB}>

<Container>

<Typography sx={sectiontitle}>Problem Statement</Typography>

<Typography sx={paragraph}>We believe Catwalk Co will renew communication, creativity, and committment 
of remote freelancers and clients so that they can acheive higher quality results 
 throughout their digital design projects.</Typography>

</Container>
  
</Box> 









{/*ideate*/}

<Box sx={boxStylesA}>

<Container>

<Typography sx={headerStyles}>Ideate</Typography>



{/*Brainstorm: I Like I Wish What If Method*/}



<Typography sx={sectiontitle}>I Like I Wish What If Method</Typography>



<Typography sx={paragraph}>After collecting audience data, it's important to brainstorm possible solutions for a better user experience. One great method for this 
step is the "I Like, I Wish, What If" method as I dig deeper into what feature ideas are most successful and viable for a competitive freelancing app.</Typography>
    



<Card sx={cardStylesB}>
      <CardMedia
        component="img"
        alt="I Like I Wish What If"
        image={ILikeIWishWhatIf}
      />
     
     
    </Card>




    </Container>

</Box>

{/*featureprioritizationmatrix*/}


<Box sx={boxStylesA}>

<Container>  
<Typography sx={sectiontitle}>Feature Priortization Matrix</Typography>

<Typography sx={paragraph}>I want to keep the most viable product (MVP) in mind as I don't want to create 
any scope creep and be mindful of timing as I am on feature deadlines. I won't always have time to create 
every feature request, which is okay. There can always be more time later on to create version two and testing each 
step of the way will let me know if the product really truly has a worthy return on investment and meets my customers'
needs. A Feature Prioritization Matrix lets me organize these requests based upon importance and urgency: </Typography>


    <Card sx={cardStylesB}>
      <CardMedia
        component="img"
        alt="Feature Prioritization Matrix"
        image={FeaturePrioritization}
      />
     
     
    </Card>



    </Container>
  
</Box> 




{/*Value Proposition Canvas*/}




<Box sx={boxStylesA}>
  <Container>
<Typography sx={sectiontitle}>Value Proposition Statement and Canvas</Typography>

<Typography sx={paragraph}>Catwalk Co is developing a freelancing app to help freelancers and clients solve 
communication errors, creativity blockers, and financial pitfalls
when working on a project together. We're better than our competitors because we remove common freelancing 
pain points discovered in other companies for all parties involved. We're believable because we seek to understand and problem solve 
with our audience to provide simpler and better means for all.</Typography>



    <Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Journey Map"
        image={ValuePropositionCanvas}
       
      />
     
     
    </Card>
   </Container>

    </Box>


{/*User Scenario*/}



    <Box sx={boxStylesA}>
      <Container>
<Typography sx={sectiontitle}>User Scenario</Typography>




<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Journey Map"
        image={UserScenario}
       
      />
     
     </Card>



     </Container>


</Box>



{/*Storyboard*/}



<Box sx={boxStylesA}>
  <Container>
<Typography sx={sectiontitle}>Storyboard</Typography>




<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Storyboard"
        image={StoryBoard}
       
      />
     
     </Card>




     </Container>
</Box>




{/*journeymap*/}




<Box sx={boxStylesA}>
  <Container>
<Typography sx={sectiontitle}>Journey Map</Typography>

<Typography sx={paragraph}>Let's spend a moment with Laurey Lane as she expresses her typical day as a freelancer:</Typography>



    <Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Journey Map"
        image={JourneyMap}
       
      />
     
     
    </Card>

  
    
    </Container>
</Box>



{/*PROTOTYPE PHASE*/}



<Box sx={boxStylesB}>

<Container>

<Typography sx={headerStyles}>Prototype Phase</Typography>


{/*User Flow*/}


<Typography sx={sectiontitle}>User Flow</Typography>


<Typography sx={paragraph}>As I entered the design thinking Prototype phase, I carefully considered the most desired Catwalk Co features 
based on my research, feature prioritization matrix, and Laurey's current overall experience: </Typography>
  

<Container sx={userflowContainer}>

<Row>

<Col>


    <Card sx={imageStylesAUserFlow}>
      <CardMedia
        component="img"
        alt="User Flow"
        image={UserFlow}
      />
     
     
     
    </Card>




    </Col>

  </Row>

  


    </Container>





{/*sitemap*/}


<Typography  sx={sectiontitle}>Sitemap</Typography>

<Container sx={sitemapContainer}>

<Row>

<Col sm={12} md={12} xl={12}>

<Typography sx={paragraphASitemap}>First sitemap</Typography>
     


    <Card sx={imageStylesASitemap}>
      <CardMedia
        component="img"
        alt="Sitemap"
        image={Sitemap}
      />
     
     
    </Card>

    </Col>

<Col sm={12} md={12} xl={12}>
    


    <Typography sx={paragraphASitemap}>Final sitemap</Typography>
     


     <Card sx={imageStylesASitemap}>
       <CardMedia
         component="img"
         alt="Sitemap"
         image={SiteMap}
       />
      
      
     </Card>
 
     </Col>

     </Row>
     </Container>
 
  




{/*Wireframe Sketches*/}



<Typography sx={sectiontitle}>Sketches</Typography>

<Typography sx={paragraph}>Now that I understood my overall information architecture for Catwalk Co's mobile app, 
here are some of my rough sketches for Catwalk Co to get through ideas much faster:</Typography>
    


<Typography sx={paragraph}>Sketches:</Typography>
 

<Container sx={sketchesContainer}>


<Row>

<Col sm={12} md={6} xl={5}>


<Card sx={imageStylesASketches}>
       <CardMedia
         component="img"
         alt="Splash Page"
         image={SplashPage}
       />
      
      
     </Card>
</Col>


<Col sm={12} md={6} xl={5}>    

<Card sx={imageStylesASketches}>
       <CardMedia
         component="img"
         alt="Dashboard"
         image={Dashboard}
       />
      
      
     </Card>

     </Col>


     <Col sm={12} md={6} xl={5}>  
     
<Card sx={imageStylesASketches}>
       <CardMedia
         component="img"
         alt="Availability"
         image={Availability}
       />
      
      
     </Card>  

</Col>


<Col sm={12} md={6} xl={5}> 


  <Card sx={imageStylesASketches}>
         <CardMedia
           component="img"
           alt="Inbox Services"
           image={EmailServices}
         />
        
        
       </Card>  

</Col>


<Col sm={12} md={6} xl={5}> 
       
  <Card sx={imageStylesASketches}>
         <CardMedia
           component="img"
           alt="Earnings"
           image={Earnings}
         />
        
        
       </Card>  

</Col>

       </Row>

       </Container>
   

{/*Low - Mid Fidelity Digital Wireframes*/}


<Typography sx={sectiontitle}>Low - Mid Fidelity Digital Wireframes</Typography>

<Typography sx={paragraph}>After sketching through quite a few app ideas, I wanted to add ones that
 worked alongside common mental model design patterns in my digital designs. I found inspiration through 
 competitive apps such as Calendly for my availability and Gmail for my email services.</Typography>
    


 <Typography sx={paragraph}>Splash Page, Login, and Sign Up:</Typography>
 
<Container sx={digitalOnboarding}>

<Row>

<Col sm={3} md={6} lg={3}>
 <Card sx={imageStylesADigital}>
       <CardMedia
         component="img"
         alt="Splash Page"
         image={SplashPageDigital}
       />
      
      
     </Card>  

     </Col>


     <Col sm={3} md={6} lg={3}>
     <Card sx={imageStylesADigital}>
       <CardMedia
         component="img"
         alt="Login and Sign Up"
         image={SignUpLoginDigital}
       />
      
      
     </Card>  
</Col>

<Col sm={3} md={6} lg={3}>
     <Card sx={imageStylesADigital}>
       <CardMedia
         component="img"
         alt="Sign Up"
         image={SignUpDigital}
       />
      
      
     </Card>  
</Col>

<Col sm={3} md={6} lg={3}>
     <Card sx={imageStylesADigital}>
       <CardMedia
         component="img"
         alt="Login"
         image={LoginDigital}
       />
      
      
     </Card>  
</Col>



     </Row>
     </Container>



 <Typography sx={paragraph}>Dashboard, Availability, Inbox, Earnings:</Typography>
  

 <Container sx={digitalApp}>

<Row>


<Col sm={3} md={6} lg={3}>

 <Card sx={imageStylesADigital}>
       <CardMedia
         component="img"
         alt="Dashboard"
         image={DashboardDigital}
       />
      
      
     </Card> 
     
    </Col>

     <Col sm={3} md={6} lg={3}>
   

 <Card sx={imageStylesADigital}>
       <CardMedia
         component="img"
         alt="Availability"
         image={AvailabilityDigital}
       />
      
      
     </Card>  

</Col>

<Col sm={3} md={6} lg={3}>   
  
 <Card sx={imageStylesADigital}>
       <CardMedia
         component="img"
         alt="Inbox"
         image={InboxDigital}
       />
      
      
     </Card>  

    </Col> 


    <Col sm={3} md={6} lg={3}>

 <Card sx={imageStylesADigital}>
       <CardMedia
         component="img"
         alt="Earnings"
         image={EarningsDigital}
       />
      
      
     </Card>  

     </Col>


     <Col sm={3} md={6} lg={3}>

     <Card sx={imageStylesADigital}>
       <CardMedia
         component="img"
         alt="Earnings Accordion"
         image={EarningsAccordionDigital}
       />
      </Card>

</Col>


      </Row>

      </Container> 





{/*Low - Mid Fidelity Digital Prototype*/}



<Typography sx={sectiontitle}>Low - Mid Fidelity Digital Prototype</Typography>

<Container sx={iframeContainer}>

<Row>


<Iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fxx2a8sN5OVlVtg6nHQyW7a%2FCatwalk-Company-Case-Study%3Fnode-id%3D428%253A564%26scaling%3Dscale-down%26page-id%3D103%253A2%26starting-point-node-id%3D428%253A557"
width="100%"
height="600px"
allowfullscreen 
/>




</Row>




</Container>

</Container>

</Box>


{/*Testing Phase*/}

<Box sx={boxStylesA}>

<Container>

<Typography sx={headerStyles}>User Testing</Typography>



{/*User Testing Feedback */}


<Typography sx={sectiontitle}>User Testing Feedback</Typography>



<Typography sx={paragraph}>After creating the mid - fidelity prototype, I conducted several user tests and received amazing feedback:  </Typography>
    




<Card sx={imageStylesA}>
       <CardMedia
         component="img"
         alt="User Testing"
         image={UserTests}
       />
      </Card>







{/*font is very little and hard to read from website point of view*/} 

{/*the trash title needs to access a cancel or delete screen. Viewable better by a trash icon*/} 

{/*trash is always at the last. Good location*/} 

{/*mostly easy to login and sign up*/} 

{/*login button wasn't taking to login screen */}



{/*Iterations after unit testing*/}



<Typography sx={paragraph}>Final Mid-Fidelity Iterations after User Testing:  </Typography>
    


<Row>


<Col>

<Card sx={imageStylesA}>
       <CardMedia
       sx={finalMidStyles}
         component="img"
         alt="Mid-Fidelity Wireframes"
         image={SignUpandLogin}
       />
      </Card>

      </Col>

      <Col>

      <Card sx={imageStylesA}>
       <CardMedia
       sx={finalMidStyles}
         component="img"
         alt="Mid-Fidelity Wireframes"
         image={MidFiCatWalkCo}
       />
      </Card>



      </Col>

      </Row>

</Container>
</Box>

{/*PROTOTYPE PHASE*/}



<Box sx={boxStylesB}>

<Container>

<Typography sx={headerStyles}>User Interface Design</Typography>


{/*Style Guide*/}


<Typography sx={sectiontitle}>Style Guide</Typography>


<Typography sx={paragraph}>It's time for color, typography, and specific design element styles</Typography>
  

<Container sx={userflowContainer}>

<Row>

<Col>


    <Card sx={imageStylesAStyleGuide}>
      <CardMedia
        component="img"
        alt="Style Guide"
        image={StyleGuide}
      />
     
     
     
    </Card>




    </Col>

  </Row>

  


    </Container>

<Typography sx={sectiontitle}>Hi-Fidelity Wireframes</Typography>


<Typography sx={paragraph}>As I implemented the style guide into these wireframes, I focused on readability, consistency, contrast, color theory, etc. just to name a few important 
UI design principles focused here.</Typography>
  

<Container sx={userflowContainer}>

<Row>


<Col>

<Card sx={imageStylesAFinal}>
       <CardMedia
       sx={finalHiStyles}
         component="img"
         alt="Hi-Fidelity Wireframes"
         image={FinalLoginSignUp}
       />
      </Card>

      </Col>

      <Col>

      <Card sx={imageStylesAFinal}>
       <CardMedia
       sx={finalHiStyles}
         component="img"
         alt="Hi-Fidelity Wireframes"
         image={FinalCatwalkCo}
       />
      </Card>



      </Col>


      <Col>

<Card sx={imageStylesAFinal}>
       <CardMedia
       sx={finalHiStyles}
         component="img"
         alt="Hi-Fidelity Wireframes"
         image={FinalTimeclockRecording}
       />
      </Card>

      </Col>

      </Row>

  


    </Container>

</Container>

</Box>















</Box>


</>




)



}

export default CatwalkCo;