import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import Accordion from '../components/ui/Accordion';
import ProcessTimeline from '../components/ui/ProcessTimeline';

const HolidayUsesPlanning: React.FC = () => {
  const holidayTypes = [
    {
      title: "Glamping Pods & Eco-Cabins",
      content: "Glamping continues to be a highly popular diversification strategy for farmers and landowners across Wales. However, local planning authorities closely scrutinise proposals for landscape impact, highway safety, ecological impacts, and sustainability. We secure permissions for luxury pods, timber cabins, and eco-retreats by addressing policy constraints from the outset."
    },
    {
      title: "Holiday Chalet Developments",
      content: "Larger-scale chalet developments require rigorous justification. We navigate the complex policy framework regarding the conversion of land to leisure use, preparing comprehensive landscape character assessments, drainage strategies, and business plans to prove the viability and benefit of your proposed chalet site."
    },
    {
      title: "Caravan Site Licensing & Planning",
      content: "Whether you are establishing a new touring caravan site, extending an existing static caravan park, or seeking a change of use for private land, we guide you through both planning permission and the subsequent Caravan Site Licensing process. We address access, visibility splays, and environmental protection requirements."
    },
    {
      title: "Barn & Building Conversions for Holiday Use",
      content: "Converting traditional stone barns or redundant outbuildings into high-end self-catering holiday accommodation is highly supported in rural Wales, provided it preserves the structural integrity and character of the original building. We manage the design, structural justification, and ecology surveys required."
    },
    {
      title: "Occupancy Conditions & S106 Variations",
      content: "Already have a holiday unit but restricted by a seasonal opening condition or a restrictive Section 106 agreement? We specialise in applying to vary or remove these conditions, allowing you to operate year-round or adapt to modern market requirements."
    }
  ];

  const processSteps = [
    {
      title: "Site Feasibility & Policy Check",
      description: "We review your site's constraints (AONB, landscape designations, ecological designations) and check it against the Local Development Plan (LDP) policies."
    },
    {
      title: "Supporting Studies & Design",
      description: "We coordinate necessary reports (such as landscape impact, ecology, highways, and drainage) and compile a highly detailed planning statement."
    },
    {
      title: "Welsh Policy Alignment",
      description: "We justify the scheme against Planning Policy Wales (PPW), highlighting economic benefits, sustainable tourism, and community/language integration."
    },
    {
      title: "Application Management",
      description: "We submit the application and lead active negotiations with the planning officers to resolve any statutory consultee issues."
    }
  ];

  return (
    <>
      <SEO
        title="Holiday Uses Planning Permission Wales | Pods, Chalets & Caravans | Cambrian Planning"
        description="Specialist planning support for holiday accommodation and glamping developments in Wales. Secure permission for pods, chalets, caravans, and conversions."
        keywords="Holiday uses planning Wales, glamping pod planning permission, holiday chalet planning Wales, caravan park planning permission Wales, barn conversions holiday use"
      />
      <PageHeader
        title="Holiday Uses & Glamping Planning"
        subtitle="Unlocking rural diversification and leisure development potential across Wales."
      />

      <SplitSection
        title="Diversifying into Tourism and Leisure in Wales"
        subtitle="Strategic Planning Advice"
        content={
          <>
            <p style={{ marginBottom: '15px' }}>The tourism and leisure sector in Wales offers substantial opportunities for landowners and rural businesses. However, establishing new holiday uses—whether a single glamping pod, a holiday chalet development, or a full caravan site—requires navigating a complex and highly protective planning framework.</p>
            <p>Welsh planning policy prioritises the preservation of rural landscapes, the protection of native ecology, and highways safety. Simple mistakes in site layout or failing to address environmental policies (like Green Infrastructure or phosphate regulations) will result in immediate refusal. At Cambrian Planning, we use our local authority experience to structure application strategies that highlight economic benefits while fully aligning with strict local policies.</p>
          </>
        }
        imageSrc="/assets/images/welsh_glamping_pods.jpg"
        imageAlt="Luxury glamping pods in a Welsh countryside setting"
      />

      <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Our Holiday Use Services</h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px' }}>Tailored planning solutions to secure planning permission for tourist accommodation.</p>
          </div>
          
          <Accordion items={holidayTypes} />
        </div>
      </section>

      <ProcessTimeline
        title="Our Tourism Planning Process"
        steps={processSteps}
      />

      <Contact />
    </>
  );
};

export default HolidayUsesPlanning;
