import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  React.useEffect(() => {
    const checkPage = () => {
      const params = new URLSearchParams(window.location.search);
      const page = params.get('page');
      if (page === 'privacy-policy') {
        setCurrentPage('privacy-policy');
      } else {
        setCurrentPage('home');
      }
    };
    
    checkPage();
    window.addEventListener('popstate', checkPage);
    return () => window.removeEventListener('popstate', checkPage);
  }, []);

  if (currentPage === 'privacy-policy') {
    return (
      <div className="app">
        <Header />
        <PrivacyPolicy />
        <Footer />
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
