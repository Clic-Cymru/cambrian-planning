import React from 'react';
import './Services.css';
import ServiceCards from './ui/ServiceCards';
import SplitSection from './ui/SplitSection';
import { FileText, Home, Tractor, Landmark, Scale, TreePine, Building, PenTool } from 'lucide-react';

const Services: React.FC = () => {
  const homeServices = [
    {
      title: "Planning Applications",
      description: "Full, outline, and householder applications managed from concept to decision across North Wales.",
      linkTo: "/services/planning-applications",
      icon: <FileText size={40} color="var(--color-primary)" />
    },
    {
      title: "Holiday Let Planning",
      description: "Expert navigation of Article 4 directions, Section 106 agreements, and securing CLEUDs.",
      linkTo: "/services/holiday-let-planning-permission",
      icon: <Home size={40} color="var(--color-primary)" />
    },
    {
      title: "Rural & Agricultural",
      description: "Securing TAN 6 rural enterprise dwellings and removing restrictive occupancy conditions.",
      linkTo: "/services/rural-enterprise-dwellings-tan-6",
      icon: <Tractor size={40} color="var(--color-primary)" />
    },
    {
      title: "Heritage & Conservation",
      description: "Detailed Heritage Impact Assessments and Listed Building Consents for historical assets.",
      linkTo: "/services/listed-building-consent-conservation",
      icon: <Landmark size={40} color="var(--color-primary)" />
    },
    {
      title: "Planning Appeals",
      description: "Robust defence against refusals and enforcement notices via Planning and Environment Decisions Wales (PEDW).",
      linkTo: "/services/planning-appeals",
      icon: <Scale size={40} color="var(--color-primary)" />
    },
    {
      title: "Green Infrastructure",
      description: "Robust, highly detailed Green Infrastructure Statements to ensure PPW 12 compliance.",
      linkTo: "/services/green-infrastructure-statements",
      icon: <TreePine size={40} color="var(--color-primary)" />
    },
    {
      title: "Listed Building Consent",
      description: "Bridging the gap between your development goals and strict heritage legislation.",
      linkTo: "/services/listed-building-consent-conservation",
      icon: <Building size={40} color="var(--color-primary)" />
    },
    {
      title: "Design & Access Statements",
      description: "Compelling narratives that justify your design rationale for major developments.",
      linkTo: "/services/design-and-access-statements",
      icon: <PenTool size={40} color="var(--color-primary)" />
    }
  ];

  return (
    <>
      {/* Intro Parallax Break - All Scopes */}
      <section className="bg-parallax" style={{ backgroundImage: "url('/assets/images/plans-scaled.jpg')", padding: '160px 0' }}>
        <div className="bg-overlay"></div>
        <div className="container text-center bg-content">
          <h2 className="parallax-title" style={{ fontSize: '42px', color: '#fff', display: 'inline-block', borderBottom: '4px solid #FF3F5F', paddingBottom: '15px' }}>ALL SCOPES OF PROJECT UNDERTAKEN</h2>
        </div>
      </section>

      <section id="services" className="services-section" style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <h2 className="section-title text-center" style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Our Services</h2>
          <div className="divider"></div>
          
          <p className="services-subtitle text-center" style={{ fontSize: '1.2rem', color: '#555', maxWidth: '800px', margin: '0 auto 40px auto' }}>
            We cover the whole of the North Wales area from Wrexham to Holyhead and south to Welshpool.
          </p>
          
          <ServiceCards cards={homeServices} />
          
          <div className="experience-wrapper text-center" style={{ marginTop: '60px' }}>
            <a href="tel:07502089743" className="btn-primary">Call Us Today</a>
            
            <div className="experience-text mt-5" style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <h3 style={{ marginBottom: '15px', color: 'var(--color-primary)' }}>Proven Success Across North Wales</h3>
              <p style={{ fontStyle: 'italic', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', color: '#555' }}>
                "Cambrian Planning navigated a highly complex Listed Building Consent in Conwy that two previous architects said was impossible. Their understanding of Welsh heritage policy is unmatched."
              </p>
              <p style={{ marginTop: '15px', fontWeight: 'bold', color: 'var(--color-accent)' }}>– Local Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break 1 */}
      <section className="bg-parallax" style={{ backgroundImage: "url('/assets/images/plans2-scaled.jpg')", padding: '160px 0' }}>
        <div className="bg-overlay"></div>
        <div className="container text-center bg-content">
          <h2 className="parallax-title" style={{ fontSize: '42px', color: '#fff', display: 'inline-block', borderBottom: '4px solid #FF3F5F', paddingBottom: '15px' }}>RESIDENTIAL &amp; COMMERCIAL PROJECTS</h2>
        </div>
      </section>

      {/* About Us Section */}
      <SplitSection 
        title="Built on Local Expertise"
        subtitle="About Us"
        content={
          <>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '15px' }}>Our Principal, Mark Davies:</h3>
            <p style={{ marginBottom: '15px' }}>After 17 years with Anglesey County Council (ACC), where I served as a Senior Planning Officer and Planning Team Leader, I elected to bring my expertise and experience to bear in a new consultancy venture and planning practise.</p>
            <p style={{ marginBottom: '15px' }}>Cambrian Planning was established with a singular focus: to provide landowners, developers, and homeowners in North Wales with unparalleled planning expertise. We recognised that the Welsh planning system—with its unique emphasis on sustainable development, the Welsh language, and strict rural protections—required a dedicated, local approach.</p>
            <p style={{ marginBottom: '15px' }}>We do not apply generic, cross-border strategies. We apply deep, regional knowledge.</p>
            <p>The planning process can be opaque, frustrating, and financially draining when handled incorrectly. Our purpose is to remove this uncertainty. We act as your advocates, translating complex legislation into clear, actionable strategies.</p>
          </>
        }
        imageSrc="/assets/images/upscaled_mark-davies.png"
        imageAlt="Mark Davies, Principal Planner"
      />

      {/* Parallax Break 2 - Quote */}
      <section className="quote-section" style={{ backgroundColor: '#2c3e50', padding: '80px 20px', color: '#fff' }}>
        <div className="container text-center">
          <div className="quote-icon" style={{ marginBottom: '30px' }}>
            <svg viewBox="0 0 512 512" width="60" height="60" fill="var(--color-accent)"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg>
          </div>
          <p className="quote-text" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', fontStyle: 'italic', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            My direct experience in local authority planning and development projects is extensive. In bringing my skills to the private sector I offer unique consulting advantages for minor to major development projects.
          </p>
          <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--color-accent)', marginBottom: '15px' }}></div>
             <p style={{ fontSize: '1.2rem', fontWeight: 600, letterSpacing: '1px' }}>Mark Davies, Principal Planner</p>
          </div>
        </div>
      </section>
      
      {/* Call us NOW on Parallax 3 */}
      <section className="bg-parallax" style={{ backgroundImage: "url('/assets/images/plans3-scaled.jpg')", padding: '160px 0' }}>
        <div className="bg-overlay" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}></div>
        <div className="container text-center bg-content">
          <h2 className="parallax-title" style={{ fontSize: '42px', color: '#fff', display: 'inline-block', borderBottom: '4px solid #FF3F5F', paddingBottom: '15px' }}>Call us NOW on <a href="tel:07502089743" style={{color: 'inherit', textDecoration: 'underline'}}>07502 089 743</a> for a completely no-obligation chat about your plans</h2>
        </div>
      </section>
    </>
  );
};

export default Services;
