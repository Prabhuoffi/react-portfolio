import React from 'react';
import './index.css';
import Home from './routes/Home';
import Project from './routes/Project';
import About from './routes/About';
import Contact from './routes/Contact';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
