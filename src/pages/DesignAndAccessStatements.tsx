import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import ServiceCards from '../components/ui/ServiceCards';
import { Building2, Landmark } from 'lucide-react';

const DesignAndAccessStatements: React.FC = () => {
  const dasRequirements = [
    {
      title: "Major Development",
      description: "Required for 'major development' (e.g., 10 or more dwellings, or a commercial building over 1,000 sqm).",
      icon: <Building2 size={40} color="var(--color-primary)" />
    },
    {
      title: "Sensitive Areas",
      description: "Required for development consisting of one or more dwellings, or a building over 100 sqm, located within a Conservation Area or a World Heritage Site.",
      icon: <Landmark size={40} color="var(--color-primary)" />
    }
  ];

  return (
    <>
      <SEO 
        title="Design and Access Statements Wales | Cambrian Planning"
        description="Professional Design and Access Statements for planning applications in Wales. We provide compelling justifications for major developments and conservation areas."
        keywords="Design and access statement Wales, DAS planning application, major development planning Wales"
      />
      <PageHeader 
        title="Compelling Design and Access Statements (DAS)" 
        subtitle="We draft compelling, highly articulate Design and Access Statements that weave a strong narrative around your project."
      />
      
      <SplitSection 
        title="Failing to Justify the Design Rationale"
        subtitle="A Narrative of Exceptional Design"
        content={
          <>
            <p style={{ marginBottom: '15px' }}>A poorly written DAS is often the downfall of an otherwise sound application. If you fail to articulate exactly <em>why</em> a building looks the way it does, or how it respects local character and accessibility standards, planning officers are likely to view the design as arbitrary or out of keeping with the area. This is especially true for major developments or sites within sensitive areas like World Heritage Sites.</p>
            <p>We draft compelling, highly articulate Design and Access Statements that weave a strong narrative around your project. We break down the design process into clear concepts—amount, layout, scale, landscaping, and appearance—proving to the Local Planning Authority that your development is a thoughtful, high-quality response to its environment.</p>
          </>
        }
        imageSrc="/assets/images/das_masterplan.png"
        imageAlt="Design and Access Statement architectural masterplan drawing"
      />

      <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>When is a DAS Legally Required?</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>A Design and Access Statement must accompany an application if it falls under these categories in Wales.</p>
          </div>
          <ServiceCards cards={dasRequirements} />
        </div>
      </section>

      <Contact />
    </>
  );
};

export default DesignAndAccessStatements;
