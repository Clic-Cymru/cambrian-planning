import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-col brand-col">
            <img 
              src="/assets/images/2020/07/Cambrian_Planning_Vector_AI_transparent.png" 
              alt="Cambrian Planning Logo" 
              style={{ maxWidth: '220px', marginBottom: '15px', filter: 'brightness(0) invert(1)' }} 
            />
            <p className="footer-description">
              Clearing the path to your build. Professional planning and development consultation across North Wales.
            </p>
          </div>

          <div className="footer-col links-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/#home">Home</a></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#about">About</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col legal-col">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li><a href="/?page=privacy-policy">Privacy Policy</a></li>
              {/* Terms of Service removed per request */}
            </ul>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Cambrian Planning and Development Ltd. All rights reserved.</p>
          <p style={{ marginTop: '8px', fontSize: '14px', opacity: 0.8 }}>
            Website by <a href="https://clic.cymru" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Clic Cymru</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
