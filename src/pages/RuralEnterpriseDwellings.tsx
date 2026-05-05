import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import ServiceCards from '../components/ui/ServiceCards';
import { Briefcase, TrendingUp, Clock } from 'lucide-react';

const RuralEnterpriseDwellings: React.FC = () => {
  const requirements = [
    {
      title: "The Functional Test",
      description: "Proving it is essential for the proper functioning of the enterprise for one or more workers to be readily available at most times (e.g. animal welfare).",
      icon: <Briefcase size={40} color="var(--color-primary)" />
    },
    {
      title: "The Financial Test",
      description: "Demonstrating that the rural enterprise is economically viable, established for at least three years, and has clear prospects of remaining viable.",
      icon: <TrendingUp size={40} color="var(--color-primary)" />
    },
    {
      title: "Temporary Dwellings",
      description: "If your enterprise is new, we can apply for a temporary dwelling for a three-year period to allow you to prove financial viability.",
      icon: <Clock size={40} color="var(--color-primary)" />
    }
  ];

  return (
    <>
      <SEO
        title="Rural Enterprise Dwellings Wales | TAN 6 Experts | Cambrian Planning"
        description="Expert planning consultants for TAN 6 Rural Enterprise Dwellings in Wales. We build robust financial and functional cases for agricultural and forestry workers."
        keywords="Rural enterprise dwelling Wales, TAN 6 planning permission, agricultural worker dwelling Wales, build house on farm Wales"
      />
      <PageHeader
        title="Securing Planning Permission for Rural Enterprise Dwellings (TAN 6)"
        subtitle="We specialise in constructing robust TAN 6 applications to secure homes for essential rural workers."
      />

      <SplitSection
        title="The High Burden of Proof Required by TAN 6"
        subtitle="Unassailable Cases"
        content={
          <>
            <p style={{ marginBottom: '15px' }}>Securing permission under TAN 6 is exceptionally difficult. Local Planning Authorities view these applications with intense scrutiny to prevent the abuse of countryside protections. You cannot simply state you need to live on the land; you must categorically prove a 'functional need' and demonstrate that the enterprise is financially viable and sustainable.</p>
            <p>Applications lacking meticulous financial and operational evidence are routinely refused. We specialise in constructing robust TAN 6 applications. We work closely with agricultural consultants and accountants to compile the comprehensive appraisals required to satisfy the stringent tests set out by the Welsh Government.</p>
          </>
        }
        imageSrc="/assets/images/lakeside_cabin.jpg"
        imageAlt="Picture of lakeside cabin"
      />

      <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Meeting the TAN 6 Tests</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>We provide the evidence required to succeed.</p>
          </div>
          <ServiceCards cards={requirements} />
        </div>
      </section>

      <Contact />
    </>
  );
};

export default RuralEnterpriseDwellings;
