import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import Accordion from '../components/ui/Accordion';

const ListedBuildingConsent: React.FC = () => {
  const heritageFaqs = [
    {
      title: "What is a Heritage Impact Assessment (HIA)?",
      content: "An HIA is a mandatory document in Wales for any application affecting a designated heritage asset. It requires a thorough analysis of the building's historical significance and a detailed justification of how your proposed changes will impact that significance. We produce robust HIAs that satisfy both local authorities and CADW."
    },
    {
      title: "Do I need planning permission AND Listed Building Consent?",
      content: "In many cases, yes. An extension, for example, will require both full planning permission (for the development itself) and Listed Building Consent (for the physical alteration to the historic fabric). We manage both applications concurrently to ensure a streamlined process."
    },
    {
      title: "What happens if I make unauthorized changes?",
      content: "Making unauthorised alterations, extensions, or even minor changes (like replacing windows) to a listed building in Wales is a criminal offence, potentially resulting in unlimited fines or imprisonment."
    }
  ];

  return (
    <>
      <SEO
        title="Listed Building Consent Wales | Heritage Planning | Cambrian Planning"
        description="Specialist heritage planning consultants in North Wales. We manage Listed Building Consents and Heritage Impact Assessments for historic properties."
        keywords="Listed building consent Wales, Heritage Impact Assessment Wales, conservation area planning North Wales"
      />
      <PageHeader
        title="Listed Building Consent and Heritage Planning Experts"
        subtitle="We bridge the gap between your development goals and the strict requirements of heritage legislation."
      />

      <SplitSection
        title="Strict Heritage Protections"
        subtitle="Protecting Your Asset and Your Vision"
        content={
          <>
            <p style={{ marginBottom: '15px' }}>A standard planning application is entirely insufficient when altering a historic asset. Making unauthorised alterations, extensions, or even minor changes (like replacing windows) to a listed building in Wales is a criminal offence, potentially resulting in unlimited fines or imprisonment. Navigating the subjective requirements of Conservation Officers without specialist representation is a major risk to both your project and yourself.</p>
            <p>We bridge the gap between your development goals and the strict requirements of heritage legislation. We specialise in preparing meticulous Listed Building Consent applications and comprehensive Heritage Impact Assessments. By deeply understanding the historical significance of your property, we design proposals that respect its character while delivering modern functionality, negotiating pragmatically with Conservation Officers to secure approval.</p>
          </>
        }
        imageSrc="/assets/images/beau_listed.jpg"
        imageAlt="Listed building in Beaumaris"
      />

      <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Heritage Planning FAQs</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>Understanding the requirements for historic assets in Wales.</p>
          </div>
          <Accordion items={heritageFaqs} />
        </div>
      </section>

      <Contact />
    </>
  );
};

export default ListedBuildingConsent;
