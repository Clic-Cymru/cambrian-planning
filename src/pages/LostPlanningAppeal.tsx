import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import Accordion from '../components/ui/Accordion';
import { 
  CheckCircle2, 
  XCircle, 
  FileText, 
  Scale, 
  Compass, 
  Layers, 
  PhoneCall, 
  ShieldAlert
} from 'lucide-react';

const LostPlanningAppeal: React.FC = () => {
  const pathways = [
    {
      title: "1. The Targeted Revised Application (Redesign & Resubmit)",
      icon: <Compass size={32} color="var(--color-primary)" />,
      badge: "Most Common & Cost-Effective",
      description: "When an Inspector dismisses an appeal, their decision letter is a goldmine of guidance. In almost every case, the Inspector will have dismissed the vast majority of the council's original objections (e.g. agreeing that access, highways, drainage, and residential amenity are all acceptable), leaving only one or two specific, narrow points unresolved.",
      action: "We formulate a revised scheme that specifically targets and resolves the Inspector's remaining concerns while locking in the benefits already approved. Because the Inspector's findings are legally binding, the council cannot invent new reasons to refuse matters already cleared."
    },
    {
      title: "2. High Court Challenge (Section 288 / Judicial Review)",
      icon: <Scale size={32} color="var(--color-accent)" />,
      badge: "Strict 6-Week Deadline",
      description: "If the Planning Inspector made a material error of law, misapplied national policy (such as Planning Policy Wales or TANs), failed to take into account a vital material consideration, or acted procedurally unfairly, their decision can be challenged in the High Court under Section 288 of the Town and Country Planning Act 1990.",
      action: "If our initial review detects a legal defect or irrational reasoning in the Inspector's decision, we work alongside leading planning barristers to lodge a High Court challenge to have the decision quashed and remitted back to PEDW for redetermination."
    },
    {
      title: "3. Alternative Viable Scheme & Fallback Rights",
      icon: <Layers size={32} color="var(--color-button)" />,
      badge: "Strategic Repositioning",
      description: "If the primary scheme faces an immovable policy hurdle, we assess alternative routes to achieve your commercial or personal objectives on the site. This may include utilising Permitted Development Rights, obtaining a Certificate of Lawful Use, or pivoting to an alternative supported use.",
      action: "In Wales, options often include rural enterprise diversification, holiday accommodation, TAN 6 agricultural dwellings, or commercial-to-residential transitions. Establishing a lawful fallback position provides immense leverage in subsequent council negotiations."
    },
    {
      title: "4. Strategic Local Development Plan (LDP) Promotion",
      icon: <FileText size={32} color="var(--color-secondary)" />,
      badge: "Medium-to-Long Term Value",
      description: "Where an appeal was dismissed strictly on boundary or land-use allocation grounds (such as being outside a designated settlement boundary), the solution often lies in shaping future planning policy rather than fighting current constraints.",
      action: "We promote your site as a Candidate Site in the emerging Replacement Local Development Plan (RLDP) across Gwynedd, Anglesey, Conwy, Denbighshire, Flintshire, or Wrexham, building a policy case for boundary expansion or allocation."
    }
  ];

  const pitfalls = [
    {
      title: "Do NOT submit an identical repeat application",
      text: "Councils possess statutory powers under Section 70A of the Town and Country Planning Act to decline to determine repeat applications within two years if there has been no material change in circumstances. A fresh submission must directly address the Inspector's findings."
    },
    {
      title: "Do NOT let the 6-week High Court deadline slip away",
      text: "If you intend to challenge an Inspector's decision on legal grounds under Section 288, the statutory time limit is strictly 6 weeks from the date of the decision notice. Once this window closes, the decision cannot be challenged legally."
    },
    {
      title: "Do NOT assume the council holds all the cards",
      text: "Planning officers will often claim that an appeal dismissal is the end of the road. In reality, the Inspector's decision legally constrains the council from raising objections that the Inspector found to be unharmful."
    },
    {
      title: "Do NOT let emotion cloud your planning strategy",
      text: "Appeals are won on policy tests, evidence, and legal precedents—not grievances. Partnering with dedicated planning appeals specialists ensures your next step is completely objective and policy-led."
    }
  ];

  const faqs = [
    {
      title: "Can the local council refuse my new application for reasons the Inspector dismissed?",
      content: "Generally, no. An Inspector's appeal decision is a significant material planning consideration. If an Inspector explicitly found that highway safety, parking, or landscape impact was acceptable, the local planning authority cannot reasonably refuse a subsequent revised scheme on those grounds unless circumstances have fundamentally changed. If the council attempts to do so, they face an immediate application for an award of costs for unreasonable behaviour."
    },
    {
      title: "How quickly should I act after losing an appeal?",
      content: "Immediately. For legal challenges under Section 288, you have a strict 6-week deadline from the decision date. For revised planning applications, acting promptly ensures that local planning policies and baseline evidence (such as ecological surveys or housing supply calculations) remain current."
    },
    {
      title: "Why instruct Cambrian Planning rather than our original architect or draftsman?",
      content: "Architects and architectural designers specialize in building design and drawings, but appeals and complex planning disputes are legal, policy, and evidence battles. As former local authority planning officers and dedicated planning appeals specialists, we understand how PEDW Inspectors evaluate policy and know how to construct arguments that dismantle council objections."
    },
    {
      title: "What is involved in your Free Appeal Decision Appraisal?",
      content: "You send us a copy of the Inspector's appeal decision notice and the original council refusal. We carry out an initial review of the Inspector's findings, identify which council objections were discarded, and outline whether a revised scheme, High Court review, or alternative fallback is your most viable path forward."
    },
    {
      title: "Can we still get planning permission after a dismissed appeal?",
      content: "Yes, absolutely. A substantial proportion of planning permissions across Wales are granted on revised applications following a dismissed appeal. By tailoring the scheme strictly to the Inspector's findings, the revised application enters the planning system with most hurdles already officially cleared."
    }
  ];

  return (
    <>
      <SEO
        title="Lost a Planning Appeal? All Is Not Lost | Cambrian Planning Appeals Specialists"
        description="Lost your planning appeal with PEDW in Wales? An appeal dismissal is rarely the end of the road. Discover your 4 strategic options and request an expert decision appraisal."
        keywords="Lost planning appeal Wales, appeal dismissed PEDW, options after losing planning appeal, overturn planning refusal, planning appeal specialists Wales, Section 288 planning challenge Wales"
      />
      
      <PageHeader
        title="Lost a Planning Appeal? All Is Not Lost"
        subtitle="An appeal dismissal can feel like a devastating dead end. In reality, an Inspector's decision is often the exact blueprint needed to secure planning permission on a revised scheme."
      />

      {/* Reassurance Hero Banner */}
      <section style={{ backgroundColor: '#ffffff', padding: '60px 0 40px 0' }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: '#f8fafc',
            borderLeft: '6px solid var(--color-primary)',
            padding: '30px',
            borderRadius: '0 8px 8px 0',
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
            marginBottom: '40px'
          }}>
            <h2 style={{ fontSize: '1.8rem', color: '#1e293b', marginBottom: '15px' }}>
              Why a Dismissed Appeal Is Rarely the End of Your Project
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4b5563', marginBottom: '15px' }}>
              Receiving an appeal dismissal letter from <strong>Planning and Environment Decisions Wales (PEDW)</strong> is deeply frustrating. You have spent months waiting, invested thousands of pounds in plans and surveys, and were told that the refusal stands.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4b5563', margin: 0 }}>
              However, as <Link to="/services/planning-appeals" style={{ fontWeight: 600, color: 'var(--color-primary)', textDecoration: 'underline' }}>planning appeals specialists</Link>, we view an Inspector's decision notice not as a defeat, but as <strong>definitive clarity</strong>. An appeal decision provides an objective, binding legal verdict that strips away the council's exaggerated objections and reveals the exact, narrow path to achieving planning approval.
            </p>
          </div>
        </div>
      </section>

      {/* The Core Truth Section */}
      <section style={{ backgroundColor: '#f4f7f6', padding: '70px 0' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <p style={{ color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
              The Inspector's Blueprint
            </p>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--color-primary)' }}>
              How an Inspector's Decision Actually Works in Your Favour
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '35px', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderTop: '4px solid #ef4444' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                <XCircle size={32} color="#ef4444" />
                <h3 style={{ fontSize: '1.3rem', color: '#1e293b', margin: 0 }}>The Council's Refusal</h3>
              </div>
              <p style={{ color: '#555', lineHeight: '1.7', fontSize: '1rem' }}>
                Local councils often refuse applications using broad, catch-all policy objections—citing highway safety, landscape character, visual amenity, drainage, residential privacy, and biodiversity loss all at once.
              </p>
              <ul style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.7', paddingLeft: '20px', marginTop: '10px' }}>
                <li>Vague, unquantified policy citations</li>
                <li>Exaggerated neighbour objections</li>
                <li>Refusal based on subjective opinion</li>
              </ul>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '35px', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderTop: '4px solid var(--color-button)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                <CheckCircle2 size={32} color="var(--color-button)" />
                <h3 style={{ fontSize: '1.3rem', color: '#1e293b', margin: 0 }}>The Inspector's Ruling</h3>
              </div>
              <p style={{ color: '#555', lineHeight: '1.7', fontSize: '1rem' }}>
                The PEDW Inspector systematically examines each point. In doing so, the Inspector frequently concludes that <strong>access, drainage, and residential amenity are completely acceptable</strong>, narrowing the objection to just one solitary issue.
              </p>
              <ul style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.7', paddingLeft: '20px', marginTop: '10px' }}>
                <li>Clears away 80% to 90% of council objections</li>
                <li>Legally binds the council from re-arguing cleared issues</li>
                <li>Identifies the precise modification needed for approval</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Pathways Forward */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <p style={{ color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
              Strategic Options
            </p>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>
              Your 4 Strategic Pathways Forward
            </h2>
            <p style={{ color: '#666', fontSize: '1.15rem', marginTop: '12px', maxWidth: '750px', margin: '12px auto 0' }}>
              Depending on the findings in your decision letter, one of the following strategies will unlock the true value of your land or property.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {pathways.map((path, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '35px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.03)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '15px', marginBottom: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    {path.icon}
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', margin: 0 }}>{path.title}</h3>
                  </div>
                  <span style={{ 
                    backgroundColor: '#e0e7ff', 
                    color: '#3730a3', 
                    padding: '6px 14px', 
                    borderRadius: '20px', 
                    fontSize: '0.85rem', 
                    fontWeight: 700, 
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {path.badge}
                  </span>
                </div>
                <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '15px' }}>
                  {path.description}
                </p>
                <div style={{ backgroundColor: '#ffffff', padding: '18px 22px', borderRadius: '8px', borderLeft: '4px solid var(--color-button)' }}>
                  <p style={{ color: '#1f2937', fontSize: '0.98rem', lineHeight: '1.7', margin: 0 }}>
                    <strong>Our Specialist Action:</strong> {path.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Decision Appraisal Banner */}
      <section style={{ backgroundColor: '#2B394A', padding: '70px 0', color: '#fff', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{
            backgroundColor: 'var(--color-accent)',
            color: '#fff',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            display: 'inline-block',
            marginBottom: '20px'
          }}>
            Confidential &amp; No Obligation
          </span>
          <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '20px' }}>
            Request Your Free Appeal Decision Appraisal
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: '1.8', maxWidth: '750px', margin: '0 auto 30px auto' }}>
            Have you received an appeal dismissal within the last 12 months? Send us your Inspector's Decision Notice. Our planning appeals specialists will review the Inspector's findings and provide an honest appraisal of whether a revised scheme, Section 288 challenge, or alternative route is viable.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a 
              href="#contact-form" 
              className="btn-primary"
              style={{ textDecoration: 'none' }}
            >
              Submit Your Decision Notice
            </a>
            <a 
              href="tel:01407840522" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'transparent',
                color: '#fff',
                border: '2px solid #fff',
                padding: '14px 28px',
                borderRadius: '4px',
                fontWeight: 700,
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              <PhoneCall size={20} /> Call 01407 840 522
            </a>
          </div>
        </div>
      </section>

      {/* Critical Pitfalls Section */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <p style={{ color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
              Avoid Costly Mistakes
            </p>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>
              What NOT To Do After Losing an Appeal
            </h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '12px' }}>
              Knee-jerk reactions after an appeal loss can permanently damage your development prospects.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            {pitfalls.map((pitfall, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#fff5f5',
                  border: '1px solid #fed7d7',
                  borderRadius: '10px',
                  padding: '30px 25px',
                  boxShadow: '0 4px 15px rgba(239, 68, 68, 0.05)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <ShieldAlert size={28} color="#e53e3e" />
                  <h3 style={{ fontSize: '1.15rem', color: '#9b2c2c', margin: 0 }}>{pitfall.title}</h3>
                </div>
                <p style={{ color: '#4a5568', fontSize: '0.98rem', lineHeight: '1.7', margin: 0 }}>
                  {pitfall.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section style={{ backgroundColor: '#f4f7f6', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <p style={{ color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
              Common Questions
            </p>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--color-primary)' }}>
              Frequently Asked Questions After an Appeal Dismissal
            </h2>
          </div>

          <Accordion items={faqs} />
        </div>
      </section>

      {/* Contact Section Anchor */}
      <div id="contact-form">
        <Contact />
      </div>
    </>
  );
};

export default LostPlanningAppeal;
