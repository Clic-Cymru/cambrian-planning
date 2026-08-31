import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import Accordion from '../components/ui/Accordion';
import ProcessTimeline from '../components/ui/ProcessTimeline';

const NewHousesPlanning: React.FC = () => {
  const housingTypes = [
    {
      title: "Single Dwellings & Bespoke Self-Builds",
      content: "Building a custom home or managing a self-build project requires navigating local authority policies on scale, sitting, design, and impact on the surrounding area. We assist self-builders from initial feasibility checks through outline and full planning applications, ensuring your bespoke design stands the best chance of approval."
    },
    {
      title: "Replacement Dwellings",
      content: "Replacing an existing substandard or structurally compromised dwelling with a modern, energy-efficient home is strongly supported under Welsh planning policies. We help negotiate the requirements around scale, footprint increases, and structural necessity."
    },
    {
      title: "Rural Enterprise & TAN 6 Dwellings",
      content: "Securing permission for a new home in the open countryside is highly restrictive in Wales. However, under Technical Advice Note (TAN) 6, exceptions are made for essential agricultural, forestry, or rural enterprise workers. We draft the detailed functional and financial tests required to secure these permissions."
    },
    {
      title: "Small to Medium Housing Schemes",
      content: "For landowners and local developers planning multiple units, we provide comprehensive management. We coordinate outline proposals, site layout design, and compile key statutory documents including Welsh Language Statements, Housing Mix Statements, and Affordable Housing Statements required for planning validation and approval."
    },
    {
      title: "Large-Scale Residential Developments",
      content: "Larger residential allocations and schemes require strategic navigation of Local Development Plans (LDPs). We prepare detailed Affordable Housing Statements, Housing Mix Statements, and Welsh Language Impact Assessments, while managing multi-disciplinary teams (covering highways, ecology, landscape, and heritage) to resolve Section 106 agreements and community infrastructure requirements."
    },
    {
      title: "Statutory Statements: Welsh Language, Housing Mix & Affordable Housing",
      content: "Residential proposals across Wales must address specific local authority policy criteria. We draft authoritative Welsh Language Statements to evaluate linguistic impact, Housing Mix Statements aligned with Local Housing Market Assessments (LHMA), and Affordable Housing Statements that navigate viability testing and Section 106 contributions."
    }
  ];

  const processSteps = [
    {
      title: "Policy & LDP Assessment",
      description: "We evaluate the site against the Local Development Plan, checking allocations, settlement boundaries, and local planning policies."
    },
    {
      title: "Master Planning & Design Guidance",
      description: "We work with your architects or coordinate design parameters to align with local design guides, ensuring appropriate density, layout, and privacy."
    },
    {
      title: "Technical Reports & Statements Coordination",
      description: "We compile and coordinate essential supporting documents: Welsh Language Statements, Housing Mix Statements, Affordable Housing Statements, Design & Access Statements, Green Infrastructure Statements, and environmental reports."
    },
    {
      title: "Negotiation & Section 106",
      description: "We lead discussions with the council, resolving objections, addressing consultee feedback, and negotiating affordable housing or infrastructure contributions."
    }
  ];

  return (
    <>
      <SEO
        title="New Build House Planning Permission Wales | Single to Multi-Unit | Cambrian Planning"
        description="Professional planning support for new build homes and residential developments in Wales. We manage applications for single dwellings, replacement homes, and large housing schemes."
        keywords="New house planning permission Wales, residential development Wales, single dwelling planning Wales, housing scheme planning permission, rural homes Wales, Welsh language statement Wales, housing mix statement, affordable housing statement"
      />
      <PageHeader
        title="New Houses & Residential Developments"
        subtitle="Professional planning support to take your residential proposals from concept to approval."
      />

      <SplitSection
        title="Securing Permissions for New Homes in Wales"
        subtitle="Residential Experts"
        content={
          <>
            <p style={{ marginBottom: '15px' }}>Whether you are building a single bespoke self-build dwelling or master planning a multi-unit housing development, residential planning in Wales requires highly specialized policy navigation. The Welsh planning framework enforces strict rules regarding settlement boundaries, sustainable design, Welsh Language Statements, Housing Mix Statements, and Affordable Housing Statements.</p>
            <p>At Cambrian Planning, we combine 17 years of local authority experience to bridge the gap between developer ambitions and Council expectations. We build compelling cases that justify your residential scheme, manage statutory consultees, and structure negotiations to ensure a smooth path to planning approval.</p>
          </>
        }
        imageSrc="/assets/images/housing_masterplan.jpg"
        imageAlt="Master plan layout showing new housing development plot design"
      />

      <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Our Residential Development Services</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>Comprehensive planning solutions for single dwellings up to major residential housing schemes.</p>
          </div>
          
          <Accordion items={housingTypes} />
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

export default NewHousesPlanning;
