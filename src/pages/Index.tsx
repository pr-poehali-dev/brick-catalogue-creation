import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HomePage from '@/components/HomePage';
import CatalogPage from '@/components/CatalogPage';
import PricesPage from '@/components/PricesPage';
import ContactsPage from '@/components/ContactsPage';

const Index = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'catalog' | 'prices' | 'contacts'>('home');

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      {activeSection === 'home' && <HomePage onSectionChange={setActiveSection} />}
      {activeSection === 'catalog' && <CatalogPage />}
      {activeSection === 'prices' && <PricesPage onSectionChange={setActiveSection} />}
      {activeSection === 'contacts' && <ContactsPage />}

      <Footer onSectionChange={setActiveSection} />
    </div>
  );
};

export default Index;
