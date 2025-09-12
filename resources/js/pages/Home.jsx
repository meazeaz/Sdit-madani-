import React from 'react';
import Hero from '../components/Hero';  // Import komponen Hero
import Features from '../components/Features';
import MethodSection from '../components/MethodSection';
import Projects from '../components/Projects';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div>
      <Hero />  {/* Gunakan komponen Hero di sini */}
      <Features />
      <MethodSection />
      <Projects />
      <Team />
      <Testimonials />
    </div>
  );
}
