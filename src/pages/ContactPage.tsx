import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contact Cambrian Planning | Town Planning Consultants"
        description="Get in touch with Cambrian Planning for expert town planning advice in North Wales. Book your initial project assessment today."
      />
      <PageHeader 
        title="Contact Cambrian Planning" 
        subtitle="Ready to discuss your project? Contact our expert team for clear, authoritative planning advice."
      />
      
      <section className="page-content" style={{ padding: '60px 0', backgroundColor: '#f9f9f9' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          
          <h2 style={{ color: 'var(--color-primary)', marginBottom: '30px' }}>Start Your Project Today</h2>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <div style={{ backgroundColor: '#fff', padding: '24px 20px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', minWidth: '260px', flex: '1 1 260px', maxWidth: '320px', boxSizing: 'border-box' }}>
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '10px' }}>Office</h4>
              <p style={{ fontSize: '1.15rem', fontWeight: 'bold' }}>
                <a href="tel:01407840522" style={{ color: 'inherit', textDecoration: 'none' }}>01407 840 522</a>
              </p>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '24px 20px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', minWidth: '260px', flex: '1 1 260px', maxWidth: '320px', boxSizing: 'border-box' }}>
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '10px' }}>Mobile</h4>
              <p style={{ fontSize: '1.15rem', fontWeight: 'bold' }}>
                <a href="tel:07502089743" style={{ color: 'inherit', textDecoration: 'none' }}>07502 089 743</a>
              </p>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '24px 20px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', minWidth: '260px', flex: '1 1 260px', maxWidth: '320px', boxSizing: 'border-box' }}>
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '10px' }}>Email Us</h4>
              <p style={{ fontSize: '0.98rem', fontWeight: 'bold', wordBreak: 'break-word' }}>
                <a href="mailto:mark@cambrianplanning.co.uk" style={{ color: 'inherit', textDecoration: 'none' }}>mark@cambrianplanning.co.uk</a>
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* The actual contact form component */}
      <Contact />
    </>
  );
};

export default ContactPage;
