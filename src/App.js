import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Box, LinearProgress} from '@mui/material'; 
import NetlifyIdentityContext from 'react-netlify-identity-gotrue';
import NavBar from './Components/NavBar';
import LandingPage from './Pages/Landing';
import DisneyVSNetflix from './Pages/DisneyVSNetflix';
import CatwalkCo from './Pages/CatwalkCo';     
//import Footer from './Components/Footer/Footer'; 
import './App.css';

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
  <Route path="/disneyvsnetflix" exact component={DisneyVSNetflix} />
  <Route path="/catwalkco" exact component={CatwalkCo} />
  
  </Switch>
  </Suspense>
   </NetlifyIdentityContext>
   </Router>
   </>
  );
}

export default App;