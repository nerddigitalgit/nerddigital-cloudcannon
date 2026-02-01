import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import ExpertMarquee from './components/ExpertMarquee';
import Testimonials from './components/Testimonials';
import LeadMagnet from './components/LeadMagnet';
import Footer from './components/Footer';
import ProblemStatement from './components/ProblemStatement';
import GrowthCall from './components/GrowthCall';
import About from './components/About';
import LeadMagnetModal from './components/LeadMagnetModal';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');
  const [isLeadMagnetOpen, setIsLeadMagnetOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openLeadMagnet = () => setIsLeadMagnetOpen(true);
  const closeLeadMagnet = () => setIsLeadMagnetOpen(false);

  // Route to GrowthCall page
  if (currentPath === '#/growthcall') {
    return (
      <div className="min-h-screen bg-nerd-light font-sans text-nerd-dark selection:bg-nerd-pink selection:text-white">
        <GrowthCall />
      </div>
    );
  }

  // Route to About page
  if (currentPath === '#/about') {
    return (
      <div className="min-h-screen bg-nerd-light font-sans text-nerd-dark selection:bg-nerd-pink selection:text-white">
        <About />
      </div>
    );
  }

  // Route to Privacy Policy page
  if (currentPath === '#/privacy') {
    return (
      <div className="min-h-screen bg-nerd-light font-sans text-nerd-dark selection:bg-nerd-pink selection:text-white">
        <PrivacyPolicy />
      </div>
    );
  }

  // Route to Terms page
  if (currentPath === '#/terms') {
    return (
      <div className="min-h-screen bg-nerd-light font-sans text-nerd-dark selection:bg-nerd-pink selection:text-white">
        <Terms />
      </div>
    );
  }

  // Home page
  return (
    <div className="min-h-screen bg-nerd-light font-sans text-nerd-dark selection:bg-nerd-pink selection:text-white">
      <Navbar />
      <main>
        <Hero onOpenLeadMagnet={openLeadMagnet} />
        <ExpertMarquee />
        <ProblemStatement />
        <LogoMarquee />
        <Testimonials />
        <LeadMagnet onOpenLeadMagnet={openLeadMagnet} />
      </main>
      <Footer />
      <LeadMagnetModal isOpen={isLeadMagnetOpen} onClose={closeLeadMagnet} />
    </div>
  );
};

export default App;
