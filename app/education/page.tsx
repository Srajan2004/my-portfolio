
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EducationHero from './EducationHero';
import EducationDetails from './EducationDetails';
import AcademicJourney from './AcademicJourney';

export default function Education() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <EducationHero />
      <EducationDetails />
      <AcademicJourney />
      <Footer />
    </div>
  );
}
