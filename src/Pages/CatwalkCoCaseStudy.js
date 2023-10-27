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
import CompetitorAnalysis from '../Images/catwalkcompany/images/competitorresearch/competitoranalysis.png'; 
import AffinityDiagram from '../Images/catwalkcompany/images/AffinityDiagram.jpg';
import FeaturePrioritization from '../Images/catwalkcompany/images/FeaturePrioritizationMatrix.jpg';
import Sitemap from '../Images/catwalkcompany/images/catwalkcositemap.jpg';
import EmpathyMap from '../Images/catwalkcompany/images/empathymap.png'; 
import ILikeIWishWhatIf from '../Images/catwalkcompany/images/ilikeiwishwhatifUpdate.png'
import UserFlow from '../Images/catwalkcompany/images/catwalkcouserflow.png'; 
import SiteMap from '../Images/catwalkcompany/images/catwalkcositemap.png'; 
import SplashPage from '../Images/catwalkcompany/images/sketches/splashpage.JPG'; 
import Dashboard from '../Images/catwalkcompany/images/sketches/dashboard.JPG'; 
import Availability from '../Images/catwalkcompany/images/sketches/availability.JPG';
import EmailServices from '../Images/catwalkcompany/images/sketches/emailservices.JPG'; 
import Earnings from '../Images/catwalkcompany/images/sketches/earnings.JPG';  
import StoryBoard from '../Images/catwalkcompany/images/storyboard.JPG'; 
import SignUpandLogin from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/signinguploggingin.png'
import MidFiCatWalkCo from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/mid-fi-catwalkco.png';
import Iframe from 'react-iframe'; 
import StyleGuide from '../Images/catwalkcompany/images/styleguide/styleguide.png'; 
import StyleGuideV2 from '../Images/catwalkcompany/images/styleguide/StyleGuideV2.png';
import FinalLoginSignUp from '../Images/catwalkcompany/images/hi-fidelitywireframes/final-signup-login.png'; 
import UpdatedLoginSignUp from '../Images/catwalkcompany/images/hi-fidelitywireframes/updated-signup-login.png';
import UserDashboardUpdates from '../Images/catwalkcompany/images/hi-fidelitywireframes/userDashboardUpdates.png';
import AvailabilityIterations from '../Images/catwalkcompany/images/hi-fidelitywireframes/availabilityIterations.png';
import AvailabilityFlow from '../Images/catwalkcompany/images/hi-fidelitywireframes/availabilityFlow.png';


const Everything = {
  display: 'grid',
  margin: '100px auto',
  justifyContent: 'center', 
  width: '100%',

}




const boxStylesA = {
  backgroundColor: '#ffffff', 
  marginBottom: '50px'
 
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
  margin: '20px 0px',
}


const paragraphMD = {
  fontFamily: 'Raleway, sans-serif',
  margin: '0px auto 25px auto',
}







const imageStylesA = { 
display: 'block', 
margin: '10px auto',


}


const imageStylesAFinal = { 
  display: 'block', 
  margin: '75px auto 75px auto', 
  
  
  }

  const finalHiStyles = {
    top: '0px'
  
  }

const finalMidStyles = {
  position: 'relative',
  top: '0px'

}

const userflowContainer = {
  display: 'grid', 
  justifyContent: 'space-evenly',
  margin: "0px auto", 
}


const imageStylesAUserFlow = {


}

const imageStylesAStyleGuide = {
display: 'block',
margin: '0px auto',

}


const sitemapContainer = {
  display: 'grid', 
  justifyContent: 'space-evenly',
  margin: "0px auto", 
}

const imageStylesASitemap = {


}

const paragraphASitemap = {
padding: '30px 0px'
}


const sketchesContainer = {
  display: 'grid', 
  justifyContent: 'center', 
  margin: '0 auto'
}

const imageStylesASketches = {
  justifyContent: 'center',
margin: '10px auto', 

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
  margin: '50px auto', 
  fontFamily: 'Raleway, sans-serif',
  fontSize: '28px', 
  color: '#00003D',
  
  }





const quote = {
  margin: '15px auto', 
  display: 'block', 
  fontFamily: 'Merriweather', 
  fontSize: '24px',
  color: '#499167'

}



