import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import ServiceCards from '../components/ui/ServiceCards';
import { MapPin, PenTool, Home, Landmark } from 'lucide-react';

const Eryri: React.FC = () => {
  const eryriServices = [
    {
      title: "Holiday Let Planning",
      description: "Navigating the Park Authority's specific and strict controls on tourist accommodation and second homes.",
      linkTo: "/services/holiday-let-planning-permission",
      icon: <MapPin size={40} color="var(--color-primary)" />
    },
    {
      title: "Design & Access Statements",
      description: "Crafting the mandatory, highly detailed design justifications required for development in the National Park.",
      linkTo: "/services/design-and-access-statements",
      icon: <PenTool size={40} color="var(--color-primary)" />
    },
    {
      title: "Barn Conversions",
      description: "Securing permission for the sensitive, conservation-led conversion of traditional rural buildings.",
      linkTo: "/insights/converting-a-barn-in-wales-why-class-q-doesnt-apply",
      icon: <Home size={40} color="var(--color-primary)" />
    },
    {
      title: "Listed Building Consent",
      description: "Managing complex heritage applications for the Park's numerous historic assets.",
      linkTo: "/services/listed-building-consent-conservation",
      icon: <Landmark size={40} color="var(--color-primary)" />
    }
  ];

  return (
    <>
      <SEO
        title="Planning Consultant Eryri (Snowdonia) | Expert Town Planners"
        description="Specialist planning consultants for Eryri National Park. We navigate the National Park Authority's strict conservation, design, and holiday let policies."
        keywords="Planning Consultant Eryri, Town planner Snowdonia National Park, planning permission Eryri, Snowdonia planning consultant"
      />
      <PageHeader
        title="Expert Planning Consultants in Eryri (Snowdonia) National Park"
        subtitle="Unlocking development potential within Wales's most highly protected landscape."
      />

      <SplitSection
        title="The Ultimate Planning Challenge"
        subtitle="Precision and Policy Alignment"
        content={
          <>
            <p style={{ marginBottom: '15px' }}>Eryri (Snowdonia) National Park operates as its own independent Local Planning Authority. It possesses the most restrictive planning environment in North Wales, driven by a statutory duty to conserve and enhance the natural beauty, wildlife, and cultural heritage of the area.</p>
            <p>Standard planning approaches simply will not work here. Stringent controls on design, materials, holiday accommodation, and rural development mean that poorly prepared applications are routinely refused. Success in Eryri requires absolute precision. We specialize in producing the high-level Design and Access Statements required to justify even minor developments, ensuring your proposal perfectly aligns with the Park's conservation objectives.</p>
          </>
        }
        imageSrc="/assets/images/Eryri_landscape_sunset.jpg"
        imageAlt="Eryri National Park landscape"
      />

      <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Our Services in Eryri</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>Absolute precision for highly protected landscapes.</p>
          </div>
          <ServiceCards cards={eryriServices} />
        </div>
      </section>

      <Contact />
    </>
  );
};

export default Eryri;
