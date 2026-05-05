import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';

const AppealPedwWales: React.FC = () => {
  return (
    <>
      <SEO 
        title="How to Appeal to PEDW | Planning Appeals Wales | Cambrian Planning"
        description="Refused planning permission in Wales? Learn how to appeal to Planning and Environment Decisions Wales (PEDW) with our expert guide."
        keywords="Appeal PEDW Wales, Planning Inspectorate Wales, planning appeal process Wales, refused planning permission Wales"
      />
      <PageHeader 
        title="How to Appeal to PEDW in Wales" 
        subtitle="A guide to challenging council refusals and enforcement notices through Planning and Environment Decisions Wales."
      />
      
      <section className="page-content" style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 15px' }}>
          
          <h2 style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>The Problem: A Planning Refusal</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
            Receiving a refusal notice from your Local Planning Authority can be frustrating and costly. However, a council's decision is not final. In Wales, you have the right to appeal to Planning and Environment Decisions Wales (PEDW)—the Welsh equivalent of the Planning Inspectorate. PEDW provides an independent review of your application, and Inspectors frequently overturn local council decisions if they find the council misapplied national or local policies.
          </p>

          <h2 style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>The Appeal Process</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '40px' }}>
            Appealing to PEDW is a rigorous legal and technical process. It is not an opportunity to redesign your scheme or submit new, fundamental evidence; it is a process of arguing that the council's decision on the *existing* scheme was wrong.
          </p>

          <div style={{ backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px', marginBottom: '40px' }}>
            <h3 style={{ color: 'var(--color-primary)', marginBottom: '15px' }}>1. Strict Deadlines</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
              You must act quickly. For householder appeals, you typically have 12 weeks from the date of the decision notice. For most other planning appeals, you have 6 months. For enforcement notice appeals, you must appeal *before* the notice takes effect (usually 28 days). Missing these deadlines means losing your right to appeal.
            </p>

            <h3 style={{ color: 'var(--color-primary)', marginBottom: '15px' }}>2. Types of Appeal</h3>
            <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', paddingLeft: '20px' }}>
              <li><strong>Written Representations:</strong> The most common and cost-effective method, where the Inspector makes a decision based on written statements from you and the council.</li>
              <li><strong>Hearings:</strong> An informal round-table discussion led by the Inspector, suitable for slightly more complex cases.</li>
              <li><strong>Public Inquiries:</strong> A formal, court-like process involving cross-examination, usually reserved for major, highly contentious developments.</li>
            </ul>

            <h3 style={{ color: 'var(--color-primary)', marginBottom: '15px' }}>3. The Statement of Case</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              The core of your appeal is the Statement of Case. This document must forensically dismantle the council's reasons for refusal, citing specific clauses in Planning Policy Wales (PPW), Technical Advice Notes (TANs), and the Local Development Plan (LDP) to prove why the development should be permitted.
            </p>
          </div>

          <h2 style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>Why You Need Representation</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
            PEDW Inspectors are highly experienced planning professionals. Arguing an appeal requires an equal level of technical expertise. At Cambrian Planning, we have a strong track record of winning appeals at PEDW by constructing robust, policy-led arguments that expose the flaws in local council decisions.
          </p>
          
        </div>
      </section>

      <Contact />
    </>
  );
};

export default AppealPedwWales;
