import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Problem from './pages/Problem';
import Solutions from './pages/Solutions';
import Roadmap from './pages/Roadmap';

// Placeholder components for routes not yet fully detailed but required for navigation
const Placeholder = ({ title }) => (
  <div className="pt-20 pb-20 max-w-7xl mx-auto px-4 text-center min-h-[60vh] flex flex-col justify-center items-center">
    <h1 className="text-4xl font-display font-bold mb-4">{title}</h1>
    <p className="text-gray-400">Content under construction for 2026 launch.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="problem" element={<Problem />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="vision" element={<Placeholder title="Vision & Philosophy" />} />
          <Route path="lab" element={<Roadmap />} /> {/* Reusing Roadmap for now as it contains Lab info */}
          <Route path="impact" element={<Placeholder title="Global Impact Dashboard" />} />
          <Route path="about" element={<Placeholder title="About The Organization" />} />
          <Route path="action" element={<Roadmap />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
