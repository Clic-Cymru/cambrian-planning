import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import ServiceCards from '../components/ui/ServiceCards';
import { Tractor, FileText, Home, Mountain } from 'lucide-react';

const Denbighshire: React.FC = () => {
  const denbighshireServices = [
    {
      title: "Rural Enterprise Dwellings",
      description: "Justifying new homes for agricultural and rural workers under the strict criteria of Technical Advice Note 6 (TAN 6).",
      linkTo: "/services/rural-enterprise-dwellings-tan-6",
      icon: <Tractor size={40} color="var(--color-primary)" />
    },
    {
      title: "Agricultural Tie Removals",
      description: "Managing the complex marketing and legal processes required to lift restrictive occupancy conditions (AOCs).",
      linkTo: "/services/agricultural-forestry-tie-removal",
      icon: <FileText size={40} color="var(--color-primary)" />
    },
    {
      title: "Barn Conversions",
      description: "Securing full planning permission for the sensitive conversion of rural buildings, navigating specific Welsh regulations.",
      linkTo: "/insights/converting-a-barn-in-wales-why-class-q-doesnt-apply",
      icon: <Home size={40} color="var(--color-primary)" />
    },
    {
      title: "AONB Development",
      description: "Ensuring proposals in the Clwydian Range meet strict design and landscape criteria to secure planning approval.",
      linkTo: "/services/planning-applications",
      icon: <Mountain size={40} color="var(--color-primary)" />
    }
  ];

  return (
    <>
      <SEO
        title="Planning Consultant Denbighshire | Expert Town Planners | Cambrian Planning"
        description="Local planning consultants in Denbighshire. We navigate the Local Development Plan, from rural enterprise dwellings to commercial developments."
        keywords="Planning Consultant Denbighshire, Town planner Denbighshire, planning permission Denbighshire council, Denbighshire Local Development Plan"
      />
      <PageHeader
        title="Expert Planning Consultants in Denbighshire"
        subtitle="Specialist guidance for rural, residential, and commercial planning in Denbighshire."
      />

      <SplitSection
        title="Balancing Rural Character with Growth"
        subtitle="Strategic Local Planning"
        content={
          <>
            <p style={{ marginBottom: '15px' }}>Denbighshire features a mix of bustling market towns and extensive rural and agricultural land, including the beautiful Clwydian Range and Dee Valley AONB. Development here is heavily scrutinized to ensure it does not detract from the scenic beauty or compromise the viability of agricultural communities.</p>
            <p>Securing planning permission for rural enterprise dwellings (TAN 6) or managing the removal of agricultural ties requires intricate knowledge of the Denbighshire Local Development Plan. We provide the strategic oversight required to unlock development potential, ensuring your application aligns with both local priorities and national Welsh policy.</p>
          </>
        }
        imageSrc="/assets/images/llangollen.webp"
        imageAlt="Llangollen, Denbighshire"
      />

      <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Our Services in Denbighshire</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>Navigating rural development and planning constraints effectively.</p>
          </div>
          <ServiceCards cards={denbighshireServices} />
        </div>
      </section>

      <Contact />
    </>
  );
};

export default Denbighshire;
