import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import ServiceCards from '../components/ui/ServiceCards';
import { AlertCircle, TreePine, Building, FileSignature } from 'lucide-react';

const Flintshire: React.FC = () => {
  const flintshireServices = [
    {
      title: "Retrospective Planning",
      description: "Swift action to legalise unauthorised development and defend against enforcement notices issued by Flintshire County Council.",
      linkTo: "/services/retrospective-planning-and-enforcement",
      icon: <AlertCircle size={40} color="var(--color-primary)" />
    },
    {
      title: "Green Infrastructure",
      description: "Producing the mandatory, PPW 12-compliant Green Infrastructure statements required for all new developments in Wales.",
      linkTo: "/services/green-infrastructure-statements",
      icon: <TreePine size={40} color="var(--color-primary)" />
    },
    {
      title: "Major Applications",
      description: "Managing complex planning applications for housing and commercial sites, including detailed Design and Access Statements.",
      linkTo: "/services/planning-applications",
      icon: <Building size={40} color="var(--color-primary)" />
    },
    {
      title: "Planning Appeals",
      description: "Challenging council refusals at Planning and Environment Decisions Wales (PEDW) to secure your development rights.",
      linkTo: "/services/planning-appeals",
      icon: <FileSignature size={40} color="var(--color-primary)" />
    }
  ];

  return (
    <>
      <SEO
        title="Planning Consultant Flintshire | Expert Town Planners | Cambrian Planning"
        description="Local planning consultants in Flintshire. We navigate the Local Development Plan, managing major applications, green infrastructure, and retrospective planning."
        keywords="Planning Consultant Flintshire, Town planner Flintshire, planning permission Flintshire council, Flintshire Local Development Plan"
      />
      <PageHeader
        title="Expert Planning Consultants in Flintshire"
        subtitle="Guiding residential and commercial development through Flintshire's evolving planning landscape."
      />

      <SplitSection
        title="Urban Growth and Enforcement Scrutiny"
        subtitle="Proactive Planning in Flintshire"
        content={
          <>
            <p style={{ marginBottom: '15px' }}>Flintshire bridges the gap between rural North Wales and the heavily urbanised North West of England. This dynamic creates intense pressure for housing and commercial development, leading to strict scrutiny of planning applications.</p>
            <p>Flintshire County Council is particularly proactive in enforcement against unauthorised development, making retrospective applications and enforcement appeals a common challenge for property owners. Furthermore, all new developments must stringently adhere to national Green Infrastructure requirements. We build compelling, policy-led cases to protect your interests and secure permission.</p>
          </>
        }
        imageSrc="/assets/images/talacre.jpg"
        imageAlt="Talacre Lighthouse, Flintshire"
      />

      <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Our Services in Flintshire</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>Proactive management and robust defence.</p>
          </div>
          <ServiceCards cards={flintshireServices} />
        </div>
      </section>

      <Contact />
    </>
  );
};

export default Flintshire;
