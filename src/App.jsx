// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from  './components/Home/Home'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      
    </Router>
    
  );
}

export default App;
