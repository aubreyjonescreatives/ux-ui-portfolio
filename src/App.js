import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {PortfolioContextProvider} from './contexts/PortfolioContext';
import {Box, LinearProgress} from '@mui/material'; 
import NetlifyIdentityContext from 'react-netlify-identity-gotrue';
import NavBar from './Components/NavBar';
import LandingPage from './Pages/Landing';
import disneyvsnetflix from './Pages/DisneyVSNetflix';
import catwalkco from './Pages/CatwalkCo'    
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
     <NavBar />
  <Suspense fallback={<Box sx={style}>
  <LinearProgress />
    </Box>}>
  <Switch>
  <Route path="/" exact component={LandingPage} />
  <Route path="/disneyvsnetflix" exact component={disneyvsnetflix} />
  <Route path="/catwalkco" exact component={catwalkco} />
  
  </Switch>
  </Suspense>
   </NetlifyIdentityContext>
   </Router>
   </>
  );
}

export default App;