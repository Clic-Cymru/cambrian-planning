import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import SplitSection from '../components/ui/SplitSection';
import ProcessTimeline from '../components/ui/ProcessTimeline';

const GreenInfrastructureStatements: React.FC = () => {
  const stepWiseProcess = [
    {
      title: "Avoid",
      description: "Development must first seek to avoid negative impacts on Green Infrastructure and biodiversity."
    },
    {
      title: "Minimise",
      description: "If impacts are unavoidable, the development design must be modified to minimise those impacts as much as possible."
    },
    {
      title: "Mitigate",
      description: "Any remaining impacts must be mitigated on-site through measures like native planting, SuDS, or bat roosts."
    },
    {
      title: "Compensate",
      description: "Only as an absolute last resort should off-site compensation be considered if on-site mitigation is impossible."
    }
  ];

  return (
    <>
      <SEO
        title="Green Infrastructure Statements Wales (PPW 12) | Cambrian Planning"
        description="Need a Green Infrastructure Statement for your planning application in Wales? We provide expert assessments to ensure full compliance with PPW 12."
        keywords="Green Infrastructure Statement Wales, PPW 12 Green Infrastructure, planning consultant Green Infrastructure, step wise approach Wales"
      />
      <PageHeader
        title="Green Infrastructure Statements (PPW 12) in Wales"
        subtitle="We provide robust, highly detailed Green Infrastructure Statements that clearly justify your development."
      />

      <SplitSection
        title="Navigating the New Requirements"
        subtitle="Comprehensive, Proportionate Statements"
        content={
          <>
            <p style={{ marginBottom: '15px' }}>Local Planning Authorities across Wales are now routinely refusing or invalidating applications that fail to adequately address Green Infrastructure. Under PPW 12, a proportionate GI statement is required for almost all forms of development, ranging from minor domestic extensions to major strategic housing sites.</p>
            <p>Attempting to navigate these new requirements without professional, policy-literate input often leads to costly delays or outright rejection of your scheme. We work seamlessly with ecologists, arboriculturists, and landscape architects to integrate proportionate GI enhancements into your design from the very beginning, ensuring a smooth path through planning.</p>
          </>
        }
        imageSrc="/assets/images/hedgehog.jpg"
        imageAlt="Picture of hedgehog"
      />

      <ProcessTimeline
        title="The Step-Wise Approach"
        steps={stepWiseProcess}
      />

      <Contact />
    </>
  );
};

export default GreenInfrastructureStatements;
