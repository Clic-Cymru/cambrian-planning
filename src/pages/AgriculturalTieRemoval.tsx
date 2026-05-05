import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import ServiceCards from '../components/ui/ServiceCards';
import { ShieldCheck, FileText } from 'lucide-react';

const AgriculturalTieRemoval: React.FC = () => {
  const pathways = [
    {
      title: "Certificate of Lawfulness (CLEUD)",
      description: "If the condition has been breached continuously for 10 years, we can compile legal evidence to secure a CLEUD, rendering the tie unenforceable.",
      icon: <ShieldCheck size={40} color="var(--color-primary)" />
    },
    {
      title: "Section 73 Application",
      description: "If the 10-year rule does not apply, we manage a highly structured marketing campaign to prove there is no longer demand among eligible agricultural workers.",
      icon: <FileText size={40} color="var(--color-primary)" />
    }
  ];

  return (
    <>
      <SEO
        title="Remove Agricultural Ties Wales | AOC Removal | Cambrian Planning"
        description="Specialist town planners for the removal of Agricultural Occupancy Conditions (AOCs) in Wales. We manage CLEUD applications and Section 73 marketing exercises."
        keywords="Remove agricultural tie Wales, Agricultural Occupancy Condition removal, lift agricultural tie, CLEUD agricultural tie"
      />
      <PageHeader
        title="Experts in the Removal of Agricultural and Forestry Ties"
        subtitle="We provide the expertise required to legally remove these restrictive conditions, restoring your property to its full open-market value."
      />

      <SplitSection
        title="The Financial Burden of an Agricultural Tie"
        subtitle="Protect Your Asset"
        content={
          <>
            <p style={{ marginBottom: '15px' }}>Properties burdened by an agricultural tie are severely restricted. They are typically valued 20% to 30% below the open market rate. Securing a mortgage on a tied property is notoriously difficult, and finding a buyer who legally meets the strict occupational criteria can take years. For many landowners and inheritors, the property becomes a financial trap rather than an asset.</p>
            <p>Lifting an AOC is one of the most complex areas of rural planning. Running an invalid marketing campaign that doesn't meet the council's exact specifications will result in a refusal, meaning 12 months of wasted effort. Alternatively, incorrectly attempting a CLEUD can trigger enforcement action. We manage the entire process to protect your asset.</p>
          </>
        }
        imageSrc="/assets/images/agricultural_building.jpg"
        imageAlt="Picture of farmhouse across open fields"
      />

      <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Two Proven Pathways</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>Depending on your circumstances, we pursue the most viable route to success.</p>
          </div>
          <ServiceCards cards={pathways} />
        </div>
      </section>

      <Contact />
    </>
  );
};

export default AgriculturalTieRemoval;
