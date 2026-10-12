import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import Accordion from '../components/ui/Accordion';
import ProcessTimeline from '../components/ui/ProcessTimeline';
import ServiceCards from '../components/ui/ServiceCards';
import { Clock, Calendar, AlertTriangle, Scale, ShieldCheck, FileCheck, ArrowRight, Award, HelpCircle } from 'lucide-react';

const PlanningAppeals: React.FC = () => {
  const appealTypes = [
    {
      title: "Section 78 Appeals (Planning Refusals)",
      content: "If your full, outline, or householder planning application has been turned down by the local planning authority, a Section 78 appeal gives you the right to have that refusal independently re-examined by a Planning and Environment Decisions Wales (PEDW) Inspector. We forensically deconstruct the council's officer report and decision notice to overturn unjustified refusals."
    },
    {
      title: "Section 174 Enforcement Notice Appeals",
      content: "Receiving an Enforcement Notice demands immediate, decisive legal action. You only have a narrow window (usually 28 days) before the notice takes effect to lodge an appeal with PEDW. We appeal on grounds ranging from ground (a) that planning permission ought to be granted, through to legal immunity under the 4-year and 10-year rules."
    },
    {
      title: "Section 195 Lawful Development Certificate Appeals",
      content: "If the council has refused a Certificate of Lawfulness of Existing Use or Development (CLEUD) or Proposed Use (CLOPUD), the appeal is decided purely on legal and factual evidence rather than planning policy merits. We compile indisputable documentary evidence and case law precedents to secure your certificate."
    },
    {
      title: "Section 73 Appeals (Unreasonable Planning Conditions)",
      content: "Sometimes permission is granted, but burdened with punitive, unworkable, or unlawful conditions—such as severe occupancy restrictions, unviable highway works, or onerous operating hours. We appeal to have restrictive conditions deleted or varied so your development remains viable."
    },
    {
      title: "Non-Determination Appeals",
      content: "Local authorities frequently fail to determine planning applications within the statutory 8-week or 16-week deadlines. When negotiations stall and the council refuses to make a decision, an appeal against non-determination takes the power out of the council's hands and transfers it directly to a PEDW Inspector."
    },
    {
      title: "Listed Building Consent & Conservation Appeals",
      content: "Challenging heritage refusals requires nuanced understanding of historic fabric, Cadw guidance, and conservation legislation. We provide authoritative heritage justifications that balance conservation with sustainable modern use."
    }
  ];

  const appealProcedures = [
    {
      title: "Written Representations",
      description: "The most common and cost-effective appeal procedure in Wales (approx. 80% of all appeals). Both parties submit written statements and counter-comments, followed by an unaccompanied site visit by the Planning Inspector.",
      number: "1"
    },
    {
      title: "Informal Hearings",
      description: "Suitable for proposals involving complex policy debates or conflicting evidence. The Inspector leads an informal, structured round-table discussion where we act as your expert advocate.",
      number: "2"
    },
    {
      title: "Public Inquiries",
      description: "Reserved for major, highly contentious, or legally intricate developments. Involves formal evidence, cross-examination by barristers, and expert witness testimonies before the Inspector.",
      number: "3"
    }
  ];

  const specialistProcessSteps = [
    {
      title: "Forensic Refusal Audit",
      description: "We review the decision notice, officer delegated/committee report, and consultee responses to identify fatal weaknesses and policy overreach in the council's case."
    },
    {
      title: "Strategic Evidence Assembly",
      description: "We gather targeted rebuttals, commissioning or aligning specialist technical reports (highways, ecology, landscape, drainage) to dismantle each refusal reason."
    },
    {
      title: "Comprehensive Statement of Case",
      description: "We craft an authoritative, policy-led Statement of Case citing Planning Policy Wales (PPW), Future Wales 2040, TANs, and local development plan policies."
    },
    {
      title: "Advocacy & Cost Awards",
      description: "We manage all communications with PEDW and, where the council has acted unreasonably or caused unnecessary expense, pursue a full or partial award of costs against them."
    }
  ];

  const timeLimits = [
    {
      title: "Householder Appeals",
      description: "Strict 12-week limit from the date of the council's decision notice to lodge an appeal with PEDW.",
      icon: <Clock size={40} color="var(--color-primary)" />
    },
    {
      title: "Full & Commercial Applications",
      description: "You have up to 6 months from the date of the decision notice for standard planning applications.",
      icon: <Calendar size={40} color="var(--color-primary)" />
    },
    {
      title: "Enforcement Notices",
      description: "Urgent: You must appeal before the notice comes into effect—usually within 28 days of service.",
      icon: <AlertTriangle size={40} color="var(--color-primary)" />
    }
  ];

  return (
    <>
      <SEO
        title="Planning Appeals Specialists Wales | PEDW Appeals | Cambrian Planning"
        description="Overturn your planning refusal with Cambrian Planning. Former local authority planners specialising in PEDW planning appeals, enforcement notices, and hearings across Wales."
        keywords="Planning appeals specialists Wales, PEDW appeal, overturn planning refusal North Wales, appeal planning decision Wales, planning enforcement appeal PEDW, planning inspectorate Wales"
      />
      <PageHeader
        title="Planning Appeals Specialists (PEDW Representation)"
        subtitle="Led by former local authority planning officers, we provide forensic deconstruction of planning refusals and fearless advocacy before Planning and Environment Decisions Wales."
      />

      {/* Prominent Problem-Solving Banner */}
      <section style={{ backgroundColor: '#2B394A', padding: '24px 0', borderBottom: '3px solid var(--color-accent)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <HelpCircle size={32} color="var(--color-secondary)" style={{ flexShrink: 0 }} />
            <div>
              <p style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 600, margin: 0 }}>
                Lost a planning appeal previously? All is not lost.
              </p>
              <p style={{ color: '#ccc', fontSize: '0.95rem', margin: 0 }}>
                An Inspector's decision letter often provides the exact blueprint needed for a successful revised application.
              </p>
            </div>
          </div>
          <Link
            to="/lost-a-planning-appeal"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'var(--color-button)',
              color: '#fff',
              padding: '12px 24px',
              borderRadius: '4px',
              fontWeight: 700,
              fontSize: '0.95rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            Explore Your Options <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <SplitSection
        title="Why Cambrian Planning Are True Planning Appeals Specialists"
        subtitle="Specialist Representation Across Wales"
        content={
          <>
            <p style={{ marginBottom: '16px' }}>
              The planning appeals process is not an informal second opinion—it is an adversarial, quasi-legal procedure. You are no longer trying to negotiate with a council case officer; you are formally challenging their professional judgement before a government-appointed Planning Inspector from Planning and Environment Decisions Wales (PEDW).
            </p>
            <p style={{ marginBottom: '16px' }}>
              Submitting a weak appeal based on personal frustration rather than strict planning policy and material considerations is almost certain to fail. At Cambrian Planning, we bring over 19 years of direct local authority planning experience to your corner.
            </p>
            <p>
              We know precisely how planning officers assemble refusal reports and where their arguments are vulnerable. We deconstruct the council's reasons, cross-examine statutory consultee claims, and construct a robust, policy-backed Statement of Case that gives the Inspector every justification to allow your appeal.
            </p>
          </>
        }
        imageSrc="/assets/images/pedw_logo.png"
        imageAlt="PEDW Planning and Environment Decisions Wales Logo"
        imageObjectFit="contain"
      />

      {/* Specialist Value Highlights */}
      <section style={{ padding: '70px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <p style={{ color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
              Our Specialist Advantage
            </p>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--color-primary)' }}>
              How We Maximise Your Chances of Appeal Success
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '35px 25px', backgroundColor: '#f8fafc', borderRadius: '10px', borderTop: '4px solid var(--color-primary)', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
              <Scale size={42} color="var(--color-primary)" style={{ marginBottom: '15px' }} />
              <h3 style={{ fontSize: '1.3rem', color: '#1e293b', marginBottom: '12px' }}>Forensic Case Deconstruction</h3>
              <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                Councils often cite broad, catch-all policies that do not stand up to detailed legal scrutiny. We systematically dissect each refusal reason against current Welsh planning legislation.
              </p>
            </div>

            <div style={{ padding: '35px 25px', backgroundColor: '#f8fafc', borderRadius: '10px', borderTop: '4px solid var(--color-secondary)', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
              <ShieldCheck size={42} color="var(--color-primary)" style={{ marginBottom: '15px' }} />
              <h3 style={{ fontSize: '1.3rem', color: '#1e293b', marginBottom: '12px' }}>Ex-Local Authority Insight</h3>
              <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                Having worked inside Welsh local planning authorities, we anticipate council counter-arguments and know the exact evidentiary standards PEDW Inspectors expect.
              </p>
            </div>

            <div style={{ padding: '35px 25px', backgroundColor: '#f8fafc', borderRadius: '10px', borderTop: '4px solid var(--color-accent)', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
              <Award size={42} color="var(--color-accent)" style={{ marginBottom: '15px' }} />
              <h3 style={{ fontSize: '1.3rem', color: '#1e293b', marginBottom: '12px' }}>Applications for Costs</h3>
              <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                If the council has acted unreasonably—such as disregarding evidence, ignoring officer advice, or failing to substantiate reasons—we apply for full or partial costs against the authority.
              </p>
            </div>

            <div style={{ padding: '35px 25px', backgroundColor: '#f8fafc', borderRadius: '10px', borderTop: '4px solid var(--color-button)', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
              <FileCheck size={42} color="var(--color-button)" style={{ marginBottom: '15px' }} />
              <h3 style={{ fontSize: '1.3rem', color: '#1e293b', marginBottom: '12px' }}>National Policy Alignment</h3>
              <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                We anchor appeals directly in Planning Policy Wales (PPW 12), Future Wales: The National Plan 2040, and relevant Technical Advice Notes (TANs) to outweigh local council bias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appeal Types Accordion */}
      <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <p style={{ color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
              Full Representation Spectrum
            </p>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--color-primary)' }}>
              Types of Planning Appeals We Handle
            </h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '12px' }}>
              From householder extensions to contentious enforcement notices and major commercial schemes.
            </p>
          </div>

          <Accordion items={appealTypes} />
        </div>
      </section>

      {/* Procedures Timeline */}
      <ProcessTimeline
        title="The Three PEDW Appeal Procedures in Wales"
        steps={appealProcedures}
      />

      {/* Specialist Process Steps */}
      <ProcessTimeline
        title="Our 4-Stage Specialist Appeal Strategy"
        steps={specialistProcessSteps}
      />

      {/* Strict Deadlines Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Strict Time Limits for Appealing</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>
              Missing an appeal deadline means the council's decision becomes permanent and legally binding. Contact us immediately upon receiving a refusal.
            </p>
          </div>
          <ServiceCards cards={timeLimits} />
        </div>
      </section>

      {/* Direct Callout to the "Lost an Appeal" landing page */}
      <section style={{ padding: '60px 0', backgroundColor: '#edf4fb', borderTop: '1px solid #d3e2f2', borderBottom: '1px solid #d3e2f2' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--color-primary)', marginBottom: '15px' }}>
            Has an Appeal Already Been Dismissed by PEDW?
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#444', lineHeight: 1.8, marginBottom: '25px' }}>
            Do not give up hope. A dismissed appeal does not mean the end of your development ambitions. The Inspector's decision notice usually narrows down the issues to just one or two points, while legally confirming that the council cannot re-argue other matters.
          </p>
          <Link
            to="/lost-a-planning-appeal"
            className="btn-primary"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            Read Our Guide: Lost a Planning Appeal? All Is Not Lost
          </Link>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default PlanningAppeals;