const cardStylesB = {
  margin: '0px auto', 
  display: 'block', 
  fontFamily: 'Merriweather',
fontWeight: '500'

}


const imageStylesB = { 
  display: 'block', 
  margin: '0px auto'
  
  
  }



const imageStylesUDUpdate = {
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


</Row>




</Container>

</Box>




{/*challenge*/}


<Box sx={boxStylesB}>
  <Container>
<Typography sx={headerStyles}>Challenge</Typography>
<Typography sx={paragraph} md={paragraphMD}>How can digital designers and clients better organize projects and connect together in today's modern world? 
Catwalk Co embarks on an adventure to build a bridge between digital designers and clients for better project management, 
communication, expectations, and creativity throughout their design processes.</Typography>

</Container>
</Box> 





{/*empathy*/}



{/*protopersona*/}


<Box sx={boxStylesA}>

<Container>

<Typography sx={headerStyles}>Empathy Phase</Typography>

<Typography sx={sectiontitle}>Proto Persona</Typography>


<Row>

<Col sm={12} md={6} xl={6}>


<Typography sx={paragraph} md={paragraphMD}>Meet David Anderson, a representative of our supposed audience. David would love to find 
potential paid gaming animation opportunties as an amateur gaming animator. His current call center representative 
job is too boring and predictable. Without much experience in the gaming world, he thinks freelancing would 
help him get his foot in the door. </Typography>

</Col>

<Col sm={12} md={6} xl={6}>

<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Proto Persona"
        image={ProtoPersonaDave}
       
      />
     
     
    </Card>

    </Col>

    </Row>


    </Container>
</Box>





<Box sx={boxStylesA}>

<Container>

<Typography sx={sectiontitle}>Research Survey</Typography>

<Row>

<Col sm={12} md={6} xl={6}>
<Card sx={cardStylesB}>
      <CardMedia
        component="img"
        alt="Freelancing Gigs Img"
        image={FreelancingGigs}
      />
     
     
    </Card>

</Col>


  <Col sm={12} md={6} xl={6}>
<Typography sx={paragraph} md={paragraphMD}>While David represented my assumed audience, I needed to find a hot and trending need to 
confirm an interest in an online and competitive freelancing platform. I created a survey so that I could reach out to 
mulitple people online. I received an interesting mix of feedback from some of my results:</Typography>


</Col>




    </Row>

    <Typography sx={paragraph} md={paragraphMD}>For example, most freelancers found gigs by word of mouth by a landslide. None of them use 
    online marketing. Upwork is a freelancing website specifically for web developers and designers. </Typography>
    
    
   
    <Typography sx={paragraph} md={paragraphMD}>The study also gave me some insight as far as how users struggled with freelancing, no matter their preferred communication 
    platform. Some direct quotes included:</Typography>
    

   <Row>
<Col sm={12} md={6} xl={6}>
<Typography sx={quote}>“I wish I didn't have to set money aside for taxes.”</Typography>
</Col>
<Col sm={12} md={6} xl={6}>
<Typography sx={quote}>“I wish I could change some employers perception of freelance work. One company I interviewed with last year 
    told me if I accept their offer that I'd have to give up freelance work.”</Typography>
</Col>
<Col sm={12} md={6} xl={6}>
<Typography sx={quote}>“Being able to not work weekends. Usually find myself with projects that go well into the weekend.”</Typography>
</Col>


   </Row>

    <Typography sx={paragraph} md={paragraphMD}>As the majority of my responders prefer word of mouth, could I persuade them to join the online community for 
    freelancing if I focused on their frustrations and provided good solutions to them? Why do 33.3% of people use Upwork? How does it work for freelance? 
    Does it have any popular competitors?</Typography>


</Container>

  
</Box> 



{/*competitoranalysis*/}


<Box sx={boxStylesA}>
<Container>

<Typography sx={sectiontitle}>Research Insights</Typography>
<Row>

<Col sm={12} md={6} xl={6}>
<Typography sx={sectiontitle}>Competitor Analysis</Typography>
<Typography sx={paragraph} md={paragraphMD}>I found a few direct competitors alongside Upwork for freelancers such as Fiverr Business and Behance. 
I also realized that freelancers can connect to clients through indirect competitors such as Behance and LinkedIn. I gathered intel 
to know if these competitors provided solutions to freelancers in their problem areas. This is what I discovered:</Typography>
  

<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Competitor Analysis"
        image={CompetitorAnalysis}
      />
     
     
    </Card>

    </Col>

<Col sm={12} md={6} xl={6}>


{/*Affinity Map*/}

<Typography sx={sectiontitle}>Affinity Diagram</Typography>


<Typography sx={paragraph} md={paragraphMD}>I used Miro to sort my user research data and organized its info into an affinity diagram. This lets me 
discover and organize popular trends from my audience in a logical manner and to see if others feel the same 
way as David does about freelancing overall: </Typography>



<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Affinity Diagram"
        image={AffinityDiagram}
      />
     
     
    </Card>


</Col>




    </Row>
    </Container>
</Box> 







{/*Affinity Map*/}












<Box sx={boxStylesA}>
  <Container>

<Row>

<Col sm={12} md={6} xl={6}>


<Typography sx={sectiontitle}>Empathy Map</Typography>



<Typography sx={paragraph} md={paragraphMD}>After collecting data from my research, I could really start to empathize with my audience and 
gather information on what they heard, said, thought, and did throughout their user experience. </Typography>
    


<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Emapthy Map"
        image={EmpathyMap}
      />
     
     
    </Card>

    </Col>

    <Col sm={12} md={6} xl={6}>
    
    <Typography sx={sectiontitle}>User Persona</Typography>


<Typography sx={paragraph} md={paragraphMD}>Meet Laurey Lane, a representative of our audience based upon our researched trending facts. Does she fit the picture? Does she relate to our interviewed freelancers?</Typography>


<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="User Persona"
        image={UserPersona}
       
      />
     
     
    </Card>

    
    
    
    
    </Col>

    </Row>


    </Container>

</Box>








{/*define*/}

<Box sx={boxStylesB}>
  <Container>
<Typography sx={headerStyles}>Define Phase</Typography>

<Typography sx={sectiontitle}>User Insight Statement</Typography>

<Typography sx={paragraph} md={paragraphMD}>Overworked freelancers and disheartened clients need a better collaborative project management platform because it will clarify expectations and organize work ethic boundaries between involved parties.</Typography>
    

</Container>
  
</Box> 




<Box sx={boxStylesB}>

<Container>

<Typography sx={sectiontitle}>Problem Statement</Typography>

<Typography sx={paragraph} md={paragraphMD}>We believe Catwalk Co will renew communication, creativity, and committment 
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

  
<Row>

<Col sm={12} md={6} xl={6}>
<Typography sx={paragraph} md={paragraphMD}>After collecting audience data, it's important to brainstorm possible solutions for a better user experience. One great method for this 
step is the "I Like, I Wish, What If" method as I dig deeper into what feature ideas are most successful and viable for a competitive freelancing app.</Typography>
  
</Col>

<Col sm={12} md={6} xl={6}>
<Card sx={cardStylesB}>
      <CardMedia
        component="img"
        alt="I Like I Wish What If"
        image={ILikeIWishWhatIf}
      />
     
     
    </Card>
    </Col>

    </Row>


    </Container>

</Box>

{/*featureprioritizationmatrix*/}


<Box sx={boxStylesA}>

<Container>  
<Typography sx={sectiontitle}>Feature Priortization Matrix</Typography>

<Row>

  <Col sm={12} md={6} xl={6}>
  <Card sx={cardStylesB}>
      <CardMedia
        component="img"
        alt="Feature Prioritization Matrix"
        image={FeaturePrioritization}
      />
     
     
    </Card>
  
  </Col>

<Col sm={12} md={6} xl={6}>
<Typography sx={paragraph} md={paragraphMD}>I want to keep the most viable product (MVP) in mind as I don't want to create 
any scope creep and be mindful of timing as I am on feature deadlines. I won't always have time to create 
every feature request, which is okay. There can always be more time later on to create version two and testing each 
step of the way will let me know if the product really truly has a worthy return on investment and meets my customers'
needs. A Feature Prioritization Matrix lets me organize these requests based upon importance and urgency: </Typography>
</Col>


    </Row>

    </Container>
  
</Box> 




{/*Value Proposition Canvas*/}




<Box sx={boxStylesA}>
  <Container>
<Typography sx={sectiontitle}>Value Proposition Statement</Typography>

<Typography sx={paragraph} md={paragraphMD}>Catwalk Co is developing a freelancing app to help freelancers and clients solve 
communication errors, creativity blockers, and financial pitfalls
when working on a project together. We're better than our competitors because we remove common freelancing 
pain points discovered in other companies for all parties involved. We're believable because we seek to understand and problem solve 
with our audience to provide simpler and better means for all.</Typography>

{/* 

    <Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Journey Map"
        image={ValuePropositionCanvas}
       
      />
     
     
    </Card> */}


   </Container>

    </Box>


{/*User Scenario*/}


{/* 
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


</Box> */}



{/*Storyboard*/}



<Box sx={boxStylesA}>
 
  <Container>

  <Row>

  <Col sx={12} sm={6} md={6} xl={6}>

<Typography sx={sectiontitle}>Storyboard</Typography>




<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Storyboard"
        image={StoryBoard}
       
      />
     
     </Card>

     </Col>


<Col sx={12} sm={6} md={6} xl={6}>
{/*journeymap*/}



<Typography sx={sectiontitle}>Journey Map</Typography>


    <Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Journey Map"
        image={JourneyMap}
       
      />
     
     
    </Card>

    </Col>

</Row>



     </Container>
</Box>





  

{/*PROTOTYPE PHASE*/}



<Box sx={boxStylesB}>

<Container>

<Typography sx={headerStyles}>Prototype Phase</Typography>


{/*User Flow*/}


<Typography sx={sectiontitle}>User Flow</Typography>




<Container sx={userflowContainer}>

<Row>

  <Col sm={12} md={6} xl={6}>
  <Typography sx={paragraph} md={paragraphMD}>As I entered the design thinking Prototype phase, I carefully considered the most desired Catwalk Co features 
based on my research, feature prioritization matrix, and Laurey's current overall experience: </Typography>
  
  
  </Col>

<Col sm={12} md={6} xl={6}>


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

<Col sm={12} md={6} xl={6}>

<Typography sx={paragraphASitemap}>First sitemap</Typography>
     


    <Card sx={imageStylesASitemap}>
      <CardMedia
        component="img"
        alt="Sitemap"
        image={Sitemap}
      />
     
     
    </Card>

    </Col>

<Col sm={12} md={6} xl={6}>
    


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

<Typography sx={paragraph} md={paragraphMD}>Now that I understood my overall information architecture for Catwalk Co's mobile app, 
here are some of my rough sketches for Catwalk Co to get through ideas much faster:</Typography>
    


<Typography sx={paragraph} md={paragraphMD}>Sketches:</Typography>
 

<Container sx={sketchesContainer}>


<Row>

<Col sm={12} md={6} xl={6}>


<Card sx={imageStylesASketches}>
       <CardMedia
         component="img"
         alt="Splash Page"
         image={SplashPage}
       />
      
      
     </Card>
</Col>


<Col sm={12} md={6} xl={6}>    

<Card sx={imageStylesASketches}>
       <CardMedia
         component="img"
         alt="Dashboard"
         image={Dashboard}
       />
      
      
     </Card>

     </Col>


     <Col sm={12} md={6} xl={6}>  
     
<Card sx={imageStylesASketches}>
       <CardMedia
         component="img"
         alt="Availability"
         image={Availability}
       />
      
      
     </Card>  

</Col>


<Col sm={12} md={6} xl={6}> 


  <Card sx={imageStylesASketches}>
         <CardMedia
           component="img"
           alt="Inbox Services"
           image={EmailServices}
         />
        
        
       </Card>  

</Col>


<Col sm={12} md={6} xl={6}> 
       
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


<Typography sx={sectiontitle}>Low - Mid Fidelity Digital Wireframes and Prototype:</Typography>

<Typography sx={paragraph} md={paragraphMD}>After sketching through quite a few app ideas, I wanted to add ones that
 worked alongside common mental model design patterns in my digital designs. I found inspiration through 
 competitive apps such as Calendly for my availability and Gmail for my email services.</Typography>
    


{/*Low - Mid Fidelity Digital Prototype*/}


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



<Typography sx={paragraph} md={paragraphMD}>After creating the mid - fidelity prototype, I conducted several user tests and received amazing feedback:  </Typography>
    


<Row>
<Col sm={12} md={6} xl={6}>
<Typography sx={quote}>The font is small and hard to read.</Typography>
</Col>
<Col sm={12} md={6} xl={6}>
<Typography sx={quote}>To delete an email, they first went to the trash tab that could be an icon instead as opposed to swiping right.</Typography>
</Col>
<Col sm={12} md={6} xl={6}>
<Typography sx={quote}>Login button didn’t take you to login screen</Typography>
</Col>


   </Row>





{/*font is very little and hard to read from website point of view*/} 

{/*the trash title needs to access a cancel or delete screen. Viewable better by a trash icon*/} 

{/*trash is always at the last. Good location*/} 

{/*mostly easy to login and sign up*/} 

{/*login button wasn't taking to login screen */}



{/*Iterations after unit testing*/}



<Typography sx={paragraph} md={paragraphMD}>Final Mid-Fidelity Iterations after User Testing:  </Typography>
    


<Row>


<Col sm={12} md={6} xl={6}>

<Card sx={imageStylesA}>
       <CardMedia
       sx={finalMidStyles}
         component="img"
         alt="Mid-Fidelity Wireframes"
         image={SignUpandLogin}
       />
      </Card>

      </Col>

      <Col sm={12} md={6} xl={6}>

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


<Typography sx={paragraph} md={paragraphMD}>It's time for color, typography, and specific design element styles. At first I 
did not choose colors that worked well across multiple browsers, devices, and aided accessibility. I researched 
color theory, color pairing, and made drastic updates to the style guide. I also added in components for 
design consistency. The second iteration also comes from a helpful Figma template.</Typography>
  

<Container sx={userflowContainer}>

<Row>


<Col sm={12} md={6} xl={6}>
<Typography sx={paragraph} md={paragraphMD}>Version 1:</Typography>
  

    <Card sx={imageStylesAStyleGuide} sm={12} md={6} xl={5}>
      <CardMedia
        component="img"
        alt="Style Guide"
        image={StyleGuide}
      />
     
     
     
    </Card>




    </Col>

    <Col sm={12} md={6} xl={6}>

    <Typography sx={paragraph} md={paragraphMD}>Version 2:</Typography>
  
    <Card sx={imageStylesAStyleGuide} sm={12} md={6} xl={5}>
      <CardMedia
        component="img"
        alt="Style Guide"
        image={StyleGuideV2}
      />
     
     
     
    </Card>




    </Col>

  </Row>

  


    </Container>

<Typography sx={sectiontitle}>Hi-Fidelity Wireframes Version 1 & 2</Typography>


<Typography sx={paragraph} md={paragraphMD}>As I implemented the style guide into these wireframes, I focused on readability, consistency, contrast, color theory, etc. just to name a few important 
UI design principles focused here.</Typography>
  
<Typography sx={paragraph} md={paragraphMD}>After careful consideration and feedback about the UI designs, I made some very different 
changes to several user flows, colors, and layouts for simplicity, symmetry, proximity, etc.</Typography>

<Typography sx={sectiontitle}>Splash Screen, Sign-Up, and Login Screens:</Typography>



<Container sx={userflowContainer}>



<Row>


<Col sm={12} md={6} xl={6}>

<Typography sx={paragraph} md={paragraphMD}>Version 1:</Typography>

<Card sx={imageStylesAFinal}>
       <CardMedia
       sx={finalHiStyles}
         component="img"
         alt="Hi-Fidelity Wireframes"
         image={FinalLoginSignUp}
       />
      </Card>

      </Col>

      <Col sm={12} md={6} xl={6}>

      <Typography sx={paragraph} md={paragraphMD}>Version 2:</Typography>

      <Card sx={imageStylesAFinal}>
       <CardMedia
       sx={finalHiStyles}
         component="img"
         alt="Hi-Fidelity Wireframes"
         image={UpdatedLoginSignUp}
       />
      </Card>



      </Col>


      </Row>

      <Row>

      <Typography sx={sectiontitle}>With the second version, I made these changes:</Typography>

      <Typography sx={paragraph} md={paragraphMD}>1. For visual hierarchy, I removed the splash screen gradient to follow a better design balance 
      between color and focus. It also follows the Z-Pattern. The sign-up and login pages follow F-patterns for better 
      readability.</Typography>

      <Typography sx={paragraph} md={paragraphMD}>2. For visual hierarchy, I simplified the font colors and sizing so 
      that the blue text represented clickable features while the green text represented non-clickable features 
      for predictable design consistency.</Typography>

      <Typography sx={paragraph} md={paragraphMD}>3. I discovered better primary and secondary color choices so that multiple devices, browsers 
      and color accessibility needs have an easier time looking at the app.</Typography>

      </Row>

  


    </Container>


    <Typography sx={sectiontitle}>User Dashboard Screen Iterations:</Typography>



<Container sx={userflowContainer}>



<Row>

<Col sm={12} md={6} xl={6}>


<Card sx={imageStylesUDUpdate}>
       <CardMedia
       sx={finalHiStyles}
         component="img"
         alt="Hi-Fidelity Wireframes"
         image={UserDashboardUpdates}
       />
      </Card>

      </Col>


<Col sm={12} md={6} xl={6}>
<Typography sx={sectiontitle}>With the second version, I made these changes:</Typography>


<Typography sx={paragraph} md={paragraphMD}>1. I made sure all icons followed the same button / link / icon colors for design consistency.</Typography>

<Typography sx={paragraph} md={paragraphMD}>2. I looked through different websites for current mental model practices with cards. Some of the 
sites included Etsy and Landing International. I discovered these cards needed rounded borders, fewer 
colored overlays, and more whitespace for better readability.</Typography>

<Typography sx={paragraph} md={paragraphMD}>3. The old headers were too thick but still contained important context. I found a color that worked well with the 
color palette, color accessibility, and could represent an unclickable feature. I made sure all of the headers were the same font, font size, and 
used the same whitespace for better readability and proximity.</Typography>

<Typography sx={paragraph} md={paragraphMD}>4. While the Open Projects feature could contain any freelancing project, I added in a filter option 
so that customers can search for specific projects with a faster user flow.</Typography>



</Col>


    


      </Row>
  


    </Container>



    <Typography sx={sectiontitle}>Availability Iterations:</Typography>



<Container sx={userflowContainer}>



<Row>


<Col sm={12} md={6} xl={6}>


<Card sx={imageStylesAFinal}>
       <CardMedia
       sx={finalHiStyles}
         component="img"
         alt="Hi-Fidelity Wireframes"
         image={AvailabilityIterations}
       />
      </Card>

      </Col>

      <Col sm={12} md={6} xl={6}>

  
      <Card sx={imageStylesAFinal}>
       <CardMedia
       sx={finalHiStyles}
         component="img"
         alt="Hi-Fidelity Wireframes"
         image={AvailabilityFlow}
       />
      </Card>



      </Col>


      </Row>

      <Row>

      <Typography sx={sectiontitle}>Throughout these iterations, I made these changes:</Typography>

      <Typography sx={paragraph} md={paragraphMD}>1. I removed extra whitespace so that specific features chunk together better.</Typography>

      <Typography sx={paragraph} md={paragraphMD}>2. I removed extra steps such as the toggle icon so that freelancers don't have to select multiple 
      features in one user flow.</Typography>

      <Typography sx={paragraph} md={paragraphMD}>3. I defined unavailable and available designs such as with different background colors.</Typography>

      <Typography sx={paragraph} md={paragraphMD}>4. I simplified the user interface so that freelancers do not have to scroll through all of their 
      availability thanks to an accordion dropdown feature.</Typography>


      </Row>

  


    </Container>






</Container>

</Box>


<Box sx={boxStylesA}>

<Container>

<Typography sx={headerStyles}>Final Thoughts and Key Performance Indicators:</Typography>



<Typography sx={paragraph} md={paragraphMD}>1. Freelancers and clients can find clearer project 
expectations and better communication through a simplified user interface.</Typography>
<Typography sx={paragraph} md={paragraphMD}>2. Colors, text, and components all need consistency and 
clear purposes for visual hierarchy.</Typography>
<Typography sx={paragraph} md={paragraphMD}>3. There are always simpler user flows, designs, and UX writing options
for better usability.</Typography>
<Typography sx={paragraph} md={paragraphMD}>4. Receiving feedback often inspires better design decisions.</Typography>


</Container>

</Box>










</Box>


</>




)



}

export default CatwalkCo;