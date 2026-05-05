import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import Accordion from '../components/ui/Accordion';
import ProcessTimeline from '../components/ui/ProcessTimeline';

const PlanningApplications: React.FC = () => {
  const applicationTypes = [
    {
      title: "Full Planning Permission",
      content: "Required for most new buildings, commercial developments, and material changes of use. We provide the detailed justification, architectural oversight, and robust policy defence required for complex proposals."
    },
    {
      title: "Outline Planning Permission",
      content: "An excellent strategy for establishing the principle of development on a site before investing heavily in detailed architectural drawings. Ideal for assessing the viability of land for housing."
    },
    {
      title: "Reserved Matters",
      content: "Following an outline approval, we manage the submission of the detailed design elements (appearance, landscaping, layout, and scale) required by the Local Planning Authority before development can commence."
    },
    {
      title: "Householder Applications",
      content: "Tailored for domestic extensions, outbuildings, and significant home alterations that exceed your permitted development rights. We ensure your plans comply with local design guides to avoid refusal."
    },
    {
      title: "Pre-Planning Applications",
      content: "We handle formal enquiries to the Local Planning Authority to assess the viability of your proposal and identify potential constraints early in the process."
    },
    {
      title: "Planning Amendments",
      content: "Expert management of Section 73 applications to vary conditions or non-material amendments (NMA) to existing permissions."
    },
    {
      title: "Change of Use",
      content: "Navigating the complexities of Use Class changes, ensuring compliance with local development plans and building regulations."
    },
    {
      title: "Certificate of Lawfulness",
      content: "Securing legal certainty for existing (CLEUD) or proposed (CLPUD) developments, proving that no further planning permission is required."
    },
    {
      title: "Listed Building Consent",
      content: "Specialist advice for alterations, extensions, or repairs to heritage assets, ensuring sensitive design that meets strict conservation criteria."
    },
    {
      title: "Conservation Area Consent",
      content: "Managing the specific requirements for development or demolition within designated Conservation Areas across North Wales."
    },
    {
      title: "Planning Condition Removal or Negotiation",
      content: "We negotiate with planning officers to discharge, vary, or remove overly restrictive planning conditions that may hinder your project."
    },
    {
      title: "Retrospective Planning Permission",
      content: "Regularising unauthorised developments and providing robust justifications to prevent enforcement action and legal complications."
    },
    {
      title: "Residential / Commercial / Industrial / Agricultural applications",
      content: "Comprehensive management of sector-specific developments across all land-use classes, from new housing estates to industrial units and agricultural barns."
    },
    {
      title: "Advertisement Consent",
      content: "Securing permission for commercial signage, branding, and outdoor advertisements in compliance with local authority design standards."
    }
  ];

  const processSteps = [
    {
      title: "Project Assessment",
      description: "We review your site, local development plans, and site history to determine the correct application type and identify any immediate red flags."
    },
    {
      title: "Pre-Application Strategy",
      description: "We advise if formal pre-application advice or a Statutory Pre-Application Consultation (PAC) is required for your specific scheme."
    },
    {
      title: "Compilation & Submission",
      description: "We gather all required documents (e.g. Green Infrastructure Statements, Design & Access) and submit a watertight application."
    },
    {
      title: "Officer Negotiation",
      description: "We act as your sole agent, negotiating directly with the planning officer and statutory consultees (like NRW) to resolve issues swiftly."
    }
  ];

  return (
    <>
      <SEO
        title="Planning Applications Wales | Full, Outline & Householder | Cambrian Planning"
        description="Expert management of all types of planning applications in Wales. We handle full, outline, householder, and reserved matters applications from start to finish."
        keywords="Planning Applications Wales, Full planning permission Wales, Outline planning application, Householder planning consent"
      />
      <PageHeader
        title="Expert Management for All Types of Planning Applications in Wales"
        subtitle="We navigate the complexities of the Welsh planning system to ensure your application is submitted correctly the first time."
      />

      <SplitSection
        title="The Problem: Delays and Invalidation"
        subtitle="Avoid Incorrect Submissions"
        content={
          <>
            <p style={{ marginBottom: '15px' }}>A common mistake made by developers and homeowners is submitting the wrong type of planning application or failing to include mandatory, Wales-specific documentation—such as a Green Infrastructure Statement or a Welsh Language Impact Assessment.</p>
            <p>This oversight leads to immediate invalidation by the Local Planning Authority, wasting months of your time and resulting in additional, unnecessary fees. At Cambrian Planning, we eliminate the guesswork. We assess your project comprehensively, determine the most efficient planning route, and manage the entire process.</p>
          </>
        }
        imageSrc="/assets/images/Plans.jpg"
        imageAlt="Picture of plans being rolled out on a table"
      />

      <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Types of Applications We Handle</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>We manage the full spectrum of applications across North Wales.</p>
          </div>
          
          <Accordion items={applicationTypes} />
        </div>
      </section>

      <ProcessTimeline
        title="Our Application Management Process"
        steps={processSteps}
      />

      <Contact />
    </>
  );
};

export default PlanningApplications;
