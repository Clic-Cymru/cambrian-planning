import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import Accordion from '../components/ui/Accordion';

const HolidayLetPlanning: React.FC = () => {
  const faqItems = [
    {
      title: "What is a Section 106 Agreement for Holiday Lets?",
      content: "Local councils frequently use Section 106 legal agreements or planning conditions to restrict the occupancy of holiday lets, ensuring they cannot be used as permanent, unrestricted dwellings. If these conditions are no longer viable or reasonable for your business model, we can apply to have them varied or discharged entirely."
    },
    {
      title: "How do I secure a Certificate of Lawfulness (CLEUD)?",
      content: "If you have been operating a property as a holiday let for over 10 years without formal planning permission, you may be immune from enforcement action. We help you compile the necessary evidence (booking records, tax returns, utility bills) to secure a Certificate of Lawful Existing Use or Development (CLEUD), providing absolute legal certainty for your investment."
    },
    {
      title: "What happened to the Gwynedd Article 4 Direction?",
      content: "In early 2026, the High Court quashed the Gwynedd Article 4 direction that required planning permission for changes of use to holiday lets. However, the council is still monitoring the situation closely. We advise securing a CLEUD now while the window is open."
    }
  ];

  return (
    <>
      <SEO
        title="Holiday Let Planning Permission | Section 106 Experts | Cambrian Planning"
        description="Expert planning consultants specialising in holiday let planning permissions in Wales. We navigate Section 106 agreements, CLEUDs, and changes of use."
        keywords="Holiday let planning permission Wales, Section 106 restrictions, change of use to holiday let, Certificate of Lawfulness holiday let Wales"
      />
      <PageHeader
        title="Holiday Let Planning in Wales"
        subtitle="Unlocking the potential of your property investment while navigating strict Welsh regulations."
      />

      <SplitSection
        title="Protecting Your Investment in a Shifting Landscape"
        subtitle="Specialist Guidance"
        content={
          <>
            <p style={{ marginBottom: '15px' }}>Operating a holiday let in Wales presents unique planning challenges. Local authorities closely monitor short-term lets, and the regulatory environment is constantly shifting—as seen with the recent High Court quashing of Gwynedd's Article 4 direction.</p>
            <p>We specialise in securing the future of your holiday let business. Whether you are applying for a new build holiday unit, defending against an enforcement notice for an unauthorised let, or seeking to overturn restrictive planning conditions, we build robust, policy-compliant cases. We manage the complex negotiations with the council so you don't have to.</p>
          </>
        }
        imageSrc="/assets/images/Holiday_let.jpg"
        imageAlt="Picture of Holiday Lets"
      />

      <section style={{ padding: '80px 0', backgroundColor: '#f9f9f9' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Frequently Asked Questions</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>Clear answers to the most common holiday let planning issues.</p>
          </div>
          <Accordion items={faqItems} />
        </div>
      </section>

      <Contact />
    </>
  );
};

export default HolidayLetPlanning;
