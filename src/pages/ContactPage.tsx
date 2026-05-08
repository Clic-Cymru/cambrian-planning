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
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 15px', textAlign: 'center' }}>
          
          <h2 style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>Start Your Project Today</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '40px' }}>
            Whether you are facing an enforcement notice, planning a new rural enterprise, or need guidance on a heritage property, we are here to help. Provide us with the details of your site and your objectives, and one of our chartered planners will review your case.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '60px', flexWrap: 'wrap' }}>
            <div style={{ backgroundColor: '#fff', padding: '20px 30px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', minWidth: '250px' }}>
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '10px' }}>Call Us</h4>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}><a href="tel:01407840522" style={{ color: 'inherit', textDecoration: 'none' }}>01407 840 522</a></p>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px 30px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', minWidth: '250px' }}>
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '10px' }}>Email Us</h4>
              <p style={{ fontSize: '1.1rem' }}><a href="mailto:mark@cambrianplanning.co.uk" style={{ color: 'inherit', textDecoration: 'none' }}>mark@cambrianplanning.co.uk</a></p>
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
