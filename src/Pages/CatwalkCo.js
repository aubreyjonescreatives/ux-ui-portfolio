import * as React from 'react'; 
import CaseStudyNavBar from '../Components/CaseStudyNavBar.js'; 
import { Container, Row, Col } from 'react-grid-system';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProtoPersonaDave from '../Images/catwalkcompany/images/protopersonadave.png';
import UserPersona from '../Images/catwalkcompany/images/userpersona.png'
import JourneyMap from '../Images/catwalkcompany/images/journeymap.png'; 
import FreelancingGigs from '../Images/catwalkcompany/images/freelancinggigs.png'; 
import CompetitorAnalysis from '../Images/catwalkcompany/images/competitoranalysis.png'; 
import CatwalkCoImg from '../Images/catwalkcompany/images/styleguide/fulllogo-xl.png';
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
import EmailServicesUpdateDigital from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/emailservices-iteration1.png'; 




const design = {
clear: 'both', 
height: '600px'

}


const cardStyles = {
  clear: 'both',
  margin: '200px auto 10px auto',
  display: 'block', 
  width: '35%' 



}


const headerStylesA = {
  margin: '10px 0px', 
  marginBottom: '50px', 
  fontSize: '42px', 
  padding: '80px 20px', 
  color: '#30638E',
  backgroundColor: 'white', 
  width: '100%', 
  textAlign: 'center',
fontFamily: 'Lato', 
fontWeight: '300',
  
  
  }

   
      




const designA = {
  bgcolor: '#f2f8fb',

}

const headerA = {
padding: '50px 70px', 
fontSize: '40px', 
fontFamily: 'Lato', 
fontWeight: '400', 
color: '#30638E'

}

const paragraphA = {
padding: '40px 70px',
fontSize: '20px', 
fontFamily: 'Merriweather', 

}

const titleA = {
  padding: '20px 70px',
  fontSize: '32px',
  fontFamily: 'Lato', 
fontWeight: '400', 
  }
  







const imageStylesA = { 
width: '70%',
display: 'block', 
margin: '75px auto 75px auto', 
height: '300px'


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
margin: '20px'

}


const digitalOnboarding = {
display: 'grid', 
justifyContent: 'space-evenly',
margin: "0px auto", 

}


const digitalApp = {
  display: 'grid', 
  justifyContent: 'space-evenly',
  margin: "20px auto", 
  
  }


