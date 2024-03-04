import React from 'react';
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import './css/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        {/* Добавьте другие маршруты, если необходимо */}
      </Routes>
    </Router>
  );
}

export default App;
