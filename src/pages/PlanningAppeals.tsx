import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import ServiceCards from '../components/ui/ServiceCards';
import { Clock, Calendar, AlertTriangle } from 'lucide-react';

const PlanningAppeals: React.FC = () => {
  const timeLimits = [
    {
      title: "Householder Appeals",
      description: "You typically have 12 weeks from the date of the decision notice to submit an appeal.",
      icon: <Clock size={40} color="var(--color-primary)" />
    },
    {
      title: "Standard Applications",
      description: "For most full or outline applications, you have a strict limit of 6 months to appeal.",
      icon: <Calendar size={40} color="var(--color-primary)" />
    },
    {
      title: "Enforcement Notices",
      description: "If your refusal relates to an enforcement notice, the timeframe can be as short as 28 days.",
      icon: <AlertTriangle size={40} color="var(--color-primary)" />
    }
  ];

  return (
    <>
      <SEO
        title="Planning Appeals Wales | Appeal to PEDW | Cambrian Planning"
        description="Has your planning application been refused? Our expert town planners handle planning appeals to PEDW in Wales, fighting to overturn council decisions."
        keywords="Planning appeals Wales, PEDW appeal, overturn planning refusal North Wales, appeal planning decision"
      />
      <PageHeader
        title="Expert Representation for Planning Appeals (PEDW)"
        subtitle="We provide rigorous, objective analysis of the council's reasons for refusal and build a powerful, policy-led case to present to the Inspector."
      />

      <SplitSection
        title="A Complex, Adversarial Legal Process"
        subtitle="Deconstructing the Refusal"
        content={
          <>
            <p style={{ marginBottom: '15px' }}>The appeals process is fundamentally different from a standard planning application. It is an adversarial, quasi-legal process. You are no longer trying to persuade a local planning officer; you are formally challenging their professional judgement before a government-appointed Planning Inspector.</p>
            <p>Submitting a weak appeal based on emotion rather than strict planning policy is a guaranteed failure. We provide rigorous, objective analysis of the council's reasons for refusal. We deconstruct their arguments and build a powerful, policy-led case to present to the Inspector. Whether through written representations, an informal hearing, or a full public inquiry, we act as your expert advocates, maximising your chances of overturning the refusal.</p>
          </>
        }
        imageSrc="/assets/images/pedw_logo.png"
        imageAlt="PEDW logo"
        imageObjectFit="contain"
      />

      <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Strict Time Limits for Appealing</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>Missing an appeal deadline means the council's decision is final.</p>
          </div>
          <ServiceCards cards={timeLimits} />
        </div>
      </section>

      <Contact />
    </>
  );
};

export default PlanningAppeals;
