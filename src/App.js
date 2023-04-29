import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'; 
import Landing from './Pages/Landing';
import DisneyVSNetflix from './Pages/DisneyVSNetflix';
import CatwalkCo from './Pages/CatwalkCo'; 
import FLCINC from './Pages/FLCINC'; 
import CT from './Pages/CT'; 
import UIProduct from './Pages/UIProduct'; 
import Footer from './Components/Footer'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const App = () => {
  return (
   <>
   <Router>
  <Route path="/" exact component={Landing} />
  <Route path="/disneyvsnetflix" component={DisneyVSNetflix} />
  <Route path="/catwalkco" component={CatwalkCo} />
  <Route path="/flcinc" component={FLCINC} />
  <Route path="/codafitechnology" component={CT} />
  <Route path="/uiproductdesign" component={UIProduct} />
  <Footer />
   </Router>
   </>
  );
}

export default App;