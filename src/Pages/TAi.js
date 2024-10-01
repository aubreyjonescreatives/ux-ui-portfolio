import * as React from 'react';  
import { Container, Row, Col } from 'react-grid-system';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
import ProtoPersonaJake from '../Images/appareldesigns/protopersonajake.png';
import UserPersona from '../Images/appareldesigns/userpersonameg.png';
//import JourneyMap from '../Images/catwalkcompany/images/journeymap.png'; 
//import CompetitorAnalysis from '../Images/catwalkcompany/images/competitoranalysis.png'; 
import tshirtDesigns from '../Images/appareldesigns/tshirtdesigns.png';
//import AffinityDiagram from '../Images/appareldesigns/research/affinitydiagram.png';
import ZoomedInAffinityDiagram from '../Images/appareldesigns/research/zoomedinaffinitydiagram.png';
import FeaturePrioritization from '../Images/appareldesigns/ideation/featureprioritizationmatrix.png';
// import Sitemap from '../Images/catwalkcompany/images/catwalkcositemap.jpg';
//import ValuePropositionCanvas from '../Images/catwalkcompany/images/CatwalkCoValuePropositionCanvas.png'
import EmpathyMap from '../Images/appareldesigns/research/empathymap.png'; 
import ILikeIWishWhatIf from '../Images/appareldesigns/ideation/ilikeiwishwhatif.png';
//import UserScenario from '../Images/catwalkcompany/images/userscenario.png'; 
// import UserFlow from '../Images/catwalkcompany/images/catwalkcouserflow.png'; 
// import SiteMap from '../Images/catwalkcompany/images/catwalkcositemap.png'; 
// import SplashPage from '../Images/catwalkcompany/images/sketches/splashpage.JPG'; 
// import Dashboard from '../Images/catwalkcompany/images/sketches/dashboard.JPG'; 
// import Availability from '../Images/catwalkcompany/images/sketches/availability.JPG';
// import EmailServices from '../Images/catwalkcompany/images/sketches/emailservices.JPG'; 
// import Earnings from '../Images/catwalkcompany/images/sketches/earnings.JPG';  
//import StoryBoard from '../Images/catwalkcompany/images/storyboard.JPG'; 
// import SplashPageDigital from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/splash-screen.png';
// import SignUpLoginDigital from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/sign-up-login.png';
// import SignUpDigital from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/sign-up.png';
// import LoginDigital from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/login.png';
// import SignUpandLogin from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/signinguploggingin.png'
// import MidFiCatWalkCo from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/mid-fi-catwalkco.png';
// import DashboardDigital from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/dashboard-1.png';
// import AvailabilityDigital from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/availability.png';
// import InboxDigital from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/inbox.png';
// import EarningsDigital from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/earnings-1.png';
// import EarningsAccordionDigital from '../Images/catwalkcompany/images/mid-fi-digital-wireframes/earnings-accordion-1.png';
// import Iframe from 'react-iframe'; 
// import UserTests from '../Images/catwalkcompany/images/usertestfeedback.png';
// import StyleGuide from '../Images/catwalkcompany/images/styleguide/styleguide.png'; 
// import FinalLoginSignUp from '../Images/catwalkcompany/images/hi-fidelitywireframes/final-signup-login.png'; 
// import FinalCatwalkCo from '../Images/catwalkcompany/images/hi-fidelitywireframes/final-catwalkco.png';
// import FinalTimeclockRecording from '../Images/catwalkcompany/images/hi-fidelitywireframes/final-timeclock-recording.png';



const design = {
clear: 'both', 
height: '700px'

}


const cardStyles = {
  clear: 'both',
  margin: '10px auto 10px auto',
  display: 'block', 
  width: '500px'



}

const apparelImage = {
width: '100%', 
padding: '0px'

}

const customerQuote = {
  // padding: '100px 100px 150px 150px',
}

const quote = {
  color: '#00022E', 
  fontSize: '30px',
  textAlign: 'center', 
  fontFamily: 'Merriweather',
  paddingBottom: '100px', 
  paddingTop: '100px', 
}



const age = {
  border: '1px solid #00022E'
}

const gender = {
  border: '1px solid #00022E'
}

const ageRange = {
  padding: '50px 70px 20px 70px',
  textAlign: 'center', 
  fontSize: '32px',
  color: '#00022E',
}

