import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';

const GreenInfrastructureStatementGuide: React.FC = () => {
  return (
    <>
      <SEO 
        title="Do I Need a Green Infrastructure Statement? (PPW 12 Wales)"
        description="Learn when a Green Infrastructure Statement is required for planning applications in Wales under PPW 12, and how to navigate the step-wise approach."
        keywords="Green Infrastructure Statement Wales, PPW 12, step-wise approach Wales, planning permission ecology Wales"
      />
      <PageHeader 
        title="Do I Need a Green Infrastructure Statement in Wales?" 
        subtitle="A guide to complying with the mandatory ecological requirements of PPW 12."
      />
      
      <section className="page-content" style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 15px' }}>
          
          <h2 style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>The Short Answer: Yes</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
            If you are submitting a planning application in Wales, you almost certainly need a Green Infrastructure (GI) Statement. Following the publication of Planning Policy Wales Edition 12 (PPW 12), demonstrating how your development protects, maintains, and enhances green infrastructure is now a mandatory requirement for all scales of development, from householder extensions to major commercial sites.
          </p>

          <h2 style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>What is the 'Step-Wise' Approach?</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '40px' }}>
            PPW 12 dictates that developers must not simply add a few bird boxes as an afterthought. You must follow a strict, evidenced hierarchy known as the step-wise approach:
          </p>

          <div style={{ backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px', marginBottom: '40px' }}>
            <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '20px' }}>
              <li><strong>1. Avoid:</strong> First and foremost, you must demonstrate how the design avoids harming existing green infrastructure (e.g., keeping mature trees, avoiding priority habitats).</li>
              <li><strong>2. Minimize:</strong> If harm cannot be entirely avoided, you must prove how the design minimizes that harm.</li>
              <li><strong>3. Mitigate:</strong> Any remaining harm must be mitigated on-site through design features (e.g., wildlife corridors, specific planting schemes).</li>
              <li><strong>4. Compensate:</strong> Only as an absolute last resort, if mitigation is impossible on-site, can you propose off-site compensation. Councils are highly reluctant to accept this.</li>
            </ul>

            <h3 style={{ color: 'var(--color-primary)', marginBottom: '15px' }}>Proportionality is Key</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              The level of detail in a GI Statement must be proportionate to the scale of the development. A minor householder extension might require a brief statement detailing the addition of bat boxes and permeable paving. A major housing development requires a comprehensive, multi-disciplinary strategy involving ecologists, landscape architects, and drainage engineers.
            </p>
          </div>

          <h2 style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>Why You Shouldn't Write it Yourself</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
            Failing to submit a GI Statement, or submitting one that does not adequately follow the step-wise approach, is now one of the leading causes for planning applications being invalidated or refused in Wales. At Cambrian Planning, we integrate GI strategies into the core of your design from the outset, ensuring your application is robust and policy-compliant.
          </p>
          
        </div>
      </section>

      <Contact />
    </>
  );
};

export default GreenInfrastructureStatementGuide;
