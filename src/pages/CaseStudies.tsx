import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';

const CaseStudies: React.FC = () => {
  return (
    <>
      <SEO 
        title="Planning Case Studies & Successes | Cambrian Planning"
        description="Read our recent planning successes across North Wales. From overturned appeals to complex rural enterprise dwellings and heritage consents."
      />
      <PageHeader 
        title="Our Track Record of Success" 
        subtitle="Real-world examples of how we navigate complex planning challenges to secure approvals for our clients."
      />
      
      <section className="page-content" style={{ padding: '60px 0', backgroundColor: '#f9f9f9' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 15px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '50px', maxWidth: '800px', margin: '0 auto 50px' }}>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>Results Driven by Expertise</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              In town planning, a proven track record is the most significant indicator of competence. Below, you will find a selection of our recent successes. These cases highlight our ability to overcome strict local policies, resolve enforcement issues, and win difficult appeals across Gwynedd, Conwy, Denbighshire, and the wider North Wales region.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {/* Example Case Study 1 */}
            <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '15px' }}>Listed Building Consent in Conwy</h3>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>The Challenge:</h4>
              <p style={{ marginBottom: '15px' }}>Securing permission for modern extensions on a highly sensitive Grade II listed property within a strict conservation area, after previous attempts had been refused.</p>
              
              <h4 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Our Approach:</h4>
              <p style={{ marginBottom: '15px' }}>We conducted a comprehensive Heritage Impact Assessment, demonstrating that the modern additions would not detract from the historical significance of the primary structure, and negotiated directly with the conservation officer.</p>
              
              <h4 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#10b981' }}>The Outcome:</h4>
              <p>Full Listed Building Consent granted within statutory timeframes, allowing the client to proceed with their development.</p>
            </div>

            {/* Example Case Study 2 */}
            <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '15px' }}>Agricultural Tie Removal (Gwynedd)</h3>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>The Challenge:</h4>
              <p style={{ marginBottom: '15px' }}>A family was unable to sell their rural property due to a restrictive Agricultural Occupancy Condition (AOC) placed on the dwelling in the 1980s.</p>
              
              <h4 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Our Approach:</h4>
              <p style={{ marginBottom: '15px' }}>We managed a rigorous, 12-month Section 73 marketing campaign, coordinating with local estate agents to definitively prove there was no longer a demand for an agricultural worker's dwelling in the locality.</p>
              
              <h4 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#10b981' }}>The Outcome:</h4>
              <p>The AOC was successfully discharged, allowing the property to be sold on the open market at its true value.</p>
            </div>
            
            {/* Example Case Study 3 */}
            <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: 'var(--color-primary)', marginBottom: '15px' }}>Holiday Let Article 4 (Eryri)</h3>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>The Challenge:</h4>
              <p style={{ marginBottom: '15px' }}>A client faced enforcement action for operating a holiday let without formal planning permission within a recently designated Article 4 area.</p>
              
              <h4 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Our Approach:</h4>
              <p style={{ marginBottom: '15px' }}>We gathered extensive historical evidence, including booking records and council tax data, to prove continuous use prior to the Article 4 direction taking effect, submitting a robust CLEUD application.</p>
              
              <h4 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#10b981' }}>The Outcome:</h4>
              <p>A Certificate of Lawfulness was issued, granting immunity from enforcement and legalising the holiday let business.</p>
            </div>
          </div>
          
        </div>
      </section>

      <Contact />
    </>
  );
};

export default CaseStudies;
