import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  return (
    <>
      {/* Intro Parallax Break - All Scopes */}
      <section className="bg-parallax" style={{ backgroundImage: "url('/assets/images/2020/07/plans-scaled.jpg')", padding: '160px 0' }}>
        <div className="bg-overlay"></div>
        <div className="container text-center bg-content">
          <h2 className="parallax-title" style={{ fontSize: '42px', color: '#fff', display: 'inline-block', borderBottom: '4px solid #FF3F5F', paddingBottom: '15px' }}>ALL SCOPES OF PROJECT UNDERTAKEN</h2>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          
          <p className="services-subtitle text-center">
            We cover the whole of the North Wales area from Wrexham to Holyhead and south to Welshpool.
          </p>
          <p className="text-center font-bold mb-4">Our Services include:</p>
          
          <div className="services-row">
            <div className="services-col">
              <p>HOUSING AND WELSH LANGUAGE STATEMENTS</p>
              <p>BUSINESS PLANS FOR BARN CONVERSIONS</p>
              <p>SITE IDENTIFICATION</p>
              <p>PRE-APPLICATION CONSULTATION</p>
              <p>ENFORCEMENT</p>
              <p>DESIGN &amp; ACCESS STATEMENTS</p>
            </div>
            
            <div className="services-col">
              <p>HOUSING AND COMMERCIAL DEVELOPMENTS</p>
              <p>FEASIBILITY STUDIES</p>
              <p>PLANNING APPLICATIONS</p>
              <p>PLANNING APPEALS</p>
              <p>CONSIDERATION OF CONDITIONS</p>
              <p>CERTIFICATES OF LAWFULNESS</p>
              <p>GREEN INFRASTRUCTURE STATEMENTS</p>
            </div>
          </div>
          
          <div className="experience-wrapper text-center">
            <a href="tel:07502089743" className="btn-primary">Call Us</a>
            
            <div className="experience-text mt-5">
              <p>We have experience in dealing with many different types of development and applications such as:</p>
              <ul className="dev-list">
                <li>Residential new builds</li>
                <li>Extensions, HMO's, annexes</li>
                <li>Industrial builds</li>
                <li>Agricultural builds (including dwellings, storage buildings etc.)</li>
                <li>Holiday parks (including static and touring sites, shepherds huts, safari tents, yurts etc.), hotel developments. Conversions to holiday lets</li>
              </ul>
              <p className="mt-4">
                We have established contacts with supporting professionals who are able to offer additional services including architects, ecologists, drainage experts. This enables Cambrian Planning and Development to provide our customers with the full package required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break 1 */}
      <section className="bg-parallax" style={{ backgroundImage: "url('/assets/images/2020/07/plans2-scaled.jpg')", padding: '160px 0' }}>
        <div className="bg-overlay"></div>
        <div className="container text-center bg-content">
          <h2 className="parallax-title" style={{ fontSize: '42px', color: '#fff', display: 'inline-block', borderBottom: '4px solid #FF3F5F', paddingBottom: '15px' }}>RESIDENTIAL &amp; COMMERCIAL PROJECTS</h2>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <div className="divider"></div>
          
          <div className="about-row">
            <div className="about-text-col">
              <p><strong>Our Principal, Mark Davies:</strong></p>
              <p>After 17 years with Anglesey County Council (ACC), where I served as a Senior Planning Officer and Planning Team Leader, I elected to bring my expertise and experience to bear in a new consultancy venture and planning practise: Cambrian Planning and Development Ltd.</p>
              <p>Prior to my time at Anglesey I served in both public and private sectors.</p>
              <p>Initially with the London Borough of Richmond upon Thames as a Planning Appeals Officer and following that with the Town Planning Consultancy in Central London.</p>
              <p>Later returning South Wales as an independent planning consultant.</p>
              <p>During my time at ACC I dealt with a comprehensive range of planning applications and project types. Including flagship projects such as Coleg Menai, the Llangefni link road, Anglesey solar array and large housing developments.</p>
            </div>
            
            <div className="about-image-col">
              <img src="/assets/images/2020/07/mark-davies.jpg" alt="Mark Davies" className="principal-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break 2 - Quote */}
      <section className="quote-section">
        <div className="container text-center">
          <div className="quote-icon">
            <svg viewBox="0 0 512 512" width="60" height="60" fill="var(--color-primary)"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg>
          </div>
          <p className="quote-text">My direct experience in local authority planning and development projects is extensive.</p>
          <p className="quote-text">In bringing my skills to the private sector I offer unique consulting advantages for minor to major development projects</p>
        </div>
      </section>
      
      {/* Call us NOW on Parallax 3 */}
      <section className="bg-parallax" style={{ backgroundImage: "url('/assets/images/2020/07/plans3-scaled.jpg')", padding: '160px 0' }}>
        <div className="bg-overlay" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}></div>
        <div className="container text-center bg-content">
          <h2 className="parallax-title" style={{ fontSize: '42px', color: '#fff', display: 'inline-block', borderBottom: '4px solid #FF3F5F', paddingBottom: '15px' }}>Call us NOW on <a href="tel:07502089743" style={{color: 'inherit', textDecoration: 'underline'}}>07502 089 743</a> for a completely no-obligation chat about your plans</h2>
        </div>
      </section>
    </>
  );
};

export default Services;