const ageNumbers = {
  padding: '5px 70px',
  textAlign: 'center',
  fontSize: '36px',
  color: '#00022E',
}

const genderTitle = {
  padding: '50px 70px 20px 70px',
  textAlign: 'center',
  fontSize: '32px',
  color: '#00022E',
}

const genderMajority = {
  padding: '5px 70px',
  textAlign: 'center',
  fontSize: '36px',
  color: '#00022E',
}


const commonReasons = {
  padding: '40px 70px',
fontSize: '20px', 
fontFamily: 'Merriweather', 
}


const headerStylesA = {
  margin: '0px auto', 
  marginBottom: '150px', 
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
padding: '10px 70px',
fontSize: '20px', 
fontFamily: 'Merriweather', 

}

const titleA = {
  padding: '20px 70px',
  fontSize: '32px',
  fontFamily: 'Lato', 
fontWeight: '400', 
  }
  







// const imageStylesA = { 
// width: '60%',
// display: 'block', 
// margin: '75px auto 75px auto', 
// height: '300px'


// }


// const imageStylesAFinal = { 
//   width: '95%',
//   display: 'block', 
//   margin: '75px auto 75px auto', 
//   height: '300px'
  
  
//   }

  // const finalHiStyles = {
  //   position: 'relative',
  //   width: '100%',
  //   top: '0px'
  
  // }

// const finalMidStyles = {
//   position: 'relative',
//   width: '100%',
//   top: '0px'

// }

// const userflowContainer = {
//   display: 'grid', 
//   justifyContent: 'space-evenly',
//   margin: "0px auto", 
// }


// const imageStylesAUserFlow = {
// width: '100%'


// }

// const imageStylesAStyleGuide = {
// display: 'block',
// margin: '0px auto',
// width: '40%'

// }


// const sitemapContainer = {
//   display: 'grid', 
//   justifyContent: 'space-evenly',
//   margin: "0px auto", 
// }

// const imageStylesASitemap = {
// width: '100%'


// }

// const paragraphASitemap = {
// padding: '30px 0px'
// }


// const sketchesContainer = {
//   display: 'grid', 
//   justifyContent: 'space-evenly',
//   margin: "0px auto", 
// }

// const imageStylesASketches = {
// margin: '20px', 

// }


// const digitalOnboarding = {
// display: 'grid', 
// justifyContent: 'center',

// }


// const digitalApp = {
//   display: 'grid', 
//   justifyContent: 'center',
 
//   }


// const imageStylesADigital = {
// width: "60%", 
// //gap: '10px',
// margin: "20px auto"

// }


// const iframeContainer = {
//   display: 'grid', 
//   justifyContent: 'center',
//   margin: "0px auto", 
//   width: '100%', 
//   height: '1000px', 
//   marginBottom: '150px'


// }


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

const paragraphBLink = {
  textAlign: 'center',
  padding: '20px 70px',
  fontSize: '20px', 
  fontFamily: 'Merriweather',
  fontWeight: '300', 
  color: '#00022E'


}


// const cardquoteStylesB = {
//   margin: '75px auto 75px auto', 
//   display: 'block', 
//   width: '75%',
//   fontFamily: 'Merriweather',
// fontWeight: '500'

// }



const cardStylesB = {
  margin: '75px auto 75px auto', 
  display: 'block', 
  width: '40%',
  fontFamily: 'Merriweather',
fontWeight: '500'

}


const imageStylesB = { 
  width: '35%',
  display: 'block', 
  margin: '75px auto 75px auto'
  
  
  }

















