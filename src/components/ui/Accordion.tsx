import React, { useState } from 'react';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} style={{ 
            border: '1px solid #eaeaea', 
            borderRadius: '8px', 
            overflow: 'hidden',
            backgroundColor: isOpen ? '#fff' : '#fafafa',
            transition: 'all 0.3s ease',
            boxShadow: isOpen ? '0 10px 20px rgba(0,0,0,0.05)' : 'none'
          }}>
            <button 
              onClick={() => toggleItem(index)}
              style={{
                width: '100%',
                padding: '20px 25px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '1.2rem',
                fontWeight: 600,
                color: isOpen ? 'var(--color-primary)' : '#333'
              }}
            >
              {item.title}
              <span style={{ 
                transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', 
                transition: 'transform 0.3s ease',
                fontSize: '1.5rem',
                color: 'var(--color-accent)'
              }}>
                +
              </span>
            </button>
            <div style={{
              maxHeight: isOpen ? '1000px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.4s ease-in-out',
            }}>
              <div style={{ 
                padding: '0 25px 25px 25px', 
                fontSize: '1.1rem', 
                lineHeight: '1.8', 
                color: '#555' 
              }}>
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
