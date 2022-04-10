import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'; 
import NavBar from './Components/NavBar';
import Landing from './Pages/Landing';
import DisneyVSNetflix from './Pages/DisneyVSNetflix';
import CatwalkCo from './Pages/CatwalkCo';     
//import Footer from './Components/Footer/Footer'; 
import './App.css';



const App = () => {
  return (
   <>
   <Router>
     <NavBar />

  <Route path="/" exact component={Landing} />
  <Route path="/disneyvsnetflix" exact component={DisneyVSNetflix} />
  <Route path="/catwalkco" exact component={CatwalkCo} />
   </Router>
   </>
  );
}

export default App;