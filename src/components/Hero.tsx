import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      {/* Top Banner Image Area */}
      <div className="hero-banner bg-parallax">
        <div className="hero-bg-image"></div>
        <div className="hero-logo-center bg-content">
          <img 
            src="/assets/images/2020/07/Cambrian_Planning_Vector_AI_transparent.png" 
            alt="Cambrian Planning" 
            className="main-banner-logo"
          />
        </div>
      </div>

      {/* Content Area Directly Below */}
      <div className="hero-content-wrapper bg-light-grey">
        <div className="container text-center">
          <h2 className="welcome-title">Welcome to Cambrian Planning</h2>
          
          <div className="hero-text-columns">
            <div className="hero-text-col">
              <p>In any building project the prospective developer can hit costly and time-consuming snags along the way.</p>
              <p>Many of which are easily solved in a timely and cost-effective manner with the help of experienced planning &amp; development consultants like Cambrian Planning.</p>
            </div>
            
            <div className="hero-text-col">
              <p>Better yet – why wait until your project is stalling and causing you real headaches?</p>
              <p>Engaging Cambrian Planning from the outset offers a cost-effective solution for any scope of building and development project.</p>
            </div>
          </div>
          
          <div className="hero-call-now mt-5">
            <p className="call-now-text">Call us NOW on</p>
            <p className="call-now-phone">
              <a href="tel:07502089743" style={{ color: 'inherit', textDecoration: 'none' }}>07502 089 743</a>
            </p>
            <p className="call-now-subtext">
              for a completely no-obligation chat about your plans or send<br/> us a message using the <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>form below</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
