import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import ServiceCards from '../components/ui/ServiceCards';
import { Home, Tractor, MessageCircle, Scale } from 'lucide-react';

const Gwynedd: React.FC = () => {
  const gwyneddServices = [
    {
      title: "Holiday Lets (Post-Article 4)",
      description: "With the recent High Court quashing of the Article 4 direction, permitted development rights for holiday lets are restored. We secure CLEUDs and handle changes of use.",
      linkTo: "/services/holiday-let-planning-permission",
      icon: <Home size={40} color="var(--color-primary)" />
    },
    {
      title: "Agricultural Tie Removals",
      description: "Expert assistance lifting restrictive occupancy conditions (AOCs) on rural properties across Gwynedd and the Llŷn Peninsula to restore market value.",
      linkTo: "/services/agricultural-forestry-tie-removal",
      icon: <Tractor size={40} color="var(--color-primary)" />
    },
    {
      title: "Welsh Language Statements",
      description: "Preparing mandatory Welsh Language Impact Assessments to ensure your development aligns with the Joint Local Development Plan's cultural priorities.",
      linkTo: "/services/planning-applications",
      icon: <MessageCircle size={40} color="var(--color-primary)" />
    },
    {
      title: "Retrospective Planning",
      description: "Defending against enforcement notices and regularising unauthorised works through retrospective applications and PEDW appeals.",
      linkTo: "/services/retrospective-planning-and-enforcement",
      icon: <Scale size={40} color="var(--color-primary)" />
    }
  ];

  return (
    <>
      <SEO
        title="Planning Consultant Gwynedd | Expert Town Planners | Cambrian Planning"
        description="Local planning consultants in Gwynedd. We navigate the Joint Local Development Plan, from holiday lets (post-Article 4) to agricultural ties. Get expert advice today."
        keywords="Planning Consultant Gwynedd, Town planner Gwynedd, Gwynedd Article 4 quashed, planning permission Gwynedd council, Gwynedd Joint Local Development Plan"
      />
      <PageHeader
        title="Expert Planning Consultants in Gwynedd"
        subtitle="Balancing the need for economic development with the protection of the Welsh language and stunning natural landscapes."
      />

      <SplitSection
        title="The Shifting Landscape: Life After Article 4"
        subtitle="Navigating the JLDP"
        content={
          <>
            <p style={{ marginBottom: '15px' }}>Gwynedd Council has historically implemented some of the strictest planning policies in Wales under its Joint Local Development Plan (JLDP). However, the planning landscape shifted dramatically in early 2026 when the High Court officially quashed the council's controversial Article 4 direction regarding holiday lets.</p>
            <p>At Cambrian Planning, we possess a proven track record of successful applications and appeals within Gwynedd. We closely monitored the High Court proceedings and are perfectly positioned to help property owners capitalise on their restored permitted development rights before the council attempts to draft new restrictive policies.</p>
          </>
        }
        imageSrc="/assets/images/Caernarfon_castle.jpg"
        imageAlt="Welsh landscape"
      />

      <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Our Services in Gwynedd</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>Tailored planning solutions specifically for the Gwynedd region.</p>
          </div>
          <ServiceCards cards={gwyneddServices} />
        </div>
      </section>

      <Contact />
    </>
  );
};

export default Gwynedd;
