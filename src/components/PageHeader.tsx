import React from 'react';
import './PageHeader.css';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = "url('/assets/images/plans-scaled.jpg')" 
}) => {
  return (
    <section className="page-header bg-parallax" style={{ backgroundImage }}>
      <div className="bg-overlay"></div>
      <div className="container text-center bg-content">
        <h1 className="parallax-title" style={{ fontSize: '42px', color: '#fff', display: 'inline-block', borderBottom: '4px solid #FF3F5F', paddingBottom: '15px' }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ color: '#fff', fontSize: '1.2rem', marginTop: '20px', maxWidth: '800px', margin: '20px auto 0' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
