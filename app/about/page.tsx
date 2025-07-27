
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from './AboutHero';
import SkillsSection from './SkillsSection';
import PersonalitySection from './PersonalitySection';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <SkillsSection />
      <PersonalitySection />
      <Footer />
    </div>
  );
}
