import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import './Footer.css';

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`footer-col ${isOpen ? 'is-open' : ''}`}>
      <h4 className="footer-title" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span className="mobile-only-icon">
          <ChevronDown size={18} />
        </span>
      </h4>
      <div className="footer-links-wrapper">
        <ul className="footer-links">
          {children}
        </ul>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          
          <div className="footer-col brand-col no-accordion">
            <img 
              src="/assets/images/Cambrian_Planning_Vector_AI_transparent.png" 
              alt="Cambrian Planning Logo" 
              className="footer-brand-logo"
            />
            <p className="footer-description">
              Expert planning and development consultants navigating the complexities of the Welsh planning system with local authority experience.
            </p>
            <div className="footer-contact-info">
              <p><strong>Tel:</strong> <a href="tel:07502089743">07502 089 743</a></p>
              <p><strong>Email:</strong> <a href="mailto:mark@cambrianplanning.co.uk">mark@cambrianplanning.co.uk</a></p>
            </div>
          </div>

          <FooterColumn title="Planning Services">
            <li><Link to="/services/planning-applications">Planning Applications</Link></li>
            <li><Link to="/services/holiday-let-planning-permission">Holiday Let Planning</Link></li>
            <li><Link to="/services/agricultural-forestry-tie-removal">Agricultural Tie Removal</Link></li>
            <li><Link to="/services/rural-enterprise-dwellings-tan-6">Rural Enterprise Dwellings</Link></li>
            <li><Link to="/services/listed-building-consent-conservation">Listed Building Consent</Link></li>
            <li><Link to="/services/planning-appeals">Planning Appeals</Link></li>
            <li><Link to="/services/retrospective-planning-and-enforcement">Retrospective Planning</Link></li>
            <li><Link to="/services/green-infrastructure-statements">Green Infrastructure</Link></li>
            <li><Link to="/services/design-and-access-statements">Design & Access Statements</Link></li>
            <li><Link to="/services/certificates-of-lawfulness">Certificates of Lawfulness</Link></li>
            <li><Link to="/services/flood-risk-assessments-tan-15">Flood Risk Assessments</Link></li>
          </FooterColumn>

          <FooterColumn title="Areas We Cover">
            <li><Link to="/areas-we-cover/north-wales">North Wales</Link></li>
            <li><Link to="/areas-we-cover/isle-of-anglesey">Isle of Anglesey</Link></li>
            <li><Link to="/areas-we-cover/gwynedd">Gwynedd</Link></li>
            <li><Link to="/areas-we-cover/conwy">Conwy</Link></li>
            <li><Link to="/areas-we-cover/denbighshire">Denbighshire</Link></li>
            <li><Link to="/areas-we-cover/flintshire">Flintshire</Link></li>
            <li><Link to="/areas-we-cover/wrexham">Wrexham</Link></li>
            <li><Link to="/areas-we-cover/eryri-snowdonia-national-park">Eryri National Park</Link></li>
          </FooterColumn>

          <FooterColumn title="Insights & Company">
            <li><Link to="/insights/article-4-direction-gwynedd-holiday-lets-explained">Gwynedd Article 4 Guide</Link></li>
            <li><Link to="/insights/converting-a-barn-in-wales-why-class-q-doesnt-apply">Barn Conversions in Wales</Link></li>
            <li><Link to="/insights/how-to-remove-an-agricultural-tie-in-wales">Remove Agricultural Tie</Link></li>
            <li><Link to="/insights/do-i-need-a-green-infrastructure-statement-wales">GI Statement Guide</Link></li>
            <li><Link to="/insights/how-to-appeal-to-pedw-wales">How to Appeal (PEDW)</Link></li>
            {/* <li><Link to="/case-studies">Case Studies</Link></li> */}
            <li><Link to="/contact-us">Contact Us</Link></li>
          </FooterColumn>
          
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-grid">
            <div className="footer-bottom-col left">
              <p>&copy; {new Date().getFullYear()} Cambrian Planning and Development Ltd. All rights reserved.</p>
            </div>
            <div className="footer-bottom-col center">
              <p>Website by <a href="https://clic.cymru" target="_blank" rel="noopener noreferrer">Clic Cymru</a></p>
            </div>
            <div className="footer-bottom-col right">
              <Link to="/privacy-policy" className="footer-bottom-link">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
