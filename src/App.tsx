import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { Layout } from './layouts/Layout';
import { Home } from './pages/Home';
import { Problem } from './pages/Problem';
import { Philosophy } from './pages/Philosophy';
import { Solutions } from './pages/Solutions';
import { Impact } from './pages/Impact';
import { Roadmap } from './pages/Roadmap';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;