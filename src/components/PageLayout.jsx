import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppWidget from './WhatsAppWidget';

import { useLocation } from 'react-router-dom';

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <WhatsAppWidget />
      <Footer />
    </div>

  );
};

export default PageLayout;
