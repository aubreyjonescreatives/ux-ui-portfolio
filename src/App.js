import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'; 
import NavBar from './Components/NavBar';
import Landing from './Pages/Landing';
import DisneyVSNetflix from './Pages/DisneyVSNetflix';
import CatwalkCo from './Pages/CatwalkCo'; 
import UIDesigns from './Pages/UIDesigns';    
import Footer from './Components/Footer'; 
import './App.css';



const App = () => {
  return (
   <>
   <Router>
     <NavBar />

  <Route path="/" exact component={Landing} />
  <Route path="/disneyvsnetflix" component={DisneyVSNetflix} />
  <Route path="/catwalkco" component={CatwalkCo} />
  <Route path="/uidesigns" component={UIDesigns} />
  <Footer />
   </Router>
   </>
  );
}

export default App;