import React, { useEffect } from 'react';
import {BrowserRouter as Router,useLocation} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';
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

const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <ScrollToSection />
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </Router>
  );
};

export default App;
