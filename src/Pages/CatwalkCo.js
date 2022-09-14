import * as React from 'react'; 
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'; 
import ListItemIcon from '@mui/material/ListItemIcon'; 
import ScienceIcon from '@mui/icons-material/Science';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ListIcon from '@mui/icons-material/List';
import PollIcon from '@mui/icons-material/Poll';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ProtoPersonaDave from '../Images/catwalkcompany/images/protopersonadave.png';
import UserPersona from '../Images/catwalkcompany/images/userpersona.png'
import MovingIcon from '@mui/icons-material/Moving';
import JourneyMap from '../Images/catwalkcompany/images/journeymap.png'; 
import CompareIcon from '@mui/icons-material/Compare';
import FreelancingGigs from '../Images/catwalkcompany/images/freelancinggigs.png'; 
import CompetitorAnalysis from '../Images/catwalkcompany/images/competitoranalysis.png'; 
import CatwalkCoImg from '../Images/catwalkcompany/images/fulllogo.png'; 
import InsightsIcon from '@mui/icons-material/Insights';
import AffinityDiagram from '../Images/catwalkcompany/images/AffinityDiagram.jpg';
import FeaturePrioritization from '../Images/catwalkcompany/images/FeaturePrioritizationMatrix.jpg';
import Sitemap from '../Images/catwalkcompany/images/catwalkcositemap.jpg';
import UserFlowLegend from '../Images/catwalkcompany/images/catwalkcouserflowlegend.jpg';
import UserFlow from '../Images/catwalkcompany/images/catwalkcouserflow.jpg';
import ValuePropositionCanvas from '../Images/catwalkcompany/images/CatwalkCoValuePropositionCanvas.png'
import EmpathyMap from '../Images/catwalkcompany/images/empathymap.png'; 
import ILikeIWishWhatIf from '../Images/catwalkcompany/images/ilikeiwishwhatif.png'
import UserQuote from '../Images/catwalkcompany/images/quotes.png'; 



const design = {
height: '600px'

}


