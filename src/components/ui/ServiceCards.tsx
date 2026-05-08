import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardData {
  title: string;
  description: string;
  linkTo?: string;
  icon?: React.ReactNode;
}

interface ServiceCardsProps {
  cards: ServiceCardData[];
}

const ServiceCards: React.FC<ServiceCardsProps> = ({ cards }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px', marginTop: '40px' }}>
      {cards.map((card, index) => {
        const cardContent = (
          <div style={{ 
            padding: '40px 30px',
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
            height: '100%',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: card.linkTo ? 'pointer' : 'default'
          }}
          onMouseEnter={(e) => {
            if (card.linkTo) {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
            }
          }}
          onMouseLeave={(e) => {
            if (card.linkTo) {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.06)';
            }
          }}
          >
            {card.icon && <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{card.icon}</div>}
            <h3 style={{ color: 'var(--color-primary)', marginBottom: '15px', fontSize: '1.4rem' }}>{card.title}</h3>
            <p style={{ color: '#666', lineHeight: '1.7', margin: 0 }}>{card.description}</p>
            {card.linkTo && (
              <div style={{ 
                marginTop: '20px', 
                color: 'var(--color-accent)', 
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                Learn more &rarr;
              </div>
            )}
          </div>
        );

        return card.linkTo ? (
          <Link to={card.linkTo} key={index} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            {cardContent}
          </Link>
        ) : (
          <div key={index} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            {cardContent}
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCards;
