import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import ServiceCards from '../components/ui/ServiceCards';
import { MapPin, FileText, Waves, Tractor } from 'lucide-react';

const Anglesey: React.FC = () => {
  const angleseyServices = [
    {
      title: "Holiday Let Planning",
      description: "Managing changes of use and securing Certificates of Lawfulness for existing holiday accommodation under the JLDP.",
      linkTo: "/services/holiday-let-planning-permission",
      icon: <MapPin size={40} color="var(--color-primary)" />
    },
    {
      title: "Agricultural Ties",
      description: "Executing the required marketing exercises or CLEUD applications to lift restrictive occupancy conditions.",
      linkTo: "/services/agricultural-forestry-tie-removal",
      icon: <FileText size={40} color="var(--color-primary)" />
    },
    {
      title: "Coastal Development",
      description: "Drafting the necessary design statements to justify development in highly sensitive coastal and AONB areas.",
      linkTo: "/services/planning-applications",
      icon: <Waves size={40} color="var(--color-primary)" />
    },
    {
      title: "Rural Enterprise",
      description: "Securing permission for essential agricultural workers and rural enterprises under TAN 6.",
      linkTo: "/services/rural-enterprise-dwellings-tan-6",
      icon: <Tractor size={40} color="var(--color-primary)" />
    }
  ];

  return (
    <>
      <SEO
        title="Planning Consultant Isle of Anglesey | Town Planners | Cambrian Planning"
        description="Expert planning consultants serving the Isle of Anglesey. We specialise in holiday let planning, agricultural ties, and coastal development under the JLDP."
        keywords="Planning Consultant Anglesey, Town planner Isle of Anglesey, planning permission Anglesey council, Anglesey Joint Local Development Plan"
      />
      <PageHeader
        title="Expert Planning Consultants on the Isle of Anglesey"
        subtitle="Navigating the Joint Local Development Plan to protect and enhance Anglesey's unique landscape."
      />

      <SplitSection
        title="Tourism Pressures and Coastal Protections"
        subtitle="Specialized Knowledge of the JLDP"
        content={
          <>
            <p style={{ marginBottom: '15px' }}>The Isle of Anglesey (Ynys Môn) shares its Joint Local Development Plan (JLDP) with Gwynedd, meaning it operates under some of the most rigorous planning policies in Wales. The island's popularity as a tourist destination places immense pressure on housing and infrastructure.</p>
            <p>Consequently, applications for holiday lets, coastal developments, and even rural agricultural dwellings are subjected to intense scrutiny. Almost the entire coastline is an Area of Outstanding Natural Beauty (AONB), severely restricting permitted development rights. We provide the deep, specialized knowledge required to succeed, constructing highly detailed, policy-compliant applications that maximize your chances of approval.</p>
          </>
        }
        imageSrc="/assets/images/llanddwyn.jpg"
        imageAlt="Llanddwyn beach, Anglesey"
      />

      <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Our Services on Anglesey</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>Navigating the strict JLDP requirements.</p>
          </div>
          <ServiceCards cards={angleseyServices} />
        </div>
      </section>

      <Contact />
    </>
  );
};

export default Anglesey;
