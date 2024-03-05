import React from 'react';
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import './css/App.css'
import './css/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Log from './pages/Log.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/log" element={<Log />} />
      </Routes>
    </Router>
  );
}

export default App;
