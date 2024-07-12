import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import NavRoute from './NavRoute';


const App = () => {
  return (
    <Router>
     <NavRoute />
    </Router>
  );
};

export default App;