const imageStylesADigital = {
width: "100%", 
gap: '20px',
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


const designB = {
  bgcolor: 'white',

}

const headerB = {
padding: '50px 70px', 
color: '#30638E', 
fontSize: '40px', 
fontFamily: 'Lato', 
fontWeight: '400', 
}


const titleB = {
  padding: '40px 70px',
  fontSize: '32px', 
  fontFamily: 'Lato',
fontWeight: '400'
  }




const paragraphB = {
padding: '20px 70px',
fontSize: '20px', 
fontFamily: 'Merriweather',
fontWeight: '300'
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


<CaseStudyNavBar />



<Box sx={design}>

       <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt="Catwalk Co"
        image={CatwalkCoImg}
      />
     
     
    </Card>






       <Typography sx={headerStylesA} id="top">UX/UI Case Study</Typography>


       </Box>


{/*challenge*/}


<Box sx={designA} id="challenge">
<Typography sx={headerA}>Challenge</Typography>
<Typography sx={paragraphA}>How can digital designers and clients better connect together in today's modern world? Catwalk Co embarks on an adventure to build a bridge 
between digital designers and clients for better communication, expectations, and creativity throughout their design processes.</Typography>
<Typography sx={headerA}></Typography> 
  
</Box> 





{/*empathy*/}



{/*protopersona*/}


<Box sx={designB} id="empathy">

<Typography sx={headerB}>Empathy Phase</Typography>

<Typography sx={titleB}>Proto Persona</Typography>

<Typography sx={paragraphB}>Meet David Anderson, a representative of our supposed audience.</Typography>


<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Proto Persona"
        image={ProtoPersonaDave}
       
      />
     
     
    </Card>

    <Typography sx={paragraphB}></Typography>

</Box>





<Box sx={designB}>

<Typography sx={titleB}>Research Survey</Typography>

<Typography sx={paragraphB}>While David represented my assumed audience, I needed to find a hot and trending need to 
confirm an interest in an e-commerce freelancing platform. I created a survey so that I could reach out to mulitple people online. I received 
an interesting mix of feedback from some of my results:</Typography>



<Card sx={cardStylesB}>
      <CardMedia
        component="img"
        alt="Freelancing Gigs Img"
        image={FreelancingGigs}
      />
     
     
    </Card>


    <Typography sx={paragraphB}>Most freelancers found gigs by word of mouth by a landslide. None of them use 
    online marketing. Upwork is a freelancing website specifically for web developers and designers. </Typography>
    
    
   
    <Typography sx={paragraphB}>The study also gave me some insight as far as how users struggled with freelancing, no matter their preferred communication 
    platform. Some direct quotes included:</Typography>
    

    <Card sx={cardquoteStylesB}>
      <CardMedia
        component="img"
        alt="User Quotes"
        image={UserQuote}
      />
     
     
    </Card>

    <Typography sx={paragraphB}>As the majority of my responders prefer word of mouth, could I persuade them to join the online community for 
    freelancing if I focused on their frustrations and provided good solutions to them? Why do 33.3% of people use Upwork? How does it work for freelance? 
    Does it have any popular competitors?</Typography>


<Typography sx={paragraphB}></Typography>



  
</Box> 



{/*competitoranalysis*/}


<Box sx={designB}>
<Typography sx={titleB}>Competitor Analysis</Typography>
<Typography sx={paragraphB}>I found a few direct competitors alongside Upwork for freelancers such as Fiverr Business and Behance. 
I also realized that freelancers can connect to clients through indirect competitors such as LinkedIn and Indeed. I gathered intel 
to know if these competitors provided solutions to freelancers in their problem areas. This is what I discovered:</Typography>
  

<Card sx={cardStylesB}>
      <CardMedia
        component="img"
        alt="Competitor Analysis"
        image={CompetitorAnalysis}
      />
     
     
    </Card>

   
</Box> 







{/*Affinity Map*/}



<Box sx={designB}>

<Typography sx={titleB}>Affinity Diagram</Typography>


<Typography sx={paragraphB}>I used Miro to sort my user research data and organized its info into an affinity diagram. This lets me 
discover and organize popular trends from my audience in a logical manner and to see if others feel the same 
way as David does about freelancing overall: </Typography>



<Card sx={cardStylesB}>
      <CardMedia
        component="img"
        alt="Affinity Diagram"
        image={AffinityDiagram}
      />
     
     
    </Card>





    <Typography sx={paragraphB}></Typography>
    
    
    <Typography sx={paragraphB}></Typography>



  
</Box> 









<Box sx={designB}>
<Typography sx={titleB}>Empathy Map</Typography>



<Typography sx={paragraphB}>After collecting data from my research, I could really start to empathize with my audience and 
gather information on what they heard, said, thought, and did throughout their user experience. </Typography>
    


<Card sx={cardStylesB}>
      <CardMedia
        component="img"
        alt="Emapthy Map"
        image={EmpathyMap}
      />
     
     
    </Card>







</Box>


<Box sx={designB}>
<Typography sx={titleB}>User Persona</Typography>


<Typography sx={paragraphB}>Meet Laurey Lane, a representative of our audience based upon our researched trending facts. Does she fit the picture? Does she relate to our interviewed freelancers?</Typography>


<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="User Persona"
        image={UserPersona}
       
      />
     
     
    </Card>








</Box>






{/*define*/}

<Box sx={designA} id="define">
<Typography sx={headerA}>Define Phase</Typography>

<Typography sx={titleA}>User Insight Statement</Typography>

<Typography sx={paragraphA}>Freelancers and clients need to find a better online communication platform for freelancing because it is important to meet 
project expectations without overwhelming anyone involved.</Typography>
    
<Typography sx={paragraphA}></Typography>
  



  
</Box> 




<Box sx={designA}>

<Typography sx={titleA}>Problem Statement</Typography>

<Typography sx={paragraphA}>We believe Catwalk Co will improve communication, creativity, and committment 
to remote freelancers and clients so that they can acheive higher quality results 
 throughout their digital design projects.</Typography>
    
<Typography sx={paragraphA}></Typography>
  



  
</Box> 









{/*ideate*/}

<Box sx={designB} id="ideate">


<Typography sx={headerB}>Ideate</Typography>



</Box>


{/*Brainstorm: I Like I Wish What If Method*/}



<Box sx={designB}>


<Typography sx={titleB}>I Like I Wish What If Method</Typography>



<Typography sx={paragraphB}>After collecting audience data, it's important to brainstorm possible solutions for a better user experience. One great method for this 
step is the "I Like, I Wish, What If" method as I dig deeper into what feature ideas are most successful and viable for a competitive freelancing app.</Typography>
    



<Card sx={cardStylesB}>
      <CardMedia
        component="img"
        alt="I Like I Wish What If"
        image={ILikeIWishWhatIf}
      />
     
     
    </Card>






</Box>

{/*featureprioritizationmatrix*/}


<Box sx={designB}>
<Typography sx={titleB}>Feature Priortization Matrix</Typography>

<Typography sx={paragraphB}>I want to keep the most viable product (MVP) in mind as I don't want to create 
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




    <Typography sx={paragraphB}></Typography>
    
    

  
</Box> 




{/*Value Proposition Canvas*/}




<Box sx={designB}>
<Typography sx={titleB}>Value Proposition Statement and Canvas</Typography>

<Typography sx={paragraphB}>Catwalk Co is developing a freelancing app to help freelancers and clients solve 
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

    <Typography sx={paragraphB}></Typography>


    </Box>


{/*User Scenario*/}



    <Box sx={designB}>
<Typography sx={titleB}>User Scenario</Typography>




<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Journey Map"
        image={UserScenario}
       
      />
     
     </Card>






</Box>



{/*Storyboard*/}



<Box sx={designB}>
<Typography sx={titleB}>Storyboard</Typography>




<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Storyboard"
        image={StoryBoard}
       
      />
     
     </Card>





</Box>




{/*journeymap*/}




<Box sx={designB} id="journeymap">
<Typography sx={titleB}>Journey Map</Typography>

<Typography sx={paragraphB}>Let's spend a moment with Laurey Lane as she expresses her typical day as a freelancer:</Typography>



    <Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Journey Map"
        image={JourneyMap}
       
      />
     
     
    </Card>

    <Typography sx={paragraphB}></Typography>
   
    

</Box>



{/*PROTOTYPE PHASE*/}



<Box sx={designA} id="prototype">



<Typography sx={headerA}>Prototype Phase</Typography>


{/*User Flow*/}


<Box sx={designA}>
<Typography sx={titleA}>User Flow</Typography>


<Typography sx={paragraphA}>As I entered the design thinking Prototype phase, I carefully considered the most desired Catwalk Co features 
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

</Box>





{/*sitemap*/}


<Box sx={designA}>
<Typography sx={titleA}>Sitemap</Typography>

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
 
 
     <Typography sx={paragraphA}></Typography>
     





  
</Box> 





{/*Wireframe Sketches*/}







<Box sx={designA}>

<Typography sx={titleA}>Sketches</Typography>

<Typography sx={paragraphA}>Now that I understood my overall information architecture for Catwalk Co's mobile app, 
here are some of my rough sketches for Catwalk Co to get through ideas much faster:</Typography>
    


<Typography sx={paragraphA}>Sketches:</Typography>
 

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
   



   
</Box> 



{/*Low - Mid Fidelity Digital Wireframes*/}



<Box sx={designA}>

<Typography sx={titleA}>Low - Mid Fidelity Digital Wireframes</Typography>

<Typography sx={paragraphA}>After sketching through quite a few app ideas, I wanted to add ones that
 worked alongside common mental model design patterns in my digital designs. I found inspiration through 
 competitive apps such as Calendly for my availability and Gmail for my email services.</Typography>
    


 <Typography sx={paragraphA}>Splash Page, Login, and Sign Up:</Typography>
 
<Container sx={digitalOnboarding}>

<Row>

<Col sm={3}>
 <Card sx={imageStylesADigital}>
       <CardMedia
         component="img"
         alt="Splash Page"
         image={SplashPageDigital}
       />
      
      
     </Card>  

     </Col>


     <Col sm={3}>
     <Card sx={imageStylesADigital}>
       <CardMedia
         component="img"
         alt="Login and Sign Up"
         image={SignUpLoginDigital}
       />
      
      
     </Card>  
</Col>

<Col sm={3}>
     <Card sx={imageStylesADigital}>
       <CardMedia
         component="img"
         alt="Sign Up"
         image={SignUpDigital}
       />
      
      
     </Card>  
</Col>

<Col sm={3}>
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



 <Typography sx={paragraphA}>Dashboard, Availability, Inbox, Earnings:</Typography>
  

 <Container sx={digitalApp}>

<Row>


<Col sm={3}>

 <Card sx={imageStylesADigital}>
       <CardMedia
         component="img"
         alt="Dashboard"
         image={DashboardDigital}
       />
      
      
     </Card> 
     
    </Col>

     <Col sm={3}>
   

 <Card sx={imageStylesADigital}>
       <CardMedia
         component="img"
         alt="Availability"
         image={AvailabilityDigital}
       />
      
      
     </Card>  

</Col>

<Col sm={3}>   
  
 <Card sx={imageStylesADigital}>
       <CardMedia
         component="img"
         alt="Inbox"
         image={InboxDigital}
       />
      
      
     </Card>  

    </Col> 


    <Col sm={3}>

 <Card sx={imageStylesADigital}>
       <CardMedia
         component="img"
         alt="Earnings"
         image={EarningsDigital}
       />
      
      
     </Card>  

     </Col>


     <Col sm={3}>

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




</Box> 



{/*Low - Mid Fidelity Digital Prototype*/}






<Box sx={designA}>

<Typography sx={titleA}>Low - Mid Fidelity Digital Prototype</Typography>

<Container sx={iframeContainer}>

<Row>


<Iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fxx2a8sN5OVlVtg6nHQyW7a%2FCatwalk-Company-Case-Study%3Fnode-id%3D428%253A564%26scaling%3Dscale-down%26page-id%3D103%253A2%26starting-point-node-id%3D428%253A557"
width="100%"
height="600px"
allowfullscreen 
/>




</Row>




</Container>


<Typography sx={titleA}></Typography>


</Box>





{/*Testing Phase*/}

<Box sx={designB} id="test">


<Typography sx={headerB}>User Testing</Typography>



</Box>


{/*User Testing Feedback */}



<Box sx={designB}>


<Typography sx={titleB}>User Testing Feedback</Typography>



<Typography sx={paragraphB}>After creating the mid - fidelity prototype, I conducted several user tests and received amazing feedback:  </Typography>
    




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



<Typography sx={paragraphB}>Final Mid-Fidelity Iterations after User Testing:  </Typography>
    


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




</Box>

    









</Box>














</>




)



}

export default CatwalkCo;