const TAi = () => {
  





return (
<>



<Box sx={design}>

       <Card sx={cardStyles}>
      <CardMedia
        sx={apparelImage}
        component="img"
        alt="T-Shirt Designs"
        image={tshirtDesigns}
      />
     
     
    </Card>






       <Typography sx={headerStylesA} id="top">"TAi" <br/> Tailored Ai <br/> UX Design Case Study</Typography>


       </Box>


{/*challenge*/}


<Box sx={designA} id="challenge">
<Typography sx={headerA}>Challenge</Typography>
<Typography sx={paragraphA}>When I worked in customer service at Kohls, I interacted with quite a few different customers for
Amazon and Kohls' clothing returns. We're asked to provide one question to our Kohls' return customers and sometimes 
my Amazon customers answer it without being asked:  </Typography>

<Row>
<Container sx={customerQuote}>
  <Typography sx={quote}>
  "Anything wrong with the product?"
  </Typography>
  </Container>

</Row>

<Typography sx={paragraphA}>More often than not, I receive the same answer:</Typography>
<Typography sx={headerA}></Typography> 

<Row>

<Col >
  <Container sx={customerQuote}>
  <Typography sx={quote}>
  "It just wasn't the right size."
  </Typography>
  </Container>
  </Col>

  <Col >
  <Container sx={customerQuote}>
  <Typography sx={quote}>
  "Wrong fit."
  </Typography>
  </Container>
  </Col>

  <Col >
  <Container sx={customerQuote}>
  <Typography sx={quote}>
  "I didn't try it on first."
  </Typography>
  </Container>
  </Col>

  </Row>

  
</Box> 





{/*empathy*/}



{/*protopersona*/}


<Box sx={designB} id="empathy">

<Typography sx={headerB}>Empathy Phase</Typography>

<Typography sx={titleB}>Proto Persona</Typography>

<Typography sx={paragraphB}>While I received quite a few different customers, a minimum viable product focuses on a trending audience. I don't have 
enough stats to really know who I am talking to.</Typography> 

<Typography sx={paragraphB}>
We can assume that Jake Collins as our proto persona matches our assumed audience. Online shopping gives him the option to make fast choices and save time for camping,
fishing, and hiking.</Typography>


<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Proto Persona"
        image={ProtoPersonaJake}
       
      />
     
     
    </Card>

    <Typography sx={paragraphB}></Typography>

</Box>





<Box sx={designB}>

<Typography sx={titleB}>Research Survey</Typography>

<Typography sx={paragraphB}>These user stories only gave me more questions about the e-commerce 
fashion industry. I needed more stats and chose to create an online survey to strategically reach an online audience. 
I received interesting mixed results. My survey questions included demographics, 
preferred online platforms and devices, and online shopping trending products:</Typography>

<Typography sx={paragraphB}>Unfortunately it turns out that Jake didn't quite fit the story as my 
main audience advocate. Sorry Jake!</Typography>
    

<Row>

<Col >
  <Container sx={age}>
  <Typography sx={ageRange}>
    Age Range:
  </Typography>
  <Typography sx={ageNumbers}>
    54%
  </Typography>
  <Typography sx={ageNumbers}>
    20-30 years old
  </Typography>
  </Container>
  </Col>


  <Col>
    <Container sx={gender}>
  <Typography sx={genderTitle}>
    Gender:
  </Typography>
  <Typography sx={genderMajority}>
    90.9%
  </Typography>
  <Typography sx={genderMajority}>
    female
  </Typography>
  </Container>
  </Col>


    </Row>
   
    <Typography sx={commonReasons}>
    So why do people shop online when they usually receive better results in person?
    Here are just a few answers:
  </Typography>

    
    <Row>

<Col >
  <Container sx={age}>
  <Typography sx={ageRange}>
  "Easier with little kids."
  </Typography>
  </Container>
  </Col>

  <Col >
  <Container sx={age}>
  <Typography sx={ageRange}>
  "Convenience, gas money, lack of time, things are <br/>
    constantly moving around inside of stores."
  </Typography>
  </Container>
  </Col>

  <Col >
  <Container sx={age}>
  <Typography sx={ageRange}>
  "I live far from everything."
  </Typography>
  </Container>
  </Col>


    </Row>


    <Typography sx={commonReasons}>
    I also asked about what products and services interested people 
    the most for a small ecommerce business in today's competitive world. Here are the top 
    three answers to this question:
  </Typography>

    
    <Row>

    <Col >
  <Container sx={age}>
 
  <Typography sx={ageNumbers}>
    90.9% said
  </Typography>
  <Typography sx={ageNumbers}>
    Clothes
  </Typography>
  </Container>
  </Col>


  <Col >
  <Container sx={age}>
 
  <Typography sx={ageNumbers}>
    90.9% said
  </Typography>
  <Typography sx={ageNumbers}>
    Cosmetics
  </Typography>
  </Container>
  </Col>

  <Col >
  <Container sx={age}>
 
  <Typography sx={ageNumbers}>
    72.7% said
  </Typography>
  <Typography sx={ageNumbers}>
    Electronics
  </Typography>
  </Container>
  </Col>


    </Row>


    <Typography sx={paragraphB}>
    If you would like to see the full survey, here is a direct link to it:
  </Typography>
   

  <Link href="https://forms.gle/z5V81icnB61nhatd9" target="_blank" style={{textDecoration: "none"}}>
   <Typography sx={paragraphBLink} >
    Google Forms Survey
    </Typography>
  </Link>



{/*Affinity Map*/}


<Typography sx={titleB}>Affinity Diagram</Typography>


<Typography sx={paragraphB}>
    Can we relate to our audience? How can we synthesize all of our results? One great UX method is 
    affinity diagramming! I added all of the survey results to one whiteboard using sticky notes and 
    categorized them into specific groups. For this project I am using FigJam as an online whiteboard.
  </Typography>

<Row>

<Col>
<Link href="https://www.figma.com/file/nDeI3ve4CNWSd1dmWNNTiE/appareldesigns-ecommerce-uxui-case-study?type=whiteboard&node-id=0%3A1&t=lSGbznvYWJyD1dBT-1" target="_blank" style={{textDecoration: "none"}}>
<Typography sx={paragraphBLink} >
    Link to Full Affinity Diagram FigJam Board
    </Typography>
  </Link>
  <Card sx={cardStylesB}>
      <CardMedia
        component="img"
        alt="Affinity Diagram"
        image={ZoomedInAffinityDiagram}
      />
     
     
    </Card>

</Col>

 

    </Row>

   
<Typography sx={paragraphB}>
    But who wants to look at and read all of our affinity diagram sticky notes? Empathy maps and our 
    final user persona will really visually display audience goals, needs, frustrations, etc. 
  </Typography>
    
    <Typography sx={paragraphB}>


    </Typography>

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


<Typography sx={paragraphB}>Meet Megan Young, the final representative of our audience 
based on our researched trending facts. Does she fit the picture? Does she relate to our online
shoppers?</Typography>


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

<Typography sx={paragraphA}>Exhausted adults with too much to do need a convinient
online shopping platform because they do not have time for basic needs, multiple shopping 
stops, and traffic after a long work day.
</Typography>
    
<Typography sx={paragraphA}></Typography>
  



  
</Box> 




<Box sx={designA}>

<Typography sx={titleA}>Problem Statement</Typography>

<Typography sx={paragraphA}>We believe TAi will help online shoppers discover a strategic new 
way to finding the right fit with the help of Ai. TAi's Ai software can size clothing and tailor it to specific 
customer needs before the final purchase. With its custom design, affordable prices, 
and trustworthy reviews, TAi will tailor to individual online shopper needs to avoid frustration and disappointment 
after a long exhausting day. 

</Typography>
    
<Typography sx={paragraphA}></Typography>
  



  
</Box> 









{/*ideate*/}

<Box sx={designB} id="ideate">


<Typography sx={headerB}>Ideate</Typography>



</Box>


{/*Brainstorm: I Like I Wish What If Method*/}



<Box sx={designB}>


<Typography sx={titleB}>I Like I Wish What If Method</Typography>



<Typography sx={paragraphB}>Now that we understand our online audience, 
we can start brainstorming feature ideas relatable to their wants and needs.</Typography>
    



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

<Typography sx={paragraphB}>I still want to keep the most viable product (MVP) in mind as I don't want to create 
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
<Typography sx={titleB}>Value Proposition Statement</Typography>

<Typography sx={paragraphB}>TAi is an is Ai clothing e-commerce platform tailored to find the right fit for online shoppers. With its custom apparel, 
affordable prices, and trustworthy reviews, TAi will increase the return on investment and decrease disappointment and quantity in customer 
returns. We're better than our competitors because we focus on removing company and product waste as we tailor to each custom fit without requiring 
our customers to try our clothing on first. We're believable because we listen to our audience and provide solutions for all parties involved.</Typography>


    <Typography sx={paragraphB}></Typography>


    </Box>


{/*User Scenario*/}



   {/*  <Box sx={designB}>
<Typography sx={titleB}>User Blue Print</Typography>





</Box>
 */}



<Box sx={designB}>
<Typography sx={titleB}>To Be Continued...</Typography>



    </Box>











</>




)



}

export default TAi;