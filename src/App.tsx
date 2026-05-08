
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './components/PrivacyPolicy';
import CaseStudies from './pages/CaseStudies';
import ContactPage from './pages/ContactPage';
import HolidayLetPlanning from './pages/HolidayLetPlanning';
import PlanningApplications from './pages/PlanningApplications';
import AgriculturalTieRemoval from './pages/AgriculturalTieRemoval';
import RuralEnterpriseDwellings from './pages/RuralEnterpriseDwellings';
import ListedBuildingConsent from './pages/ListedBuildingConsent';
import GreenInfrastructureStatements from './pages/GreenInfrastructureStatements';
import DesignAndAccessStatements from './pages/DesignAndAccessStatements';
import RetrospectivePlanning from './pages/RetrospectivePlanning';
import PlanningAppeals from './pages/PlanningAppeals';
import CertificatesOfLawfulness from './pages/CertificatesOfLawfulness';
import FloodRiskAssessments from './pages/FloodRiskAssessments';
import Gwynedd from './pages/Gwynedd';
import Conwy from './pages/Conwy';
import BarnConversionsWales from './pages/BarnConversionsWales';
import RemoveAgriculturalTie from './pages/RemoveAgriculturalTie';
import NorthWales from './pages/NorthWales';
import Denbighshire from './pages/Denbighshire';
import Flintshire from './pages/Flintshire';
import Wrexham from './pages/Wrexham';
import Anglesey from './pages/Anglesey';
import Eryri from './pages/Eryri';
import Article4GwyneddExplained from './pages/Article4GwyneddExplained';
import GreenInfrastructureStatementGuide from './pages/GreenInfrastructureStatementGuide';
import AppealPedwWales from './pages/AppealPedwWales';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Contact />
            </>
          } />
          {/* <Route path="/case-studies" element={<CaseStudies />} /> */}
          <Route path="/contact-us" element={<ContactPage />} />
          
          {/* Services */}
          <Route path="/services/holiday-let-planning-permission" element={<HolidayLetPlanning />} />
          <Route path="/services/planning-applications" element={<PlanningApplications />} />
          <Route path="/services/agricultural-forestry-tie-removal" element={<AgriculturalTieRemoval />} />
          <Route path="/services/rural-enterprise-dwellings-tan-6" element={<RuralEnterpriseDwellings />} />
          <Route path="/services/listed-building-consent-conservation" element={<ListedBuildingConsent />} />
          <Route path="/services/green-infrastructure-statements" element={<GreenInfrastructureStatements />} />
          <Route path="/services/design-and-access-statements" element={<DesignAndAccessStatements />} />
          <Route path="/services/retrospective-planning-and-enforcement" element={<RetrospectivePlanning />} />
          <Route path="/services/planning-appeals" element={<PlanningAppeals />} />
          <Route path="/services/certificates-of-lawfulness" element={<CertificatesOfLawfulness />} />
          <Route path="/services/flood-risk-assessments-tan-15" element={<FloodRiskAssessments />} />

          {/* Location Hubs */}
          <Route path="/areas-we-cover/north-wales" element={<NorthWales />} />
          <Route path="/areas-we-cover/gwynedd" element={<Gwynedd />} />
          <Route path="/areas-we-cover/conwy" element={<Conwy />} />
          <Route path="/areas-we-cover/denbighshire" element={<Denbighshire />} />
          <Route path="/areas-we-cover/flintshire" element={<Flintshire />} />
          <Route path="/areas-we-cover/wrexham" element={<Wrexham />} />
          <Route path="/areas-we-cover/isle-of-anglesey" element={<Anglesey />} />
          <Route path="/areas-we-cover/eryri-snowdonia-national-park" element={<Eryri />} />

          {/* Insights */}
          <Route path="/insights/article-4-direction-gwynedd-holiday-lets-explained" element={<Article4GwyneddExplained />} />
          <Route path="/insights/converting-a-barn-in-wales-why-class-q-doesnt-apply" element={<BarnConversionsWales />} />
          <Route path="/insights/how-to-remove-an-agricultural-tie-in-wales" element={<RemoveAgriculturalTie />} />
          <Route path="/insights/do-i-need-a-green-infrastructure-statement-wales" element={<GreenInfrastructureStatementGuide />} />
          <Route path="/insights/how-to-appeal-to-pedw-wales" element={<AppealPedwWales />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
