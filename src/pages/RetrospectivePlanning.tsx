import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import ServiceCards from '../components/ui/ServiceCards';
import { Home, Trees } from 'lucide-react';

const RetrospectivePlanning: React.FC = () => {
  const timeLimits = [
    {
      title: "4-Year Rule",
      description: "Applies to operational development (building works) and the change of use of a building to a single dwellinghouse.",
      icon: <Home size={40} color="var(--color-primary)" />
    },
    {
      title: "10-Year Rule",
      description: "Applies to all other material changes of use (e.g., agricultural land to a garden) and breaches of planning conditions.",
      icon: <Trees size={40} color="var(--color-primary)" />
    }
  ];

  return (
    <>
      <SEO
        title="Retrospective Planning & Enforcement Appeals | Cambrian Planning"
        description="Facing a planning enforcement notice in North Wales? We specialise in retrospective planning applications and enforcement appeals to legalise your development."
        keywords="Retrospective planning permission Wales, planning enforcement notice appeal, planning enforcement North Wales"
      />
      <PageHeader
        title="Resolving Enforcement Notices and Retrospective Planning"
        subtitle="We act swiftly to protect your assets and legalise unauthorised development."
      />

      <SplitSection
        title="The Threat of Demolition and Legal Action"
        subtitle="Swift, Strategic Legalisation"
        content={
          <>
            <p style={{ marginBottom: '15px' }}>If the council discovers unauthorised development, they can issue an Enforcement Notice. This is a severe legal document requiring you to undo the work—potentially demanding the demolition of an expensive extension or the immediate cessation of a business (like an unauthorised holiday let). Ignoring an Enforcement Notice is a criminal offence. The stress and financial risk associated with enforcement are immense.</p>
            <p>We act swiftly to protect your assets. Our first step is often to negotiate with the enforcement officer to pause action while we prepare a robust Retrospective Planning Application. If the council refuses retrospective permission or insists on serving the notice, we possess the expertise to mount a vigorous Enforcement Appeal to Planning and Environment Decisions Wales (PEDW), challenging the notice on legal and planning merit grounds.</p>
          </>
        }
        imageSrc="/assets/images/plans2-scaled.jpg"
        imageAlt="Picture of planning documents"
      />

      <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>The Immunity Rules in Wales</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>If you meet these criteria, we can apply for a Certificate of Lawfulness instead of retrospective permission.</p>
          </div>
          <ServiceCards cards={timeLimits} />
        </div>
      </section>

      <Contact />
    </>
  );
};

export default RetrospectivePlanning;
