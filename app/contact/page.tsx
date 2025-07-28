
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from './ContactHero';
import ContactInfo from './ContactInfo';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContactHero />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ContactInfo />
      </div>
      <Footer />
    </div>
  );
}
