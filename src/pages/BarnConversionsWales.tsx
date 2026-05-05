import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import ProcessTimeline from '../components/ui/ProcessTimeline';

const BarnConversionsWales: React.FC = () => {
  const processSteps = [
    {
      number: "1",
      title: "Structural Feasibility",
      description: "The golden rule in Wales is conversion, not reconstruction. We coordinate detailed structural surveys to prove the barn is capable of conversion without requiring major rebuilding."
    },
    {
      number: "2",
      title: "Ecological Surveys",
      description: "Rural buildings are highly likely to house protected species. We manage necessary bat and owl surveys, ensuring they are timed correctly to avoid stalling your application."
    },
    {
      number: "3",
      title: "Heritage & Design",
      description: "The design must respect the traditional rural character. Inserting excessively large domestic windows or altering the roofline too drastically will be resisted by Welsh planners."
    },
    {
      number: "4",
      title: "Full Planning Application",
      description: "With all technical reports compiled, we submit a robust, policy-led full planning application tailored to the specific requirements of your Local Development Plan."
    }
  ];

  return (
    <>
      <SEO 
        title="Barn Conversion Planning Permission in Wales (No Class Q) | Cambrian Planning"
        description="Thinking of converting a barn in Wales? Learn why English 'Class Q' permitted development doesn't apply here and how to secure full planning permission instead."
        keywords="Barn conversion planning permission Wales, Class Q Wales, converting agricultural buildings Wales, GPDO Wales"
      />
      <PageHeader 
        title="Barn Conversions in Wales: Why 'Class Q' Doesn't Apply" 
        subtitle="Unlocking the potential of agricultural buildings under devolved Welsh planning law."
      />
      
      <SplitSection 
        title="The 'Permitted Development' Myth in Wales"
        subtitle="Crucial Legal Differences"
        content={
          <>
            <p style={{ marginBottom: '15px' }}>Many landowners assume they can use 'Class Q' permitted development rights to bypass the need for full planning permission, saving time and money. However, Class Q is an English law.</p>
            <p><strong>In Wales, there is no equivalent permitted development right for converting an agricultural building into a residential dwelling.</strong></p>
            <p>Relying on English planning advice for a Welsh property will inevitably lead to immediate enforcement action by your Local Planning Authority. In Wales, you must apply for full planning permission from day one.</p>
          </>
        }
        imageSrc="/assets/images/barn_conversion_wales.png"
        imageAlt="High-quality photo of a beautifully converted traditional stone barn in the Welsh countryside"
      />

      <section style={{ padding: '80px 0', backgroundColor: '#f9f9f9' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>The Welsh Path to Conversion</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>Securing permission is entirely possible, provided you follow the strict requirements of Planning Policy Wales.</p>
          </div>
          
          <ProcessTimeline steps={processSteps} />
          
          <div style={{ marginTop: '50px', padding: '30px', backgroundColor: '#fff', borderRadius: '8px', borderLeft: '4px solid var(--color-accent)' }}>
            <h3 style={{ color: 'var(--color-primary)', marginBottom: '15px' }}>What about TAN 6 and Rural Enterprise Dwellings?</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', margin: 0 }}>
              It's important to distinguish between converting an existing barn into an open-market home and building a <em>new</em> dwelling for an agricultural worker. If you need a home on your farm to manage the business, you may qualify under Technical Advice Note 6 (TAN 6), which is a separate and distinct planning pathway.
            </p>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default BarnConversionsWales;
