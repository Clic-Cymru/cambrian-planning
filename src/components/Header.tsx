import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ChevronDown, ChevronUp, X, Menu } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const toggleSubMenu = (menu: string) => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveSubMenu(null);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Logo Section */}
        <Link to="/" className="header-logo-link" onClick={closeMenu}>
          <img 
            src="/assets/images/Cambrian_Planning_Vector_AI_transparent.png" 
            alt="Cambrian Planning" 
            className="header-logo-img"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link to="/" className="nav-link">Home</Link>
          
          <div className="nav-dropdown">
            <span className="nav-link">Services</span>
            <div className="dropdown-content">
              <div className="dropdown-inner">
                <Link to="/services/holiday-let-planning-permission">Holiday Let Planning</Link>
                <Link to="/services/planning-applications">Planning Applications</Link>
                <Link to="/services/agricultural-forestry-tie-removal">Agricultural Tie Removal</Link>
                <Link to="/services/rural-enterprise-dwellings-tan-6">TAN 6 Dwellings</Link>
                <Link to="/services/listed-building-consent-conservation">Listed Building Consent</Link>
                <Link to="/services/green-infrastructure-statements">Green Infrastructure</Link>
                <Link to="/services/design-and-access-statements">Design & Access Statements</Link>
                <Link to="/services/retrospective-planning-and-enforcement">Retrospective Planning</Link>
                <Link to="/services/planning-appeals">Planning Appeals</Link>
                <Link to="/services/certificates-of-lawfulness">Certificates of Lawfulness</Link>
                <Link to="/services/flood-risk-assessments-tan-15">Flood Risk Assessments</Link>
              </div>
            </div>
          </div>

          <div className="nav-dropdown">
            <span className="nav-link">Locations</span>
            <div className="dropdown-content">
              <div className="dropdown-inner">
                <Link to="/areas-we-cover/north-wales">North Wales</Link>
                <Link to="/areas-we-cover/gwynedd">Gwynedd</Link>
                <Link to="/areas-we-cover/conwy">Conwy</Link>
                <Link to="/areas-we-cover/denbighshire">Denbighshire</Link>
                <Link to="/areas-we-cover/flintshire">Flintshire</Link>
                <Link to="/areas-we-cover/wrexham">Wrexham</Link>
                <Link to="/areas-we-cover/isle-of-anglesey">Isle of Anglesey</Link>
                <Link to="/areas-we-cover/eryri-snowdonia-national-park">Eryri (Snowdonia)</Link>
              </div>
            </div>
          </div>

          <div className="nav-dropdown">
            <span className="nav-link">Insights</span>
            <div className="dropdown-content">
              <div className="dropdown-inner">
                <Link to="/insights/article-4-direction-gwynedd-holiday-lets-explained">Gwynedd Article 4 Quashed</Link>
                <Link to="/insights/converting-a-barn-in-wales-why-class-q-doesnt-apply">Barn Conversions Wales</Link>
                <Link to="/insights/how-to-remove-an-agricultural-tie-in-wales">Remove Agricultural Tie</Link>
                <Link to="/insights/do-i-need-a-green-infrastructure-statement-wales">GI Statement Guide</Link>
                <Link to="/insights/how-to-appeal-to-pedw-wales">Appeal to PEDW</Link>
              </div>
            </div>
          </div>

          {/* <Link to="/case-studies" className="nav-link">Case Studies</Link> */}
          <Link to="/contact-us" className="nav-link">Contact</Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          className="mobile-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <img 
                src="/assets/images/Cambrian_Planning_Vector_AI_transparent.png" 
                alt="Cambrian Planning" 
                className="mobile-menu-logo"
              />
            </div>

            <nav className="mobile-nav">
              <Link to="/" className="mobile-nav-link" onClick={closeMenu}>Home</Link>
              
              <div className="mobile-nav-item">
                <button className="mobile-nav-toggle" onClick={() => toggleSubMenu('services')}>
                  Services {activeSubMenu === 'services' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                <div className={`mobile-sub-menu ${activeSubMenu === 'services' ? 'open' : ''}`}>
                  <Link to="/services/planning-applications" onClick={closeMenu}>Planning Applications</Link>
                  <Link to="/services/holiday-let-planning-permission" onClick={closeMenu}>Holiday Let Planning</Link>
                  <Link to="/services/agricultural-forestry-tie-removal" onClick={closeMenu}>Agricultural Tie Removal</Link>
                  <Link to="/services/rural-enterprise-dwellings-tan-6" onClick={closeMenu}>TAN 6 Dwellings</Link>
                  <Link to="/services/listed-building-consent-conservation" onClick={closeMenu}>Listed Building Consent</Link>
                  <Link to="/services/planning-appeals" onClick={closeMenu}>Planning Appeals</Link>
                  <Link to="/services/retrospective-planning-and-enforcement" onClick={closeMenu}>Retrospective Planning</Link>
                  <Link to="/services/green-infrastructure-statements" onClick={closeMenu}>Green Infrastructure</Link>
                  <Link to="/services/design-and-access-statements" onClick={closeMenu}>Design & Access</Link>
                  <Link to="/services/certificates-of-lawfulness" onClick={closeMenu}>Certificates of Lawfulness</Link>
                  <Link to="/services/flood-risk-assessments-tan-15" onClick={closeMenu}>Flood Risk Assessments</Link>
                </div>
              </div>

              <div className="mobile-nav-item">
                <button className="mobile-nav-toggle" onClick={() => toggleSubMenu('locations')}>
                  Locations {activeSubMenu === 'locations' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                <div className={`mobile-sub-menu ${activeSubMenu === 'locations' ? 'open' : ''}`}>
                  <Link to="/areas-we-cover/north-wales" onClick={closeMenu}>North Wales</Link>
                  <Link to="/areas-we-cover/isle-of-anglesey" onClick={closeMenu}>Isle of Anglesey</Link>
                  <Link to="/areas-we-cover/gwynedd" onClick={closeMenu}>Gwynedd</Link>
                  <Link to="/areas-we-cover/conwy" onClick={closeMenu}>Conwy</Link>
                  <Link to="/areas-we-cover/denbighshire" onClick={closeMenu}>Denbighshire</Link>
                  <Link to="/areas-we-cover/flintshire" onClick={closeMenu}>Flintshire</Link>
                  <Link to="/areas-we-cover/wrexham" onClick={closeMenu}>Wrexham</Link>
                  <Link to="/areas-we-cover/eryri-snowdonia-national-park" onClick={closeMenu}>Eryri (Snowdonia)</Link>
                </div>
              </div>

              <div className="mobile-nav-item">
                <button className="mobile-nav-toggle" onClick={() => toggleSubMenu('insights')}>
                  Insights {activeSubMenu === 'insights' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                <div className={`mobile-sub-menu ${activeSubMenu === 'insights' ? 'open' : ''}`}>
                  <Link to="/insights/article-4-direction-gwynedd-holiday-lets-explained" onClick={closeMenu}>Article 4 Guide</Link>
                  <Link to="/insights/converting-a-barn-in-wales-why-class-q-doesnt-apply" onClick={closeMenu}>Barn Conversions</Link>
                  <Link to="/insights/how-to-remove-an-agricultural-tie-in-wales" onClick={closeMenu}>Agricultural Tie</Link>
                  <Link to="/insights/do-i-need-a-green-infrastructure-statement-wales" onClick={closeMenu}>GI Statement Guide</Link>
                  <Link to="/insights/how-to-appeal-to-pedw-wales" onClick={closeMenu}>Appeal to PEDW</Link>
                </div>
              </div>

              {/* <Link to="/case-studies" className="mobile-nav-link" onClick={closeMenu}>Case Studies</Link> */}
              <Link to="/contact-us" className="mobile-nav-link" onClick={closeMenu}>Contact</Link>
            </nav>

            <div className="mobile-menu-footer">
              <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(0,0,0,0.05)', margin: '20px 0' }}></div>
              <p className="contact-label">Ready to discuss your project?</p>
              <div className="mobile-contact-buttons">
                <a href="tel:07502089743" className="mobile-contact-btn tel">
                  <Phone size={18} /> 07502 089 743
                </a>
                <a href="mailto:mark@cambrianplanning.co.uk" className="mobile-contact-btn email">
                  <Mail size={18} /> Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
