import React from 'react';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import WhatWeDo from '../components/WhatWeDo';
import EmergencySection from '../components/EmergencySection';
import NewsSection from '../components/NewsSection';
import DonationSection from '../components/DonationSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Statistics />
      <WhatWeDo />
      <EmergencySection />
      <NewsSection />
      <DonationSection />
    </>
  );
};

export default HomePage;