import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import ServiceCards from '../components/ui/ServiceCards';
import { Waves, Landmark, Building2, Scale } from 'lucide-react';

const Conwy: React.FC = () => {
  const conwyServices = [
    {
      title: "Flood Risk (TAN 15)",
      description: "Navigating the complexities of developing in Conwy's coastal and river flood zones. We project manage Flood Consequences Assessments.",
      linkTo: "/services/flood-risk-assessments-tan-15",
      icon: <Waves size={40} color="var(--color-primary)" />
    },
    {
      title: "Listed Building Consent",
      description: "Securing consents for historic properties, particularly in Llandudno and Conwy town. We draft meticulous Heritage Impact Assessments.",
      linkTo: "/services/listed-building-consent-conservation",
      icon: <Landmark size={40} color="var(--color-primary)" />
    },
    {
      title: "Commercial & Tourism",
      description: "Planning strategies for hotels, leisure facilities, and coastal regeneration projects to boost the local economy.",
      linkTo: "/services/planning-applications",
      icon: <Building2 size={40} color="var(--color-primary)" />
    },
    {
      title: "Enforcement Appeals",
      description: "Defending against enforcement notices issued by Conwy County Borough Council and regularising unauthorised works.",
      linkTo: "/services/retrospective-planning-and-enforcement",
      icon: <Scale size={40} color="var(--color-primary)" />
    }
  ];

  return (
    <>
      <SEO
        title="Planning Consultant Conwy | Expert Town Planners | Cambrian Planning"
        description="Expert planning consultants in Conwy. Specialising in coastal development, flood risk, and listed building consents across Conwy County Borough."
        keywords="Planning Consultant Conwy, Town planner Conwy, planning permission Conwy council, Conwy Local Development Plan"
      />
      <PageHeader
        title="Expert Planning Consultants in Conwy"
        subtitle="We balance coastal regeneration with strict environmental and heritage protections."
      />

      <SplitSection
        title="Navigating Coastal Risks and Heritage Constraints"
        subtitle="Strategic Planning in Conwy"
        content={
          <>
            <p style={{ marginBottom: '15px' }}>Development in Conwy is heavily constrained by two major factors: flood risk and heritage. With extensive coastlines and river valleys, many sites fall within TAN 15 flood zones, prompting immediate objections from Natural Resources Wales if not handled correctly.</p>
            <p>Furthermore, the county's rich history, including the walled town of Conwy (a World Heritage Site) and numerous conservation areas in Llandudno, means unauthorised alterations can lead to severe enforcement action. If your property is within a Conservation Area, your permitted development rights are significantly restricted. Even minor works like replacing windows or erecting a fence may require full planning permission.</p>
          </>
        }
        imageSrc="/assets/images/conwy_coastline.jpg"
        imageAlt="Conwy coastline"
      />

      <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Our Services in Conwy</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>Authoritative guidance tailored to Conwy County Borough.</p>
          </div>
          <ServiceCards cards={conwyServices} />
        </div>
      </section>

      <Contact />
    </>
  );
};

export default Conwy;
