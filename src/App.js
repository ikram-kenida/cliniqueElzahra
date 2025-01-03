import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ServicesPage from './Components/ServicesPage';
import AboutPage from './Components/AboutPage';


function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<HomePage />} />  
        <Route path="/services" element={<ServicesPage />} /> 
        <Route path='/aboutUs' element={<AboutPage />}  />
      </Routes>
    </Router>
  );
}

export default App;
