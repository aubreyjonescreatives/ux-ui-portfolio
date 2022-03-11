import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {PortfolioContextProvider} from './contexts/PortfolioContext';
import {Box, LinearProgress} from '@mui/material'; 
import NetlifyIdentityContext from 'react-netlify-identity-gotrue';
import NavBar from './Components/NavBar';
import LandingPage from './Pages/Landing';
import DisneyVSNetflix from './Pages/DisneyVSNetflix';
import CatwalkCo from './Pages/CatwalkCo'    
//import Footer from './Components/Footer/Footer'; 
import './App.css';
//const LatestMeals = React.lazy(() => import('./Components/LatestMeals/LatestMeals'));
//const MealDetails = React.lazy(() => import('./Components/MealDetails/MealDetails'));


const style = {
 width: '100%'
}


const App = () => {
  return (
   <>
   <Router>
     <NetlifyIdentityContext url='https://aubrey-jones-ux-ui-portfolio.netlify.app/'>
    <PortfolioContextProvider>
     <NavBar />
  <Suspense fallback={<Box sx={style}>
  <LinearProgress />
    </Box>}>
  <Switch>
  <Route path="/" exact component={LandingPage} />
  <Route path="/DisneyVSNetflix" exact component={DisneyVSNetflix} />
  <Route path="/CatwalkCo" exact component={CatwalkCo} />
  
  </Switch>
  </Suspense>
   </PortfolioContextProvider>
   </NetlifyIdentityContext>
   </Router>
   </>
  );
}

export default App;