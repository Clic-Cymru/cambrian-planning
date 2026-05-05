import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import ServiceCards from '../components/ui/ServiceCards';
import { Leaf, HardHat, PenTool, Map } from 'lucide-react';

const Wrexham: React.FC = () => {
  const wrexhamServices = [
    {
      title: "Green Infrastructure",
      description: "Ensuring your major or minor development complies with the latest PPW 12 'step-wise' requirements for GI.",
      linkTo: "/services/green-infrastructure-statements",
      icon: <Leaf size={40} color="var(--color-primary)" />
    },
    {
      title: "Major Developments",
      description: "Coordinating complex planning applications and negotiating effectively with Wrexham Council.",
      linkTo: "/services/planning-applications",
      icon: <HardHat size={40} color="var(--color-primary)" />
    },
    {
      title: "Design & Access Statements",
      description: "Creating compelling, policy-led narratives to justify large-scale and sensitive developments in Wrexham.",
      linkTo: "/services/design-and-access-statements",
      icon: <PenTool size={40} color="var(--color-primary)" />
    },
    {
      title: "Rural Planning",
      description: "Assisting with agricultural development, barn conversions, and rural enterprise dwellings in Wrexham's hinterland.",
      linkTo: "/insights/converting-a-barn-in-wales-why-class-q-doesnt-apply",
      icon: <Map size={40} color="var(--color-primary)" />
    }
  ];

  return (
    <>
      <SEO
        title="Planning Consultant Wrexham | Expert Town Planners | Cambrian Planning"
        description="Local planning consultants in Wrexham. We handle complex applications, green infrastructure, and major developments in the Wrexham planning authority area."
        keywords="Planning Consultant Wrexham, Town planner Wrexham, planning permission Wrexham council, Wrexham Local Development Plan"
      />
      <PageHeader
        title="Expert Planning Consultants in Wrexham"
        subtitle="Navigating Wrexham's planning policies to unlock commercial, residential, and rural development."
      />

      <SplitSection
        title="Infrastructure Demands and Phosphates"
        subtitle="Technical Coordination in Wrexham"
        content={
          <>
            <p style={{ marginBottom: '15px' }}>Wrexham's growing status has led to increased demand for housing and commercial space. However, development is frequently stalled by complex infrastructure requirements, strict Green Infrastructure mandates under PPW 12, and the highly challenging issue of phosphate levels in river catchments.</p>
            <p>The River Dee catchment restrictions have placed a moratorium on development in many areas unless nutrient neutrality can be proven. At Cambrian Planning, we coordinate the complex technical assessments required to unblock development in Wrexham. We project manage the submission of comprehensive Green Infrastructure Statements, coordinate nutrient neutrality strategies, and draft the robust Design and Access Statements required for major developments.</p>
          </>
        }
        imageSrc="/assets/images/wrexham_skyline.jpg"
        imageAlt="Wrexham aerial view"
      />

      <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Our Services in Wrexham</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>Policy expertise and technical coordination.</p>
          </div>
          <ServiceCards cards={wrexhamServices} />
        </div>
      </section>

      <Contact />
    </>
  );
};

export default Wrexham;
