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
import DesignSystems from './Pages/DesignSystems.js';
import Footer from './Components/Footer'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css';


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
      {
        path: '/flcinc',
        element: <FLCINC/>
      }, 
      {
        path: '/codafitechnology',
        element: <CT/>
      }, 
      {
        path: '/appareldesignscasestudy',
        element: <ApparelDesigns/>
      }, 
      {
        path: '/disneyvsnetflix',
        element: <DisneyVSNetflix/>
      }, 
      {
        path: '/catwalkco',
        element: <CatwalkCo/>
      }, 
      {
        path: '/designsystems',
        element: <DesignSystems/>
      },
    ]
  }
])


const App = () => {
  return (
   <>
  <RouterProvider router={router}></RouterProvider>


   </>
  );
}

export default App;