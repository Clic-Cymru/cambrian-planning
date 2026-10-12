import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import ServiceCards from '../components/ui/ServiceCards';
import { MapPin, Mountain, Waves, Building } from 'lucide-react';

const NorthWales: React.FC = () => {
  const northWalesRegions = [
    {
      title: "Gwynedd & Anglesey",
      description: "Managing complex holiday let regulations and agricultural developments across the Joint Local Development Plan area.",
      linkTo: "/areas-we-cover/gwynedd",
      icon: <MapPin size={40} color="var(--color-primary)" />
    },
    {
      title: "Eryri (Snowdonia)",
      description: "Navigating the National Park Authority's strict conservation, design, and rural planning policies.",
      linkTo: "/areas-we-cover/eryri-snowdonia-national-park",
      icon: <Mountain size={40} color="var(--color-primary)" />
    },
    {
      title: "Conwy & Denbighshire",
      description: "Handling coastal planning, listed buildings, and rural enterprise dwellings in diverse landscapes.",
      linkTo: "/areas-we-cover/conwy",
      icon: <Waves size={40} color="var(--color-primary)" />
    },
    {
      title: "Flintshire & Wrexham",
      description: "Facilitating major commercial developments, addressing green infrastructure, and managing retrospective planning.",
      linkTo: "/areas-we-cover/flintshire",
      icon: <Building size={40} color="var(--color-primary)" />
    }
  ];

  return (
    <>
      <SEO 
        title="Planning Consultant North Wales | Expert Town Planners | Cambrian Planning"
        description="Expert planning consultants serving all of North Wales. We navigate local development plans, rural planning, and heritage constraints across the region."
        keywords="Planning Consultant North Wales, Town planner North Wales, planning permission North Wales, Welsh planning consultants"
      />
      <PageHeader 
        title="Expert Planning Consultants in North Wales" 
        subtitle="Unparalleled local expertise to guide your project through the complexities of the Welsh planning system."
      />
      
      <SplitSection 
        title="The Complex Welsh Planning Landscape"
        subtitle="Regional Expertise, Proven Results"
        content={
          <>
            <p style={{ marginBottom: '15px' }}>North Wales presents a diverse and challenging planning environment. From the strict rural protections of Eryri National Park and coastal planning considerations in Conwy, to the evolving agricultural demands across Anglesey and Denbighshire, applying a generic approach to planning here simply does not work.</p>
            <p>Many applicants fail because they rely on generic planning advice, rather than deep knowledge of local planning authorities and Planning Policy Wales (PPW). At Cambrian Planning, we provide the nuanced, regional expertise needed to deliver results across North Wales and before PEDW (Planning and Environment Decisions Wales).</p>
          </>
        }
        imageSrc="/assets/images/north_wales_map.png"
        imageAlt="3D aerial map of North Wales showing areas served"
      />

      <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Our Coverage Across North Wales</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>Deep local knowledge for every planning authority.</p>
          </div>
          <ServiceCards cards={northWalesRegions} />

          {/* Wider Coverage Callout */}
          <div style={{ 
            marginTop: '50px', 
            backgroundColor: '#ffffff', 
            borderRadius: '10px', 
            padding: '35px 30px', 
            borderLeft: '5px solid var(--color-primary)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '12px' }}>
              Coverage Beyond North Wales
            </h3>
            <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: '1.8', margin: 0, maxWidth: '850px', marginLeft: 'auto', marginRight: 'auto' }}>
              While our day-to-day service areas centre on North Wales, Mark can also take on instructions across the <strong>rest of Wales</strong> and <strong>North West England</strong> for certain projects (including planning appeals, complex applications, rural enterprise schemes, and major developments). If your project is outside our regular service areas, please get in touch to discuss how we can assist.
            </p>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default NorthWales;
