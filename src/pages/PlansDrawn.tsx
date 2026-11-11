import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import Accordion from '../components/ui/Accordion';
import ProcessTimeline from '../components/ui/ProcessTimeline';
import './PlansDrawn.css';
import { 
  DraftingCompass, 
  Home, 
  ShieldCheck, 
  Ruler, 
  CheckCircle2, 
  XCircle, 
  FileCheck, 
  Building2, 
  Sparkles, 
  Compass, 
  ArrowRight,
  PhoneCall
} from 'lucide-react';

const PlansDrawn: React.FC = () => {
  const planCategories = [
    {
      title: "House Plans & Home Extensions",
      icon: <Home size={36} color="var(--color-primary)" />,
      description: "Tailored architectural drawings for all residential home alterations and expansions across North Wales.",
      features: [
        "Single-storey & two-storey rear or side extensions",
        "Wrap-around extensions & open-plan kitchen/living layouts",
        "Loft conversions, dormer windows & roof alterations",
        "Garage conversions, annexes & detached garden offices",
        "Porches, balconies, terraces & external facade remodelling"
      ]
    },
    {
      title: "Bespoke New House Builds & Residential Schemes",
      icon: <Building2 size={36} color="var(--color-primary)" />,
      description: "Complete design and drawing solutions for one-off bespoke dwellings through to multi-unit housing developments.",
      features: [
        "Custom self-build homes & architectural grand designs",
        "Replacement dwellings in countryside and coastal settings",
        "Barn conversions & traditional outbuilding transformations",
        "Small-to-medium housing developments & parcel layouts",
        "Affordable housing & rural worker dwelling unit layouts"
      ]
    },
    {
      title: "Statutory Site Plans & Block Plans (1:500 / 1:1250)",
      icon: <DraftingCompass size={36} color="var(--color-primary)" />,
      description: "Mandatory Ordnance Survey-based plans drawn to exact statutory scales required for planning validation in Wales.",
      features: [
        "1:1250 & 1:2500 Location Plans with precise Red & Blue boundaries",
        "1:500 & 1:200 Detailed Block Plans illustrating site context",
        "Highway access, visibility splays & vehicle turning swept paths",
        "Parking arrangements complying with local council standards",
        "Hard & soft landscaping, refuse storage & EV charging layouts"
      ]
    },
    {
      title: "Existing & Proposed Drawing Sets",
      icon: <Ruler size={36} color="var(--color-primary)" />,
      description: "Comprehensive measured building survey sets showing exact existing conditions alongside proposed alterations.",
      features: [
        "Existing floor plans & existing exterior elevations (all facades)",
        "Proposed detailed floor plans with room dimensions and uses",
        "Proposed elevations detailing materials, finishes & roof pitches",
        "Detailed cross-sections showing ceiling heights & foundation levels",
        "Street scene elevations demonstrating harmony with neighbours"
      ]
    },
    {
      title: "Tourism, Holiday Let & Commercial Layouts",
      icon: <Compass size={36} color="var(--color-primary)" />,
      description: "Strategic commercial and leisure drawings designed to maximise revenue while overcoming local planning constraints.",
      features: [
        "Holiday let conversions & change-of-use internal space planning",
        "Glamping masterplans: pods, shepherd huts, chalets & safari tents",
        "Access tracks, utility points & communal facility layouts",
        "Commercial retail shopfronts & office-to-residential transitions",
        "TAN 6 rural enterprise holding plans & agricultural buildings"
      ]
    },
    {
      title: "Certificates of Lawfulness & Retrospective Plans",
      icon: <FileCheck size={36} color="var(--color-primary)" />,
      description: "Accurate 'as-built' and evidentiary drawings required to regularise unauthorised works or secure legal immunity.",
      features: [
        "Measured 'as-built' drawings for retrospective applications",
        "Historical comparison plans to prove 4-year or 10-year continuous use",
        "Permitted Development fallback verification drawings",
        "Boundary dispute and lawful curtilage verification drawings",
        "Compliance plans for discharge or variation of planning conditions"
      ]
    }
  ];

  const comparisonData = [
    {
      feature: "Primary Design Focus",
      standard: "Focuses on drafting aesthetics or basic building regulation dimensions.",
      cambrian: "Balances aesthetic ambition with strict Welsh planning policy compliance from day one."
    },
    {
      feature: "Planning Officer Insight",
      standard: "Typically zero local authority planning experience; learns of policy traps only after refusal.",
      cambrian: "Reviewed by former Local Authority Planning Officers with over 19 years of Welsh planning experience."
    },
    {
      feature: "Validation & Red Line Compliance",
      standard: "High risk of invalidation due to incorrect scales, missing north arrows, or flawed red line boundaries.",
      cambrian: "100% statutory validation compliant, guaranteeing zero administrative delays at registration."
    },
    {
      feature: "Amenity & Privacy Protection",
      standard: "Often overlooked; frequently triggers neighbour objections for overlooking or loss of daylight.",
      cambrian: "Pre-assessed against SPG 45-degree angle rules, daylight distribution, and overlooking distances."
    },
    {
      feature: "Supporting Statements Integration",
      standard: "Drawings are created in isolation, requiring expensive third-party adjustments later.",
      cambrian: "Seamlessly integrated with Design & Access Statements, Green Infrastructure Statements (PPW 12), and flood assessments."
    },
    {
      feature: "Overall Approval Probability",
      standard: "Vulnerable to planning officer objections, costly redesigns, or outright refusal.",
      cambrian: "Optimised to eliminate planning red flags before submission, giving you the best possible chance of approval."
    }
  ];

  const processSteps = [
    {
      title: "Initial Consultation & Feasibility",
      description: "We discuss your project objectives, explore your permitted development options, evaluate site constraints, and identify key local planning policies across North Wales."
    },
    {
      title: "Measured Survey & Associate Drafting",
      description: "Our experienced architectural associates conduct a comprehensive measured survey of your property, drafting initial concept floor plans and spatial layouts tailored to your brief."
    },
    {
      title: "Planning Policy Review & Refinement",
      description: "Cambrian Planning conducts a rigorous policy audit of the draft drawings, refining window placements, massing, roof heights, and access splays to neutralise potential council objections."
    },
    {
      title: "Final Submission-Ready Drawing Pack",
      description: "You receive high-resolution, fully scaled, planning-compliant drawing sets (site, block, floor plans, elevations, sections) ready for statutory submission with your planning application."
    }
  ];

  const faqs = [
    {
      title: "What types of plans can Cambrian Planning arrange to be drawn?",
      content: "Together with our trusted architectural associates, we arrange and provide a complete spectrum of drawings. This includes house plans for domestic extensions, bespoke new-build houses, replacement dwellings, barn conversions, 1:1250 Ordnance Survey location plans, 1:500 detailed site and block plans, existing and proposed floor plans, four-aspect exterior elevations, cross-sections, glamping/holiday let site layouts, commercial change-of-use plans, and retrospective 'as-built' drawings."
    },
    {
      title: "Why is having our plans reviewed by Cambrian Planning so crucial?",
      content: "Many architectural draftsmen and designers create beautiful plans that are technically buildable, but they often lack insight into how local authority planning officers and PEDW Inspectors evaluate applications. In Wales, applications are routinely refused because drawings breach local Supplementary Planning Guidance (SPG) on overlooking, daylight/sunlight (the 45-degree rule), excessive ridge height, inappropriate materials, or inadequate parking turning geometry. Because our team has 19+ years of local planning authority experience, we review and refine every drawing before submission, removing refusal triggers and giving your scheme the best possible chance of approval."
    },
    {
      title: "What scale do site and block plans need to be for Welsh councils?",
      content: "Local Planning Authorities across Wales (such as Gwynedd, Anglesey, Conwy, Denbighshire, Flintshire, Wrexham, and Eryri National Park) enforce strict statutory requirements. A Location Plan must typically be at a scale of 1:1250 or 1:2500 on an up-to-date Ordnance Survey base with an accurate red line application boundary and blue line for contiguous land ownership. A Block Plan or Site Layout must typically be at 1:500 or 1:200 showing precise distances to site boundaries, access points, and parking layouts. We ensure all plans are drawn to exact statutory scales to prevent immediate invalidation."
    },
    {
      title: "I already have preliminary sketches or an architect's draft. Can you review them?",
      content: "Yes, absolutely. If you already have initial ideas, hand sketches, or draft drawings prepared by an architect, we can carry out a Pre-Submission Planning Review. We will audit the drawings against relevant Local Development Plan policies, identify any red flags (such as overlooking or highways conflicts), and advise on specific design modifications to ensure officer support."
    },
    {
      title: "Do your drawings coordinate with Green Infrastructure and SuDS (SAB) rules?",
      content: "Yes. Under Planning Policy Wales (PPW 12), Green Infrastructure is a mandatory consideration for almost all planning applications. In addition, new developments over 100 sqm require Sustainable Drainage Approval (SAB). Our associates and planners coordinate layouts so that soft landscaping, SuDS attenuation, permeable paving, native hedges, and ecological enhancements are purposefully integrated into the site plans, avoiding costly revisions later."
    },
    {
      title: "Can Cambrian Planning manage the full planning application after the plans are drawn?",
      content: "Yes. In fact, providing an end-to-end service is our core specialty. Once your plans are drawn and reviewed, we can prepare all required supporting statements (such as Design & Access Statements, Green Infrastructure Statements, and Planning Statements), submit the application via Planning Applications Wales, and act as your sole agent negotiating directly with planning officers until a decision is reached."
    }
  ];

  return (
    <>
      <SEO
        title="Plans Drawn Wales | Architectural, House & Site Plans | Cambrian Planning"
        description="Professional architectural, house, and site plans prepared and expert-reviewed for planning approval in Wales. We coordinate drawings with trusted associates and review them to ensure the best chance of permission."
        keywords="Plans drawn Wales, architectural plans Wales, house plans planning permission, site plans 1:500 1:1250, floor plans elevations Wales, Cambrian Planning architectural drawings, planning approval drawings, house extension drawings Wales"
      />

      <PageHeader
        title="Architectural, House & Site Plans Drawn"
        subtitle="Accurate, high-quality plans prepared with trusted associates and reviewed by former local authority planning officers to ensure the best chance of planning approval."
        backgroundImage="url('/assets/images/plans-scaled.jpg')"
      />

      {/* Trust & Value Proposition Hero Callout */}
      <section style={{ backgroundColor: '#ffffff', padding: '60px 0 40px 0' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: '#f8fafc',
            borderLeft: '6px solid var(--color-primary)',
            padding: '35px 30px',
            borderRadius: '0 12px 12px 0',
            boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
            marginBottom: '30px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
              <div style={{
                backgroundColor: 'rgba(97, 137, 208, 0.15)',
                padding: '10px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <ShieldCheck size={32} color="var(--color-primary)" />
              </div>
              <h2 style={{ fontSize: '1.8rem', color: '#1e293b', margin: 0 }}>
                Plans Designed and Reviewed for Approval
              </h2>
            </div>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4b5563', marginBottom: '15px' }}>
              Every successful development begins with the right set of plans. However, one of the most common pitfalls in the planning system is submitting drawings that look great on paper but run headfirst into local authority planning objections—such as overlooking neighbouring gardens, violating daylight angles, excessive bulk, or failing strict statutory validation checks.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4b5563', margin: 0 }}>
              <strong>Cambrian Planning provides the complete solution:</strong> We arrange the preparation of architectural, house, and site plans through our network of skilled associates, and critically, <strong>we review and refine every plan from a planning officer's perspective</strong> before submission. This dual-layered approach ensures your scheme complies with local and national planning policies, giving your project the highest possible chance of approval.
            </p>
          </div>
        </div>
      </section>

      {/* Split Section 1: The Advantage */}
      <SplitSection
        title="Drawings Crafted for Approval, Not Just Construction"
        subtitle="The Cambrian Planning Advantage"
        content={
          <>
            <p style={{ marginBottom: '18px' }}>
              Many people assume that any architectural designer or CAD draftsman can prepare drawings for planning permission. While they excel at structural and spatial layouts, draftsmen often work without in-depth knowledge of local planning policy, Supplementary Planning Guidance (SPG), and planning officer precedents.
            </p>
            <p style={{ marginBottom: '18px' }}>
              The unfortunate outcome is often months of wasted time: applications returned as invalid, contentious neighbour objections, or council refusals that require expensive revisions and appeals.
            </p>
            <p>
              At Cambrian Planning, we bridge this critical gap. With over <strong>19 years of local authority planning experience</strong>, we review the plans arranged by our associates to anticipate what the planning officer will scrutinise. We refine window placements to safeguard privacy, adjust roof profiles to maintain daylight, and ensure site boundaries and parking layouts meet strict council criteria before the application is lodged.
            </p>
          </>
        }
        imageSrc="/assets/images/Plans.jpg"
        imageAlt="Architectural house plans and blueprints being reviewed on a drafting table"
      />

      {/* Scope of Plans We Arrange & Prepare */}
      <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <p style={{ color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
              Comprehensive Architectural &amp; Drawing Services
            </p>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '15px' }}>
              Types of Plans We Arrange &amp; Provide
            </h2>
            <p style={{ color: '#666', fontSize: '1.15rem', maxWidth: '800px', margin: '0 auto' }}>
              From initial sketch schemes to full statutory planning packs, we coordinate every drawing your project requires across North Wales.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {planCategories.map((cat, idx) => (
              <div 
                key={idx}
                className="plans-card"
              >
                <div style={{ marginBottom: '20px' }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary)', marginBottom: '12px' }}>
                  {cat.title}
                </h3>
                <p style={{ color: '#555', fontSize: '0.98rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  {cat.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 'auto 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {cat.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: '#444' }}>
                      <CheckCircle2 size={18} color="var(--color-button)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/contact-us" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1rem' }}>
              Request a Drawing Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison: Draftsman vs Cambrian Planning & Associates */}
      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <p style={{ color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
              Why Our Review Changes Everything
            </p>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '15px' }}>
              Standard Drawings vs. Cambrian Planning Reviewed Plans
            </h2>
            <p style={{ color: '#666', fontSize: '1.15rem', maxWidth: '800px', margin: '0 auto' }}>
              See why leading developers and homeowners across North Wales trust Cambrian Planning to review and coordinate their architectural drawings.
            </p>
          </div>

          <div className="plans-comparison-container">
            <div className="plans-comparison-scroll">
              <div className="plans-comparison-table">
                <div className="plans-table-header">
                  <div>Planning Criteria</div>
                  <div>Standard Draftsman Alone</div>
                  <div style={{ color: 'var(--color-secondary)' }}>Cambrian Planning + Associates</div>
                </div>

                {comparisonData.map((row, idx) => (
                  <div key={idx} className="plans-table-row">
                    <div style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '0.98rem' }}>
                      {row.feature}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#64748b', fontSize: '0.92rem', lineHeight: '1.5' }}>
                      <XCircle size={18} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{row.standard}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#1e293b', fontSize: '0.95rem', fontWeight: 500, lineHeight: '1.5' }}>
                      <CheckCircle2 size={18} color="var(--color-button)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{row.cambrian}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <section className="bg-parallax" style={{ backgroundImage: "url('/assets/images/plans2-scaled.jpg')", padding: '140px 0' }}>
        <div className="bg-overlay"></div>
        <div className="container text-center bg-content">
          <h2 className="parallax-title" style={{ fontSize: '38px', color: '#fff', display: 'inline-block', borderBottom: '4px solid #FF3F5F', paddingBottom: '15px' }}>
            ACCURATE PLANS. EXPERT REVIEW. HIGHEST APPROVAL CHANCES.
          </h2>
          <p style={{ color: '#fff', fontSize: '1.2rem', marginTop: '20px', maxWidth: '750px', margin: '20px auto 0' }}>
            We cover Anglesey, Gwynedd, Conwy, Denbighshire, Flintshire, Wrexham, and Eryri (Snowdonia) National Park.
          </p>
        </div>
      </section>

      {/* Split Section 2: Statutory Site Plans */}
      <SplitSection
        title="Site &amp; Block Plans: Avoiding the #1 Cause of Application Invalidation"
        subtitle="Statutory Welsh Validation Requirements"
        content={
          <>
            <p style={{ marginBottom: '18px' }}>
              Did you know that over 40% of delays at local planning authorities stem from defective site and location plans? In Wales, councils will immediately invalidate an application if the red line boundary does not join the public adopted highway, if blue lines are omitted from adjoining land, or if plans are drawn to non-standard scales.
            </p>
            <p style={{ marginBottom: '18px' }}>
              Our site plans are drawn strictly to Ordnance Survey guidelines at 1:1250 or 1:2500, with accompanying 1:500 or 1:200 block plans that detail visibility splays, vehicle turning circles, and boundary ownership.
            </p>
            <p>
              Whether you need drawings for a domestic extension or a complex glamping site masterplan, we ensure your drawings sail through the validation stage without delay.
            </p>
          </>
        }
        imageSrc="/assets/images/das_masterplan.png"
        imageAlt="Detailed architectural site and block plan masterplan drawing"
        reverse={true}
      />

      {/* Process Timeline */}
      <ProcessTimeline
        title="Our 4-Stage Drawing &amp; Review Process"
        steps={processSteps}
      />

      {/* Quick Action CTA Banner */}
      <section style={{ backgroundColor: '#1e293b', padding: '60px 0', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: 'rgba(97, 206, 112, 0.2)', padding: '8px 20px', borderRadius: '50px', marginBottom: '20px' }}>
            <Sparkles size={20} color="var(--color-button)" />
            <span style={{ color: 'var(--color-button)', fontWeight: 600, fontSize: '0.95rem' }}>
              Free Initial Drawing Feasibility Check
            </span>
          </div>

          <h2 style={{ fontSize: '2.4rem', color: '#ffffff', marginBottom: '15px' }}>
            Need Architectural, House or Site Plans Drawn?
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#94a3b8', lineHeight: '1.8', maxWidth: '720px', margin: '0 auto 30px auto' }}>
            Speak directly with our team. Whether you need initial layout advice, plans prepared from scratch, or an independent review of drawings already prepared, we are here to ensure your scheme succeeds.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a 
              href="tel:01407840522" 
              className="btn-primary" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '16px 32px' }}
            >
              <PhoneCall size={20} />
              Call 01407 840 522
            </a>
            <a 
              href="#contact" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '2px solid #ffffff',
                borderRadius: '4px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#1e293b';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              Send an Enquiry <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <p style={{ color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
              Common Questions
            </p>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>
              Frequently Asked Questions About Plans &amp; Drawings
            </h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>
              Find out how our architectural drawing and pre-submission planning review process works.
            </p>
          </div>

          <Accordion items={faqs} />
        </div>
      </section>

      {/* Contact Form Section */}
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default PlansDrawn;
