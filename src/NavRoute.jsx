import {useLocation} from 'react-router-dom';
import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Edu from './Edu';
const ScrollToSection = () => {
    const location = useLocation();
  
   useEffect(() => {
      const sectionId = location.pathname.substring(1);
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);
    return null;
  };
  
  function NavRoute() {
    return (
        <div>
        <Header/>
        <ScrollToSection />
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="edu">
          <Edu />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    )
  }
  export default NavRoute;