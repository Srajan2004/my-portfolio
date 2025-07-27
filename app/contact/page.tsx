
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 gap-12">
        <ContactForm />
        <ContactInfo />
      </div>
      <Footer />
    </div>
  );
}
