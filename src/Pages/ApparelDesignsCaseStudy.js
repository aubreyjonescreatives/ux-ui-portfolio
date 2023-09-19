import * as React from 'react'; 
import { Container, Row, Col } from 'react-grid-system';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProtoPersonaDave from '../Images/appareldesigns/research/protopersonajake.png';
import UserPersona from '../Images/appareldesigns/research/userpersonameg.png';
import JourneyMap from '../Images/catwalkcompany/images/personas/journeymap.png'; 
import FreelancingGigs from '../Images/catwalkcompany/images/freelancinggigs.png'; 
import CompetitorAnalysis from '../Images/catwalkcompany/images/competitorresearch/competitoranalysis.png'; 
import AffinityDiagram from '../Images/appareldesigns/research/affinitydiagram.png';
import FeaturePrioritization from '../Images/appareldesigns/ideation/featureprioritizationmatrix.png';
import Sitemap from '../Images/catwalkcompany/images/catwalkcositemap.jpg';
import EmpathyMap from '../Images/appareldesigns/research/empathymap.png'; 
import ILikeIWishWhatIf from '../Images/appareldesigns/ideation/ilikeiwishwhatif.png';
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




const age = {
    border: '1px solid #00003D'
  }
  
  const gender = {
    border: '1px solid #00003D'
  }
  
  const ageRange = {
    padding: '50px 70px 20px 70px',
    textAlign: 'center', 
    fontSize: '32px',
    color: '#00003D',
  }
  
  const ageNumbers = {
    padding: '5px 70px',
    textAlign: 'center',
    fontSize: '36px',
    color: '#00003D',
  }
  
  const genderTitle = {
    padding: '50px 70px 20px 70px',
    textAlign: 'center',
    fontSize: '32px',
    color: '#00003D',
  }
  
  const genderMajority = {
    padding: '5px 70px',
    textAlign: 'center',
    fontSize: '36px',
    color: '#00003D',
  }
  


  const commonReasons = {
    padding: '40px 70px',
  fontSize: '20px', 
  fontFamily: 'Merriweather', 
  }
  


  const paragraphLink = {
    textAlign: 'center',
    padding: '20px 70px',
    fontSize: '20px', 
    fontFamily: 'Merriweather',
    fontWeight: '300', 
    color: '#00003D'
  
  
  }
  




