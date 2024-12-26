import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ServicesPage from './Components/ServicesPage';


function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<HomePage />} />  
        <Route path="/services" element={<ServicesPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
