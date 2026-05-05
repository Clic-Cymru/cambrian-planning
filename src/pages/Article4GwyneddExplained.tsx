import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';

const Article4GwyneddExplained: React.FC = () => {
  return (
    <>
      <SEO 
        title="Gwynedd Article 4 Direction Quashed: What it Means | Cambrian Planning"
        description="The High Court has quashed the Gwynedd Article 4 direction for holiday lets. Learn what this 2026 ruling means for property owners and permitted development."
        keywords="Gwynedd Article 4 quashed, High Court ruling Gwynedd holiday lets, change of use holiday let Gwynedd, permitted development Wales"
      />
      <PageHeader 
        title="The Gwynedd Article 4 Direction is Quashed: What It Means For You" 
        subtitle="Understanding the landmark 2026 High Court ruling and how to secure your property rights."
      />
      
      <section className="page-content" style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 15px' }}>
          
          <h2 style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>The Background: The Loss of Permitted Development</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
            In September 2024, Gwynedd Council introduced a controversial Article 4 direction. This policy removed permitted development rights, meaning property owners required full planning permission to change a primary residence (Class C3) into a second home (Class C5) or a short-term holiday let (Class C6). The policy caused widespread uncertainty and halted many property transactions and rural business investments.
          </p>

          <h2 style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>The 2026 High Court Ruling</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '40px' }}>
            In early 2026, the High Court handed down a landmark judgment (Mr. Justice Eyre) officially quashing the Article 4 direction. The court ruled that Gwynedd Council's cabinet had been "materially misled" by officer reports regarding the legal scope of the direction. Gwynedd Council's subsequent request to appeal was refused by the Court of Appeal in February 2026. <strong>The Article 4 direction is officially no longer in force.</strong>
          </p>

          <h2 style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>What this means for Property Owners</h2>
          <div style={{ backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px', marginBottom: '40px' }}>
            <h3 style={{ color: 'var(--color-primary)', marginBottom: '15px' }}>Permitted Development Rights Restored</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
              The immediate consequence is that permitted development rights are restored. In principle, you no longer require a full planning application for a change of use between C3, C5, and C6 classes in Gwynedd, provided no other restrictions (like a Section 106 agreement or National Park policies) apply.
            </p>

            <h3 style={{ color: 'var(--color-primary)', marginBottom: '15px' }}>The Threat is Not Over</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
              While the Article 4 direction was defeated on a legal technicality, Gwynedd Council's political objective to control holiday let numbers remains unchanged. It is highly likely the council will attempt to draft new, legally watertight policies to restrict holiday lets in the near future.
            </p>
            
            <h3 style={{ color: 'var(--color-primary)', marginBottom: '15px' }}>Action Required: Secure a CLEUD Now</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              The window of opportunity is open now, but it may close again. If you are operating a holiday let, we strongly advise securing a Certificate of Lawful Existing Use or Development (CLEUD) immediately. A CLEUD legally certifies your property's status, providing absolute immunity against any future policies the council might introduce.
            </p>
          </div>
          
        </div>
      </section>

      <Contact />
    </>
  );
};

export default Article4GwyneddExplained;