const ApparelDesigns = () => {
  





return (
<>

<Box sx={Everything}>


<Box sx={boxStylesA}>

<Container>
<Typography sx={headerStyles} id="top">Apparel Designs E-Commerce</Typography>


       <Typography sx={headerStyles} id="top">Product Design Case Study</Typography>

       </Container>
     
<Container sx={caseStudyInfo}>

<Row sx={roleInfo}>

<Col sx={12} sm={6} md={4} xl={3}>
<Typography sx={catwalkInfo}>
  My Role:
</Typography >
<Typography sx={catwalkInfo}>
  Product Designer
</Typography>

</Col>

{/* <Col sx={12} sm={6} md={4} xl={3}>
<Typography sx={catwalkInfo}>
  Stakeholders
</Typography>
<Typography sx={catwalkInfo}>
  Me
</Typography>



</Col> */}

<Col sx={12} sm={6} md={4} xl={3}>
<Typography sx={catwalkInfo}>
  Timeframe:
</Typography>
<Typography sx={catwalkInfo}>
  December 2020 - Current
</Typography>


</Col>

</Row>




</Container>

</Box>




{/*challenge*/}


<Box sx={boxStylesB}>
  <Container>
<Typography sx={headerStyles}>Challenge</Typography>
<Typography sx={paragraph} md={paragraphMD}>My love for product design began when I discovered an interest in creating candle labels and tshirt designs for clientele by word of mouth. With my UX/UI design background and e-commerce focus, I wondered
what products and services interested people the most for a small e-commerce business in today's competitive world. This product design case study walks us through emotional hearts, desires, and needs as we learn and indentify 
how to impact other people's lives in a positive way.  </Typography>

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


<Typography sx={paragraph} md={paragraphMD}>Meet Jake Collins, a hard worker with a love for the outdoors. As representative of our supposed audience, 
he'd much rather spend time outside than shopping in person. Online shopping gives him the option to make fast choices and save time for camping,
fishing, and hiking.</Typography>

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



<Typography sx={paragraph} md={paragraphMD}>I needed to confirm Jake's story as my main audience advocate for an ecommerce platform. 
As part of my research phase, I created a Google Forms survey so that I could reach mulitple people online. I received 
interesting mixed results from those that shop online. My survey questions included demographics, preferred online platforms and devices, and 
online shopping trending products:</Typography>



    <Typography sx={paragraph} md={paragraphMD}>I first wanted to solidify my audience's demographics such as with age and gender. Turns out, Jake 
didn't quite fit the story as my main audience advocate. Sorry Jake!</Typography>
    



<Row>

<Col sm={12} md={6} xl={6}>
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


  <Col sm={12} md={6} xl={6}>
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




    <Typography sx={paragraph} md={paragraphMD}>As the majority of my responders prefer word of mouth, could I persuade them to join the online community for 
    freelancing if I focused on their frustrations and provided good solutions to them? Why do 33.3% of people use Upwork? How does it work for freelance? 
    Does it have any popular competitors?</Typography>


    <Typography sx={paragraph}>
    I definitely understand why some adults would rather avoid time at the store. Perhaps it's 
    because when we were kids, shopping was the last thing we wanted to do with our 
    parents. I gathered survey insights as to why my audience would rather shop online than take
    the time to run errands in person. Here are just a few anonymous quotes behind their logical 
    reasoning to avoid potential boredom or confusion:
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


    <Typography sx={paragraph}>
    Another significant question asked in the surveys was very insightful and confirmed 
    our first question. As a recap, we wondered what products and services interested people 
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

    <Typography sx={paragraph}>
    No wonder why a small custom t-shirt company caught on most out of all my small 
    business ideas!
  </Typography>

    <Typography sx={paragraph}>
    If you would like to see the full survey, here is a direct link to it:
  </Typography>
   

  <Link href="https://forms.gle/z5V81icnB61nhatd9" target="_blank" style={{textDecoration: "none"}}>
   <Typography sx={paragraphLink} >
    Google Forms Survey
    </Typography>
  </Link>






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


<Typography sx={paragraph} md={paragraphMD}> Can we relate to our audience? How can we synthesize all of our results? One great UX method is 
    affinity diagramming! I added all of the survey results to one whiteboard using sticky notes and 
    categorized them into specific groups. For this project I am using FigJam as an online whiteboard.
  </Typography>



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



<Typography sx={paragraph} md={paragraphMD}>But who wants to look at and read all of our affinity diagram sticky notes? Empathy maps and our 
    final user persona will really visually display audience goals, needs, frustrations, etc. </Typography>
    


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

<Typography sx={paragraph} md={paragraphMD}>Exhausted adults with too much to do need a convinient
online shopping platform because they do not have time for basic needs, multiple shopping 
stops, and traffic after a long work day.</Typography>
    

</Container>
  
</Box> 




<Box sx={boxStylesB}>

<Container>

<Typography sx={sectiontitle}>Problem Statement</Typography>

<Typography sx={paragraph} md={paragraphMD}>We believe Apparel Design will help online shoppers discover 
competitive products, affordable prices, and trustworthy reviews so that they will 
avoid multiple in-person shopping stops and get the sleep they need after a long exhausting day.</Typography>

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
step is the "I Like, I Wish, What If" method as I dig deeper into what feature ideas are most successful and viable for a competitive e-commerce clothing store.</Typography>
  
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
needs. A Feature Prioritization Matrix lets me organize these requests based upon impact and effort: </Typography>
<Typography sx={paragraph} md={paragraphMD}>Some High Impact and High Effort Feature Needs Include:</Typography>
<Typography sx={paragraph} md={paragraphMD}>1. 90.9% of online shoppers shop for clothes online</Typography>
<Typography sx={paragraph} md={paragraphMD}>2. Provide better payment security options like Apple Pay and Paypal for ease, safety, and security.</Typography>
<Typography sx={paragraph} md={paragraphMD}>3. Multiple Search Filters.</Typography>
<Typography sx={paragraph} md={paragraphMD}>4. Fewer pop up ads.</Typography>

</Col>


    </Row>

    </Container>
  
</Box> 




{/*Value Proposition Canvas*/}




<Box sx={boxStylesA}>
  <Container>
<Typography sx={sectiontitle}>Value Proposition Statement</Typography>

<Typography sx={paragraph} md={paragraphMD}>Apparel Design is an online clothing shopping experience that helps 
customers explore more product with clarity, avoid annoying website content, and enjoy entrusted payment options so that 
they can relax from hectic in person crowds. We're better than our competitors because we remove common e-commerce pain points 
discovered in other companies for all parties involved. We're believable because we seek to understand and problem solve 
with our audience so that they want to return to our site with more positive and reliable shopping experiences.</Typography>


   </Container>

    </Box>




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

export default ApparelDesigns;