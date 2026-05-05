import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';

const RemoveAgriculturalTie: React.FC = () => {
  return (
    <>
      <SEO 
        title="How to Remove an Agricultural Tie in Wales | Planning Guide | Cambrian"
        description="A comprehensive guide on how to successfully remove an Agricultural Occupancy Condition (Agricultural Tie) in Wales. Learn the steps, marketing requirements, and pitfalls."
        keywords="How to remove an agricultural tie in Wales, Agricultural Occupancy Condition removal, lifting an agricultural tie, rural planning Wales"
      />
      <PageHeader 
        title="How to Remove an Agricultural Tie (Occupancy Condition) in Wales" 
        subtitle="Learn the legal and planning pathways to lift restrictive conditions on rural properties."
      />
      
      <section className="page-content" style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 15px' }}>
          
          <h2 style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>The Problem: The Financial Burden of an Agricultural Tie</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
            If you own a property with an AOC, you are severely restricted. These properties are typically valued 20% to 30% below equivalent open-market houses. Furthermore, securing a mortgage on a tied property is incredibly difficult because lenders view the restricted market as a major risk. Finding a buyer who meets the strict occupational criteria can take years. For many families, the property is unsellable, leaving capital trapped.
          </p>

          <h2 style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>Our Resolution: The Two Pathways to Removing the Tie</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
            Removing an agricultural tie is complex, but entirely achievable with the correct legal and planning strategy. At Cambrian Planning, we assess your specific circumstances to pursue one of two proven legal pathways:
          </p>

          <div style={{ backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px', marginBottom: '40px' }}>
            <h3 style={{ color: 'var(--color-primary)', marginBottom: '15px' }}>1. The Certificate of Lawfulness (CLEUD)</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
              If the occupancy condition has been continuously breached for a period of 10 years or more, the condition becomes unenforceable. A breach occurs if the property has been occupied by someone who does <em>not</em> work in agriculture for a continuous 10-year period.
              <br /><br />
              <strong>The Process:</strong> We compile an airtight legal case, gathering evidence such as sworn statutory declarations, council tax records, employment histories, and utility bills. We then submit an application for a Certificate of Lawful Existing Use or Development (CLEUD). If successful, the tie is legally nullified.
            </p>

            <h3 style={{ color: 'var(--color-primary)', marginBottom: '15px' }}>2. The Section 73 Planning Application (The Marketing Exercise)</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              If you cannot prove a continuous 10-year breach, we must apply to the council to remove the condition under Section 73 of the Town and Country Planning Act. To succeed, we must prove there is no longer a long-term demand for agricultural dwellings in the locality.
              <br /><br />
              <strong>The Process:</strong> This requires a rigorous, council-approved marketing campaign, typically lasting between 12 and 18 months. The property must be actively marketed at a price that accurately reflects the tie (the 20-30% discount). We manage this entire process alongside specialist rural estate agents.
            </p>
          </div>

          <h2 style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>Why You Shouldn't Do This Alone</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '40px' }}>
            Attempting to lift a tie without specialist advice is highly risky. If you try for a CLEUD and fail to provide sufficient evidence, you not only waste money but you alert the council to the breach, potentially triggering enforcement action. If you run a marketing campaign that doesn't exactly match the council's strict criteria, they will reject it, meaning you have wasted 12-18 months.
          </p>
          
        </div>
      </section>

      <Contact />
    </>
  );
};

export default RemoveAgriculturalTie;
