import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import Accordion from '../components/ui/Accordion';

const FloodRiskAssessments: React.FC = () => {
  const floodFaqs = [
    {
      title: "Can I build in a C2 Flood Zone?",
      content: "Zone C2 indicates an area of the floodplain without significant flood defence infrastructure. Under current TAN 15 policy, highly vulnerable development (like new houses) is generally not permitted in Zone C2. However, less vulnerable commercial developments or changes of use may be acceptable with a rigorous FCA. We provide honest feasibility advice before you spend money on engineering reports."
    },
    {
      title: "What is a Flood Consequences Assessment (FCA)?",
      content: "An FCA is a technical report prepared by a specialist engineer that assesses the risk of flooding to a proposed development and how the development might impact flooding elsewhere. It must demonstrate that the consequences of flooding can be managed to an acceptable level."
    },
    {
      title: "Do I need an FCA for a small extension?",
      content: "If your property is in a designated flood zone, even minor development such as a domestic extension may require a proportionate FCA to ensure it does not displace floodwater or put occupants at risk."
    }
  ];

  return (
    <>
      <SEO 
        title="Flood Risk Assessments Wales | TAN 15 Experts | Cambrian Planning"
        description="Expert guidance on Flood Consequences Assessments in Wales. We navigate TAN 15 regulations for developments in flood zones across North Wales."
        keywords="Flood risk assessment Wales, TAN 15 planning, Flood Consequences Assessment Wales, development in flood zone Wales"
      />
      <PageHeader 
        title="Navigating Flood Risk and TAN 15 in Wales" 
        subtitle="We manage the complex process of securing planning permission in designated flood zones across North Wales."
      />
      
      <SplitSection 
        title="Immediate Refusal in High-Risk Zones"
        subtitle="Coordinated Flood Consequences Assessments (FCA)"
        content={
          <>
            <p style={{ marginBottom: '15px' }}>The Welsh Government takes a highly precautionary approach to flood risk. If you propose highly vulnerable development (like residential housing) in a high-risk flood zone without robust justification, Natural Resources Wales (NRW) will object, and the Local Planning Authority will refuse the application.</p>
            <p>Without a detailed, technical assessment, your project cannot proceed. We navigate the complexities of TAN 15 on your behalf. While we are not hydrologists, we project manage the entire process. We work closely with specialist flood risk engineers to produce comprehensive Flood Consequences Assessments (FCAs). We then use these technical findings to build a compelling planning argument, demonstrating that the risks can be managed.</p>
          </>
        }
        imageSrc="/assets/images/conwy_flood_map.png"
        imageAlt="Conwy Valley flood risk assessment map showing simulated and observed flood zones"
      />

      <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Flood Risk FAQs</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>Understanding TAN 15 policy in Wales.</p>
          </div>
          <Accordion items={floodFaqs} />
        </div>
      </section>

      <Contact />
    </>
  );
};

export default FloodRiskAssessments;