const cardStyles = {

  margin: '200px auto 10px auto', 
  marginBottom: '50px', 
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

      
    const linkStyling = {
      fontSize: '18px', 
      color: 'white', 
      textDecoration: 'none',
      "&:hover": {
        color: 'white', 
       
       
      }
    
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
fontFamily: 'Roboto serif', 
fontWeight: '300'
}

const titleA = {
  padding: '20px 70px',
  fontSize: '32px',
  fontFamily: 'Lato', 
fontWeight: '400', 
  }
  


const cardStylesA = {
  margin: '75px auto 75px auto', 
  marginBottom: '50px', 
  display: 'block', 
  width: '50%' 
   
  
}




const imageStyles = {
  margin: '75px auto 75px auto', 
  marginBottom: '50px', 
  display: 'block', 
  width: '75%' 
   
  
}



const imageStylesA = { 
width: '600px',
display: 'block', 
margin: '75px auto 75px auto'


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
fontFamily: 'Roboto serif',
fontWeight: '300'
}


const cardquoteStylesB = {
  margin: '75px auto 75px auto', 
  display: 'block', 
  width: '75%',
  fontFamily: 'Roboto serif',
fontWeight: '500'

}



const cardStylesB = {
  margin: '75px auto 75px auto', 
  display: 'block', 
  width: '50%',
  fontFamily: 'Roboto serif',
fontWeight: '500'

}


const imageStylesB = { 
  width: '600px',
  display: 'block', 
  margin: '75px auto 75px auto'
  
  
  }



const paragraphC = {
padding: '20px 70px 10px 70px',
fontSize: '20px',
fontFamily: 'Roboto serif',
}


const quoteC = {
  padding: '20px 70px 10px 70px',
  fontSize: '24px', 
  textAlign: 'center', 
  color: '#30638E',
  fontFamily: 'Roboto serif',
  fontWeight: '400'
  }















const CatwalkCo = () => {
  


  const [isOpen, setIsOpen] = React.useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }


const drawerItemList = () => (
  <Box sx={{width: 350, backgroundColor: '#30638E'}} role="presentation" className="drawerMenu">
    <List>
    <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <ScienceIcon/>
        </ListItemIcon>
        <Link href="#top" sx={linkStyling}>CATWALK CO UX/UI CASE STUDY</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <ReportProblemIcon/>
        </ListItemIcon>
        <Link href="#challenge" sx={linkStyling}>CHALLENGE</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <PollIcon/>
        </ListItemIcon>
        <Link href="#empathy" sx={linkStyling}>EMPATHY PHASE</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
        <CompareIcon/> 
        </ListItemIcon>
        <Link href="#define" sx={linkStyling}>DEFINE PHASE</Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
        <InsightsIcon/>
        </ListItemIcon>
        <Link href="#ideate" sx={linkStyling}>IDEATE PHASE</Link>
      </ListItem>


      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
        <PersonOutlineIcon/>
        </ListItemIcon>
        <Link href="#prototype" sx={linkStyling}>PROTOTYPE PHASE</Link>
      </ListItem>
  
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <MovingIcon/>
        </ListItemIcon>
        <Link href="#test" sx={linkStyling}>TESTING PHASE</Link>
      </ListItem>
  

      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <ListIcon/>
        </ListItemIcon>
        <Link href="#moretodo" sx={linkStyling}>MORE TO DO</Link>
      </ListItem>


    
    </List>
  </Box>
)










return (
<>


<nav id="navWrapper" >
   
   <Box sx={{ flexGrow: 1}}>
       <AppBar position="fixed" sx={{ backgroundColor:"#30638E", width: "100%", boxShadow: 0  }} >
         <Toolbar >
           <IconButton
             size="large"
             edge="start"
             color="inherit"
             aria-label="menu"
             sx={{ mr: 2 }}
             onClick={toggleDrawer}
           >
             <MenuIcon />
           </IconButton>
           <Typography sx={{ flexGrow: 3, width: '300px'}}>
           <Link href='/' sx={linkStyling}>AUBREY JONES | UX/UI Designer</Link>
           </Typography>
           
         </Toolbar>
         
       </AppBar>
     </Box>
     
       </nav>
       <Drawer anchor="left" open={isOpen} onClose={toggleDrawer} sx={{backgroundColor: '57FAD56'}}>
       {drawerItemList()}
       </Drawer> 




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
<Typography sx={paragraphA}>While the world turned to remote work overnight, I wanted to build a communication bridge between designers, developers and 
clients with an e-commerce platform website so that we can continue to develop our virtual worlds together in a timely fashion.</Typography>
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

<Typography sx={paragraphB}>I first needed to validate the idea of an e-commerce freelancing platform and if interested parties such as David would 
find them useful. I created a survey so that I could reach out to mulitple people online. I received 
an interesting mixed feedback for some of my results:</Typography>



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


</Box>



{/*Storyboard*/}



<Box sx={designB}>
<Typography sx={titleB}>Storyboard</Typography>


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


<Typography sx={paragraphA}>I chose to focus on one user flow from my sitemap: </Typography>
  


<Typography sx={paragraphA}>User Flow Legend:</Typography>
 



<Card sx={imageStylesA}>
      <CardMedia
        component="img"
        alt="User Flow Legend"
        image={UserFlowLegend}
      />
     
     
    </Card>


    <Typography sx={paragraphA}>Financial Tracker User Flow for Freelancers:</Typography>
     

    <Card sx={imageStylesA}>
      <CardMedia
        component="img"
        alt="User Flow"
        image={UserFlow}
      />
     
     
    </Card>






</Box>





{/*sitemap*/}


<Box sx={designA}>
<Typography sx={titleA}>Sitemap</Typography>

<Typography sx={paragraphA}>I could create a sitemap to better understand Catwalk Co's 
information architecture after gathering information from my 
affinity diagram and feature prioritization matrix. I wanted to prioritize freelancer pain points and 
create a unique spin on freelancing altogether from my competitors. It seems like a popular freelancing complaint 
is having to budget for taxes. Catwalk Co can provide this need with its financial tracker. </Typography>


    <Card sx={imageStylesA}>
      <CardMedia
        component="img"
        alt="Sitemap"
        image={Sitemap}
      />
     
     
    </Card>




    <Typography sx={paragraphA}></Typography>
    
    

  
</Box> 





{/*Wireframe Sketches*/}







<Box sx={designA}>

<Typography sx={titleA}>Sketches</Typography>

<Typography sx={paragraphA}>Here are some of my rough sketches for Catwalk Co to get through ideas much faster:</Typography>
    

<Typography sx={paragraphA}>Signup and Login Pages:</Typography>
 



<Typography sx={paragraphA}>Landing Page:</Typography>
  

<Typography sx={paragraphA}>Dashboard:</Typography>
  


<Typography sx={paragraphA}>Financial Tracker:</Typography>
  


   
</Box> 



{/*Low Fidelity Digital Wireframes*/}



<Box sx={designA}>

<Typography sx={titleA}>Low Fidelity Wireframes</Typography>

<Typography sx={paragraphA}>I tested my sketches and found people liked certain features over others. I included those ideas into my low-fidelity designs:</Typography>
    

<Typography sx={paragraphA}>Signup and Login Pages:</Typography>
 



<Typography sx={paragraphA}>Landing Page:</Typography>
  


<Typography sx={paragraphA}>Dashboard:</Typography>




<Typography sx={paragraphA}>Financial Tracker:</Typography>
  


   
</Box> 



{/*Low Fidelity Digital Prototype*/}






<Box sx={designA}>

<Typography sx={titleA}>Low Fidelity Digital Prototype</Typography>



</Box>






  
</Box> 
















</>




)



}

export default CatwalkCo;