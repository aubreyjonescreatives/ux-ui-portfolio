import * as React from 'react'; 
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-grid-system';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//import BrandDashboardHomepage from '../Images/codafi/BrandDashboardHomepageHi-FiCompositionsSlide1.png';
//import FinalMockup from '../Images/codafi/finalmockup.png';
import FeatureRequestExample from '../Images/codafi/featurerequestexample.png';
import TopBannerUpdates from '../Images/codafi/topbanner-old.png';
import TopBannerOne from '../Images/codafi/topbannerone.png';
import TopBannerTwo from '../Images/codafi/topbannertwo.png';
import TopBannerThree from '../Images/codafi/topbannerthree.png';
import LandingPlatformLowFi from '../Images/codafi/landingplatform1.png';
import LandingPlatformHiFi from '../Images/codafi/hifilandingplatform.png';
import TopNavigationBar from '../Images/codafi/navigation.png';
//import CleanPreCheck from '../Images/codafi/cleanprecheck.png'; 




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




const headerStylesA = {
  margin: '25px 0px', 
  color: '#02075D',
  fontSize: '36px', 
  fontFamily: 'Raleway, sans-serif', 
//  fontWeight: '400', 
  
  
  
  }
   
    const caseStudyInfo = {
      fontFamily: 'Raleway, sans-serif',
      margin: '150px 0px'
    }  

    const flcInfo = {
      fontFamily: 'Raleway, sans-serif',
      margin: '10px 0px'
    }

    const roleInfo = {
      margin: '10px 0px'
    }



const paragraphA = {
  fontFamily: 'Raleway, sans-serif',
  margin: '25px 0px'

}

  

  const boxStylesB = {
    backgroundColor: '#F8F9FA', 
    paddingTop: '5px',
    paddingBottom: '50px',
    width: '100%'
  
  }


const headerStylesB = {
  justifyContent: 'start',
  margin: '50px 0px', 
  color: '#02075D',
  fontSize: '36px', 
  fontFamily: 'Raleway, sans-serif', 
//  fontWeight: '400', 
  
  
  
  }


const sectiontitleB = {
  fontFamily: 'Raleway, sans-serif',
  fontSize: '28px', 
  color: '#02075D',
  margin: '50px 0px'
  }




const paragraphB = {
  fontFamily: 'Raleway, sans-serif',
  margin: '20px 0px'
}





const imageStylesB = { 
  //width: '70%',
  display: 'block', 
  marginBottom: '50px'
  //margin: '75px auto 75px auto'
  
  
  }


  const imageStylesBanner = {
    display: 'block',
    margin: '50px'
  }

  const imageStylesBandA = {
  height: '450px',
  width: '80%',
  maxHeight: '450px',
  display: 'block', 
  margin: '0px auto',
  marginBottom: '50px', 
  justifyContent: 'center'
  }


const imageStylesNavigation = {
maxHeight: '350px', 
width: '70%',
maxWidth: '70%',
margin: '20px auto'
}


  
  
  





