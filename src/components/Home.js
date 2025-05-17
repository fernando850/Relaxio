//./components/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import CallToAction from '../components/CallToAction';
import SupportSection from '../components/SupportSection';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <div className="two-tone-bg">
        <Navbar />
        <Hero />
      </div>
      <Features />
      <HowItWorks />
      <CallToAction />
      <SupportSection />
      <Footer />
    </>
  );
};

export default Home;
