import React from 'react';

interface TimelineStep {
  title: string;
  description: string;
  number?: string;
}

interface ProcessTimelineProps {
  title?: string;
  steps: TimelineStep[];
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ title, steps }) => {
  return (
    <section style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 15px' }}>
        {title && (
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>{title}</h2>
          </div>
        )}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', marginTop: title ? '0' : '40px' }}>
          {steps.map((step, index) => (
            <div key={index} style={{ 
              position: 'relative',
              padding: '30px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              borderTop: '4px solid var(--color-accent)',
              zIndex: 1
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '30px',
                width: '40px',
                height: '40px',
                backgroundColor: 'var(--color-primary)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
              }}>
                {step.number || (index + 1).toString()}
              </div>
              <h3 style={{ color: 'var(--color-primary)', marginTop: '15px', marginBottom: '15px', fontSize: '1.4rem' }}>{step.title}</h3>
              <p style={{ color: '#555', lineHeight: '1.7', margin: 0 }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
