import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import Accordion from '../components/ui/Accordion';
import ProcessTimeline from '../components/ui/ProcessTimeline';

const ResidentialPlanning: React.FC = () => {
  const residentialTypes = [
    {
      title: "Householder Extensions & Loft Conversions",
      content: "Maximise your living space with single or double-storey extensions, garage conversions, or bespoke loft rooms. We design proposals that respect local authority design guides regarding overlooking, overshadowing, and scale."
    },
    {
      title: "Replacement Dwellings",
      content: "Replacing an existing, substandard dwelling with a modern, highly energy-efficient bespoke home is highly supported under Welsh planning policies. We manage the design justification and replacement ratios required for approval."
    },
    {
      title: "Annexes & Ancillary Outbuildings",
      content: "Whether you need a garden office, a home gym, or a self-contained annexe for multi-generational living. We establish legal and physical integration to satisfy council guidelines and avoid common refusal pitfalls."
    },
    {
      title: "Barn & Outbuilding Conversions",
      content: "Traditional stone barns and disused outbuildings offer outstanding potential for unique residential homes. We provide the detailed structural justifications and sensitive designs required under Welsh rural development policies."
    },
    {
      title: "Bespoke Self-Build Homes",
      content: "Building your own home is a major investment. We represent self-builders throughout the outline and full planning application processes, ensuring your vision is successfully justified against local development plans."
    },
    {
      title: "Lawful Development Certificates",
      content: "Unsure if your extension or outbuilding needs planning permission? We secure Lawful Development Certificates to officially prove that your domestic project is fully compliant with Permitted Development rights."
    }
  ];

  const processSteps = [
    {
      title: "Initial Feasibility",
      description: "We evaluate your property, local development plan guidelines, constraints (such as Conservation Areas or AONB), and site history to determine your project's viability."
    },
    {
      title: "Bespoke Strategy",
      description: "We formulate the planning strategy, identifying whether to proceed under Permitted Development or to compile a full householder application."
    },
    {
      title: "Compilation & Submission",
      description: "We assemble all supporting statements, including Green Infrastructure Statements or Heritage Impact Assessments where required, and submit a complete, high-quality application."
    },
    {
      title: "Officer Liaison",
      description: "We act as your dedicated agent, managing all communications with the planning officer and statutory consultees to secure a swift, positive decision."
    }
  ];

  return (
    <>
      <SEO
        title="Residential Planning Wales | Homeowner Extensions & New Builds | Cambrian Planning"
        description="Bespoke planning advice and application management for homeowners and self-builders in North Wales. Secure permission for extensions, replacement dwellings, and annexes."
        keywords="Residential planning Wales, home extension planning permission, replacement dwellings North Wales, self build planning permission"
      />
      <PageHeader
        title="Residential Planning Services for Homeowners"
        subtitle="Professional planning support to help you extend, build, or transform your home across North Wales."
      />

      <SplitSection
        title="The Challenge: Building and Extending Your Home"
        subtitle="Navigating Strict Local Design Guides"
        content={
          <>
            <p style={{ marginBottom: '15px' }}>For many homeowners, dealing with the planning system can feel overwhelming. Local authorities across North Wales enforce highly detailed design guides governing privacy, daylight, parking, and architectural styling.</p>
            <p>Failing to design within these specific parameters often results in unexpected objections from neighbours and subsequent refusal by planning officers. At Cambrian Planning, we translate complex policy guidelines into clear design pathways. We collaborate closely with you to ensure your project meets your lifestyle needs while satisfying every statutory policy requirement.</p>
          </>
        }
        imageSrc="/assets/images/Plans.jpg"
        imageAlt="Plans for a residential house layout on a table"
      />

      <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Our Residential Planning Services</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>From simple extensions to custom self-build schemes, we represent you from start to finish.</p>
          </div>
          
          <Accordion items={residentialTypes} />
        </div>
      </section>

      <ProcessTimeline
        title="Our Residential Planning Process"
        steps={processSteps}
      />

      <Contact />
    </>
  );
};

export default ResidentialPlanning;
