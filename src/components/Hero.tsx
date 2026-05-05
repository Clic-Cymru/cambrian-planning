import React from 'react';
import { Map, ShieldCheck, PhoneCall } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      {/* Top Banner Image Area */}
      <div className="hero-banner bg-parallax">
        <div className="hero-bg-image"></div>
        <div className="hero-logo-center bg-content">
          <img 
            src="/assets/images/Cambrian_Planning_Vector_AI_transparent.png" 
            alt="Cambrian Planning" 
            className="main-banner-logo"
          />
        </div>
      </div>

      {/* Content Area Directly Below */}
      <div className="hero-content-wrapper bg-light-grey">
        <div className="container text-center">
          <h1 className="welcome-title" style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1rem' }}>Expert Planning Consultants in North Wales</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 3rem', color: '#666' }}>Navigating the complexities of the Welsh planning system with local expertise and proven success. From rural enterprise dwellings to complex heritage consents, we secure the permissions you need.</p>
          
          <div className="hero-cards">
            <div className="hero-card">
              <div className="hero-card-icon">
                <Map size={48} color="var(--color-primary)" />
              </div>
              <h3>Planning in Wales Requires Specialist Knowledge</h3>
              <p>The Welsh planning system is distinct and heavily regulated. Policies such as Planning Policy Wales (PPW) and local development plans dictate strict rules on green infrastructure, holiday accommodation, and rural development.</p>
              <p>Applying a generic approach or relying on English planning precedents often leads to costly refusals and delays. You need consultants who understand the intricacies of Local Planning Authorities in Wales.</p>
            </div>
            
            <div className="hero-card">
              <div className="hero-card-icon">
                <ShieldCheck size={48} color="var(--color-primary)" />
              </div>
              <h3>Your Local Authority on Town Planning</h3>
              <p>At Cambrian Planning, we exclusively navigate the Welsh planning landscape. We understand exactly what local authorities and PEDW (Planning and Environment Decisions Wales) require.</p>
              <p>Whether you are a landowner seeking to lift an agricultural tie or a developer managing a complex greenfield site, we provide pragmatic, authoritative advice that delivers results.</p>
            </div>
          </div>
          
          <div className="hero-cta-banner mt-5">
            <div className="cta-icon">
              <PhoneCall size={32} color="white" />
            </div>
            <div className="cta-content">
              <h3>Ready to discuss your project?</h3>
              <p>Call us for a completely no-obligation chat or send us a message below.</p>
            </div>
            <a href="tel:07502089743" className="btn-primary cta-btn">07502 089 743</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
