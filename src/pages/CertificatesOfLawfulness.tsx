import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import ServiceCards from '../components/ui/ServiceCards';
import { Search, FileCheck } from 'lucide-react';

const CertificatesOfLawfulness: React.FC = () => {
  const certificateTypes = [
    {
      title: "CLEUD (Existing Use)",
      description: "For existing breaches, we compile evidence (statutory declarations, historical maps, utility bills) to prove development has existed for 4 or 10 years, securing immunity.",
      icon: <Search size={40} color="var(--color-primary)" />
    },
    {
      title: "CLOPUD (Proposed Use)",
      description: "For proposed developments, we provide legal arguments to prove your project falls within permitted development rights and doesn't need full planning permission.",
      icon: <FileCheck size={40} color="var(--color-primary)" />
    }
  ];

  return (
    <>
      <SEO 
        title="Certificates of Lawfulness Wales | CLEUD & CLOPUD | Cambrian Planning"
        description="We secure Certificates of Lawful Existing Use or Development (CLEUD) and Proposed Use (CLOPUD) in Wales to legally certify your property rights."
        keywords="Certificate of lawfulness Wales, CLEUD Wales, CLOPUD application, prove planning immunity"
      />
      <PageHeader 
        title="Securing Your Property Rights with Certificates of Lawfulness" 
        subtitle="We meticulously compile the required evidence to prove beyond doubt that your development is lawful."
      />
      
      <SplitSection 
        title="Legal Uncertainty and Unsellable Properties"
        subtitle="Evidentiary Rigour"
        content={
          <>
            <p style={{ marginBottom: '15px' }}>If you have carried out building work or changed the use of a property without permission, you live under the constant threat of enforcement. More commonly, when you attempt to sell the property, the buyer's solicitors will demand proof that the development is legal.</p>
            <p>Without formal planning permission or a Certificate of Lawfulness, the sale will almost certainly collapse. We act as planning detectives. We meticulously compile the required evidence to prove beyond doubt that the development has existed for the requisite time or falls within permitted development rights.</p>
          </>
        }
        imageSrc="/assets/images/approved_stamp.png"
        imageAlt="Approved stamp on a certificate of lawfulness document"
      />

      <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Types of Certificates</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>Proving lawfulness for existing and proposed development.</p>
          </div>
          <ServiceCards cards={certificateTypes} />
        </div>
      </section>

      <Contact />
    </>
  );
};

export default CertificatesOfLawfulness;
