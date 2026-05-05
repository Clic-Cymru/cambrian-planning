import React from 'react';

interface SplitSectionProps {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  backgroundColor?: string;
  imageObjectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

const SplitSection: React.FC<SplitSectionProps> = ({ 
  title, 
  subtitle, 
  content, 
  imageSrc, 
  imageAlt, 
  reverse = false,
  backgroundColor = 'transparent',
  imageObjectFit = 'cover'
}) => {
  return (
    <section style={{ backgroundColor, padding: '80px 0' }}>
      <div className="container" style={{ 
        display: 'flex', 
        flexDirection: reverse ? 'row-reverse' : 'row',
        alignItems: 'center',
        gap: '60px',
        flexWrap: 'wrap'
      }}>
        <div style={{ flex: '1 1 400px' }}>
          {subtitle && <p style={{ color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>{subtitle}</p>}
          <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'var(--color-primary)', lineHeight: 1.2 }}>{title}</h2>
          <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}>
            {content}
          </div>
        </div>
        <div style={{ flex: '1 1 400px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', backgroundColor: imageObjectFit === 'contain' ? '#fff' : 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={imageSrc} alt={imageAlt} style={{ width: '100%', height: '100%', objectFit: imageObjectFit, display: 'block', minHeight: '400px', padding: imageObjectFit === 'contain' ? '40px' : '0' }} />
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
