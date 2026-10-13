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
          <div style={{ maxWidth: '880px', margin: '0 auto 3.5rem', textAlign: 'left', color: '#555' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.75', marginBottom: '1.25rem', color: '#444' }}>
              With over 30 years of private and public sector town planning experience, including 19 years with Anglesey County Council, we provide specialist planning support for new homes—whether a single dwelling or larger residential schemes—holiday accommodation (including conversions, chalets, and caravans), commercial uses, changes of use, certificates of lawfulness, appeals, and enforcement.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
              I have extensive experience in planning appeals, gained since the late 1980s, beginning with my role as a specialist appeals officer in the London Borough of Richmond upon Thames Planning Department. My work encompassed public inquiries, informal hearings, and written representations, and has continued since then, including during my time with Anglesey County Council. I have also successfully identified a way forward following the dismissal of an appeal, enabling planning permission to be secured through a revised proposal.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
              I am a local consultant, not a UK-wide marketing agency, and I am always available to take your call from 9 to 5. Outside these hours, if I cannot answer, I will phone you back in the morning—guaranteed.
            </p>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.7', fontWeight: 600, color: 'var(--color-primary)', textAlign: 'center', marginTop: '1.75rem' }}>
              Phone me for a chat about your proposal or concern at no cost. I look forward to hearing from you.
            </p>
          </div>
          
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
            <a href="tel:01407840522" className="btn-primary cta-btn">01407 840 522</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
