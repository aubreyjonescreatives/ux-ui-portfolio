import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'; 
import NavBar from './Components/NavBar'; 
import Landing from './Pages/Landing';
import About from './Pages/About';
import Resume from './Pages/Resume'; 
import DisneyVSNetflix from './Pages/DisneyVSNetflix';
import CatwalkCo from './Pages/CatwalkCo'; 
import FLCINC from './Pages/FLCINC'; 
import CT from './Pages/CT'; 
import ApparelDesigns from './Pages/ApparelDesigns.js'; 
import LogoDesigns from './Pages/LogoDesigns.js';
import Footer from './Components/Footer'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const Layout = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout />,

    children: [
      {
        path: '/',
        element: <Landing/>
      }, 
      {
        path: '/about',
        element: <About/>
      }, 
      {
        path: '/resume',
        element: <Resume/>
      }, 
    ]
  }
])


const App = () => {
  return (
   <>
  <RouterProvider router={router}></RouterProvider>


   {/* <Router>
  <Route path="/" exact component={Landing} />
  <Route path="/disneyvsnetflix" component={DisneyVSNetflix} />
  <Route path="/catwalkco" component={CatwalkCo} />
  <Route path="/flcinc" component={FLCINC} />
  <Route path="/codafitechnology" component={CT} />
  <Route path="/appareldesignscasestudy" component={ApparelDesigns} />
  <Route path="/logodesigns" component={LogoDesigns} />
  <Footer />
   </Router> */}
   </>
  );
}

export default App;