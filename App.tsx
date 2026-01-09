import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

// Pages
import Home from './pages/Home';
import Features from './pages/Features';
import Screenshots from './pages/Screenshots';
import Compliance from './pages/Compliance';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Onboarding from './pages/Onboarding';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/screenshots" element={<Screenshots />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/onboarding" element={<Onboarding />} />
          </Routes>
        </main>
        <WhatsAppFloat />
        <Footer />
      </div>
    </Router>
  );
};

export default App;