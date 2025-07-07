
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AgendarSection from '../components/AgendarSection';
import DiaristaSection from '../components/DiaristaSection';
import SobreSection from '../components/SobreSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AgendarSection />
      <DiaristaSection />
      <SobreSection />
      <Footer />
    </div>
  );
};

export default Index;
