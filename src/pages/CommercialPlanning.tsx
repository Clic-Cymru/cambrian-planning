import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import Accordion from '../components/ui/Accordion';
import ProcessTimeline from '../components/ui/ProcessTimeline';

const CommercialPlanning: React.FC = () => {
  const commercialTypes = [
    {
      title: "Commercial Change of Use",
      content: "Adapting your existing building to a different use class is a highly effective way to match evolving consumer trends. We guide you through the process, providing full policy justifications, transport statements, and noise assessments."
    },
    {
      title: "Tourism & Leisure Schemes",
      content: "Wales has a thriving visitor economy. We help landowners and business owners secure planning consent for holiday parks, glamping pods, boutique hotels, outdoor attractions, and conversion projects in rural settings."
    },
    {
      title: "Retail & Commercial New Builds",
      content: "Developing new retail facilities, office spaces, or corporate headquarters requires rigid alignment with Welsh planning strategies. We manage major development proposals, coordinating environmental and infrastructure reports."
    },
    {
      title: "Industrial & Warehouse Units",
      content: "Whether you need a trade counter extension, a purpose-built logistics facility, or an industrial estate master plan. We ensure your designs satisfy local employment land allocations and commercial design criteria."
    },
    {
      title: "Mixed-Use Redevelopments",
      content: "Combining commercial operations on lower floors with residential apartments above is highly favoured under sustainability policies. We optimize layouts to meet commercial, residential, and green infrastructure guidelines."
    },
    {
      title: "Commercial Signage & Advertising Consent",
      content: "Securing Express Consent for commercial branding, digital advertisement displays, and prominent illuminated signage. We keep your brand aligned with local planning authority advertising policies."
    }
  ];

  const processSteps = [
    {
      title: "Development Appraisal",
      description: "We review local development allocations, employment land policies, and environmental constraints to assess your project's commercial feasibility."
    },
    {
      title: "Strategic Pre-Application",
      description: "We lead formal discussions with local authorities and statutory bodies (e.g. NRW) to define development parameters and reduce long-term risk."
    },
    {
      title: "Application Compilation",
      description: "We manage and draft the required planning statements, coordinating with architects, transport engineers, and ecologists for a complete package."
    },
    {
      title: "Officer Negotiation",
      description: "We act as your planning agent, vigorously defending your commercial interests and negotiating Section 106 contributions or conditions."
    }
  ];

  return (
    <>
      <SEO
        title="Commercial Planning Wales | Change of Use & Retail | Cambrian Planning"
        description="Strategic planning and development services for businesses, developers, and landowners in North Wales. From change of use to commercial new builds."
        keywords="Commercial planning Wales, change of use planning permission, tourism development planning, retail planning Wales"
      />
      <PageHeader
        title="Strategic Commercial Planning & Development Services"
        subtitle="Unlocking and maximising the commercial potential of your property assets and land across Wales."
      />

      <SplitSection
        title="The Opportunity: Strategic Asset Optimisation"
        subtitle="Unlocking Commercial Property Potential"
        content={
          <>
            <p style={{ marginBottom: '15px' }}>Commercial planning in Wales requires balancing local employment allocations with commercial viability. Every proposal must justify its contribution to the local economy while respecting infrastructure constraints and environmental policies.</p>
            <p>At Cambrian Planning, we speak the language of business and development. We represent retailers, tourism operators, and industrial businesses, delivering robust planning submissions that directly address local authority development plans. Our focus is on mitigating development risk and securing clear, practical permissions that keep your business moving forward.</p>
          </>
        }
        imageSrc="/assets/images/Plans.jpg"
        imageAlt="Commercial architectural drawings laid out on an office desk"
      />

      <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Our Commercial Development Expertise</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>We handle a wide range of commercial developments, change of use, and signage consents.</p>
          </div>
          
          <Accordion items={commercialTypes} />
        </div>
      </section>

      <ProcessTimeline
        title="Our Commercial Planning Process"
        steps={processSteps}
      />

      <Contact />
    </>
  );
};

export default CommercialPlanning;