const CT = () => {
  return (
    <>


<Box sx={Everything}>

<Box sx={boxStylesA}>

<Container>
<Typography sx={headerStylesA} id="top">Codafi Technology</Typography>


<Typography sx={headerStylesA} id="top">UX/UI Case Study</Typography>

</Container>
     
<Container sx={caseStudyInfo}>

<Row sx={roleInfo}>

<Col sx={12} sm={6} md={4} xl={3}>
<Typography sx={flcInfo}>
  My Role
</Typography >
<Typography sx={flcInfo}>
  UX/UI Designer
</Typography>


</Col>

<Col sx={12} sm={6} md={4} xl={3}>
<Typography sx={flcInfo}>
  Stakeholder
</Typography>
<Typography sx={flcInfo}>
  Landing International
</Typography>



</Col>

<Col sx={12} sm={6} md={4} xl={3}>
<Typography sx={flcInfo}>
  Timeframe:
</Typography>
<Typography sx={flcInfo}>
  September 2020 - December 2020
</Typography>


</Col>

<Col sx={12} sm={6} md={4} xl={3}>
<Typography sx={flcInfo}>
  Teammates:
</Typography>
<Typography sx={flcInfo}>
  Vivian Song
</Typography>


</Col>

</Row>


</Container>

</Box>

{/*challenge*/}


<Box sx={boxStylesB}>
  <Container>
<Typography sx={headerStylesB}>Project Challenge</Typography>
<Typography sx={paragraphA}>Landing International needed UX/UI designers to update their website about beauty products. This update included new
communication and navigation features for multiple points of view, such as with beauty brands and retailers. Each company has multiple beauty product needs 
and can communicate these concerns through Landing International.</Typography>
</Container>
<Container>
<Typography sx={headerStylesB}>Project Constraints</Typography>
<Typography sx={paragraphA}>A few of our project constraints included:</Typography>
<Typography sx={paragraphA}>
  Client Expectations
</Typography>
<Typography sx={paragraphA}>Each new feature contained a list of requirements. We spent time with Landing International stakeholders to clearly identify 
their vision and goals well before we spent time designing their wireframes.</Typography>
<Typography sx={paragraphA}>
  Work Availability
</Typography>
<Typography sx={paragraphA}>Due to the nature of Codafi as a startup company, the work load carried a lot of inconsistency. Sometimes we could work more than 
our expected hours and sometimes we had to meet the part time expectation. Our client was so busy that they could not always also communicate with us about new 
feature requests. This created a lot of work load inconsistency between features. We did our best to provide direct communication and patience to resolve these 
concerns.</Typography>
<Typography sx={paragraphA}>
  Collaboration VS. Independent Work
</Typography>
<Typography sx={paragraphA}>Vivian and I were hired into the project around the same time and became the only UX/UI designers for Landing International. We
worked on several features together, which was a lot of fun! We also divided and conquered throughout several of the features as well.  </Typography>


</Container>
</Box> 



<Box sx={boxStylesA}>

<Container>
<Typography sx={headerStylesA}>My Design Thinking Process</Typography>

<Row>
<Col>
<Typography sx={paragraphB}>
  1. Discover and Define feature requests envisioned by stakeholders. 
</Typography>
<Typography sx={paragraphB}>
  2. Develop key feature requests.
</Typography>
<Typography sx={paragraphB}>
  3. Deliver final feature designs to stakeholders.
</Typography>
</Col>



</Row>




</Container>


<Container>
<Typography sx={sectiontitleB}>1. Discover and Define feature requests envisioned by stakeholders.</Typography>
<Row>
<Col>
<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Feature Request"
        image={FeatureRequestExample}
       
      />
     
     
    </Card>


</Col>
<Col>
<Typography sx={paragraphB}>I met with Landing International stakeholders to discover what they 
wanted either designed or redesigned. Since they completed the research phase before I signed on to Codafi, 
Landing International provided us with Google Doc lists, Google Slides, sitemaps, and user flows for needed 
feature information.</Typography>
<Typography sx={paragraphB}>The example in the image displays a requested top banner feature update 
for their brand homepage.</Typography>
</Col>


</Row>
</Container>


<Container>
<Typography sx={sectiontitleB}>2. Develop key feature requests.</Typography>

<Typography sx={sectiontitleB}>Brand Homepage Banner Update</Typography>
<Row>

<Col>
<Typography sx={paragraphB}>
  Key Updates and Rationale:
</Typography>
<Typography sx={paragraphB}>
  1. Newer images provided by Landing International for better color contrast. 
</Typography>
<Typography sx={paragraphB}>
 2. Better alignment to improve audience readability.
</Typography >
<Typography sx={paragraphB}>
  3. Added call-to-action to determine better click rates for specific features.
</Typography>
</Col>
<Col>
<Typography sx={paragraphB}>
  1st Banner Iteration
</Typography>
<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Top Banner Updates"
        image={TopBannerUpdates}
       
      />
     
     
    </Card>


</Col>

</Row>
</Container>



<Container sx={imageStylesBanner}>
<Typography sx={paragraphB}>
  Final Banner Iterations
</Typography>
<Row >
<Col>
<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Top Banner Updates"
        image={TopBannerOne}
       
      />
     
     
    </Card>


</Col>
<Col>
<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Top Banner Updates"
        image={TopBannerTwo}
       
      />
     
     
    </Card>


</Col>
<Col>
<Card sx={imageStylesB}>
      <CardMedia
        component="img"
        alt="Top Banner Updates"
        image={TopBannerThree}
       
      />
     
     
    </Card>


</Col>




</Row>




</Container>





<Container>
<Typography sx={sectiontitleB}>Landing Platform 101 Wireframe.</Typography>
<Typography sx={paragraphB}>A Landing Platform 101 helped new beauty brands understand how to navigate through Landing International features.</Typography>
<Typography sx={paragraphB}>I created several low-fidelity wireframe examples and discussed design layout, features, 
and needs with Landing International Stakeholders.</Typography>
<Row>
<Col>
<Typography sx={paragraphB}>1st Iteration</Typography>
<Card sx={imageStylesBandA}>
      <CardMedia
        component="img"
        alt="Landing Platform Low-Fidelity Wireframe"
        image={LandingPlatformLowFi}
       
      />
     
     
    </Card>


</Col>
<Col>
<Typography sx={paragraphB}>Final Iteration</Typography>
<Card sx={imageStylesBandA}>
      <CardMedia
        component="img"
        alt="Landing Platform Hi-Fidelity Wireframe"
        image={LandingPlatformHiFi}
       
      />
     
     
    </Card>


</Col>


</Row>
</Container>


<Container>
<Typography sx={sectiontitleB}>Top Navigation Bar Updates</Typography>
<Typography sx={paragraphB}>As we implemented new and updated Landing International features into their website, 
their information architecture needed updates as well. </Typography>
<Typography sx={paragraphB}>Landing International's website contained several different points of view such as 
for retailers and brands. Their top navigation bar needed better consistency and accessibility so that their 
audience could find new features through faster user flows. I updated the layout to meet those needs.</Typography>

<Row>
<Col>

<Typography sx={paragraphB}>Final Iterations for Retailers and Brands</Typography>
<Card sx={imageStylesNavigation}>
      <CardMedia
        component="img"
        alt="Top Navigation Bar"
        image={TopNavigationBar}
       
      />
     
     
    </Card>

</Col>



</Row>



</Container>






</Box>






<Box sx={boxStylesB}>

<Container>
<Typography sx={headerStylesB}>Project Key Findings</Typography>

<Row>
<Col>
<Typography sx={paragraphB}>
 1. Each wireframe required pixel-to-pixel perfection with UI design principles such as alignment, whitespace, chunking, etc.
</Typography>
<Typography sx={paragraphB}>
 2. Exact wants and needs happened through verbal and written communication. 
</Typography>
<Typography sx={paragraphB}>
 3. I gained more Figma practice throughout this redesign.
</Typography>

</Col>




</Row>

</Container>



</Box>


</Box>



</>
  )
}

export default CT