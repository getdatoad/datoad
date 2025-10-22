import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OnePager from './pages/OnePager';
import Calculator from './pages/Calculator';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onepager" element={<OnePager />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>
  );
}
